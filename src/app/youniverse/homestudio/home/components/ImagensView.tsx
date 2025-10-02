import React, { useState } from 'react'
import { youHomeimages, expandedYouHomeImages } from '../galeria'
import ScrollSlider from '@/app/components/CustomScroll'
import Image, { StaticImageData } from 'next/image'
import { useContextDefault } from '@/context/Context'

const ImagensView = () => {
    const [imageIndexToShow, setImageToShow] = useState<number | null>(null);
    const context = useContextDefault();
    const setAbrirImagensTelaCheia = context?.setAbrirImagensTelaCheia;

    return (
        <>
            <div className='col-span-5 col-start-6 row-span-24 overflow-y-scroll no-scrollbar flex'>
                <ScrollSlider
                    images={youHomeimages as unknown as { src: string; alt?: string }[]}
                    orientation='vertical'
                    color='#A39126'
                    thumbImage='/util/Group-1466.png'
                    onSelectImage={(index) => {
                        setImageToShow(index);
                    }}
                />
            </div>

            <div className='col-span-14 relative row-span-24 animate-fade animate-delay-500 duration-1000'>
                <button
                    className='w-full h-full'
                    onClick={() => {
                        if (setAbrirImagensTelaCheia) {
                            setAbrirImagensTelaCheia({
                                open: true,
                                images: expandedYouHomeImages as unknown as { src: StaticImageData; alt: string; }[],
                                currentIndex: imageIndexToShow ?? 0
                            });
                        }
                    }}>
                    <Image
                        src={imageIndexToShow !== null ? expandedYouHomeImages[imageIndexToShow].src : expandedYouHomeImages[0].src}
                        alt={`YouHome Expanded Image`}
                        className='object-contain h-full w-full animate-fade animate-delay-500 duration-1000'
                        width={1920}
                        height={1080}
                    />
                </button>
                <span
                    className={`text-xl uppercase tracking-widest font-impact px-4 py-2 transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:top-0 after:right-[-22px] after:border-t-[22px] after:border-b-[22px] after:border-l-[22px] after:border-t-transparent after:border-b-transparent after:transition-colors after:ease-in-out after:duration-300 
                                bg-[#A39126] text-white after:border-l-[#A39126] absolute top-48 left-0`}
                >
                    {imageIndexToShow !== null ? expandedYouHomeImages[imageIndexToShow].alt : expandedYouHomeImages[0].alt}
                </span>
            </div>


        </>
    )
}

export default ImagensView