'use client'
import { useContextDefault } from "@/context/Context";
import Image from "next/image";
import React, { useEffect } from 'react'

const DiferenciaisPage = () => {
  const context = useContextDefault();
  const { setSelectedItem: setSelectedItem } = context || {};
  useEffect(() => {
    setSelectedItem?.("diferenciais");
  }, [])
  return (
    <div className="col-span-19 row-span-24 col-start-6 relative"> 
      <Image
        src="/diferenciais/diferenciais-youniverse-nazca.png"
        alt="Diferenciais"
        className='object-contain animate-fade-down animate-duration-[2000ms] duration-1000'
        fill
      />
    </div>
  )
}

export default DiferenciaisPage