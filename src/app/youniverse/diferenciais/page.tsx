import Image from 'next/image'
import React from 'react'
import diferenciais from "../../../../public/diferenciais/diferenciais-youniverse-nazca.png"

const DiferenciaisPage = () => {
  return (
    <Image
        src={diferenciais}
        alt="Diferenciais"
        className='col-start-6 col-span-19 row-start-3 row-span-24 w-full h-full object-cover animate-fade-down animate-duration-[2000ms] duration-1000'
        priority
      />
  )
}

export default DiferenciaisPage