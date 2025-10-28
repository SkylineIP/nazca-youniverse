'use client'
import React, { useEffect } from 'react'
import Image from "next/image";
import { useContextDefault } from '@/context/Context';

const ProjetistasPage = () => {
    const outline1 = "/projetistas/outline1.png";
    const outline2 = "/projetistas/outline2.png";
    const outline3 = "/projetistas/outline3.png";
    const outline4 = "/projetistas/outline4.png";
    const outline5 = "/projetistas/outline5.png";
    const joao = "/projetistas/joao-armentano-nazca.png";
    const dg = "/projetistas/dg-nazca.png";
    const ricardo = "/projetistas/ricardo-nazca.png";
    const carlos = "/projetistas/carlos-nazca.png";
    const suite = "/projetistas/suite-nazca.png";
    const [selectedMenu, setSelectedMenu] = React.useState('João Armentano');
    const menuItems = [
        // { name: 'João Armentano', image: joao, outline: outline1, classname: `col-start-2 ${selectedMenu !== "João Armentano" ? '-translate-x-10' : ""}` },
        { name: 'João Armentano', image: joao, outline: outline1, classname: `col-start-2 col-span-3 ${selectedMenu == "João Armentano" ? '' : "xl:-ml-10"}`},
        { name: 'D.G. Projetos', image: dg, outline: outline2, classname: 'col-start-6 col-span-2' },
        { name: 'Ricardo Cardim', image: ricardo, outline: outline3, classname: 'col-start-9 col-span-3' },
        { name: 'Carlos Rossi', image: carlos, outline: outline4, classname: `col-start-12 col-span-3 ${selectedMenu == "Carlos Rossi" ? 'xl:pl-20' : "xl:pl-10"}`  },
        { name: 'Suíte Arquitetos', image: suite, outline: outline5, classname: `col-start-15 col-span-3 pl-6 xl:col-start-16 ${selectedMenu == "Suíte Arquitetos" ? '' : "xl:-ml-5"}` },
    ];
    const context = useContextDefault();
    const { setSelectedItem: setSelectedItem } = context || {};
    useEffect(() => {
        setSelectedItem?.("Projetistas");
    }, [])
    return (
        <>
            {selectedMenu === 'João Armentano' && (
                <Image
                    src={joao}
                    alt="João Armentano"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    width={3840}
                    height={2160}
                />
            )}
            {selectedMenu === 'D.G. Projetos' && (
                <Image
                    src={dg}
                    alt="D.G. Projetos"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    width={3840}
                    height={2160}
                />
            )}
            {selectedMenu === 'Ricardo Cardim' && (
                <Image
                    src={ricardo}
                    alt="Ricardo Cardim"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    width={3840}
                    height={2160}
                />
            )}
            {selectedMenu === 'Carlos' && (
                <Image
                    src={carlos}
                    alt="Carlos Rossi"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    width={3840}
                    height={2160}
                />
            )}
            {selectedMenu === 'Suíte Arquitetos' && (
                <Image
                    src={suite}
                    alt="Suíte"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    width={3840}
                    height={2160}
                />
            )}
            <div className='relative col-span-19 row-span-2 row-start-23 col-start-6 grid grid-cols-19 grid-rows-2'>
                {menuItems.map(item => (
                    <div
                        key={item.name + "-bg"}
                        // className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                        className="absolute inset-0 col-span-full row-span-2 transition-opacity duration-300 ease-in-out"
                        style={{
                            backgroundImage: `url(${item.outline})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '100% 100%',
                            opacity: selectedMenu === item.name ? 1 : 0,
                        }}
                    ></div>
                ))}
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className={` flex cursor-pointer row-span-2 z-20 pt-2 text-center justify-center-safe fhd:pt-4 4k:pt-10 ${item.classname}`}
                        onClick={() => setSelectedMenu(item.name)}
                        // style={{
                        //     marginLeft: is4k
                        //         ? (index === 0 ? "20px" : index === 2 ? "60px" : index === 3 ? "80px" : index === 4 ? "120px" : "0px")
                        //         : (index === 0 ? "-30px" :  index === 1 ? "-30px" : index === 2 ? "-30px" : index === 3 ? "-30px" : index === 4 ? "-40px" : "0px")
                        // }}
                    >
                        <span className={`text-sm lg:text-base xl:text-[18px] fhd:text-2xl 4k:text-5xl relative uppercase whitespace-nowrap ${selectedMenu === item.name ? 'font-impact text-[#12100B] ' : 'font-aviano text-[#12100B]'} transition-colors duration-300 ease-in-out`}>
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProjetistasPage