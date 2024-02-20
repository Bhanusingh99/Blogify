'use client'
import React, { useEffect, useState } from 'react'
import { BlogBtn } from '../BlogContainer'
import { usePathname } from 'next/navigation'
import SidebarBtn from './SidebarBtn'
import { LogIn, LogOut, NotebookPen, User } from 'lucide-react'
import axios from 'axios'

const Sidebar = () => {
    const url  = usePathname();
    const [user,setUser] = useState("")
 
    // console.log(await getUserDetails());
    useEffect(()=>{
      const getUserDetails = async () => {
        const res = await axios.get('/api/user/me')
        setUser(res.data.data._id)
      }
      getUserDetails();
    },[])
    console.log(user)
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

            {
              user === "" ? <SidebarBtn title={"log-in"} icons={<LogIn size={20}/>} path={"log-in"}/>
               : <SidebarBtn title={"log-out"} icons={<LogOut size={20}/>} />
              
            }
        </>    
      </div>
    </aside>
  )
}

export default Sidebar