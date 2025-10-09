import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import { Svg } from '../Svg'
import { StaticImageData } from 'next/image';
import { useContextDefault } from '@/context/Context';

const ImplantacaoView = () => {
    const image1 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-1.png";
    const image2 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-2.png";
    const image3 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-3.png";
    const image4 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-4.png";
    const image5 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-5.png";
    const image6 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-6.png";
    const image7 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-7.png";
    const image8 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-8.png";
    const image9 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-9.png";
    const image10 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-10.png";
    const image11 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-11.png";
    const image12 = "/homestudio/implantacao/img-implantacao-rooftop-youhome-12.png";
    const expImage1 = "/homestudio/implantacao/img-hall-youniverse.png"
    const expImage2 = "/homestudio/implantacao/img-fitness-youniverse.png"
    const expImage3 = "/homestudio/implantacao/img-piscina-youniverse.png"
    const expImage4 = "/homestudio/implantacao/img-descanso-youniverse.png"
    const expImage5 = "/homestudio/implantacao/img-massagem-youniverse.png"
    const expImage6 = "/homestudio/implantacao/img-sauna-youniverse.png"
    const expImage7 = "/homestudio/implantacao/img-spa-interno-youniverse.png"
    const bolotario1 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-1.png";
    const bolotario2 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-2.png";
    const bolotario3 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-3.png";
    const bolotario4 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-4.png";
    const bolotario5 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-5.png";
    const bolotario6 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-6.png";
    const bolotario7 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-7.png";
    const bolotario8 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-8.png";
    const bolotario9 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-9.png";
    const bolotario10 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-10.png";
    const bolotario11 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-11.png";
    const bolotario12 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-12.png";
    const bolotario13 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-13.png";
    const bolotario14 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-14.png";
    const bolotario15 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-15.png";
    const bolotario16 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-16.png";
    const bolotario17 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-18.png";
    const bolotario18 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-19.png";
    const bolotario19 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-20.png";
    const bolotario20 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-21.png";
    const bolotario21 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-22.png";
    const bolotario22 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-23.png";
    const bolotario23 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-24.png";
    const bolotario24 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-25.png";
    const bolotario25 = "/homestudio/implantacao/bolotario6/img-implantacao-rooftop-youhome-25-1.png";
    const outline1 = "/homestudio/implantacao/outline.png";
    const outline2 = "/homestudio/implantacao/outline1.png";
    const touch = "/homestudio/implantacao/aviso-uso-bolotario.png";
    const implantacao = "/homestudio/implantacao/implantacao-rooftop.png";
    const implantacao6 = "/homestudio/implantacao/implantacao-6-pavimento.png";

    const submenuButtons = [
        { name: 'rooftop', outline: outline1, classname: '' },
        { name: '6º pavimento', outline: outline2, classname: '' },
    ]
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

    const rooftopExpImages = [
        {name: "hall", image: expImage1},
        {name: "fitness", image: expImage2},
        {name: "piscina", image: expImage3},
        {name: "descanso", image: expImage4},
        {name: "massagem", image: expImage5},
        {name: "sauna", image: expImage6},
        {name: "spa interno", image: expImage7},
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

    const [menuSelected, setMenuSelected] = useState("");
    const [menuToMap, setMenuToMap] = useState(menuButtons);
    const [submenuSelected, setSubmenuSelected] = useState(submenuButtons[0].name);
    const prevMenuSelectedRef = useRef<string>("");
    const context = useContextDefault()
    const setAbrirImagensTelaCheia = context?.setAbrirImagensTelaCheia;


    const svgViewBoxesFinal = submenuSelected === 'rooftop' ? svgViewBoxes : svg6pavViewBoxes;
    const toViewBox = svgViewBoxesFinal[menuSelected];
    const prevMenuSelected = prevMenuSelectedRef.current;
    const fromViewBox = (prevMenuSelected && svgViewBoxesFinal[prevMenuSelected]) || toViewBox;
    const selectedMenuButton = menuToMap.find(button => button.name === menuSelected)?.image;

    useEffect(() => {
        prevMenuSelectedRef.current = menuSelected;
    }, [menuSelected]);


    return (
        <>
            <span className='col-start-7 col-span-7 uppercase row-start-3 text-4xl text-[#414042] font-impact animate-fade-down animate-duration-[2000ms] duration-1000'>
                {submenuSelected === 'rooftop' ? 'Implantação do Rooftop ' : "Implantação do 6º pavimento"}
            </span>
            <div className="relative col-start-8 col-span-15 row-start-5 row-span-13">
                <Image
                    src={submenuSelected === 'rooftop' ? implantacao : implantacao6}
                    alt="Rooftop"
                    className={`w-full h-full object-contain animate-fade-up animate-duration-[2000ms] duration-1000 transition-transform ease-in-out ${menuSelected !== "" ? "scale-[70%] -translate-x-50" : ""}`}

                    width={1920}
                    height={1080}
                />
                {selectedMenuButton && (
                    <button
                        className='object-contain w-[500px] transform translate-x-[800px] -translate-y-[500px] transition-transform animate-fade-up animate-duration-[2000ms] duration-1000'
                        onClick={() => {
                            const expImageName = menuSelected.split(" ").slice(1).join(" ");
                            const expImageIndex = rooftopExpImages.findIndex(img => expImageName.includes(img.name));

                            if (setAbrirImagensTelaCheia && expImageIndex !== -1) {
                                const imagesForFullscreen = rooftopExpImages.map(img => ({
                                    src: img.image as unknown as StaticImageData,
                                    alt: img.name
                                }));
                                setAbrirImagensTelaCheia({
                                    open: true,
                                    images: imagesForFullscreen,
                                    currentIndex: expImageIndex
                                });
                            }
                        }}>
                        <Image src={selectedMenuButton} alt={menuSelected} width={1920} height={1080} className='object-contain' />
                    </button>
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
                width={350}
                height={150}
            />
            <div className='relative col-span-19 row-span-2 row-start-23 col-start-6 flex justify-start items-center gap-58 px-56'>
                {submenuButtons.map(item => (
                    <div
                        key={item.name + "-bg"}
                        className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                        style={{
                            backgroundImage: `url(${item.outline})`,
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
    )
}

export default ImplantacaoView