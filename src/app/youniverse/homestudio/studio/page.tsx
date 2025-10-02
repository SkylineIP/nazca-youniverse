'use client'
import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import HomeStudioSidebar from '../components/HomeStudioSidebar'
import dynamic from 'next/dynamic'

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
    const youstudiologo = "/homestudio/logo-youstudio-youniverse.png";
    const searchParams = useSearchParams();
    const router = useRouter();
    const [view, setView] = useState(searchParams.get('view') || 'implantacao');
    const [selectedItem, setSelectedItem] = useState(view);
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


    useEffect(() => {
        setSelectedItem(view);
    }, [view]);

    const sidebarButtons = [
        { name: 'Implantação', value: 'implantacao' },
        { name: 'Imagens', value: 'imagens' },
        { name: 'Plantas', value: 'plantas' },
    ];

    return (
        <>
            <HomeStudioSidebar
                buttons={sidebarButtons}
                logo={youstudiologo}
                selectedItem={selectedItem}
                onSelectItem={(newView) => {
                    setView(newView)
                    router.push(`/youniverse/homestudio/studio?view=${newView}`, { scroll: false });
                }}
                color='#CC654B'
            />
            <React.Suspense fallback={<ViewLoading />}>
                {renderView()}
            </React.Suspense>
        </>
    )
}

export default YouHomePage