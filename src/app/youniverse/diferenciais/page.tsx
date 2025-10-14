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
    <Image
      src="/diferenciais/diferenciais-youniverse-nazca.png"
      alt="Diferenciais"
      className='col-start-6 col-span-19 row-start-3 row-span-24 w-full h-full object-contain animate-fade-down animate-duration-[2000ms] duration-1000'
      width={3840}
      height={2160}
    />
  )
}

export default DiferenciaisPage