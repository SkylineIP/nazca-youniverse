'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const variations = [
    {
        id: 1,
        image: "/descanso/grafismo1.png",
        alt: "Grafismo 1",
        image2: "/descanso/logoyouniverse.png",
        alt2: "Logo Youniverse",
        classnames: {
            first: "col-span-24 row-start-2  animate-fade-in",
            second: "col-span-16 col-start-6 row-start-10 z-50  animate-fade-in",
        }
    },
    {
        id: 2,
        image: "/descanso/grafismo2.png",
        alt: "Grafismo 2",
        image2: "/descanso/logoyouniverse.png",
        alt2: "Logo Youniverse",
        classnames: {
            first: "col-span-24 row-start-9",
            second: "col-span-13 col-start-8 row-start-10 z-50 animate-fade-in",
        }
    },
    {
        id: 3,
        image: "/descanso/detalhe3.png",
        image2: "/descanso/grafismo2.png",
        image3: "/descanso/logoyouniverse.png",
        alt: "Detalhe 3",
        alt3: "Logo Youniverse",
        classnames: {
            first: "col-span-7 col-start-18 z-50  animate-fade-in",
            second: "col-span-24 row-start-9 animate-fade-in",
            third: "col-span-8 col-start-9 row-start-10 z-50 animate-fade-in",
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
        image5: "/descanso/logoyouniverse.png",
        alt5: "Logo Youniverse",
        classnames: {
            first: "col-span-24 row-start-11 z-10  animate-fade-in",   
            second: "col-span-4 col-start-18 row-start-1 z-30  animate-fade-in",
            third: "col-span-9 col-start-12 row-start-3 z-20  animate-fade-in",
            fourth: "col-span-4 z-50 animate-fade-in ",
            fifth: "col-span-6 row-start-12 col-start-6 z-50 animate-fade-in",
        }
    }
];

const getAnimationClass = (originalClass: string, isExiting: boolean, isEntering: boolean) => {
    if (!originalClass) return '';

    const transitionClasses = 'transition-opacity duration-1000';

    if (isExiting || isEntering) {
        return `${originalClass} ${transitionClasses} opacity-0`;
    }
    return `${originalClass} ${transitionClasses} opacity-100`;
};

const Descanso = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [isEntering, setIsEntering] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setIsEntering(true);
        const timer = setTimeout(() => setIsEntering(false), 50);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        let transitionTimeout: NodeJS.Timeout;
        const mainInterval = setInterval(() => {
            setIsExiting(true);
            transitionTimeout = setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % variations.length);
                setIsExiting(false);
            }, 1000); // This should match the transition duration
        }, 5000);

        return () => {
            clearInterval(mainInterval);
            if (transitionTimeout) {
                clearTimeout(transitionTimeout);
            }
        };
    }, []);

    const currentVariation = variations[currentIndex];

    return (
        <div className="grid grid-cols-24 grid-rows-24 h-screen w-screen bg-descanso-home bg-cover bg-center bg-no-repeat">
            {currentVariation.image && (
                <Image
                    key={`${currentVariation.id}-1`}
                    src={currentVariation.image}
                    alt={currentVariation.alt}
                    className={getAnimationClass(currentVariation.classnames.first, isExiting, isEntering)}
                    width={1920}
                    height={1080}
                />
            )}
            {currentVariation.image2 && (
                <Image
                    key={`${currentVariation.id}-2`}
                    src={currentVariation.image2}
                    alt={currentVariation.alt2}
                    className={getAnimationClass(currentVariation.classnames.second, isExiting, isEntering)}
                    width={1920}
                    height={1080}
                />
            )}
            {currentVariation.image3 && (
                <Image
                    key={`${currentVariation.id}-3`}
                    src={currentVariation.image3}
                    alt={currentVariation.alt3}
                    className={getAnimationClass(currentVariation.classnames.third, isExiting, isEntering)}
                    width={1920}
                    height={1080}
                />
            )}
            {currentVariation.image4 && (
                <Image
                    key={`${currentVariation.id}-4`}
                    src={currentVariation.image4}
                    alt={currentVariation.alt4}
                    className={getAnimationClass(currentVariation.classnames.fourth, isExiting, isEntering)}
                    width={1920}
                    height={1080}
                />
            )}
            {currentVariation.image5 && (
                <Image
                    key={`${currentVariation.id}-5`}
                    src={currentVariation.image5}
                    alt={currentVariation.alt5}
                    className={getAnimationClass(currentVariation.classnames.fifth, isExiting, isEntering)}
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
