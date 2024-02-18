'use client'
import { Code, Cpu, Palette, Rss } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const BlogTitle = [
    {title:"dev",icons:<Code />},
    {title:"ui-ux",icons:<Palette />},
    {title:"tech",icons:<Cpu />},
    {title:"startup",icons:<Rss />},
]

export const BlogBtn = () => {
    const url = usePathname();
    console.log(url)
    return(
        <>
        {
            BlogTitle.map((items,index) => 
            <Link href={`/${items.title}`} key={index}>
                <div className={`flex gap-3 text-[.9rem] py-2 px-2 rounded-xl
                  items-center ${url === `/${items.title}` ? "text-purple-500" : `hover:bg-dark-300 text-white
                  `}`}>
                    <p>{items.title}</p>
                     {items.icons}
                </div>
            </Link>
            )
        }
        </>
    )
}
