import React from 'react'
import Image from 'next/image'
import { SIDE_NAV_ITEMS } from '@/SIDEBAR_CONSTANTS'
import SideBarMenuItem from './sidebar-menu-item'

const Sidebar = () => {
  return (
    <aside 
    className='fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]'>
        <div className="flex relative items-center py-5 px-3.5">
        <Image 
            alt='logo' 
            src='/work-space.png' 
            height={35} 
            width={35}
            className='w-12 mx-3.5 min-height-fit'/>
        <h3 className="pl-2 font-bold text-2xL text-[#e6e9ee].min-w.max ">
             Dashboard
        </h3>
        
        </div>
        <nav className='flex flex-col gap-2 transition duration-300' >
            <div className='flex flex-col gap-2 px-2'>
                {
                    SIDE_NAV_ITEMS.map((item,index)=>{
                        return <SideBarMenuItem item={item}/>
                    })
                }
            </div>
           
        </nav>

    </aside>
  )
}

export default Sidebar
