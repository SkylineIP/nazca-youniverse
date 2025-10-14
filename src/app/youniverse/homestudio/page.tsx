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
        <>
            <div className='col-start-21 col-span-4 row-span-24 grid grid-cols-4 grid-rows-24'>
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
                        <div className='col-span-4 row-span-4 col-start-1 row-start-12 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={implantacaohome}
                                alt="Implantação"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-100'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/home?view=implantacao')
                                }}
                            />
                            <Image
                                src={imagenshome}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/home?view=imagens')
                                }}
                            />
                            <Image
                                src={plantashome}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500'
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
                        <div className='col-span-4 row-span-4 col-start-1 row-start-12 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={implantacaoplex}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/plex?view=implantacao')
                                }}
                            />
                            <Image
                                src={imagensplex}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/plex?view=imagens')
                                }}
                            />
                            <Image
                                src={plantasplex}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-700'
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
                            className={`col-span-6 row-start-5 animate-fade-up animate-duration-[2000ms] duration-1000`}
                            width={960}
                            height={200}
                            key={"youstsudiologo"}
                        />
                        <div className='col-span-4 row-span-4 col-start-1 row-start-12 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={implantacaostudio}
                                alt="Implantação"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-100'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/studio?view=implantacao')
                                }}
                            />
                            <Image
                                src={imagensstudio}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300'
                                width={960}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/studio?view=imagens')
                                }}
                            />
                            <Image
                                src={plantas}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500'
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
            <div className="col-start-6 col-span-15 row-span-24 grid relative">
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
                <Image
                    src={touch}
                    alt="Touch Icon"
                    className={`col-start-1 row-start-1 4k:translate-x-[2270px] 4k:w-[800px] w-[400px] 4k:translate-y-[1850px] translate-x-[1070px] translate-y-[890px]`}
                    width={800}
                    height={200}
                />
            </div>
        </>
    )
}

export default HomeStudio