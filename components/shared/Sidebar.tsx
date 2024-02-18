'use client'
import React from 'react'
import { BlogBtn } from '../BlogContainer'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const url  = usePathname();
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-[20rem] h-screen transition-transform -translate-x-full 
      sm:translate-x-0 mt-[4.5rem] bg-dark-200  p-2 px-4"
      aria-label="Sidebar"
    >
      <div className=" w-full flex flex-col gap-2 px-4 py-4 pl-[7.5rem]">
          <h1 className={` font-semibold text-[1.5rem] px-2 ${url === '/' ? "text-purple-500" : "text-white"}`}>Blogs</h1>
          <BlogBtn/>
      </div>
    </aside>
  )
}

export default Sidebar