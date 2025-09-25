'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import youhomelogo from "../../../../../public/homestudio/logo-youstudio-youniverse.png"
import home from "../../../../../public/util/b-home-youniverse-nazca.svg"
import duvida from "../../../../../public/util/b-duvida-youniverse-nazca.svg"
import som from "../../../../../public/util/b-som-youniverse-nazca.svg"
import detalhe from "../../../../../public/util/detalhe-youhome-menu-lateral.png"
import outline from "../../../../../public/localizacao/outline.png"
import Image from 'next/image'
import implantacao from "../../../../../public/homestudio/youstudio/implantacao/implantacao-3-pavimento.png"
import { Svg } from './Svg'
import image1 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-1.png"
import image2 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-2.png"
import image3 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-3.png"
import image4 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-4.png"
import image5 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-5.png"
import image6 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-6.png"
import image7 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-7.png"
import image8 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-8.png"
import image9 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-9.png"
import image10 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-10.png"
import image11 from "../../../../../public/homestudio/youstudio/implantacao/img-implantacao-youstudio-11.png"
import touch from "../../../../../public/homestudio/implantacao/aviso-uso-bolotario.png"
import { expandedYouHomeImages, youHomeimages } from './galeria'
import { plantasYouStudio, PlantasYouHomeKey, plantasYouHomeButtons } from './plantas'

