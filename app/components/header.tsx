import React from 'react'
import Image from 'next/image'
import { BsList } from 'react-icons/bs'

const Header  = () => {
  return (
    <header className='fixed bg-[#31353d] w-full z-0 px-4 shadow-sm shadow-slate-500/40 pl-[20rem]'>
        <div className="flex items-center justify-between h-16">
            <button className="bg-[#3a3f48] text-[#6e768e] hover:bg-white ml-3 rounded-md h-30px shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
                <BsList>

                </BsList>
            </button>
            <div className="h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center">
                <span className="font-semibold text-sm">
                    
                </span>   
            </div>
        </div>
        
    </header>
  )
}

export default Header
