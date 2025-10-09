import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import { Svg } from '../Svg';
import { useContextDefault } from '@/context/Context';
import { StaticImageData } from 'next/image';

const ImplantacaoView = () => {
    const touch = "/homestudio/implantacao/aviso-uso-bolotario.png";
    const image1 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-1.png";
    const image2 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-2.png";
    const image3 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-3.png";
    const image4 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-4.png";
    const image5 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-5.png";
    const image6 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-6.png";
    const image7 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-7.png";
    const image8 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-8.png";
    const image9 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-9.png";
    const image10 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-10.png";
    const image11 = "/homestudio/plex/implantacao/minis/img-implantacao-youplex-11.png";
    const implantacao = "/homestudio/plex/implantacao/implantacao-3-pavimento-youplex.png";

    const expandedImg2 = "/homestudio/youstudio/implantacao/expanded/2.png";
    const expandedImg3 = "/homestudio/youstudio/implantacao/expanded/3.png";
    const expandedImg4 = "/homestudio/youstudio/implantacao/expanded/4.png";
    const expandedImg5 = "/homestudio/youstudio/implantacao/expanded/5.png";
    const expandedImg6 = "/homestudio/youstudio/implantacao/expanded/6.png";
    const expandedImg10 = "/homestudio/youstudio/implantacao/expanded/10.png";
    const expandedImg11 = "/homestudio/youstudio/implantacao/expanded/11.png";


    const [menuSelected, setMenuSelected] = useState("");

    const prevMenuSelectedRef = useRef<string>("");

    useEffect(() => {
        prevMenuSelectedRef.current = menuSelected;
    }, [menuSelected]);

    const prevMenuSelected = prevMenuSelectedRef.current;
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
    const svgViewBoxes: { [key: string]: string } = {
        "1 hall social": "1286 -125 400 970",
        "2 espaço gourmet": "918 -300 400 970",
        "3 fit studio": "1060 -345 400 970",
        "4 repouso": "1369 -435 400 970",
        "5 piscina aquecida": "1500 -365 400 970",
        "6 sauna": "1295 -420 400 970",
        "7 ducha": "1280 -375 400 970",
        "8 sanitários": "1252 -240 400 970",
        "9 reunião": "1420 -220 400 970",
        "10 coworking": "1560 -150 400 970",
        "11 lavanderia": "1570 -5 400 970",
    };

    const expImages = [
        { name: "1 hall social", image: image1 },
        { name: "2 espaço gourmet", image: expandedImg2 },
        { name: "3 fit studio", image: expandedImg3 },
        { name: "4 repouso", image: expandedImg4 },
        { name: "5 piscina aquecida", image: expandedImg5 },
        { name: "6 sauna", image: expandedImg6 },
        { name: "7 ducha", image: image7 },
        { name: "8 sanitários", image: image8 },
        { name: "9 reunião", image: image9 },
        { name: "10 coworking", image: expandedImg10 },
        { name: "11 lavanderia", image: expandedImg11 },
    ]

    const toViewBox = svgViewBoxes[menuSelected];
    const context = useContextDefault()
    const setAbrirImagensTelaCheia = context?.setAbrirImagensTelaCheia;
    const fromViewBox = (prevMenuSelected && svgViewBoxes[prevMenuSelected]) || toViewBox;
    const selectedMenuButton = menuButtons.find(button => button.name === menuSelected)?.image;
    return (
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
                    width={1920}
                    height={1080}
                />
                {selectedMenuButton && (
                    <button
                        className='object-contain w-[500px] transform translate-x-[800px] -translate-y-[500px] transition-transform animate-fade-up animate-duration-[2000ms] duration-1000 ease-in-out'
                        onClick={() => {
                            if (setAbrirImagensTelaCheia) {
                                const imagesForFullscreen = expImages.map(img => ({ src: img.image as unknown as StaticImageData, alt: img.name }));
                                const initialIndex = expImages.findIndex(img => img.name === menuSelected);
                                setAbrirImagensTelaCheia({
                                    open: true,
                                    images: imagesForFullscreen,
                                    currentIndex: initialIndex > -1 ? initialIndex : 0
                                });
                            }
                        }}
                    >
                        <Image src={selectedMenuButton} alt={menuSelected} width={1920} height={1080} className='object-contain' />
                    </button>
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
                                ? "bg-[#939598] text-white after:border-l-[#939598]"
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
                width={350}
                height={150}
            />
        </>
    )
}

export default ImplantacaoView