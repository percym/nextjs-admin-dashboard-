import React, { ReactNode } from 'react'

const Pagewrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-slate-50 flex-grow text-black p-2 mt-16'>
      {children}
    </div>  
  )
}

export default Pagewrapper
