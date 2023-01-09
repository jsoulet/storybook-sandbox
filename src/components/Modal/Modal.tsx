import React, { FC, ReactNode, useRef, useState, useEffect } from "react"
import { createPortal } from "react-dom"
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
 } from "./Modal.styles";

interface handlerProps {
  setIsActive: (isActive: boolean) => void,
  isActive: boolean
}
export interface Props {
  children: ReactNode,
  title?: ReactNode,
  footer?: ReactNode,
  renderHandler?: ({setIsActive , isActive}: handlerProps) => ReactNode 
}
const Modal = ({children, title, footer, renderHandler}: Props) => {
  const [isActive, setIsActive] = useState(false)
  const element = useRef(document.createElement('div'))
  useEffect(() => {
    document.body.appendChild(element.current) 
    return () => {
      if (element.current) {
        element.current.remove()
      }
    }
  }, [])
  return <>
    {renderHandler?.({setIsActive, isActive})}
    {isActive && createPortal(<ModalContent  title={title} footer={footer} handleClose={() => setIsActive(false)}>{children}</ModalContent>, element.current)}
  </>
}

interface ModalContentProps {
  handleClose: () => void,
  title?: ReactNode,
  footer?: ReactNode
  children: ReactNode
}
const ModalContent = ({children, title, footer, handleClose}: ModalContentProps) => {
  return <ModalBlock>
    <ModalOverlay data-testid="modal-overlay" onClick={handleClose}></ModalOverlay>
    <ModalContainer data-testid="modal-container">
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <ModalClose onClick={handleClose} data-testid="modal-close">X</ModalClose>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </ModalContainer>
  </ModalBlock>
}

export default Modal