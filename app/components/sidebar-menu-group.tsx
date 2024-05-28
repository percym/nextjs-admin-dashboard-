import { useSideBarToogle } from '@/hook/use-sidebar-toogle'
import { SideNavItemGroup } from '@/types/types'
import React from 'react'
import SideBarMenuItem from './sidebar-menu-item'

const SideBarMenuGroup = ({menuGroup}:{menuGroup:SideNavItemGroup}) => {
    const {toggleCollapse} = useSideBarToogle()
  return (
    <>
         <h3 className='py-4 tracking-[1.rem] font-medium uppercase text-sm text-[#asa1aa]'>{!toggleCollapse ? menuGroup.title : '...'}</h3>
         {
            menuGroup.menuList?.map((item,index)=>{
                return <SideBarMenuItem item={item} key={index}/>
            })
         }
    </>
  )
}

export default SideBarMenuGroup