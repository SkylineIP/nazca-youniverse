'use client'
import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import HomeStudioSidebar from '../components/HomeStudioSidebar'

const ImplantacaoView = dynamic(() => import('./components/ImplantacaoView'),
    { ssr: false }
);
const PlantasView = dynamic(() => import('./components/PlantasView'),
    { ssr: false }
);
const ImagensView = dynamic(() => import('./components/ImagensView'),
    { ssr: false }
);

const ViewLoading = () => <div className="col-span-19 row-span-22 flex items-center justify-center">Loading...</div>;

const YouHomePage = () => {
    const youhomelogo = "/homestudio/logo-youhome-youniverse.png";
    const searchParams = useSearchParams();
    const router = useRouter();
    const [view, setView] = useState(searchParams.get('view') || 'implantacao');
    const [selectedItem, setSelectedItem] = useState(view);

    const handleViewChange = (newView: string) => {
        setView(newView);
        router.push(`/youniverse/homestudio/home?view=${newView}`, { scroll: false });
    };

    useEffect(() => {
        setSelectedItem(view);
    }, [view]);

    const sidebarButtons = [
        { name: 'Implantação', value: 'implantacao' },
        { name: 'Imagens', value: 'imagens' },
        { name: 'Plantas', value: 'plantas' },
    ];

    const renderView = () => {
        switch (view) {
            case 'implantacao':
                return <ImplantacaoView />;
            case 'imagens':
                return <ImagensView />;
            case 'plantas':
                return <PlantasView />;
            default:
                return <ImplantacaoView />;
        }
    };

    return (
        <>
            <HomeStudioSidebar
                logo={youhomelogo}
                buttons={sidebarButtons}
                selectedItem={selectedItem}
                onSelectItem={handleViewChange}
                color='#A39126'
            />
            <React.Suspense fallback={<ViewLoading />}>
                {renderView()}
            </React.Suspense>
        </>
    )
}

export default YouHomePage