import classNames from 'classnames'
import React, { ReactNode } from 'react'

const Pagewrapper = ({children, toggleCollapse}:{children:ReactNode, toggleCollapse:boolean}) => {
    const pageStyles=classNames('bg-slate-50 flex-grow text-black p-2 mt-16',{
        ["w-[5rem]"]:toggleCollapse,
        ["w-[20rem]"]:!toggleCollapse
    })
  return (
    <div className={pageStyles}>
      {children}
    </div>  
  )
}

export default Pagewrapper
