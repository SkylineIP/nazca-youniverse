import React, { useState } from 'react'
import Image from "next/image";
import { plantasYouStudio, PlantasYouHomeKey, plantasYouHomeButtons } from '../plantas'

const PlantasView = () => {
    const [selectedPlantaKey, setSelectedPlantaKey] = useState<PlantasYouHomeKey>(plantasYouHomeButtons[0].frameKey as PlantasYouHomeKey);
    return (
        <>
            <Image
                src={plantasYouStudio[selectedPlantaKey].frame}
                alt="plantas"
                className='object-contain col-span-19 row-span-17 col-start-6 row-start-2 relative animate-fade-down animate-duration-[2000ms] duration-1000'
                width={1920}
                height={1080}
            />
            <Image
                src={plantasYouStudio[selectedPlantaKey].plantas[0]}
                alt="plantas"
                className='object-contain col-span-10 row-span-14 col-start-6 row-start-6 translate-x-[380px] relative animate-fade-down animate-duration-[2000ms] duration-1000 z-10'
                width={1920}
                height={1080}

            />
            <div className='col-span-19 row-span-4 col-start-6 row-start-21 flex overflow-x-scroll justify-start items-center animate-fade-down animate-duration-[2000ms] duration-1000 gap-2 px-10 no-scrollbar pb-4'>
                {plantasYouHomeButtons.map((plantaButton, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedPlantaKey(plantaButton.frameKey as PlantasYouHomeKey)}
                        className={`h-full flex shrink-0 items-center justify-center cursor-pointer ${selectedPlantaKey === plantaButton.frameKey ? 'opacity-40' : ''
                            } transition-transform duration-300 ease-in-out relative`}
                    >
                        <Image
                            src={plantaButton.buttonImage}
                            alt="plantas"
                            className='object-cover h-full w-full'
                            width={500}
                            height={500}
                        />
                    </button>
                ))}
            </div>


        </>
    )
}

export default PlantasView