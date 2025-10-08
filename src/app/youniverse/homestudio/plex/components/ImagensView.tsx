import React, { useState } from 'react'
import Image from "next/image";
import { useContextDefault } from '@/context/Context';

import fachada1 from "../../../../../../public/homestudio/plex/img-fachada1.png";
import fachada2 from "../../../../../../public/homestudio/plex/img-fachada2.png";
import ap1810 from "../../../../../../public/homestudio/plex/img-1810.png";
import studio1810 from "../../../../../../public/homestudio/plex/img-1810-2exp.png";


const ImagensView = () => {
    const context = useContextDefault();
    const setAbrirImagensTelaCheia = context?.setAbrirImagensTelaCheia;
    const [currentIndexToShow, setCurrentIndexToShow] = useState(0);
    const images = [
        {
            src: ap1810,
            alt: "Studio 1810"
        },
        {
            src: studio1810,
            alt: "Studio 1810"
        }
    ]

    return (
        <>
            <div className='col-span-5 col-start-6 row-span-24 flex flex-col items-center justify-center gap-8 overflow-y-scroll no-scrollbar p-16 relative'>
                <button
                    onClick={() => setCurrentIndexToShow(0)}
                >
                    <Image
                        src={fachada1}
                        alt='Miniatura fachada'
                        className='object-contain w-4/5'
                        width={400}
                        height={300}
                    />
                </button>
                <button
                    onClick={() => setCurrentIndexToShow(1)}
                >
                    <Image
                        src={fachada2}
                        alt='Miniatura fachada'
                        className='object-contain w-4/5'
                        width={400}
                        height={300}
                    />
                </button>
            </div>
            <div className='col-span-14 h-full w-full row-span-24 relative'>

                <Image
                    key={currentIndexToShow}
                    onClick={() => {
                        if (setAbrirImagensTelaCheia) {
                            setAbrirImagensTelaCheia({
                                open: true,
                                images: images,
                                currentIndex: currentIndexToShow
                            });
                        }
                    }}
                    src={images[currentIndexToShow].src}
                    alt={images[currentIndexToShow].alt}
                    className='object-fit col-span-14 h-full w-full row-span-24 relative animate-fade-down animate-duration-[2000ms] duration-1000'
                    width={2309}
                    height={2161}
                />
                <span
                    className={`text-xl uppercase tracking-widest font-impact px-4 py-2 transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:top-0 after:right-[-22px] after:border-t-[22px] after:border-b-[22px] after:border-l-[22px] after:border-t-transparent after:border-b-transparent after:transition-colors after:ease-in-out after:duration-300 
                                                bg-[#939598] text-white after:border-l-[#939598] absolute top-48 left-0`}
                >
                    {images[currentIndexToShow].alt}
                </span>
            </div>
        </>
    )
}

export default ImagensView