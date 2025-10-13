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
    const normalize = (p?: string) => {
        if (!p) return '';
        const noQuery = p.split(/[?#]/)[0];
        return noQuery !== '/' && noQuery.endsWith('/') ? noQuery.slice(0, -1) : noQuery;
    }
    const safePath = normalize(pathname);
    const isConceitoPage = safePath === '/youniverse/conceito';

    return (
        <>
            <div className={`grid grid-cols-24 grid-rows-24 h-screen bg-cover 4k:bg-4k w-screen overflow-hidden ${isConceitoPage ? 'bg-conceito' : 'bg-descanso-home'}`}>
                <Sidebar />
                {children}
            </div>
        </>
    );
}