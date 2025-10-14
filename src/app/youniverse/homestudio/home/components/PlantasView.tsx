import React from 'react'
import Image from "next/image";
import { plantasYouHome, plantasYouHomeButtons } from '../plantas'
import { Slider } from '@mui/material'
import { useState, useRef, useEffect } from 'react'


const PlantasView = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollValue, setScrollValue] = useState(2);
    const thumbWidth = 120;
    type PlantasYouHomeKey = keyof typeof plantasYouHome;
    const handleSliderChange = (_: Event, newValue: number | number[]) => {
        if (!scrollRef.current) return;
        const value = Array.isArray(newValue) ? newValue[0] : newValue;

        const { scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        // Prevent thumb overflow by reserving half width on both sides
        const offsetPercent = (thumbWidth / 2 / clientWidth) * 100;
        const clampedValue = Math.min(Math.max(value, offsetPercent), 100 - offsetPercent);

        scrollRef.current.scrollLeft = (clampedValue / 100) * maxScroll;
        setScrollValue(clampedValue);
    };


    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
        const maxScroll = scrollWidth - clientWidth;
        const rawPercentage = (scrollLeft / maxScroll) * 100;

        // Apply same clamping for consistency
        const offsetPercent = (thumbWidth / 2 / clientWidth) * 100;
        const clampedPercentage = Math.min(Math.max(rawPercentage, offsetPercent), 100 - offsetPercent);

        setScrollValue(clampedPercentage);
    };
    const [selectedPlantaKey, setSelectedPlantaKey] = useState<PlantasYouHomeKey>(plantasYouHomeButtons[0].frameKey as PlantasYouHomeKey);
    const [currentPlantaImageIndex, setCurrentPlantaImageIndex] = useState(0);

    const selectedPlanta = plantasYouHome[selectedPlantaKey];
    useEffect(() => {
        setCurrentPlantaImageIndex(0);
    }, [selectedPlantaKey]);

    return (
        <>
            <Image
                src={plantasYouHome[selectedPlantaKey].frame}
                alt="plantas"
                className='object-contain col-span-19 row-span-17 col-start-6 row-start-2 relative animate-fade-down animate-duration-[2000ms] duration-1000'
                width={3840}
                height={2160}
            />
            <Image
                key={selectedPlantaKey + currentPlantaImageIndex}
                src={selectedPlanta.plantas[currentPlantaImageIndex]}
                alt="plantas"
                className='object-contain col-span-10 4k:translate-x-[800px] row-span-14 col-start-6 row-start-6 translate-x-[380px] relative animate-fade-down animate-duration-[2000ms] duration-1000 z-10'
                width={3840}
                height={2160}
            />
            {selectedPlanta.plantas.length > 1 && (
                <button
                    onClick={() => setCurrentPlantaImageIndex(prev => (prev + 1) % selectedPlanta.plantas.length)}
                    className="absolute z-20 bottom-1/6 right-0"
                >
                    <Image
                        src={currentPlantaImageIndex === 0 ? "/homestudio/buttons/b-ver-opcao-decorado.png" : "/homestudio/buttons/b-voltar.png"}
                        alt={currentPlantaImageIndex === 0 ? "Ver opção 2" : "Ver opção 1"}
                        width={600}
                        height={103}
                        className="object-contain hover:cursor-pointer transition-transform 4k:w-[600px] w-[300px] "
                    />
                </button>
            )}
            <div className='col-span-19 row-span-4 col-start-6 row-start-21 flex flex-col overflow-x-scroll justify-start items-center animate-fade-down animate-duration-[2000ms] duration-1000 gap-2 px-10 no-scrollbar pb-4'>
                <Slider
                    value={scrollValue}
                    min={0}
                    max={100}
                    orientation="horizontal"
                    step={1}
                    track={false}
                    valueLabelDisplay="off"
                    sx={{
                        color: '#A39126',
                        "& .MuiSlider-thumb": {
                            width: thumbWidth,
                            backgroundImage: `url('/util/scroll.png')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: "transparent",
                            borderRadius: 0,
                            border: 0,
                            boxShadow: 0,
                        },
                        "& .MuiSlider-rail": {
                            height: 12,
                            backgroundColor: '#A39126',
                            opacity: 1,
                        },
                    }}
                    onChange={handleSliderChange}
                />


                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className='flex overflow-x-scroll justify-start items-center w-full h-full  no-scrollbar gap-4'>
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
            </div>


        </>
    )
}

export default PlantasView