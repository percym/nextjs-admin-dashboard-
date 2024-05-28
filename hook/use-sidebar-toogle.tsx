import {create } from "zustand"
interface SideBarToggle{
    toggleCollapse:boolean,
    invokeCollapse: ()=> void
}

export const useSideBarToogle = create<SideBarToggle>((set,get)=>({
    toggleCollapse:false,
    invokeToggleCollapse:()=>set({toggleCollapse:!get().toggleCollapse})
}))