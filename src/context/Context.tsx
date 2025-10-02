"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import menuStructure from "../app/utils/menuStructure";
import { StaticImageData } from "next/image";



export interface AbrirImagensTelaCheia {
  open: boolean;
  pathImage?: string;
  images?: { src: StaticImageData; alt: string }[];
  currentIndex?: number;
}

export interface Context {
  sound: number;
  toogleSound: (path: string) => void;
  submenu: string;
  selected: string;
  setSubmenuAndSelected: (submenu: string, selected: string) => void;
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  abrirImagensTelaCheia: AbrirImagensTelaCheia;
  setAbrirImagensTelaCheia: (abrir: AbrirImagensTelaCheia) => void;
  playVideo: boolean;
  setVideo: (play: boolean) => void;
  selectedItem?: string;
  setSelectedItem?: (item: string) => void;
}

// Criando o contexto com um valor inicial opcional
const ContextDef = createContext<Context | undefined>(undefined);

// Criando o provider
export const ContextDefault = ({ children }: { children: ReactNode }) => {
  const currenthPath = usePathname();
  const [sound, setSound] = useState(1);
  const [selectedItem, setSelectedItem] = useState<string | null>('Localização')
  const arrayOfSubmenu = useMemo(() => {
    const foundItem = menuStructure.find((item: { caminho: string }) => item.caminho == currenthPath);
    return foundItem ? foundItem.submenu?.[0] || '' : '';
  }, [currenthPath]);

  const [menu, setMenu] = useState({ submenu: arrayOfSubmenu, selected: currenthPath });
  const [openMenu, setOpenMenu] = useState(true);
  const [abrirImagensTelaCheia, setAbrirImagensTelaCheia] = useState<AbrirImagensTelaCheia>({
    open: false,
    pathImage: "",
    images: [],
    currentIndex: 0
  });
  const [playVideo, setVideo] = useState(false);


  const setSubmenuAndSelected = (submenu: string, selected: string) => {
    setMenu({ submenu, selected });
  };

  const toogleSound = () => {
    setSound?.(sound == 0 ? 1 : 0); // Alterna o som entre 0 e 1
  }



  return (
    <ContextDef.Provider value={{
      sound,
      toogleSound,
      submenu: menu.submenu,
      selected: menu.selected,
      setSubmenuAndSelected,
      openMenu,
      setOpenMenu,
      abrirImagensTelaCheia,
      setAbrirImagensTelaCheia,
      playVideo,
      selectedItem: selectedItem || '', // Provide a default empty string if null
      setSelectedItem: setSelectedItem as (item: string | null) => void, // Allow null
      setVideo,
    }}>
      {children}
    </ContextDef.Provider>
  )
};

export const useContextDefault = () => {
  return useContext(ContextDef);
};
