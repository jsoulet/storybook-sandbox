import React, { useState } from 'react'

export interface Props {
  onSubmit: (args: {
    email: string,
    password: string
  }) => void
}

const LoginForm = ({onSubmit}: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return <form
    onSubmit={(e) => {
      e.preventDefault()
      onSubmit({email, password})
    }}
  >
    <div>
      <label htmlFor='email'>
        Email
      </label>
      <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div>
      <label htmlFor='password'>
        Password
      </label>
      <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <input type="submit" value="Login"/>
  </form>
}

export default LoginForm