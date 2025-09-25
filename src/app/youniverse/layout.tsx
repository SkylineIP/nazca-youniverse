'use client'
import { usePathname } from 'next/navigation';
import Sidebar from "../components/Sidebar";
import "../globals.css";
import React from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isConceitoPage = pathname === '/youniverse/conceito';

    return (
        <>
            <div className={`grid grid-cols-24 grid-rows-24 h-screen w-screen overflow-hidden ${isConceitoPage ? 'bg-conceito' : 'bg-descanso-home'}`}>
                <Sidebar />
                {children}
            </div>
        </>
    );
}