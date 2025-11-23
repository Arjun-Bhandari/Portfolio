import React from 'react'

interface ContainerProps{
  className?:string;
  children:React.ReactNode
}
export const Container  = ({children, className}:ContainerProps) => {
  return (

    <div className={`max-w-4xl mx-auto ${className}`}>{children}</div>
  
  )
}
