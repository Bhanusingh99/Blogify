'use client'
import { BlogBtn } from "@/components/BlogContainer";
import Sidebar from "@/components/shared/Sidebar";
import { usePathname } from "next/navigation";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const url = usePathname();
  return (
    <div className="bg-dark-100">
      <Sidebar />
    <div className="p-4 sm:ml-[20rem] z-40">
      <div className="flex flex-wrap gap-10">
        {children}
      </div>
    </div>
  </div>
  );
}
