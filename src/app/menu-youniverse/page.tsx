'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useContextDefault } from '@/context/Context';

const MenuYou = () => {
    const router = useRouter();
    const context = useContextDefault();
    const toggleSound = context?.toogleSound
    const sound = context?.sound


    const [buttonSize, setButtonSize] = useState<number>(30);
    useEffect(() => {
        const check = () => setButtonSize(window.innerWidth >= 3840 ? 60 : 30);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);
    const soundButton = sound ? "/util/b-som-youniverse-nazca.svg" : "/util/b-som-released-youniverse-nazca.svg"
    const [showPopup, setShowPopup] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handlePopupClick = () => {
        if (showPopup) {
            setIsClosing(true);
            setTimeout(() => {
                setShowPopup(false);
                setIsClosing(false);
            }, 400); // match animation duration (ms)
        } else {
            setShowPopup(true);
        }
    };

    return (
        <div className='grid grid-cols-24 grid-rows-24 h-screen w-screen bg-descanso-home relative bg-cover bg-center bg-no-repeat overflow-hidden'>
            <Image src="/descanso/grafismo2.png" key={"grafismo"} alt="Grafismo" className='col-span-24 row-start-5 z-50 animate-fade' width={3840} height={2160} />
            <Image src="/descanso/logoyouniverse.png" key={"logo"} alt="Logo Youniverse" className='col-span-10 row-span-3 col-start-9 row-start-6 z-10 animate-fade' width={3840} height={2160} />
            <div className='row-span-15 col-span-24 flex flex-col row-start-12 row-end-24 justify-around'>
                <Image onClick={() => {
                    router.push('/youniverse/localizacao')
                }} src="/menu/localizacao.png" key={"localizacao"} alt="Localização" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-right animate-delay-100 duration-1000' width={3840} height={2160} />
                <Image onClick={() => {
                    router.push('/youniverse/projetistas')
                }} src="/menu/projetistas.png" key={"projetistas"} alt="Projetistas" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-left animate-delay-300 duration-1000' width={3840} height={2160} />
                <Image onClick={() => {
                    router.push('/youniverse/conceito')
                }} src="/menu/conceito.png" key={"conceito"} alt="Conceito" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-right animate-delay-500 duration-1000' width={3840} height={2160} />
                <Image onClick={() => {
                    router.push('/youniverse/diferenciais')
                }} src="/menu/diferenciais.png" key={"diferenciais"} alt="Diferenciais" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-left animate-delay-700 duration-1000' width={3840} height={2160} />
                <Image onClick={() => {
                    router.push('/youniverse/homestudio')
                }} src="/menu/homestudio.png" key={"homestudio"} alt="Home Studio" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-right animate-delay-1000 duration-1000' width={3840} height={2160} />
                <Image onClick={() => {
                    router.push('/youniverse/parceiros')
                }} src="/menu/parceiros.png" key={"parceiros"} alt="Parceiros" className='hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out animate-fade-left animate-delay-[1200ms] duration-1000' width={3840} height={2160} />
                <div className='flex w-full justify-center items-center gap-4'>
                    <Image
                        src="/util/b-home-youniverse-nazca.svg"
                        onClick={() => {
                            router.replace('/')
                        }}
                        key={"home"}
                        alt="Home"
                        className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2  animate-fade-up animate-delay-100 duration-1000' width={buttonSize} height={buttonSize} />
                    <Image
                        src="/util/b-duvida-youniverse-nazca.svg"
                        onClick={() => {
                            handlePopupClick();
                        }}
                        key={"duvida"}
                        alt="Dúvidas"
                        className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2  animate-fade-up animate-delay-300 duration-1000' width={buttonSize} height={buttonSize} />
                    <Image
                        src={soundButton}
                        onClick={() => {
                            toggleSound?.()
                        }}
                        key={"som"}
                        alt="Som"
                        className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2  animate-fade-up animate-delay-500 duration-1000' width={buttonSize} height={buttonSize} />
                </div>
                {showPopup && (
                    <div
                        onClick={() => {
                            setIsClosing(true);
                            setTimeout(() => {
                                setShowPopup(false);
                                setIsClosing(false);
                            }, 400);
                        }}
                        className={`absolute w-[20%] h-[20%] bottom-[10%] right-[40%] ${isClosing ? "animate-fade-out" : "animate-fade-in"}`}
                    >
                        <Image
                            src="/util/popup.svg"
                            alt="Popup Dúvidas"
                            className="object-contain"
                            fill
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default MenuYou