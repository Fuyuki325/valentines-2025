import React, { ReactNode } from 'react'

const Container 
 = ({children} : {children : ReactNode}) => {
  return (
    <div className='h-full flex flex-col justify-center'>
      {children}
    </div>
  )
}

export default Container
