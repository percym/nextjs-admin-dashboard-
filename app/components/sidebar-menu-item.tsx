'use client'
import { SideNavItem } from '@/types/types'
import React, { useState } from 'react'
import Link from 'next/link'
import { BsChevronBarRight } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

const SideBarMenuItem = ({item, toggleCollapse}:{item:SideNavItem, toggleCollapse:boolean}) => {
    const linkStyles='flex items-center min-h[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white';
    const navMenuDropDownItem='text-[#6e768e] py-2 px-4 hover:text-white transition duration-200' 
    const [subMenuOpen,setSubMenuOpen]= useState(false);
    const pathname = usePathname();
    const activeLinkStyle ='rounded-md text-white light:text-black light:bg-[#efefef] bg-[#3a3f48]'

    const toggleSubmenu=()=>{
        setSubMenuOpen(!subMenuOpen);
    }
  return (
    <>
    {item.submenu ?
        (
        <div className='rounded-md min-w-[18px] '>
            <a className={`${linkStyles} ${pathname.includes(item.path)?activeLinkStyle:''}`}  onClick={toggleSubmenu}>
                {item.icon}
                {
                    !toggleCollapse &&
                    <>
                     <span className='ml-3 leading-6 font-semibold'>{item.title}</span>
                     <BsChevronBarRight className={`${subMenuOpen ?'rotate-90':'ml-auto stroke-2 text-xs'}`}/>
                    </>
                }
           
            </a>
            {subMenuOpen && <div className='bg-[#3e3fx48] border-1-4'>
                <div className="grid gap-y-2 px-10 leadeing-5">
                    {item.subMenuItems.map((subMenuItem,index)=>{
                        return(
                            <Link  href={subMenuItem.path} key={index} className={`${navMenuDropDownItem} ${pathname.includes(subMenuItem.path)?'text-white':''}`} >
                                <span>{subMenuItem.title}</span>

                            </Link>
                        )
                    })}

                </div>
            </div>}
        </div>
        ):
        (
        <Link href={item.path} className={`${linkStyles}  ${item.path === pathname? activeLinkStyle:''}`} >
            {item.icon}
            {!toggleCollapse && <span className='ml-3 leading-6 font-semibold'>{item.title}</span>}
        </Link>
        )
    }
    </>
  )
}

export default SideBarMenuItem
