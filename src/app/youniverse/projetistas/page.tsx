'use client'
import React, { useEffect, useState } from 'react'
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
        { name: 'João Armentano', image: joao, outline: outline1, classname: `col-start-2 pt-6 pl-14 ${selectedMenu !== "João Armentano" ? '-translate-x-10' : ""}` },
        { name: 'D.G. Projetos', image: dg, outline: outline2, classname: 'col-start-7 pt-6 pl-8' },
        { name: 'Ricardo', image: ricardo, outline: outline3, classname: 'pt-6 pl-18' },
        { name: 'Carlos', image: carlos, outline: outline4, classname: 'pt-6 pl-30' },
        { name: 'Suíte', image: suite, outline: outline5, classname: 'pt-6 pl-40' },
    ];
    const context = useContextDefault();
    const { setSelectedItem: setSelectedItem } = context || {};
    useEffect(() => {
        setSelectedItem?.("Projetistas");
    }, [])
    const [is4k, setIs4k] = useState(false);

    useEffect(() => {
        const check = () => setIs4k(window.innerWidth >= 3840);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
        
    }, []);
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
            {selectedMenu === 'Ricardo' && (
                <Image
                    src={ricardo}
                    alt="Ricardo"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    width={3840}
                    height={2160}
                />
            )}
            {selectedMenu === 'Carlos' && (
                <Image
                    src={carlos}
                    alt="Carlos"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    width={3840}
                    height={2160}
                />
            )}
            {selectedMenu === 'Suíte' && (
                <Image
                    src={suite}
                    alt="Suíte"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    width={3840}
                    height={2160}
                />
            )}
            <div className='relative col-span-19 4k:text-5xl text-[24px] row-span-2 row-start-23 col-start-6 grid grid-cols-24 grid-rows-2'>
                {menuItems.map(item => (
                    <div
                        key={item.name + "-bg"}
                        className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                        style={{
                            backgroundImage: `url(${item.outline})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            opacity: selectedMenu === item.name ? 1 : 0,
                        }}
                    ></div>
                ))}
                {menuItems.map((item, index) => (
                    <div
                        key={item.name}
                        className={`relative cursor-pointer p-4 4k:pt-18 col-span-4 row-span-2 ${item.classname}`}
                        onClick={() => setSelectedMenu(item.name)}
                        style={{
                            marginLeft: is4k
                                ? (index === 0 ? "20px" : index === 2 ? "60px" : index === 3 ? "80px" : index === 4 ? "120px" : "0px")
                                : (index === 0 ? "-30px" :  index === 1 ? "-30px" : index === 2 ? "-30px" : index === 3 ? "-30px" : index === 4 ? "-40px" : "0px")
                        }}
                    >
                        <span className={` relative uppercase whitespace-nowrap ml-8 ${selectedMenu === item.name ? 'font-impact text-[#12100B] ' : 'font-aviano text-[#12100B]'} transition-colors duration-300 ease-in-out`}>
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProjetistasPage