import { SideNavItem } from '@/types/types'
import React from 'react'
import Link from 'next/link'

const SideBarMenuItem = ({item}:{item:SideNavItem}) => {
  return (
    <>
    {item.submenu?
        (<div> </div>):
        (<Link href={item.path} className='flex items-center min-h[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white' >
            {item.icon}
            <span>{item.title}</span>
        </Link>)
    }
    </>
  )
}

export default SideBarMenuItem
