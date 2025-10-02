import React from 'react'
import Image from "next/image";


const ImagensView = () => {
    const fachada1 = "/homestudio/plex/img-fachada1.png";
    const fachada2 = "/homestudio/plex/img-fachada2.png";
    const ap1810 = "/homestudio/plex/img-1810.png";

    return (
        <>
            <div className='col-span-5 col-start-6 row-span-24 flex flex-col items-center justify-center gap-8 overflow-y-scroll no-scrollbar p-16'>
                <button>
                    <Image
                        src={fachada1}
                        alt='Miniatura fachada'
                        className='object-contain w-4/5'
                        width={400}
                        height={300}
                    />
                </button>
                <button>
                    <Image
                        src={fachada2}
                        alt='Miniatura fachada'
                        className='object-contain w-4/5'
                        width={400}
                        height={300}
                    />
                </button>
            </div>
            <Image
                src={ap1810}
                alt='Miniatura fachada'
                className='object-fit col-span-14 h-full w-full row-span-24 relative animate-fade-down animate-duration-[2000ms] duration-1000'
                width={1200}
                height={1080}
            />
        </>
    )
}

export default ImagensView