import { Code, Cpu, Palette, Rss } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import SidebarBtn from './shared/SidebarBtn';

const BlogTitle = [
    {title:"dev",icons:<Code size={20}/>,path:"dev"},
    {title:"ui-ux",icons:<Palette size={20}/>,path:"ui-ux"},
    {title:"tech",icons:<Cpu size={20}/>,path:"tech"},
    {title:"startup",icons:<Rss size={20}/>,path:"startup"},
]

export const BlogBtn = () => {
    return(
        <>
        {
            BlogTitle.map((items,index) => 
                <SidebarBtn 
                title={items.title}
                icons={items.icons}
                path={items.path}
                key={index}
                />
            )
        }
        </>
    )
}
