"use client";

import { useContextDefault } from "@/context/Context";
import Image from "next/image";
import { memo, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { usePathname, useSearchParams } from "next/navigation";
import useIs4k from "../hooks/useis4k";

type AbrirImagensTelaCheia = {
  open: boolean;
  pathImage?: string;
};

type ExtendedAbrirImagensTelaCheia = AbrirImagensTelaCheia & {
  images?: { src: string; alt?: string }[];
  currentIndex?: number;
};

// Componente principal, memoizado para evitar renders desnecessários
const TelaCheia: React.FC = memo(() => {
  // Contexto para controlar abertura da tela cheia e imagem exibida
  const context = useContextDefault();
  const abrirImagensTelaCheia = context?.abrirImagensTelaCheia as ExtendedAbrirImagensTelaCheia;
  const setAbrirImagensTelaCheia = context?.setAbrirImagensTelaCheia as ((value: ExtendedAbrirImagensTelaCheia) => void) | undefined;
  const images = abrirImagensTelaCheia?.images ?? [];
  const [currentIndex, setCurrentIndex] = useState(abrirImagensTelaCheia?.currentIndex ?? 0);
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const is4k = useIs4k();

  const isStudioPage = currentPath.includes('/youniverse/homestudio/studio');
  const isPlexPage = currentPath.includes('/youniverse/homestudio/plex');
  const activeColor = isStudioPage ? '#CC654B' : isPlexPage ? '#939598' : '#A39126';

  const currentImage = images[currentIndex];

  // Referência para a imagem exibida
  const imgRef = useRef<HTMLImageElement>(null);

  // Estado para escala (zoom) da imagem
  const [scale, setScale] = useState(1);

  // Estado para armazenar distância inicial entre toques (pinça)
  const [startDistance, setStartDistance] = useState<number | null>(null);

  // Estado para posição da imagem (arrastar)
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Última posição registrada (para arrastar)
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  // Posição inicial do toque
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );

  // Fator de zoom acumulado para suavizar o pinch
  const [zoomFactor, setZoomFactor] = useState(1);

  useEffect(() => {
    setCurrentIndex(abrirImagensTelaCheia?.currentIndex ?? 0);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setLastPosition({ x: 0, y: 0 });
  }, [abrirImagensTelaCheia?.currentIndex, abrirImagensTelaCheia?.open]);

  // Função para calcular a distância entre dois pontos de toque (pinça)
  const getDistance = (touches: Touch[]) => {
    if (touches.length < 2) return 0;
    const [touch1, touch2] = touches;
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Manipula o zoom via slider
  const handleZoomChange = (_: Event, value: number | number[]) => {
    if (typeof value === "number") {
      if (imgRef.current) {
        setPosition({
          x: 0,
          y: 0,
        });
        setScale(value);
      }
    }
  };

  // Evento de início do toque (armazena posição inicial)
  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  // Gerencia o zoom (pinça) e o arrastar da imagem
  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 2 && startDistance !== null) {
      // Pinça para zoom
      const currentDistance = getDistance(Array.from(e.touches) as Touch[]);

      // Suavização do zoom
      const smoothingFactor = 0.05;
      const distanceChange =
        (currentDistance - startDistance) * smoothingFactor;

      // Acúmulo progressivo do zoom
      const newZoomFactor = zoomFactor + Math.abs(distanceChange) * 0.02;
      setZoomFactor(newZoomFactor);

      // Novo cálculo do zoom, limitado entre 1x e 3x
      const newScale = Math.min(
        Math.max(1, scale + distanceChange * newZoomFactor),
        3
      );

      // Ajusta a posição para manter o ponto de toque centralizado
      if (touchStart && imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        const offsetX = (touchStart.x - rect.left) / rect.width;
        const offsetY = (touchStart.y - rect.top) / rect.height;

        setPosition({
          x: (offsetX - 0.5) * (newScale - 1) * rect.width,
          y: (offsetY - 0.5) * (newScale - 1) * rect.height,
        });
      }

      setScale(newScale);
    } else if (e.touches.length === 1 && scale > 1 && touchStart) {
      // Arrastar a imagem quando está com zoom
      const dx = e.touches[0].clientX - touchStart.x;
      const dy = e.touches[0].clientY - touchStart.y;

      setPosition({
        x: lastPosition.x + dx,
        y: lastPosition.y + dy,
      });
    }
  };

  // Finaliza o toque, armazena última posição
  const handleTouchEnd = () => {
    setLastPosition(position);
    setStartDistance(null);
    setTouchStart(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const isImplantacaoView = currentPath.includes('/youniverse/homestudio/home') && searchParams.get('view') === 'implantacao';
  const showNavigation = searchParams.get('view') === 'implantacao';
  const shouldShowTitle = !isImplantacaoView;

  const closeImages = {
    home: "/homestudio/imagens/b-fechar-imagem-expandida-home.png",
    plex: "/homestudio/imagens/b-fechar-imagem-expandida-plex.png",
    studio: "/homestudio/imagens/b-fechar-imagem-expandida-studio.png"
  };

  const navigationImages = {
    home: {
      back: "/homestudio/imagens/back-home.png",
      next: "/homestudio/imagens/next-home.png",
      close: "/homestudio/imagens/close-home.png",
    },
    plex: {
      back: "/homestudio/imagens/back-plex.png",
      next: "/homestudio/imagens/next-plex.png",
      close: "/homestudio/imagens/close-plex.png",
    },
    studio: {
      back: "/homestudio/imagens/back-studio.png",
      next: "/homestudio/imagens/next-studio.png",
      close: "/homestudio/imagens/close-studio.png"
    }
  }

  const closeImageSrc = isImplantacaoView ? (isStudioPage ? closeImages.studio : isPlexPage ? closeImages.plex : closeImages.home) : (isStudioPage ? navigationImages.studio.close : isPlexPage ? navigationImages.plex.close : navigationImages.home.close);
  const navImageSet = isStudioPage ? navigationImages.studio : isPlexPage ? navigationImages.plex : navigationImages.home;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/90 z-50 flex flex-col justify-center items-center font-[Montserrat] p-16 gap-y-8">
      {/* Área da imagem em tela cheia */}
      <div className="w-full h-full rounded-3xl relative text-white">
        <div
          ref={imgRef}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: "transform 0.1s ease-out",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={currentImage?.src || ""}
            alt="Imagem Ampliada"
            fill
            className="object-contain object-top"
          />
        </div>
        {shouldShowTitle && (
          <span
            className={`absolute top-1 left-52 text-xl uppercase tracking-widest font-impact px-4 py-2 text-white transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:top-0 after:right-[-22px] after:border-t-[22px] after:border-b-[22px] after:border-l-[22px] after:border-t-transparent after:border-b-transparent after:transition-colors after:ease-in-out after:duration-300`}
            style={{ backgroundColor: activeColor, '--arrow-color': activeColor } as React.CSSProperties}
          >
            {currentImage?.alt}
          </span>
        )}
        <style>{`:root { --arrow-color: ${activeColor}; } span::after { border-left-color: var(--arrow-color); }`}</style>
      </div>
      <div className="absolute right-8 top-8 flex justify-between items-center gap-x-8">
      </div>
      <div className="flex items-center gap-4">
        {!showNavigation && (
          <button
            onClick={() => {
              handlePrev();
            }}
          >
            <Image
              src={navImageSet.back}
              alt="botao para voltar"
              aria-label="voltar"
              width={50}
              height={50}
              className="object-contain"
            />
          </button>
        )}
        <button
          onClick={() => {
            setAbrirImagensTelaCheia?.({ open: false, pathImage: "", images: [], currentIndex: 0 });
          }}
        >
          <Image
            src={closeImageSrc}
            alt="botao para fechar"
            aria-label="fechar"
            width={is4k ? 150 : 50}
            height={ is4k ? 150 : 50}
            className="object-contain"
          />
        </button>
        {!showNavigation && (
          <button
            onClick={() => {
              handleNext();
            }}
          >
            <Image
              src={navImageSet.next}
              alt="botao para proximo"
              aria-label="proximo"
              width={50}
              height={50}
              className="object-contain"
            />
          </button>
        )}
      </div>
      {/* Slider de zoom */}
      <Box
        sx={{ width: 300, zIndex: 100 }}
        className="absolute bottom-0 right-4  "
      >
        <Slider
          value={scale}
          min={1}
          max={3}
          step={0.1}
          aria-label="Zoom"
          valueLabelDisplay="auto"
          onChange={handleZoomChange}
        />
      </Box>
    </div>
  );
});

TelaCheia.displayName = "TelaCheia"; // Nome do componente para debugging

export default TelaCheia;
