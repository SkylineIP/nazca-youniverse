'use client'
import React from 'react'
import Image from "next/image";
import { useContextDefault } from '@/context/Context'
import { usePathname, useRouter } from 'next/navigation'

const Sidebar = () => {
  const context = useContextDefault();
  const { selectedItem: selectedItem, setSelectedItem: setSelectedItem } = context || {};
  const router = useRouter();
  const pathname = usePathname();
  const sidebarRoutes = [
    '/youniverse/localizacao',
    '/youniverse/projetistas',
    '/youniverse/conceito',
    '/youniverse/diferenciais',
    '/youniverse/homestudio',
    '/youniverse/parceiros',
  ]

  const underMenuSidebar = sidebarRoutes.includes(pathname);

  if (!underMenuSidebar) {
    return null; // Não renderiza o sidebar se não estiver em uma das rotas especificadas
  }
  const sidebarButtons = [
    { name: 'Localização', link: '/youniverse/localizacao' },
    { name: 'Projetistas', link: '/youniverse/projetistas' },
    { name: 'Conceito', link: '/youniverse/conceito' },
    { name: 'diferenciais', link: '/youniverse/diferenciais' },
    { name: 'home / studio', link: '/youniverse/homestudio' },
    { name: 'parceiros', link: '/youniverse/parceiros' },
  ]

  return (
    <div className='col-span-5 row-span-24 grid grid-cols-5 grid-rows-24 border-r border-[#12100B]'>
      <Image
        src="/descanso/logoyouniverse.png"
        alt="Nazca Logo"
        className=' col-span-5 row-span-2 row-start-3 p-1 transition-transform animate-fade-down animate-duration-[2000ms] duration-1000'
        priority
        width={500}
        height={200}
      />
      <div className='grid grid-cols-4 grid-rows-12 col-span-5 row-span-12 row-start-7'>
        {sidebarButtons.map((button, index) => (
          <div
            key={index}
            style={{
              animationDelay: `${index * 0.4}s`,
            }}
            className={`row-span-2 col-span-4 col-start-2 flex ${button.name === "parceiros" && "opacity-40 cursor-default"} items-center pr-16 justify-center cursor-pointer transition-transform duration-300 ease-in-out animate-fade-right duration-1000 relative`}
            onClick={() => {
              if(button.name !== "parceiros"){ 
                setSelectedItem?.(button.name)
                router.push(button.link)
              }
            }}
          >
            <div
              className="absolute inset-0 transition-opacity duration-300 ease-in-out"
              style={{
                backgroundImage: `url(/localizacao/outline.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                opacity: selectedItem === button.name ? 1 : 0,
              }}
            ></div>
            <span className={`text-[#4A4F54] text-[24px] relative uppercase ${button.name === "parceiros" && "opacity-40 cursor-default"} ${selectedItem === button.name ? 'font-impact' : 'font-aviano'} `}>
              {button.name}
            </span>
          </div>
        ))}
      </div>
      <div className='col-span-3 row-span-1 flex col-start-2 row-start-23 justify-center items-center gap-4'>
        <Image width={30} height={30} onClick={() => router.push('/')} src="/util/b-home-youniverse-nazca.svg" key={"home"} alt="Home" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-100 duration-1000' />
        <Image width={30} height={30} src="/util/b-duvida-youniverse-nazca.svg" key={"duvida"} alt="Dúvidas" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-300 duration-1000' />
        <Image width={30} height={30} src="/util/b-som-youniverse-nazca.svg" key={"som"} alt="Som" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-500 duration-1000' />
      </div>
    </div>
  )
}

export default Sidebar;