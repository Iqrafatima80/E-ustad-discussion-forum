import React from 'react'

const Button = ({children}) => {
  return (
    <div className='flex items-center justify-center px-4 py-2 border rounded-md bg-primary'>
      {children}
    </div>
  )
}

export default Button