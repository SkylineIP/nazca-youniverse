'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const variations = [
    {
        id: 1,
        image: "/descanso/grafismo1.png",
        alt: "Grafismo 1",
        image2: "/descanso/logo-youniverse-nazca-1.png",
        alt2: "Logo Youniverse",
        classnames: {
            first: "col-span-24 row-start-2",
            second: "col-span-16 col-start-6 row-start-11 z-50",
        }
    },
    {
        id: 2,
        image: "/descanso/grafismo2.png",
        alt: "Grafismo 2",
        image2: "/descanso/logo-youniverse-nazca-2.png", // This seems to be a duplicate, but keeping as is.
        alt2: "Logo Youniverse", // This seems to be a duplicate, but keeping as is.
        classnames: {
            first: "col-span-24 row-start-9",
            second: "col-span-13 col-start-8 row-start-11 z-50",
        }
    },
    {
        id: 3,
        image: "/descanso/detalhe3.png",
        image2: "/descanso/grafismo2.png",
        image3: "/descanso/logo-youniverse-nazca-3.png",
        alt: "Detalhe 3",
        alt3: "Logo Youniverse",
        classnames: {
            first: "col-span-7 col-start-18 z-50",
            second: "col-span-24 row-start-9",
            third: "col-span-8 col-start-9 row-start-11 z-50",
        },
        alt2: "Detalhe 3",
    },
    {
        id: 4,
        image: "/descanso/grafismo-youniverse-nazca-4.png",
        alt: "Grafismo 4",
        image2: "/descanso/imagem-apoio-youniverse-nazca.png",
        alt2: "Imagem",
        image3: "/descanso/texto-apoio-tela-descanso-youniverse-nazca.png",
        alt3: "Texto",
        image4: "/descanso/detalhe-cores-youniverse-nazca-2.png",
        alt4: "Detalhe 2",
        image5: "/descanso/logo-youniverse-nazca-4.png",
        alt5: "Logo Youniverse",
        classnames: {
            first: "col-span-24 row-start-11 z-10",
            second: "col-span-4 col-start-18 row-start-1 z-30",
            third: "col-span-9 col-start-12 row-start-3 z-20",
            fourth: "col-span-4 z-50",
            fifth: "col-span-6 row-start-12 col-start-6 z-50",
        }
    }
];

const getAnimationClass = (originalClass: string, isVisible: boolean) => {
    if (!originalClass) return '';
    return `${originalClass} transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`;
};

const Descanso = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    // Effect for the main interval timer
    useEffect(() => {
        // Initial fade-in
        const initialTimeout = setTimeout(() => setIsVisible(true), 50);

        const interval = setInterval(() => {
            setIsVisible(false); // Start fade-out
        }, 5000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    // Effect to change the slide after fade-out is complete
    useEffect(() => {
        if (isVisible) {
            return; // Do nothing on fade-in
        }

        // After the fade-out duration (1000ms), update the index.
        const timeout = setTimeout(() => {
            setCurrentIndex(prev => (prev + 1) % variations.length);
            // Trigger fade-in for the new slide
            setIsVisible(true);
        }, 1000); // Must match the CSS transition duration

        return () => clearTimeout(timeout);
    }, [isVisible]);

    const currentVariation = variations[currentIndex];

    return (
        <div className="grid grid-cols-24 grid-rows-24 h-screen w-screen bg-descanso-home bg-cover bg-center bg-no-repeat">
            {currentVariation.image && (
                <Image
                    key={`${currentVariation.id}-1-${currentIndex}`}
                    src={currentVariation.image}
                    alt={currentVariation.alt}
                    className={getAnimationClass(currentVariation.classnames.first, isVisible)}
                    width={1920}
                    height={1080}
                />
            )}
            {currentVariation.image2 && (
                <Image
                    key={`${currentVariation.id}-2-${currentIndex}`}
                    src={currentVariation.image2}
                    alt={currentVariation.alt2}
                    className={getAnimationClass(currentVariation.classnames.second, isVisible)}
                    width={1920}
                    height={1080}
                />
            )}
            {currentVariation.image3 && (
                <Image
                    key={`${currentVariation.id}-3-${currentIndex}`}
                    src={currentVariation.image3}
                    alt={currentVariation.alt3}
                    className={getAnimationClass(currentVariation.classnames.third, isVisible)}
                    width={1920}
                    height={1080}
                />
            )}
            {currentVariation.image4 && (
                <Image
                    key={`${currentVariation.id}-4-${currentIndex}`}
                    src={currentVariation.image4}
                    alt={currentVariation.alt4}
                    className={getAnimationClass(currentVariation.classnames.fourth, isVisible)}
                    width={1920}
                    height={1080}
                />
            )}
            {currentVariation.image5 && (
                <Image
                    key={`${currentVariation.id}-5-${currentIndex}`}
                    src={currentVariation.image5}
                    alt={currentVariation.alt5}
                    className={getAnimationClass(currentVariation.classnames.fifth, isVisible)}
                    width={1920}
                    height={1080}
                />
            )}
            <Image
                src="/descanso/touchyouniverse.png"
                alt="Touch Icon"
                className={`col-span-4 col-start-11 row-start-20 animate-pulse animate-duration-[2000ms] z-50 cursor-pointer hover:scale-105 transition-transform  ease-in-out`}
                width={200}
                height={200}
                onClick={() => {
                    router.push('/menu-youniverse');
                }}
            />
        </div>
    );
}

export default Descanso;
