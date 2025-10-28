'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useContextDefault } from '@/context/Context';
import FachadaSvg from './components/FachadaSvg';

const HomeStudio = () => {
    const youstsudiologo = "/homestudio/logo-youstudio-youniverse.png";
    const youplexlogo = "/homestudio/logo-youflex-youniverse.png";
    const youhomelogo = "/homestudio/logo-youhome-youniverse.png";
    const touch = "/homestudio/touch.png";
    const implantacaostudio = '/homestudio/buttons/b-implantacao-youniverse-nazca-youstudio.png';
    const imagensstudio = '/homestudio/buttons/b-diferenciais-youniverse-nazca-youstudio.png';
    const plantas = "/homestudio/buttons/b-parceiros-youniverse-nazca-youstudio.png";
    const implantacaohome = "/homestudio/buttons/b-implantacao-youniverse-nazca.png";
    const imagenshome = "/homestudio/buttons/b-diferenciais-youniverse-nazca.png";
    const plantashome = "/homestudio/buttons/b-parceiros-youniverse-nazca.png";
    const imagensplex = "/homestudio/buttons/b-diferenciais-youniverse-nazca-youplex.png";
    const plantasplex = "/homestudio/buttons/b-parceiros-youniverse-nazca-youplex.png";
    const implantacaoplex = "/homestudio/buttons/b-implantacao-youniverse-nazca-implantacao.png";
    const bgfachada = "/homestudio/fachada/bgfachada.png";
    const [selectedItem, setSelectedItem] = useState("");
    const router = useRouter();
    const context = useContextDefault();
    const { setSelectedItem: setSideSelectedItem } = context || {};
    useEffect(() => {
        setSideSelectedItem?.("home / studio");
    }, [])
    return (
        <div className='w-full h-screen row-span-24 col-span-19 grid grid-cols-19 grid-rows-24'>
            <div className='col-start-13 row-start-1 col-span-7 row-span-22 grid grid-cols-7 grid-rows-22 z-0'>
                {selectedItem === 'YouHome' && (
                    <>
                        <Image
                            src={youhomelogo}
                            alt="YouHome Logo"
                            className={`col-span-6 row-start-5 animate-fade-down animate-duration-[2000ms] duration-1000`}
                            width={960}
                            height={500}
                            key={"youhomelogo"}
                        />
                        <div className='relative col-span-6 row-span-10 col-start-2 row-start-9 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={implantacaohome}
                                alt="Implantação"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-100 !4k:object-right'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/home?view=implantacao')
                                }}
                            />
                            <Image
                                src={imagenshome}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300 !4k:object-right'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/home?view=imagens')
                                }}
                            />
                            <Image
                                src={plantashome}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500 !4k:object-right'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/home?view=plantas')
                                }}
                            />
                        </div>
                    </>
                )}
                {selectedItem === 'YouPlex' && (
                    <>
                        <Image
                            src={youplexlogo}
                            alt="YouPlex Logo"
                            className={`col-span-6 row-start-5 animate-fade-right animate-duration-[2000ms] duration-1000`}
                            width={960}
                            height={500}
                            key={"youplexlogo"}
                        />
                        <div className='relative col-span-6 row-span-10 col-start-2 row-start-9 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={implantacaoplex}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300 4k:object-right'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/plex?view=implantacao')
                                }}
                            />
                            <Image
                                src={imagensplex}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500 4k:object-right'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/plex?view=imagens')
                                }}
                            />
                            <Image
                                src={plantasplex}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-700 4k:object-right'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/plex?view=plantas')
                                }}
                            />
                        </div>
                    </>
                )}
                {selectedItem === 'YouStudio' && (
                    <>
                        <Image
                            src={youstsudiologo}
                            alt="YouStudio Logo"
                            className={`col-span-6 row-span-2 col-start-1 row-start-4 animate-fade-up animate-duration-[2000ms] duration-1000`}
                            width={960}
                            height={200}
                            key={"youstsudiologo"}
                        />
                        <div className='relative col-span-6 row-span-10 col-start-2 row-start-9 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={implantacaostudio}
                                alt="Implantação"
                                className='object-contain right-0 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-100 4k:object-right'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/studio?view=implantacao')
                                }}
                            />
                            <Image
                                src={imagensstudio}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300 4k:object-right'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/studio?view=imagens')
                                }}
                            />
                            <Image
                                src={plantas}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500 4k:object-right'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/studio?view=plantas')
                                }}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className="col-start-1 row-start-6 col-span-12 row-span-20 grid grid-cols-12 relative z-0">
                <Image
                    src={bgfachada}
                    alt="Home Studio"
                    fill
                    className="object-contain animate-fade animate-duration-[2000ms] duration-1000 absolute top-0 left-0 w-full h-full"
                />
                {/* <SvgPlex /> */}

                <FachadaSvg
                    onItemSelect={setSelectedItem}
                    selectedItem={selectedItem}
                />
            </div>
            <Image
                src={touch}
                alt="Touch Icon"
                className={`col-start-15 row-start-23 col-span-5 row-span-1 z-50`}
                width={800}
                height={200}
            />
        </div>
    )
}

export default HomeStudio