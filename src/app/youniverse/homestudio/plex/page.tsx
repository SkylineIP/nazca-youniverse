'use client'
import React, { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import HomeStudioSidebar from '../components/HomeStudioSidebar'
import dynamic from 'next/dynamic'

const ViewLoading = () => <div className="col-span-19 row-span-22 flex items-center justify-center">Loading...</div>;

const ImagensView = dynamic(() => import('../plex/components/ImagensView'),
  { ssr: false }
);

const PlantasView = dynamic(() => import('../plex/components/PlantasView'),
  { ssr: false }
);


const PlexPage = () => {
  const youplexlogo = "/homestudio/logo-youflex-youniverse.png";
  const searchParams = useSearchParams();
  const router = useRouter();
  const view = searchParams.get('view') || 'imagens';
  const [currentView, setCurrentView] = useState(view);

  const sidebarButtons = [
    { name: 'Imagens', value: 'imagens' },
    { name: 'Plantas', value: 'plantas' },
  ];

  useEffect(() => {
    setCurrentView(view);
  }, [view]);

  const renderView = () => {
    switch (currentView) {
      case 'imagens':
        return <ImagensView />;
      case 'plantas':
        return <PlantasView />;
      default:
        return <ImagensView />;
    }
  }

  return (
    <>
      <HomeStudioSidebar
        buttons={sidebarButtons}
        selectedItem={currentView}
        logo={youplexlogo}
        onSelectItem={(newView) => {
          router.push(`/youniverse/homestudio/plex?view=${newView}`, { scroll: false });
        }}
        color='#939598'
      />
      <React.Suspense fallback={<ViewLoading />}>
        {renderView()}
      </React.Suspense>
    </>
  )
}

export default PlexPage