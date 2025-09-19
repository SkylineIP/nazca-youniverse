'use client'
import React from 'react'
import Image from 'next/image'
import grafismo2 from "../../../public/descanso/grafismo2.png"
import logoyouniverse from "../../../public/descanso/logoyouniverse.png";
import localizacao from "../../../public/menu/localizacao.png"
import projetistas from "../../../public/menu/projetistas.png"
import conceito from "../../../public/menu/conceito.png"
import diferenciais from    "../../../public/menu/diferenciais.png"
import homestudio from "../../../public/menu/homestudio.png"
import parceiros from "../../../public/menu/parceiros.png"
import home from "../../../public/util/b-home-youniverse-nazca.svg"
import duvida from "../../../public/util/b-duvida-youniverse-nazca.svg"
import som from "../../../public/util/b-som-youniverse-nazca.svg"
import { useRouter } from 'next/navigation';

const MenuYou = () => {
    const router = useRouter();
  return (
    <div className='grid grid-cols-24 grid-rows-24 h-screen w-screen bg-descanso-home relative bg-cover bg-center bg-no-repeat overflow-hidden'>
        <Image src={grafismo2} key={"grafismo"} alt="Grafismo" className='col-span-24 row-start-5 z-50 animate-fade' priority/>
        <Image src={logoyouniverse} key={"logo"} alt="Logo Youniverse" className='col-span-10 row-span-3 col-start-9 row-start-6 z-10 animate-fade' priority/>
        <div className='row-span-15 col-span-24 flex flex-col row-start-12 row-end-24 justify-around'>
            <Image src={localizacao} key={"localizacao"} alt="Localização" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-right animate-delay-100 duration-1000' priority/>
            <Image src={projetistas} key={"projetistas"} alt="Projetistas" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-left animate-delay-300 duration-1000' priority/>
            <Image src={conceito} key={"conceito"} alt="Conceito" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-right animate-delay-500 duration-1000' priority/>
            <Image src={diferenciais} key={"diferenciais"} alt="Diferenciais" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-left animate-delay-700 duration-1000' priority/>
            <Image src={homestudio} key={"homestudio"} alt="Home Studio" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-right animate-delay-1000 duration-1000' priority/>
            <Image src={parceiros} key={"parceiros"} alt="Parceiros" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-left animate-delay-[1200ms] duration-1000' priority/>
            <div className='flex w-full justify-center items-center gap-4'>
                <Image onClick={() =>{
                    router.push('/')
                }} src={home} key={"home"} alt="Home" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-100 duration-1000' priority/>
                <Image src={duvida} key={"duvida"} alt="Dúvidas" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-300 duration-1000' priority/>
                <Image src={som} key={"som"} alt="Som" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-500 duration-1000' priority/>
            </div>
        </div> 
    </div>
  )
}

export default MenuYou