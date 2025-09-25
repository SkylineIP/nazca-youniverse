'use client'
import React from 'react'
import menu1 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse-6.png"
import menu2 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse.png"
import menu3 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse-1.png"
import menu4 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse-2.png"
import menu5 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse-3.png"
import menu6 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse-4.png"
import youshops1 from "../../../../public/conceito/youshops-nazca-youniverse.png"
import youshops2 from "../../../../public/conceito/youshops2-nazca-youniverse.png"
import youwork from "../../../../public/conceito/youwork-nazca-youniverse.png"
import youstudio from "../../../../public/conceito/studio-nazca-youniverse.png"
import youplex from "../../../../public/conceito/flex-nazca-youniverse.png"
import youhome from "../../../../public/conceito/home-nazca-youniverse.png"
import Image from 'next/image'

const Conceito = () => {
    const [selectedMenu, setSelectedMenu] = React.useState(menu1);
    const [showYoushops1, setShowYoushops1] = React.useState(true);
    return (
        <>
            {selectedMenu === menu2 && (
                showYoushops1 ? (
                    <Image
                        src={youshops1}
                        alt="Youshops 1"
                        className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-right animate-duration-[2000ms] duration-1000 cursor-pointer'
                        priority
                        key={"youshops1"}
                        onClick={() => setShowYoushops1(false)}
                    />
                ) : (
                    <Image
                        src={youshops2}
                        alt="Youshops 2"
                        key={"youshops2"}
                        className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-left animate-duration-[2000ms] duration-1000 cursor-pointer'
                        priority
                        onClick={() => setShowYoushops1(true)}
                    />
                )
            )}
            {selectedMenu === menu3 && (
                <Image
                    src={youwork}
                    alt="Youwork"
                    className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000 cursor-pointer'
                    priority
                />
            )}
            {selectedMenu === menu4 && (
                <Image
                    src={youstudio}
                    alt="Youstudio"
                    className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000 cursor-pointer'
                    priority
                />
            )}
            {selectedMenu === menu5 && (
                <Image
                    src={youplex}   
                    alt="Youplex"
                    className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000 cursor-pointer'
                    priority
                />
            )}
            {selectedMenu === menu6 && (
                <Image
                    src={youhome}   
                    alt="Youhome"
                    className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000 cursor-pointer'
                    priority
                />
            )}



            <div className='relative col-span-19 row-span-2 row-start-23 col-start-6'>
                <Image
                    src={selectedMenu}
                    alt="Conceito"
                    className='col-span-19 row-span-2 w-full h-full cursor-pointer'
                    priority
                />
                <button className='absolute top-0 w-1/7 h-full' onClick={() => setSelectedMenu(menu1)}>

                </button>
                <button className='absolute top-0 left-60 w-1/7 h-full ' onClick={() => setSelectedMenu(menu2)}>

                </button>
                <button className='absolute top-0 left-[490px] w-1/7 h-full ' onClick={() => setSelectedMenu(menu3)}>

                </button>
                <button className='absolute top-0 left-[765px] w-1/7 h-full ' onClick={() => setSelectedMenu(menu4)}>

                </button>
                <button className='absolute top-0 left-[1020px] w-1/7 h-full ' onClick={() => setSelectedMenu(menu5)}>

                </button>
                <button className='absolute top-0 left-[1280px] w-1/7 h-full ' onClick={() => setSelectedMenu(menu6)}>

                </button>
            </div>
        </>
    )
}

export default Conceito