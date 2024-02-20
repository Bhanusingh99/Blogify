'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props{
    title:String,
    icons:React.ReactNode,
    path?:String
}
const SidebarBtn = ({title,icons,path}:Props) => {
    const url = usePathname();

  return (
    <Link href={`/${path}`}>
                <div className={`flex gap-3 text-[.9rem] py-2.5 px-4 rounded-xl
                  items-center ${url === `/${title}` ? "text-white btn" : `hover:bg-dark-300 text-white
                  `}`}>
                    <p>{title}</p>
                     {icons}
                </div>
    </Link>
  )
} 

export default SidebarBtn