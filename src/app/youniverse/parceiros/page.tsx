'use client'
import React from 'react'
import Image from "next/image";

const ParceirosPage = () => {
    const impacto = "/parceiros/impacto.png";
    const apex = "/parceiros/apex.png";
    const nazca = "/parceiros/nazca.png";

    const outline1 = "/parceiros/outline1.png";
    const outline2 = "/parceiros/outline2.png";
    const outline3 = "/parceiros/outline3.png";

    const [selectedMenu, setSelectedMenu] = React.useState('Impacto Engenharia');
    const menuItems = [
        { name: 'Impacto Engenharia', outline: outline1, classname: `col-start-3 col-span-6 ${selectedMenu === "Impacto Engenharia" ? ' -translate-x-5' : ""}` },
        { name: 'Apex', outline: outline2, classname: `col-start-9 col-span-6 -translate-x-10 ${selectedMenu === "Apex" ? ' -translate-x-10' : ""}`},
        { name: 'Nazca', outline: outline3, classname: `col-start-15 col-span-6 -translate-x-15 ${selectedMenu === "Nazca" ? ' -translate-x-15' : ""}`},
    ];
    return (
        <>
            {selectedMenu === 'Impacto Engenharia' && (
                <div className='col-start-6 col-span-19 row-span-19 relative'>
                    <Image
                        src={impacto}
                        alt="Proximidades"
                        className='object-contain animate-fade-down animate-duration-[2000ms] duration-1000'
                        fill
                    />
                </div>
            )}
            {selectedMenu === 'Apex' && (
                <div className='col-start-6 col-span-19 row-span-19 relative'>
                    <Image
                        src={apex}
                        alt="Mapa Ilustrado"
                        className='object-contain animate-fade-down animate-duration-[2000ms] duration-1000'
                        fill
                    />
                </div>
            )}
            {selectedMenu === 'Nazca' && (
                <div className='col-start-6 col-span-19 row-span-19 relative'>
                    <Image
                        src={nazca}
                        alt="Mapa Ilustrado"
                        className='object-contain animate-fade-down animate-duration-[2000ms] duration-1000'
                        fill
                    />
                </div>

            )}
            <div className='relative col-span-19 row-span-2 row-start-23 4k:text-5xl text-[24px] col-start-6 grid grid-cols-19'>
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
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className={`relative cursor-pointer p-4 flex items-center justify-center-safe ${item.classname}`}
                        onClick={() => setSelectedMenu(item.name)}
                    >
                        <span className={` relative uppercase ${selectedMenu === item.name ? 'font-impact text-[#12100B]' : 'font-aviano text-[#12100B]'} transition-colors duration-300 ease-in-out`}>
                            {item.name}
                        </span>
                    </div>
                ))}
            </div >
        </>
    )
}

export default ParceirosPage