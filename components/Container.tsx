import React, { ReactNode } from 'react'

const Container 
 = ({children} : {children? : ReactNode}) => {
  return (
    <div className='relative h-full w-full px-12 sm:px-36 md:px-56 lg:px-96 py-28 flex items-center justify-center'>
      <div className='w-full h-full flex flex-col justify-center'>
        {children}
      </div>
    </div>
  )
}

export default Container
