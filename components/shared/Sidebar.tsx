'use client'
import React, { useEffect, useState } from 'react'
import { BlogBtn } from '../BlogContainer'
import { usePathname } from 'next/navigation'
import SidebarBtn from './SidebarBtn'
import { LogIn, LogOut, NotebookPen, User } from 'lucide-react'

const Sidebar = () => {
    const url  = usePathname();

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-[18rem] h-screen transition-transform -translate-x-full 
      sm:translate-x-0 mt-[4.5rem] bg-dark-200  p-2 px-4 max-lg:w-[14rem]"
      aria-label="Sidebar"
    >
      <div className=" w-full flex flex-col gap-2 px-4 py-4 pl-[3rem]">
          <h1 className={` font-semibold text-[1.5rem] px-2 ${url === '/' ? "text-purple-500" : "text-white"}`}>Blogs</h1>
          <BlogBtn/>
      </div>

      <div className=' mt-16 pl-[3rem] flex flex-col gap-3'>
      <>
      <SidebarBtn title={"write-blog"} icons={<NotebookPen size={20}/>} path={"create-blog"}/>
        </>    
      </div>
    </aside>
  )
}

export default Sidebar