'use client'
import React, { useEffect } from 'react'
import Image from "next/image";
import Videos from '@/app/components/Video';
import menu1 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse-6.png";
import menu2 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse.png";
import menu3 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse-1.png";
import menu4 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse-2.png";
import menu5 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse-3.png";
import menu6 from "../../../../public/conceito/b-submenu-conceito-nazca-youniverse-4.png";
import youshops1 from "../../../../public/conceito/youshops-nazca-youniverse.png";
import youshops2 from "../../../../public/conceito/youshops2-nazca-youniverse.png";
import youwork from "../../../../public/conceito/youwork-nazca-youniverse.png";
import youstudio from "../../../../public/conceito/studio-nazca-youniverse.png";
import youplex from "../../../../public/conceito/flex-nazca-youniverse.png";
import youhome from "../../../../public/conceito/home-nazca-youniverse.png";
import { useContextDefault } from '@/context/Context';


const Conceito = () => {

    const [selectedMenu, setSelectedMenu] = React.useState(menu1);
    const [showYoushops1, setShowYoushops1] = React.useState(true);
    const context = useContextDefault();
    const {setSelectedItem: setSelectedItem } = context || {};
    useEffect(() => {
        setSelectedItem?.("Conceito");
    }, [])
    return (
        <>
            {selectedMenu === menu1 && (
                <div  className='col-start-6 row-start-2 col-span-19 row-span-20 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000 cursor-pointer px-10'>
                <Videos
                    videoSrc='https://j93xxrxs66dpumli.public.blob.vercel-storage.com/Filme%20Conceito%20Youniverse-f1YZ94IK1J9OcyXvc14d7jnAtFDpiA.mp4' // string path
                    thumb='/conceito/thumb.jpg'
                />

                </div>
            )}
            {selectedMenu === menu2 && (
                showYoushops1 ? (
                    <Image
                        src={youshops1} // string path
                        alt="Youshops 1"
                        className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-right animate-duration-[2000ms] duration-1000 cursor-pointer'
                        key={"youshops1"}
                        onClick={() => setShowYoushops1(false)}
                    />
                ) : (
                    <Image
                        src={youshops2} // string path
                        alt="Youshops 2"
                        key={"youshops2"}
                        className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-left animate-duration-[2000ms] duration-1000 cursor-pointer'

                        onClick={() => setShowYoushops1(true)}
                    />
                )
            )}
            {selectedMenu === menu3 && (
                <Image
                    src={youwork} // string path
                    alt="Youwork"
                    className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000 cursor-pointer'

                />
            )}
            {selectedMenu === menu4 && (
                <Image
                    src={youstudio} // string path
                    alt="Youstudio"
                    className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000 cursor-pointer'

                />
            )}
            {selectedMenu === menu5 && (
                <Image
                    src={youplex}   // string path
                    alt="Youplex"
                    className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000 cursor-pointer'

                />
            )}
            {selectedMenu === menu6 && (
                <Image
                    src={youhome}   // string path
                    alt="Youhome"
                    className='col-start-7 col-span-18 row-span-20 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000 cursor-pointer'

                />
            )}



            <div className='grid grid-cols-19 grid-rows-2 col-span-19 row-span-2 row-end-25 col-start-6'>
                <Image
                    src={selectedMenu} // state now holds a string path
                    alt="Conceito"
                    className='col-span-full row-span-2 cursor-pointer z-0'

                />
                <button className='row-start-1 col-span-3 row-span-2 z-10 min-h-[100px] 4k:min-h-[200px] 4k:row-end-3' onClick={() => setSelectedMenu(menu1)}>
                </button>
                <button className='row-start-1 col-span-3 row-span-2 z-10 min-h-[100px] 4k:min-h-[200px] 4k:row-end-3' onClick={() => setSelectedMenu(menu2)}>

                </button>
                <button className='row-start-1 col-span-3 row-span-2 z-10 min-h-[100px] 4k:min-h-[200px] 4k:row-end-3' onClick={() => setSelectedMenu(menu3)}>

                </button>
                <button className='row-start-1 col-span-4 row-span-2 z-10 min-h-[100px] 4k:min-h-[200px] 4k:row-end-3' onClick={() => setSelectedMenu(menu4)}>

                </button>
                <button className='row-start-1 col-span-3 row-span-2 z-10 min-h-[100px] 4k:min-h-[200px] 4k:row-end-3' onClick={() => setSelectedMenu(menu5)}>

                </button>
                <button className='row-start-1 col-span-3 row-span-2 z-10 min-h-[100px] 4k:min-h-[200px] 4k:row-end-3' onClick={() => setSelectedMenu(menu6)}>

                </button>
            </div>
        </>
    )
}

export default Conceito