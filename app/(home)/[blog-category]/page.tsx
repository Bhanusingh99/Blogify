'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Dynamic = () => {
  const url = usePathname();
  return (
    <div className='text-[5rem] font-bold text-white mt-10'>Fuck u <span className='text-purple-500'>{url}</span></div>
  )
}

export default Dynamic