const YouHomePage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [imageIndexToShow, setImageToShow] = useState<number | null>(null);
    const [view, setView] = useState(searchParams.get('view') || 'implantacao');
    const [selectedItem, setSelectedItem] = useState(view);

    const [selectedPlantaKey, setSelectedPlantaKey] = useState<PlantasYouHomeKey>(plantasYouHomeButtons[0].frameKey as PlantasYouHomeKey);

    const [menuSelected, setMenuSelected] = useState("");

    const prevMenuSelectedRef = useRef<string>("");

    useEffect(() => {
        prevMenuSelectedRef.current = menuSelected;
    }, [menuSelected]);

    const prevMenuSelected = prevMenuSelectedRef.current;

    useEffect(() => {
        setSelectedItem(view);
    }, [view]);

    const svgViewBoxes: { [key: string]: string } = {
        "1 hall social": "1335 -133 400 970",
        "2 espaço gourmet": "968 -310 400 970",
        "3 fit studio": "1105 -353 400 970",
        "4 repouso": "1425 -445 400 970",
        "5 piscina aquecida": "1555 -380 400 970",
        "6 sauna": "1355 -433 400 970",
        "7 ducha": "1332 -375 400 970",
        "8 sanitários": "1302 -240 400 970",
        "9 reunião": "1480 -230 400 970",
        "10 coworking": "1620 -150 400 970",
        "11 lavanderia": "1630 -5 400 970",
    };

    const toViewBox = svgViewBoxes[menuSelected];
    const fromViewBox = (prevMenuSelected && svgViewBoxes[prevMenuSelected]) || toViewBox;

    const sidebarButtons = [
        { name: 'Implantação', value: 'implantacao' },
        { name: 'Imagens', value: 'imagens' },
        { name: 'Plantas', value: 'plantas' },
    ];
    const menuButtons = [
        { name: "1 hall social", image: image1 },
        { name: "2 espaço gourmet", image: image2 },
        { name: "3 fit studio", image: image3 },
        { name: "4 repouso", image: image4 },
        { name: "5 piscina aquecida", image: image5 },
        { name: "6 sauna", image: image6 },
        { name: "7 ducha", image: image7 },
        { name: "8 sanitários", image: image8 },
        { name: "9 reunião", image: image9 },
        { name: "10 coworking", image: image10 },
        { name: "11 lavanderia", image: image11 },
    ]


    const selectedMenuButton = menuButtons.find(button => button.name === menuSelected)?.image;

    return (
        <>
            <div className='col-span-5 relative row-span-24 grid grid-cols-4 grid-rows-24 border-r border-[#12100B] '>
                <Image
                    src={detalhe}
                    alt="Detalhe"
                    className="w-12"
                    priority
                />
                <Image
                    src={youhomelogo}
                    alt="Nazca Logo"
                    className=' col-span-5 row-span-2 row-start-3 p-1 transition-transform animate-fade-down animate-duration-[2000ms] duration-1000 px-10'
                    priority
                />
                <div className='grid grid-cols-4 grid-rows-12 col-span-5 row-span-10 row-start-9'>
                    {sidebarButtons.map((button, index) => (
                        <div
                            key={index}
                            style={{
                                animationDelay: `${index * 200}ms`,
                                gridRow: `${index * 3 + 1} / span 3`
                            }}
                            className={`col-span-4 col-start-2 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out animate-fade-left duration-1000 relative`}
                            onClick={() => {
                                setView(button.value);
                                setSelectedItem(button.value);
                            }}
                        >
                            <Image
                                src={outline}
                                alt="Selected outline"
                                layout="fill"
                                objectFit="contain"
                                className={`transition-opacity duration-300 ease-in-out ${selectedItem === button.value ? 'opacity-100' : 'opacity-0'}`}
                            />
                            <span className={`text-[#4A4F54] text-[24px] relative uppercase ${selectedItem === button.value ? 'font-impact' : 'font-aviano'} `}>
                                {button.name}
                            </span>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => {
                        router.push('/youniverse/homestudio')
                    }}
                    className='col-span-2 row-span-2 flex items-start row-start-19 cursor-pointer transition-transform duration-300 ease-in-out animate-fade-right animate-delay-[1200ms] duration-1000'
                >
                    <span
                        className="
                        relative px-8 py-4 
                        text-xl uppercase font-impact 
                        text-white bg-[#CC654B]
                        transition-colors duration-300 ease-in-out
                        after:content-[''] after:absolute after:top-0 after:right-[-30px] 
                        after:w-0 after:h-0 tracking-[8px]
                        after:border-t-[30px] after:border-b-[30px] after:border-l-[30px] 
                        after:border-t-transparent after:border-b-transparent after:border-l-[#CC654B]
                        "
                    >
                        Voltar
                    </span>
                </button>
                <div className='col-span-5 row-span-1 flex row-start-23 justify-center items-center gap-4'>
                    <Image src={home} key={"home"} alt="Home" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-100 duration-1000' priority />
                    <Image src={duvida} key={"duvida"} alt="Dúvidas" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-300 duration-1000' priority />
                    <Image src={som} key={"som"} alt="Som" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2 w-[30px] animate-fade-up animate-delay-500 duration-1000' priority />
                </div>
            </div>
            {view === 'implantacao' && (
                <>
                    <span className='col-start-7 col-span-8 uppercase row-start-3 text-5xl text-[#414042] font-impact animate-fade-down animate-duration-[2000ms] duration-1000'>
                        Implantação do 3º Pavimento
                        <span className='block text-xl mt-2 text-right font-aviano'>
                            Youstudio/YOuplex
                        </span>
                    </span>
                    <div className="relative col-start-8 col-span-15 row-start-5 row-span-13">
                        <Image
                            src={implantacao}
                            alt="Rooftop"
                            className={`w-full h-full object-contain animate-fade-up animate-duration-[2000ms] duration-1000 transition-transform ease-in-out ${menuSelected !== "" ? "scale-[70%] -translate-x-50" : ""}`}
                            priority
                        />
                        {selectedMenuButton && (
                            <Image
                                src={selectedMenuButton}
                                alt={menuSelected}
                                className='object-contain w-[500px] transform translate-x-[800px] -translate-y-[500px] transition-transform animate-fade-up animate-duration-[2000ms] duration-1000'
                            />
                        )}
                        {menuSelected && toViewBox && (
                            <div className="absolute inset-0 z-10 ">
                                <Svg from={fromViewBox} to={toViewBox} />
                            </div>
                        )}
                    </div>
                    <div className='row-start-18 col-start-10 col-span-11 row-span-4 grid grid-flow-col grid-rows-4 gap-x-4 gap-y-2'>
                        {menuButtons.map((button, index) => (
                            <button
                                key={index}
                                onClick={() => { setMenuSelected(button.name); }}
                                className="cursor-pointer transition-all ease-in-out animate-fade-up duration-1000"
                            >
                                <span
                                    className={`relative text-xl uppercase font-aviano px-4 py-2 transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:top-0 after:right-[-20px] after:border-t-[20px] after:border-b-[20px] after:border-l-[20px] after:border-t-transparent after:border-b-transparent after:transition-colors after:ease-in-out after:duration-300 ${menuSelected === button.name
                                        ? "bg-[#CC654B] text-white after:border-l-[#CC654B]"
                                        : "text-black after:border-l-transparent"}`}
                                >
                                    {button.name}
                                </span>
                            </button>

                        ))}
                    </div>
                    <Image
                        src={touch}
                        alt="Touch"
                        className='absolute bottom-0 right-4 w-[350px] h-[150px] object-contain animate-fade animate-delay-500 duration-1000'
                        priority
                    />
                </>
            )}
            {view === 'imagens' && (
                <>
                    <div className='col-span-5 col-start-6 row-span-24 flex flex-col overflow-y-scroll no-scrollbar p-16'>
                        {youHomeimages.map((img, index) => (
                            <button
                                onClick={() => setImageToShow(index)}
                                key={index} className='w-full flex justify-center items-center my-4 animate-fade-up animate-delay-[200ms] duration-1000'>
                                <Image
                                    src={img.src}
                                    alt={`YouHome Image ${index + 1}`}
                                    className='object-contain h-full w-full hover:scale-105 transition-transform duration-300'
                                    priority
                                />
                            </button>
                        ))}
                    </div>
                    <div className='col-span-14 relative row-span-24 animate-fade animate-delay-500 duration-1000'>
                        <Image
                            src={imageIndexToShow !== null ? expandedYouHomeImages[imageIndexToShow].src : expandedYouHomeImages[0].src}
                            alt={`YouHome Expanded Image`}
                            className='object-contain h-full w-full'
                            priority
                        />
                        <span
                            className={`text-xl uppercase tracking-widest font-impact px-4 py-2 transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:top-0 after:right-[-22px] after:border-t-[22px] after:border-b-[22px] after:border-l-[22px] after:border-t-transparent after:border-b-transparent after:transition-colors after:ease-in-out after:duration-300 
                            bg-[#CC654B] text-white after:border-l-[#CC654B] absolute top-48 left-0`}
                        >
                            {imageIndexToShow !== null ? expandedYouHomeImages[imageIndexToShow].alt : expandedYouHomeImages[0].alt}
                        </span>
                    </div>


                </>
            )}
            {view === 'plantas' && (
                <>
                    <Image
                        src={plantasYouStudio[selectedPlantaKey].frame}
                        alt="plantas"
                        className='object-contain col-span-19 row-span-17 col-start-6 row-start-2 relative animate-fade-down animate-duration-[2000ms] duration-1000'
                        priority
                    />
                    <Image
                        src={plantasYouStudio[selectedPlantaKey].plantas[0]}
                        alt="plantas"
                        className='object-contain col-span-10 row-span-14 col-start-6 row-start-6 translate-x-[380px] relative animate-fade-down animate-duration-[2000ms] duration-1000 z-10'
                        priority
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
                                    priority
                                />
                            </button>
                        ))}
                    </div>


                </>
            )}
        </>
    )
}

export default YouHomePage