'use client'
import React, { useState } from 'react'
import homestudio from "../../../../public/homestudio/fachada-youniverse-nazca.png"
import youhome from "../../../../public/homestudio/fachada-youniverse-nazca-youhome.png"
import youflex from "../../../../public/homestudio/fachada-youniverse-nazca-youflex.png"
import youstudio from "../../../../public/homestudio/fachada-youniverse-nazca-youstudio.png"
import youstsudiologo from "../../../../public/homestudio/logo-youstudio-youniverse.png"
import youplexlogo from "../../../../public/homestudio/logo-youflex-youniverse.png"
import youhomelogo from "../../../../public/homestudio/logo-youhome-youniverse.png"
import touch from "../../../../public/homestudio/touch.png"
import implantacaostudio from '../../../../public/homestudio/buttons/b-implantacao-youniverse-nazca-youstudio.png'
import imagensstudio from '../../../../public/homestudio/buttons/b-diferenciais-youniverse-nazca-youstudio.png'
import plantas from "../../../../public/homestudio/buttons/b-parceiros-youniverse-nazca-youstudio.png"
import Image from 'next/image'
import implantacaohome from "../../../../public/homestudio/buttons/b-implantacao-youniverse-nazca.png"
import imagenshome from "../../../../public/homestudio/buttons/b-diferenciais-youniverse-nazca.png"
import plantashome from "../../../../public/homestudio/buttons/b-parceiros-youniverse-nazca.png"
import imagensplex from "../../../../public/homestudio/buttons/b-diferenciais-youniverse-nazca-youplex.png"
import plantasplex from "../../../../public/homestudio/buttons/b-parceiros-youniverse-nazca-youplex.png"
import bgfachada from "../../../../public/homestudio/fachada/bgfachada.png"
import studio from "../../../../public/homestudio/fachada/studio.png"
import studiocolored from "../../../../public/homestudio/fachada/youstudiocolor.png"
import plexcolored from "../../../../public/homestudio/fachada/plexcolor.png"
import homecolored from "../../../../public/homestudio/fachada/youhomecolor.png"
import plex from "../../../../public/homestudio/fachada/plex.png"
import home from "../../../../public/homestudio/fachada/home.png"
import { useRouter } from 'next/navigation'

