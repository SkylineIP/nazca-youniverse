'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import home from "../../../../../public/util/b-home-youniverse-nazca.svg"
import duvida from "../../../../../public/util/b-duvida-youniverse-nazca.svg"
import som from "../../../../../public/util/b-som-youniverse-nazca.svg"
import detalhe from "../../../../../public/util/detalhe-youhome-menu-lateral.png"
import outline from "../../../../../public/localizacao/outline.png"
import youplexlogo from "../../../../../public/homestudio/logo-youflex-youniverse.png"
import { useRouter } from 'next/navigation'
import fachada1 from "../../../../../public/homestudio/plex/img-fachada1.png"
import fachada2 from "../../../../../public/homestudio/plex/img-fachada2.png"
import ap1810 from "../../../../../public/homestudio/plex/img-1810.png"
import titulo from "../../../../../public/homestudio/plex/plantas/titulo-planta1.png"
import bsuperior from "../../../../../public/homestudio/plex/plantas/b-ver-piso-superior.png"
import binferior from "../../../../../public/homestudio/plex/plantas/b-ver-piso-inferior.png"
import psuperior from "../../../../../public/homestudio/plex/plantas/Youplex_coluna 10_térreo 1.png"
import pinferior from "../../../../../public/homestudio/plex/plantas/Youplex_coluna 10_térreo 1-1.png"





const PlexPage = () => {
  const router = useRouter();
  const pathname = useSearchParams();
  const view = pathname.get('view') || 'imagens';

  const sidebarButtons = [
    { name: 'Imagens', value: 'imagens' },
    { name: 'Plantas', value: 'plantas' },
  ];
  const [selectedItem, setSelectedItem] = useState('imagens');
  const [curView, setCurView] = useState(view)
  const [image, setImage] = useState(psuperior);
  const [inferior, setInferior] = useState(false)
  return (
    <>
      <div className='col-span-5 row-span-24 grid grid-cols-4 grid-rows-24 border-r border-[#12100B] '>
        <Image
          src={detalhe}
          alt="Detalhe"
          className="w-12"
          priority
        />
        <Image
          src={youplexlogo}
          alt="Nazca Logo"
          className=' col-span-5 row-span-2 row-start-3 p-1 transition-transform animate-fade-down animate-duration-[2000ms] duration-1000 px-10'
          priority
        />
        <div className='grid grid-cols-4 grid-rows-12 col-span-5 row-span-6 gap-y-12 row-start-10'>
          {sidebarButtons.map((button, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 200}ms`,
                gridRow: `${index * 3 + 1} / span 3`
              }}
              onClick={() => {
                setSelectedItem(button.value)
                setCurView(button.value)
              }}
              className={`col-span-4 col-start-2 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out animate-fade-left duration-1000 relative`}
            >
              <Image
                src={outline}
                alt="Selected outline"
                layout="fill"
                objectFit="contain"
                className={`transition-opacity duration-300 ease-in-out ${selectedItem === button.value ? 'opacity-100' : 'opacity-0'}`}
              />
              <span className={`text-[#4A4F54] text-[24px] relative uppercase ${selectedItem === button.value ? 'font-impact' : 'font-aviano'} `}>
                {button.name}
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            router.push('/youniverse/homestudio')
          }}
          className='col-span-2 row-span-2 flex items-start row-start-19 cursor-pointer transition-transform duration-300 ease-in-out animate-fade-right animate-delay-[1200ms] duration-1000'
        >
          <span
            className="
              relative px-8 py-4 
              text-xl uppercase font-impact 
              text-white bg-[#939598]
              transition-colors duration-300 ease-in-out
              after:content-[''] after:absolute after:top-0 after:right-[-30px] 
              after:w-0 after:h-0 tracking-[8px]
              after:border-t-[30px] after:border-b-[30px] after:border-l-[30px] 
              after:border-t-transparent after:border-b-transparent after:border-l-[#939598]
            "
          >
            Voltar
          </span>
        </button>
        <div className='col-span-5 row-span-1 flex row-start-23 justify-center items-center gap-4'>
          <Image src={home} key={"home"} alt="Home" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-100 duration-1000' priority />
          <Image src={duvida} key={"duvida"} alt="Dúvidas" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-300 duration-1000' priority />
          <Image src={som} key={"som"} alt="Som" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-500 duration-1000' priority />
        </div>
      </div>
      {curView === 'imagens' && (
        <>
          <div className='col-span-5 col-start-6 row-span-24 flex flex-col items-center justify-center gap-8 overflow-y-scroll no-scrollbar p-16'>
            <button>
              <Image
                src={fachada1}
                alt='Miniatura fachada'
                className='object-contain w-4/5'
                priority
              />
            </button>
            <button>
              <Image
                src={fachada2}
                alt='Miniatura fachada'
                className='object-contain w-4/5'
                priority
              />
            </button>
          </div>
          <Image
            src={ap1810}
            alt='Miniatura fachada'
            className='object-fit col-span-14 h-full w-full row-span-24 relative animate-fade-down animate-duration-[2000ms] duration-1000'
            priority
          />
        </>
      )}
      {curView === 'plantas' && (
        <>
          <Image
            src={titulo}
            alt='Titulo'
            className='col-span-4 row-span-3 col-start-7 row-start-2'
          />
          <Image
            key={image.src}
            src={image}
            alt='Planta'
            className='col-span-11 col-start-9 row-start-3 transition-opacity duration-[1s] ease-in-out opacity-0 data-[loaded=true]:opacity-100'
            onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
          />
          <button
            onClick={() => {
              setInferior(!inferior)
              setImage(inferior ? psuperior : pinferior)
            }}
            className='col-span-5 row-span-1 row-start-21 col-start-20'
          >
            <Image
              key={image.src}
              src={inferior ? binferior : bsuperior}
              alt='Planta'
              className="transition-opacity duration-500 ease-in-out opacity-0 data-[loaded=true]:opacity-100"
              onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
            />
          </button>
        </>
      )}
    </>
  )
}

export default PlexPage