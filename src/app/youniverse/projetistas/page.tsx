'use client'
import React from 'react'
import outline1 from "../../../../public/projetistas/outline1.png"
import outline2 from "../../../../public/projetistas/outline2.png"
import outline3 from "../../../../public/projetistas/outline3.png"
import outline4 from "../../../../public/projetistas/outline4.png"
import outline5 from "../../../../public/projetistas/outline5.png"
import joao from "../../../../public/projetistas/joao-armentano-nazca.png"
import dg from "../../../../public/projetistas/dg-nazca.png"
import ricardo from "../../../../public/projetistas/ricardo-nazca.png"
import carlos from "../../../../public/projetistas/carlos-nazca.png"
import suite from "../../../../public/projetistas/suite-nazca.png"
import Image from 'next/image'

const ProjetistasPage = () => {
    const [selectedMenu, setSelectedMenu] = React.useState('João Armentano');
    const menuItems = [
        { name: 'João Armentano', image: joao, outline: outline1, classname: `col-start-2 pt-6 pl-14 ${selectedMenu !== "João Armentano" ? '-translate-x-10' : ""}` },
        { name: 'D.G. Projetos', image: dg, outline: outline2, classname: 'col-start-7 pt-6 pl-8' },
        { name: 'Ricardo', image: ricardo, outline: outline3, classname: 'pt-6 pl-18' },
        { name: 'Carlos', image: carlos, outline: outline4, classname: 'pt-6 pl-30' },
        { name: 'Suíte', image: suite, outline: outline5, classname: 'pt-6 pl-40' },
    ];
    return (
        <>
            {selectedMenu === 'João Armentano' && (
                <Image
                    src={joao}
                    alt="João Armentano"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    priority
                />
            )}
            {selectedMenu === 'D.G. Projetos' && (
                <Image
                    src={dg}
                    alt="D.G. Projetos"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    priority
                />
            )}
            {selectedMenu === 'Ricardo' && (
                <Image
                    src={ricardo}
                    alt="Ricardo"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    priority
                />
            )}
            {selectedMenu === 'Carlos' && (
                <Image
                    src={carlos}
                    alt="Carlos"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    priority
                />
            )}
            {selectedMenu === 'Suíte' && (
                <Image
                    src={suite}
                    alt="Suíte"
                    className='col-start-6 col-span-19 row-span-19 w-full h-full animate-fade-down animate-duration-[2000ms] duration-1000'
                    priority
                />
            )}
            <div className='relative col-span-19 row-span-2 row-start-23 col-start-6 grid grid-cols-24 grid-rows-2'>
                {menuItems.map(item => (
                    <div
                        key={item.name + "-bg"}
                        className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                        style={{
                            backgroundImage: `url(${item.outline.src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            opacity: selectedMenu === item.name ? 1 : 0,
                        }}
                    ></div>
                ))}
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className={`relative cursor-pointer p-4 col-span-4 row-span-2 ${item.classname}`}
                        onClick={() => setSelectedMenu(item.name)}
                    >
                        <span className={`text-[24px] relative uppercase whitespace-nowrap ${selectedMenu === item.name ? 'font-impact text-[#12100B] ' : 'font-aviano text-[#12100B]'} transition-colors duration-300 ease-in-out`}>
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProjetistasPage