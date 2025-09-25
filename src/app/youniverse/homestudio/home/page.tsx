'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import youhomelogo from "../../../../../public/homestudio/logo-youhome-youniverse.png"
import home from "../../../../../public/util/b-home-youniverse-nazca.svg"
import duvida from "../../../../../public/util/b-duvida-youniverse-nazca.svg"
import som from "../../../../../public/util/b-som-youniverse-nazca.svg"
import detalhe from "../../../../../public/util/detalhe-youhome-menu-lateral.png"
import outline from "../../../../../public/localizacao/outline.png"
import Image from 'next/image'
import implantacao from "../../../../../public/homestudio/implantacao/implantacao-rooftop.png"
import implantacao6 from "../../../../../public/homestudio/implantacao/implantacao-6-pavimento.png"
import { Svg } from './Svg'
import image1 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-1.png"
import image2 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-2.png"
import image3 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-3.png"
import image4 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-4.png"
import image5 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-5.png"
import image6 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-6.png"
import image7 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-7.png"
import image8 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-8.png"
import image9 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-9.png"
import image10 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-10.png"
import image11 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-11.png"
import image12 from "../../../../../public/homestudio/implantacao/img-implantacao-rooftop-youhome-12.png"
import bolotario1 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-1.png"
import bolotario2 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-2.png"
import bolotario3 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-3.png"
import bolotario4 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-4.png"
import bolotario5 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-5.png"
import bolotario6 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-6.png"
import bolotario7 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-7.png"
import bolotario8 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-8.png"
import bolotario9 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-9.png"
import bolotario10 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-10.png"
import bolotario11 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-11.png"
import bolotario12 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-12.png"
import bolotario13 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-13.png"
import bolotario14 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-14.png"
import bolotario15 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-15.png"
import bolotario16 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-16.png"
import bolotario17 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-18.png"
import bolotario18 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-19.png"
import bolotario19 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-20.png"
import bolotario20 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-21.png"
import bolotario21 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-22.png"
import bolotario22 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-23.png"
import bolotario23 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-24.png"
import bolotario24 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-25.png"
import bolotario25 from "../../../../../public/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-25-1.png"
import outline1 from "../../../../../public/homestudio/implantacao/outline.png"
import outline2 from "../../../../../public/homestudio/implantacao/outline1.png"
import touch from "../../../../../public/homestudio/implantacao/aviso-uso-bolotario.png"
import { expandedYouHomeImages, youHomeimages } from './galeria'
import { plantasYouHome, plantasYouHomeButtons } from './plantas'
import { Slider } from '@mui/material'
import ScrollSlider from '@/app/components/CustomScroll'

const YouHomePage = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollValue, setScrollValue] = useState(100); // start at top
    const searchParams = useSearchParams();
    const router = useRouter();
    const [imageIndexToShow, setImageToShow] = useState<number | null>(null);
    const [view, setView] = useState(searchParams.get('view') || 'implantacao');
    const [selectedItem, setSelectedItem] = useState(view);
    type PlantasYouHomeKey = keyof typeof plantasYouHome;
    const [selectedPlantaKey, setSelectedPlantaKey] = useState<PlantasYouHomeKey>(plantasYouHomeButtons[0].frameKey as PlantasYouHomeKey);
    const submenuButtons = [
        { name: 'rooftop', outline: outline1, classname: '' },
        { name: '6º pavimento', outline: outline2, classname: '' },
    ]
    const [menuSelected, setMenuSelected] = useState("");
    const [submenuSelected, setSubmenuSelected] = useState(submenuButtons[0].name);

    const prevMenuSelectedRef = useRef<string>("");

    const thumbWidth = 120;

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


    useEffect(() => {
        prevMenuSelectedRef.current = menuSelected;
    }, [menuSelected]);

    const prevMenuSelected = prevMenuSelectedRef.current;

    useEffect(() => {
        setSelectedItem(view);
    }, [view]);

    const svgViewBoxes: { [key: string]: string } = {
        "1 hall social": "1390 -263 400 970",
        "2 fitness": "910 -120 400 970",
        "3 piscina com raia": "1264 -463 400 970",
        "4 spa externo": "820 -463 400 970",
        "5 solarium": "949 -353 400 970",
        "6 banheiros": "1085 -335 400 970",
        "7 descanso": "1564 -163 400 970",
        "8 massagem": "1640 -93 400 970",
        "9 sauna úmida": "1686 -173 400 970",
        "10 spa interno": "1682 -253 400 970",
        "11 fitness outdoor": "1070 13 400 970",
        "12 jardim": "640 -230 400 970",
    };

    const svg6pavViewBoxes: { [key: string]: string } = {
        "1 hall social": "1030 -400 400 970",
        "2 salão de jogos teen": "760 -453 400 970",
        "3 hub de jogos": "830 -483 400 970",
        "4 pet care": "1015 -445 400 970",
        "5 salão de festas": "1102 -488 400 970",
        "6 lavanderia": "1175 -480 400 970",
        "7 sanitários": "830 -300 400 970",
        "8 wine lounge": "785 -315 400 970",
        "9 uso do condomínio": "870 -310 400 970",
        "10 sala de reunião": "900 -310 400 970",
        "11 coworking": "970 -320 400 970",
        "12 espaço gourmet": "1078 -318 400 970",
        "13 brinquedoteca": "1120 -300 400 970",
        "14 praça": "1215 -305 400 970",
        "15 pet place": "1120 -203 400 970",
        "16 playground": "1220 -130 400 970",
        "17 grill space": "1335 -20 400 970",
        "18 quadra recreativa": "1505 5 400 970",
        "19 piscina adulto": "1490 -263 400 970",
        "20 pool house": "1580 -103 400 970",
        "21 spa": "1530 -163 400 970",
        "22 solarium": "1400 -200 400 970",
        "23 piscina infantil": "1298 -263 400 970",
        "24 deck molhado": "1635 -233 400 970",
        "25 minimercado": "1170 -363 400 970",
        "26 compartilhamento": "830 -253 400 970",
    };
    const svgViewBoxesFinal = submenuSelected === 'rooftop' ? svgViewBoxes : svg6pavViewBoxes;


    const toViewBox = svgViewBoxesFinal[menuSelected];
    const fromViewBox = (prevMenuSelected && svgViewBoxesFinal[prevMenuSelected]) || toViewBox;

    const sidebarButtons = [
        { name: 'Implantação', value: 'implantacao' },
        { name: 'Imagens', value: 'imagens' },
        { name: 'Plantas', value: 'plantas' },
    ];
    const menuButtons = [
        { name: "1 hall social", image: image1 },
        { name: "2 fitness", image: image2 },
        { name: "3 piscina com raia", image: image3 },
        { name: "4 spa externo", image: image4 },
        { name: "5 solarium", image: image5 },
        { name: "6 banheiros", image: image6 },
        { name: "7 descanso", image: image7 },
        { name: "8 massagem", image: image8 },
        { name: "9 sauna úmida", image: image9 },
        { name: "10 spa interno", image: image10 },
        { name: "11 fitness outdoor", image: image11 },
        { name: "12 jardim", image: image12 },
    ]
    const menu6implantacao = [
        { name: "1 hall social", image: bolotario1 },
        { name: "2 salão de jogos teen", image: bolotario2 },
        { name: "3 hub de jogos", image: bolotario3 },
        { name: "4 pet care", image: bolotario4 },
        { name: "5 salão de festas", image: bolotario5 },
        { name: "6 lavanderia", image: bolotario6 },
        { name: "7 sanitários", image: bolotario7 },
        { name: "8 wine lounge", image: bolotario8 },
        { name: "9 uso do condomínio", image: bolotario9 },
        { name: "10 sala de reunião", image: bolotario10 },
        { name: "11 coworking", image: bolotario11 },
        { name: "12 espaço gourmet", image: bolotario12 },
        { name: "13 brinquedoteca", image: bolotario13 },
        { name: "14 praça", image: bolotario14 },
        { name: "15 pet place", image: bolotario15 },
        { name: "16 playground", image: bolotario16 },
        { name: "17 grill space", image: bolotario17 },
        { name: "18 quadra recreativa", image: bolotario18 },
        { name: "19 piscina adulto", image: bolotario19 },
        { name: "20 pool house", image: bolotario20 },
        { name: "21 spa", image: bolotario21 },
        { name: "22 solarium", image: bolotario22 },
        { name: "23 piscina infantil", image: bolotario23 },
        { name: "24 deck molhado", image: bolotario24 },
        { name: "25 minimercado", image: bolotario25 },
        { name: "26 compartilhamento", image: bolotario25 },
    ];

    const [menuToMap, setMenuToMap] = useState(menuButtons);

    const selectedMenuButton = menuToMap.find(button => button.name === menuSelected)?.image;

    return (
        <>
            <div className='col-span-5 row-span-24 grid grid-cols-4 grid-rows-24 border-r border-[#12100B] '>
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
                                setMenuSelected("");
                                if (button.value === 'implantacao') {
                                    setSubmenuSelected(submenuButtons[0].name);
                                    setMenuToMap(menuButtons);
                                }
                                if (button.value === 'imagens') {
                                    setSubmenuSelected("");
                                    setMenuToMap([]);
                                }
                                if (button.value === 'plantas') {
                                    setSubmenuSelected("");
                                    setMenuToMap([]);
                                }
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
                        text-white bg-[#A39126]
                        transition-colors duration-300 ease-in-out
                        after:content-[''] after:absolute after:top-0 after:right-[-30px] 
                        after:w-0 after:h-0 tracking-[8px]
                        after:border-t-[30px] after:border-b-[30px] after:border-l-[30px] 
                        after:border-t-transparent after:border-b-transparent after:border-l-[#A39126]
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
                    <span className='col-start-7 col-span-7 uppercase row-start-3 text-4xl text-[#414042] font-impact animate-fade-down animate-duration-[2000ms] duration-1000'>
                        {submenuSelected === 'rooftop' ? 'Implantação do Rooftop ' : "Implantação do 6º pavimento"}
                    </span>
                    <div className="relative col-start-8 col-span-15 row-start-5 row-span-13">
                        <Image
                            src={submenuSelected === 'rooftop' ? implantacao : implantacao6}
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
                    {submenuSelected === 'rooftop' && (
                        <div className='row-start-18 col-start-10 col-span-11 row-span-4 grid grid-flow-col grid-rows-4 gap-x-4 gap-y-2'>
                            {menuButtons.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={() => { setMenuSelected(button.name); }}
                                    className="cursor-pointer transition-all ease-in-out animate-fade-up duration-1000"
                                >
                                    <span
                                        className={`relative text-xl uppercase font-aviano px-4 py-2 transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:top-0 after:right-[-20px] after:border-t-[20px] after:border-b-[20px] after:border-l-[20px] after:border-t-transparent after:border-b-transparent after:transition-colors after:ease-in-out after:duration-300 ${menuSelected === button.name
                                            ? "bg-[#A39126] text-white after:border-l-[#A39126]"
                                            : "text-black after:border-l-transparent"}`}
                                    >
                                        {button.name}
                                    </span>
                                </button>

                            ))}
                        </div>
                    )}
                    {submenuSelected === '6º pavimento' && (
                        <div className='row-start-18 col-start-7 col-span-17 row-span-5 grid grid-flow-col grid-rows-7 gap-x-4'>
                            {menu6implantacao.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={() => { setMenuSelected(button.name); }}
                                    className="cursor-pointer transition-all ease-in-out animate-fade-up duration-1000"
                                >
                                    <span
                                        className={`relative text-md uppercase font-aviano px-4 text-center transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:top-0 after:right-[-9px] after:border-t-[9px] after:border-b-[9px] after:border-l-[9px] after:border-t-transparent after:border-b-transparent after:transition-colors after:ease-in-out after:duration-300 ${menuSelected === button.name
                                            ? "bg-[#A39126] text-white after:border-l-[#A39126]"
                                            : "text-black after:border-l-transparent"}`}
                                    >
                                        {button.name}
                                    </span>
                                </button>

                            ))}
                        </div>
                    )}
                    <Image
                        src={touch}
                        alt="Touch"
                        className='absolute bottom-0 right-4 w-[350px] h-[150px] object-contain animate-fade animate-delay-500 duration-1000'
                        priority
                    />
                    <div className='relative col-span-19 row-span-2 row-start-23 col-start-6 flex justify-start items-center gap-58 px-56'>
                        {submenuButtons.map(item => (
                            <div
                                key={item.name + "-bg"}
                                className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                                style={{
                                    backgroundImage: `url(${item.outline.src})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain',
                                    opacity: submenuSelected === item.name ? 1 : 0,
                                }}
                            ></div>
                        ))}
                        {submenuButtons.map((item) => (
                            <div
                                key={item.name}
                                className="relative cursor-pointer p-4"
                                onClick={() => { setSubmenuSelected(item.name); setMenuSelected(""); setMenuToMap(item.name === 'rooftop' ? menuButtons : menu6implantacao) }}
                            >
                                <span className={`text-[24px] relative uppercase ${submenuSelected === item.name ? 'font-impact text-[#12100B]' : 'font-aviano text-[#12100B]'} transition-colors duration-300 ease-in-out`}>
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div >
                </>
            )}
            {view === 'imagens' && (
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
                        {/* <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className='  flex flex-col overflow-y-scroll no-scrollbar p-16'>
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
                        <Slider
                            value={scrollValue}
                            min={0}
                            max={100}
                            orientation='vertical'
                            step={1}
                            valueLabelDisplay="off"
                            sx={{
                                color: "#A39126",
                                "& .MuiSlider-thumb": {
                                    height: 120,
                                    backgroundImage: `url("/util/group 1466.png")`,
                                    transition: "all",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundColor: 'transparent',
                                    borderRadius: 0,
                                    border: 0,
                                    boxShadow: 0
                                },
                                
                                "& .MuiSlider-rail": {
                                    opacity: 1,
                                    width: 12,
                                    backgroundColor: "#A39126",
                                },
                            }}
                            className='animate-fade-right animate-delay-400'
                            onChange={handleSliderChange}
                        /> */}
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
                            bg-[#A39126] text-white after:border-l-[#A39126] absolute top-48 left-0`}
                        >
                            {imageIndexToShow !== null ? expandedYouHomeImages[imageIndexToShow].alt : expandedYouHomeImages[0].alt}
                        </span>
                    </div>


                </>
            )}
            {view === 'plantas' && (
                <>
                    <Image
                        src={plantasYouHome[selectedPlantaKey].frame}
                        alt="plantas"
                        className='object-contain col-span-19 row-span-17 col-start-6 row-start-2 relative animate-fade-down animate-duration-[2000ms] duration-1000'
                        priority
                    />
                    <Image
                        src={plantasYouHome[selectedPlantaKey].plantas[0]}
                        alt="plantas"
                        className='object-contain col-span-10 row-span-14 col-start-6 row-start-6 translate-x-[380px] relative animate-fade-down animate-duration-[2000ms] duration-1000 z-10'
                        priority
                    />
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
                                        priority
                                    />
                                </button>
                            ))}
                        </div>
                    </div>


                </>
            )}
        </>
    )
}

export default YouHomePage