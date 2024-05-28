import { BsEnvelope, BsEnvelopeArrowDown, BsGear, BsHouseDoor, BsKanban, BsList, BsListCheck, BsQuestionCircle } from "react-icons/bs";
import { SideNavItem, SideNavItemGroup } from "./types/types";

export const SIDE_NAV_ITEMS:SideNavItemGroup[]=[
    {
        title:"Dashboards",
        menuList:[  {
            title:"Dashbord",
            path:"/",
            icon:<BsHouseDoor size={20} />
        },]
    },

    {
        title:"Manage",
        menuList:[
              
    {
        title:"Products",
        path:"/produts",
        icon:<BsKanban size={20}/>,
        submenu:true,
        subMenuItems:[
            {title:'All ', path:'/products'},
            {title:'New ', path:'/products/new'},
        ],
         
    },
    {
        title:"Orders",
        path:"/",
        icon:<BsList size={20}/>,
    },
    {
        title:"Feedbacks",
        path:"/feedbacks",
        icon:<BsEnvelope size={20}/>,
    },
        ]
    },
    
    {
        title:"Others",
        menuList:[
            {
                title:"Account",
                path:"/account",
                icon:<BsGear size={20}/>,
            },
            {    
            title:"Help",
            path:"/help",
            icon:<BsQuestionCircle size={20}/>,
        },
        ]
    },

    
]