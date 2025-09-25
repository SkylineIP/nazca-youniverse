'use client'
import React from 'react'
import Image from 'next/image'
import logoYouniverse from "../../../public/descanso/logoyouniverse.png"
import home from "../../../public/util/b-home-youniverse-nazca.svg"
import duvida from "../../../public/util/b-duvida-youniverse-nazca.svg"
import som from "../../../public/util/b-som-youniverse-nazca.svg"
import outline from "../../../public/localizacao/outline.png"
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
        src={logoYouniverse}
        alt="Nazca Logo"
        className=' col-span-5 row-span-2 row-start-3 p-1 transition-transform animate-fade-down animate-duration-[2000ms] duration-1000'
        priority
      />
      <div className='grid grid-cols-4 grid-rows-12 col-span-5 row-span-12 row-start-7'>
        {sidebarButtons.map((button, index) => (
          <div
            key={index}
            className={`row-span-2 col-span-4 col-start-2 flex items-center pr-16 justify-center cursor-pointer transition-transform duration-300 ease-in-out animate-fade-up animate-delay-[${index * 200}ms] duration-1000 relative`}
            onClick={() => {
                setSelectedItem?.(button.name)
                router.push(button.link)
            }}
          >
            <div
              className="absolute inset-0 transition-opacity duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${outline.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                opacity: selectedItem === button.name ? 1 : 0,
              }}
            ></div>
            <span className={`text-[#4A4F54] text-[24px] relative uppercase ${selectedItem === button.name ? 'font-impact' : 'font-aviano'} `}>
              {button.name}
            </span>
          </div>
        ))}
      </div>
      <div className='col-span-3 row-span-1 flex col-start-2 row-start-23 justify-center items-center gap-4'>
        <Image src={home} key={"home"} alt="Home" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-100 duration-1000' priority />
        <Image src={duvida} key={"duvida"} alt="Dúvidas" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-300 duration-1000' priority />
        <Image src={som} key={"som"} alt="Som" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-500 duration-1000' priority />
      </div>
    </div>
  )
}

export default Sidebar;