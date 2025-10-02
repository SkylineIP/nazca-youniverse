'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useContextDefault } from '@/context/Context';

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
                            width={500}
                            height={500}
                            key={"youhomelogo"}
                        />
                        <div className='col-span-4 row-span-4 col-start-1 row-start-12 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={implantacaohome}
                                alt="Implantação"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-100'
                                width={500}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/home?view=implantacao')
                                }}
                            />
                            <Image
                                src={imagenshome}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300'
                                width={500}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/home?view=imagens')
                                }}
                            />
                            <Image
                                src={plantashome}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500'
                                width={500}
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
                            width={500}
                            height={500}
                            key={"youplexlogo"}
                        />
                        <div className='col-span-4 row-span-4 col-start-1 row-start-12 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={imagensplex}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300'
                                width={500}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/plex?view=imagens')
                                }}
                            />
                            <Image
                                src={plantasplex}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500'
                                width={500}
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
                            width={500}
                            height={200}
                            key={"youstsudiologo"}
                        />
                        <div className='col-span-4 row-span-4 col-start-1 row-start-12 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={implantacaostudio}
                                alt="Implantação"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-100'
                                width={500}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/studio?view=implantacao')
                                }}
                            />
                            <Image
                                src={imagensstudio}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300'
                                width={500}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/studio?view=imagens')
                                }}
                            />
                            <Image
                                src={plantas}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500'
                                width={500}
                                height={500}
                                onClick={() => {
                                    router.push('/youniverse/homestudio/studio?view=plantas')
                                }}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className="col-start-6 col-span-13 row-span-24 relative grid">
                <Image
                    src={touch}
                    alt="Touch Icon"
                    className={`col-start-1 row-start-1 translate-x-[1070px] translate-y-[950px] w-[400px]`}
                    width={400}
                    height={200}
                />
                <>
                    <Image
                        src={bgfachada}
                        alt="Home Studio"
                        fill
                        className="object-fit col-start-1 row-start-1 animate-fade animate-duration-[2000ms] duration-1000"
                    />
                    <Image
                        src={selectedItem === "YouStudio" ? studiocolored : studio}
                        alt="Studio"
                        className={`w-[400px] absolute bottom-[10px] right-[337px] z-20  
                                ${selectedItem === 'YouStudio' ? ' -translate-y-10' : ''} 
                                ${selectedItem === 'YouPlex' ? ' -translate-y-0' : ''}
                                ${selectedItem === 'YouHome' ? ' -translate-y-0' : ''}
                            transition-all duration-500 ease-in-out animate-fade-down animate-duration-[2000ms] duration-1000`
                        }
                        width={400}
                        height={400}
                    />
                    <Image
                        src={selectedItem === "YouPlex" ? plexcolored : plex}
                        alt="Plex"
                        className={`w-[320px] absolute bottom-[257px] right-[349px] z-10 
                                ${selectedItem === 'YouStudio' ? ' -translate-y-20' : ''} 
                                ${selectedItem === 'YouHome' ? '' : ''}
                                ${selectedItem === 'YouPlex' ? ' -translate-y-10 ' : ''}
                            transition-all duration-500 ease-in-out animate-delay-300 animate-fade-down animate-duration-[2000ms] duration-1000`
                        }
                        width={320}
                        height={320}
                    />
                    <Image
                        src={selectedItem === "YouHome" ? homecolored : home}
                        alt="Home"
                        className={`w-[330px] absolute bottom-[345px] right-[345px] 
                                ${selectedItem === 'YouStudio' ? ' -translate-y-20' : ''} 
                                ${selectedItem === 'YouHome' ? ' -translate-y-10' : ''}
                                ${selectedItem === 'YouPlex' ? ' -translate-y-20' : ''}
                                transition-all duration-500 ease-in-out animate-delay-[600ms] animate-fade-down animate-duration-[2000ms] duration-1000`
                        }
                        width={330}
                        height={330}
                    />
                    <button
                        onMouseEnter={() => handleMouseEnter('/youniverse/homestudio/home')}
                        onClick={() => {
                            setSelectedItem('YouHome');
                        }}
                        className="z-50 w-[400px]  h-[190px] col-start-1 row-start-1 self-center justify-self-center translate-x-[340px]"
                    >
                    </button>
                    <button
                        onMouseEnter={() => handleMouseEnter('/youniverse/homestudio/plex')}
                        onClick={() => {
                            setSelectedItem('YouPlex');
                        }}
                        className="z-50 w-[400px]  h-[120px] col-start-1 row-start-1 self-center justify-self-center translate-x-[340px] translate-y-[160px]"
                    >
                    </button>
                    <button
                        onMouseEnter={() => handleMouseEnter('/youniverse/homestudio/studio')}
                        onClick={() => {
                            setSelectedItem('YouStudio');
                        }}
                        className="z-50 w-[400px]  h-[120px] col-start-1 row-start-1 self-center justify-self-center translate-x-[340px] translate-y-[290px]"
                    >
                    </button>
                </>
            </div>
        </>
    )
}

export default HomeStudio