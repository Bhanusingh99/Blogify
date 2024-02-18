// import { createConnection } from "@/db/connectionDb";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-dark-200">
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-[20rem] h-screen transition-transform -translate-x-full sm:translate-x-0 mt-[4.75rem] bg-dark-200"
      aria-label="Sidebar"
    >
      
    </aside>


    <div className="p-4 sm:ml-[20rem] mt-[4.5rem] z-40">
      <div className=" flex flex-wrap gap-10 bg-dark-200">
            <div className="w-[31rem] h-[20rem] bg-red-600"></div>
            <div className="w-[31rem] h-[20rem] bg-red-600"></div>
            <div className="w-[31rem] h-[20rem] bg-red-600"></div>
            <div className="w-[31rem] h-[20rem] bg-red-600"></div>
            <div className="w-[31rem] h-[20rem] bg-red-600"></div>
            <div className="w-[31rem] h-[20rem] bg-red-600"></div>
            <div className="w-[31rem] h-[20rem] bg-red-600"></div>
            <div className="w-[31rem] h-[20rem] bg-red-600"></div>
      </div>
    </div>
  </div>
  );
}
