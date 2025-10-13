'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useContextDefault } from '@/context/Context';
import PositionedImage from './components/PositionedImage';

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
    const studio = "/homestudio/fachada/studio.png";
    const studiocolored = "/homestudio/fachada/youstudiocolor.png";
    const plexcolored = "/homestudio/fachada/plexcolor.png";
    const homecolored = "/homestudio/fachada/youhomecolor.png";
    const plex = "/homestudio/fachada/plex.png";
    const home = "/homestudio/fachada/home.png";
    const [selectedItem, setSelectedItem] = useState("");
    const router = useRouter();
    const handleMouseEnter = (route: string) => {
        router.prefetch(route);
    }
    const context = useContextDefault();
    const { setSelectedItem: setSideSelectedItem } = context || {};
    type resType = "4k" | "fullhd";
    const [currentResolution, setCurrentResolution] = useState<resType>("4k");
    useEffect(() => {
        const check = () => setCurrentResolution(window.innerWidth >= 3840 ? "4k" : "fullhd");
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    useEffect(() => {
        setSideSelectedItem?.("home / studio");
    }, [])
    return (
        <>
            <div className='col-start-19 col-span-6 row-span-24 grid grid-cols-4 grid-rows-24'>
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
            <div className="col-start-6 col-span-13 row-span-24 relative grid bg-black">
                <Image
                    src={touch}
                    alt="Touch Icon"
                    className={`col-start-1 row-start-1 4k:translate-x-[2170px] 4k:w-[800px] w-[400px] 4k:translate-y-[1850px] translate-x-[1070px] translate-y-[890px]`}
                    width={800}
                    height={200}
                />
                <>
                    <Image
                        src={bgfachada}
                        alt="Home Studio"
                        fill
                        className="object-fit col-start-1 row-start-1 animate-fade animate-duration-[2000ms] duration-1000"
                    />
                    <PositionedImage
                        name="YouStudio"
                        src={selectedItem === "YouStudio" ? studiocolored : studio}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                        resolution={currentResolution}
                    />
                    <PositionedImage
                        name="YouPlex"
                        src={selectedItem === "YouPlex" ? plexcolored : plex}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                        resolution={currentResolution}
                    />
                    <PositionedImage
                        name="YouHome"
                        src={selectedItem === "YouHome" ? homecolored : home}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                        resolution={currentResolution}
                    />
                </>
            </div>
        </>
    )
}

export default HomeStudio