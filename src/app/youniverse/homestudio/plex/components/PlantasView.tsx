import React, { useState } from 'react'
import Image from "next/image";

const PlantasView = () => {
    const titulo = "/homestudio/plex/plantas/titulo-planta1.png";
    const bsuperior = "/homestudio/plex/plantas/b-ver-piso-superior.png";
    const binferior = "/homestudio/plex/plantas/b-ver-piso-inferior.png";
    const psuperior = "/homestudio/plex/plantas/Youplex_coluna 10_térreo 1.png";
    const pinferior = "/homestudio/plex/plantas/Youplex_coluna 10_térreo 1-1.png";
    const [image, setImage] = useState(psuperior);
    const [inferior, setInferior] = useState(false)
    return (
        <>
            <Image
                src={titulo}
                alt='Titulo'
                className='col-span-4 row-span-3 col-start-7 row-start-2'
                width={500}
                height={200}
            />
            <Image
                key={image}
                src={image}
                alt='Planta'
                className='col-span-11 col-start-9 row-start-3 transition-opacity duration-[1s] ease-in-out opacity-0 data-[loaded=true]:opacity-100'
                height={1080}
                width={1920}
                onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
            />
            <button
                onClick={() => {
                    setInferior(!inferior)
                    setImage(inferior ? psuperior : pinferior)
                }}
                className='col-span-5 row-span-1 row-start-21 col-start-20'
            >
                <Image
                    key={image}
                    src={inferior ? binferior : bsuperior}
                    alt='Planta'
                    className="transition-opacity duration-500 ease-in-out opacity-0 data-[loaded=true]:opacity-100"
                    width={300}
                    height={100}
                    onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
                />
            </button>
        </>
    )
}

export default PlantasView