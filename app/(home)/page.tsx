// import { createConnection } from "@/db/connectionDb";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[4.25rem] w-[80%] h-screen flex mx-auto max-md:w-[90%]">
      {/* Fixed Sidebar */}
      <div className="w-[25%] bg-yellow-500 fixed h-full overflow-y-auto max-md:hidden">
        {/* Sidebar content goes here */}
      </div>

      {/* Scrollable Content */}
      <div className="w-[75%] bg-red-500 overflow-y-scroll flex flex-col gap-2 no-scrollbar ml-[19rem] max-md:ml-0 
      max-md:w-[100%] ">
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>

        <div className="bg-blue-500 w-full h-16"></div>

        <div className="bg-blue-500 w-full h-16"></div>

        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>
        <div className="bg-blue-500 w-full h-16"></div>

        <div className="bg-blue-500 w-full h-16"></div>


        
      </div>
    </main>
  );
}
