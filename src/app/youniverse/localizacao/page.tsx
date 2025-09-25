'use client'
import React from 'react'
import proximidades from "../../../../public/localizacao/proximidades.png"
import mapailustrado from "../../../../public/localizacao/mapa.png"
import Image from 'next/image'
import outline1 from "../../../../public/localizacao/outline1.png"
import outline2 from "../../../../public/localizacao/outline2.png"
import outline3 from "../../../../public/localizacao/outline3.png"

const LocalizacaoPage = () => {
  const [selectedMenu, setSelectedMenu] = React.useState('Proximidades');
  const menuItems = [
    { name: 'Proximidades', outline: outline1 },
    { name: 'Mapa Ilustrado', outline: outline2 },
    { name: 'Mapas', outline: outline3 },
  ];

  return (
    <>
      {selectedMenu === 'Proximidades' && (
        <Image
          src={proximidades}
          alt="Proximidades"
          className='col-start-6 col-span-19 row-start-3 row-span-18 w-full h-full object-cover animate-fade-down animate-duration-[2000ms] duration-1000'
          priority
        />
      )}
      {selectedMenu === 'Mapa Ilustrado' && (
        <Image
          src={mapailustrado}
          alt="Mapa Ilustrado"
          className='col-start-6 col-span-19 row-start-3 row-span-18 w-full h-full object-cover animate-fade-down animate-duration-[2000ms] duration-1000'
          priority
        />
      )}
      <div className='relative col-span-19 row-span-2 row-start-23 col-start-6 flex justify-around items-center gap-4 px-32'>
        {menuItems.map(item => (
          <div
            key={item.name + "-bg"}
            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${item.outline.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              opacity: selectedMenu === item.name ? 1 : 0,
            }}
          ></div>
        ))}
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="relative cursor-pointer p-4"
            onClick={() => setSelectedMenu(item.name)}
          >
            <span className={`text-[24px] relative uppercase ${selectedMenu === item.name ? 'font-impact text-[#12100B]' : 'font-aviano text-[#12100B]'} transition-colors duration-300 ease-in-out`}>
              {item.name}
            </span>
          </div>
        ))}
      </div >
    </>
  )
}

export default LocalizacaoPage