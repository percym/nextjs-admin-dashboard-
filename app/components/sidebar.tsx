import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <aside 
    className='fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]'>
        <div className="flex relative items-center">
        <Image 
            alt='logo' 
            src='/work-space.png' 
            height={35} 
            width={35}
            className='w-12 mx-3.5 min-height-fit'/>
        <h3 className="pl-2 font-bold text-2xL text-[#e6e9ee].min-w.max ">
             Dashboard
        </h3>
        <nav>
            
        </nav>
        </div>
      

    </aside>
  )
}

export default Sidebar
