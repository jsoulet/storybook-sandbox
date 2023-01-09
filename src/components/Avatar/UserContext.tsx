import { FC, createContext, useContext } from 'react'

interface UserContext {
  avatar?: string
}
const userContext = createContext<UserContext | undefined>(undefined)

export const UserProvider: FC<{avatar?: string}> = ({avatar, ...props}) => {
  return <userContext.Provider value={{
    avatar
  }} {...props}></userContext.Provider>
}

export const useUserContext = () => {
  const context = useContext(userContext)
  if(!context) {
    throw new Error('userContext cannot be undefined')
  }
  return context
}