const HomeStudio = () => {
    const [isFirstMenu, setIsFirstMenu] = useState(true);
    const [selectedItem, setSelectedItem] = useState("");
    const router = useRouter();
    return (
        <>
            <div className='col-start-19 col-span-6 row-span-24 grid grid-cols-4 grid-rows-24'>
                {selectedItem === 'YouHome' && (
                    <>
                        <Image
                            src={youhomelogo}
                            alt="YouHome Logo"
                            className={`col-span-6 row-start-5 animate-fade-down animate-duration-[2000ms] duration-1000`}
                            priority
                            key={"youhomelogo"}
                        />
                        <div className='col-span-4 row-span-4 col-start-1 row-start-12 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={implantacaohome}
                                alt="Implantação"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-100'
                                priority
                                onClick={() => {
                                    router.push('/youniverse/homestudio/home?view=implantacao')
                                }}
                            />
                            <Image
                                src={imagenshome}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300'
                                priority
                                onClick={() => {
                                    router.push('/youniverse/homestudio/home?view=imagens')
                                }}
                            />
                            <Image
                                src={plantashome}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500'
                                priority
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
                            priority
                            key={"youplexlogo"}
                        />
                        <div className='col-span-4 row-span-4 col-start-1 row-start-12 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={imagensplex}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300'
                                priority
                                onClick={() => {
                                    router.push('/youniverse/homestudio/plex?view=imagens')
                                }}
                            />
                            <Image
                                src={plantasplex}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500'
                                priority
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
                            priority
                            key={"youstsudiologo"}
                        />
                        <div className='col-span-4 row-span-4 col-start-1 row-start-12 flex flex-col items-center justify-center gap-16'>
                            <Image
                                src={implantacaostudio}
                                alt="Implantação"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-100'
                                priority
                                onClick={() => {
                                    router.push('/youniverse/homestudio/studio?view=implantacao')
                                }}
                            />
                            <Image
                                src={imagensstudio}
                                alt="Imagens"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-300'
                                priority
                                onClick={() => {
                                    router.push('/youniverse/homestudio/studio?view=imagens')
                                }}
                            />
                            <Image
                                src={plantas}
                                alt="Plantas"
                                className=' object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out animate-fade-left animate-duration-[2000ms] duration-1000 animate-delay-500'
                                priority
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
                    priority
                />
                {isFirstMenu && (
                    <>
                        <Image
                            src={bgfachada}
                            alt="Home Studio"
                            fill
                            className="object-fit col-start-1 row-start-1 animate-fade animate-duration-[2000ms] duration-1000"
                            priority
                        />
                        <Image
                            src={selectedItem === "YouStudio" ? studiocolored : studio}
                            alt="Studio"
                            className={`w-[400px] absolute bottom-[10px] right-[337px] z-20  
                                ${selectedItem === 'YouStudio' ? ' -translate-y-10' : ''} 
                                ${selectedItem === 'YouPlex' ? ' -translate-y-0' : ''}
                                ${selectedItem === 'YouHome' ? ' -translate-y-0' : ''}
                            transition-all duration-500 ease-in-out`
                        } 
                        />
                        <Image
                            src={selectedItem === "YouPlex" ? plexcolored : plex}
                            alt="Plex"
                            className={`w-[320px] absolute bottom-[257px] right-[349px] z-10 
                                ${selectedItem === 'YouStudio' ? ' -translate-y-20' : ''} 
                                ${selectedItem === 'YouHome' ? '' : ''}
                                ${selectedItem === 'YouPlex' ? ' -translate-y-10 ' : ''}
                            transition-all duration-500 ease-in-out animate-delay-500`
                            }
                        />
                        <Image
                            src={selectedItem === "YouHome" ? homecolored : home}
                            alt="Home"
                            className={`w-[330px] absolute bottom-[345px] right-[345px] 
                                ${selectedItem === 'YouStudio' ? ' -translate-y-20' : ''} 
                                ${selectedItem === 'YouHome' ? ' -translate-y-10' : ''}
                                ${selectedItem === 'YouPlex' ? ' -translate-y-20' : ''}
                                transition-all duration-500 ease-in-out`
                            }
                        />
                        <button
                            onClick={() => {
                                // setIsFirstMenu(false);
                                        setSelectedItem('YouHome');
                                
                            }}
                            className="z-50 w-[400px]  h-[190px] col-start-1 row-start-1 self-center justify-self-center translate-x-[340px]"
                        >
                        </button>
                        <button
                            onClick={() => {
                                // setIsFirstMenu(false);
                                setSelectedItem('YouPlex');
                            }}
                            className="z-50 w-[400px]  h-[120px] col-start-1 row-start-1 self-center justify-self-center translate-x-[340px] translate-y-[160px]"
                        >
                        </button>
                        <button
                            onClick={() => {
                                // setIsFirstMenu(false);
                                setSelectedItem('YouStudio');
                            }}
                            className="z-50 w-[400px]  h-[120px] col-start-1 row-start-1 self-center justify-self-center translate-x-[340px] translate-y-[290px]"
                        >
                        </button>
                    </>
                )}
                {/* {selectedItem === 'YouHome' && (
                    <>
                        <Image
                            src={youhome}
                            alt="YouHome"
                            fill
                            key={"youhome"}
                            className=" object-contain col-start-1 row-start-1 animate-fade animate-duration-[2000ms] duration-1000"
                            priority
                        />
                        <button
                            onClick={() => {
                                setIsFirstMenu(false);
                                setSelectedItem('YouPlex');
                            }}
                            className="z-50 w-[400px] h-[120px] col-start-1 row-start-1 self-center justify-self-center translate-x-[260px] translate-y-[160px]"
                        >
                        </button>
                        <button
                            onClick={() => {
                                setIsFirstMenu(false);
                                setSelectedItem('YouStudio');
                            }}
                            className="z-50 w-[400px] h-[120px] col-start-1 row-start-1 self-center justify-self-center translate-x-[260px] translate-y-[300px]"
                        >
                        </button>
                    </>
                )}
                {selectedItem === 'YouStudio' && (
                    <>
                        <Image
                            src={youstudio}
                            alt="YouStudio"
                            fill
                            className="object-contain col-start-1 row-start-1 animate-fade animate-duration-[2000ms] duration-1000"
                            priority
                            key={"youstudio"}

                        />
                        <button
                            onClick={() => {
                                setIsFirstMenu(false);
                                setSelectedItem('YouHome');
                            }}
                            className="z-50 w-[400px]  h-[120px] col-start-1 row-start-1 self-center justify-self-center translate-x-[240px] -translate-y-[20px]"
                        >
                        </button>
                        <button
                            onClick={() => {
                                setIsFirstMenu(false);
                                setSelectedItem('YouPlex');
                            }}
                            className="z-50 w-[400px] h-[120px] col-start-1 row-start-1 self-center justify-self-center translate-x-[240px] translate-y-[115px]"
                        >
                        </button>

                    </>
                )}
                {selectedItem === 'YouPlex' && (
                    <>
                        <Image
                            src={youflex}
                            alt="YouFlex"
                            fill
                            key={"youflex"}
                            className="object-contain col-start-1 row-start-1 animate-fade animate-duration-[2000ms] duration-1000"
                            priority
                        />
                        <button
                            onClick={() => {
                                setIsFirstMenu(false);
                                setSelectedItem('YouHome');
                            }}
                            className="z-50 w-[400px]  h-[120px] col-start-1 row-start-1 self-center justify-self-center translate-x-[240px] -translate-y-[20px]"
                        >
                        </button>
                        <button
                            onClick={() => {
                                setIsFirstMenu(false);
                                setSelectedItem('YouStudio');
                            }}
                            className="z-50 w-[400px]  h-[120px] col-start-1 row-start-1 self-center justify-self-center translate-x-[240px] translate-y-[280px]"
                        >
                        </button>
                    </>
                )} */}

            </div>
        </>
    )
}

export default HomeStudio