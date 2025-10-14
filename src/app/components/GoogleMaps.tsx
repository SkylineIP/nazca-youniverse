"use client";

import { useState, useEffect } from "react";
import { APIProvider, Map, Marker, useMap } from "@vis.gl/react-google-maps";
import Image from "next/image";

const GoogleMap = () => {
  const [isSatellite, setIsSatellite] = useState(true);
  //controla se o mapa é satélite ou 2D
  function CustomMarker() {
    const map = useMap(); // 👈 gets the map instance
    const [icon, setIcon] = useState<google.maps.Icon | undefined>(undefined);

    useEffect(() => {
      if (!map || typeof window === "undefined" || !window.google) return;

      const is4k = window.innerWidth >= 3840;
      const size = is4k ? 100 : 60;

      setIcon({
        url: "/localizacao/pin.png",
        scaledSize: new window.google.maps.Size(size, size),
      });
    }, [map]);

    return (
      <Marker
        position={{ lat: -20.314664315292077, lng: -40.29639191422158 }}
        icon={{
          url: icon?.url || "/localizacao/default-pin.png",
          scaledSize: new google.maps.Size(260, 60),
          anchor: new google.maps.Point(0, 30),
        }}
      />
    );
  }


  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  // Certifique-se de que a chave da API está definida no arquivo .env.local
  // para não tenha configure o arquivo .env.local com a chave da API do Google Maps
  // o arquivo .env.local não sobe para produção, então você precisa configurar a chave da API no ambiente de produção também

  //-20.314664315292077, -40.29639191422158
  return (
    <div className="relative w-full h-full">
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultCenter={{ lat: -20.314664315292077, lng: -40.29639191422158 }}
          // coordenadas do centro do mapa
          // você pode substituir por outras coordenadas
          defaultZoom={15}
          // nível de zoom inicial do mapa
          disableDefaultUI={true}
          // desativa a interface padrão do Google Maps
          gestureHandling={"greedy"}
          // controla o comportamento de gestos do mapa
          mapTypeId={isSatellite ? "satellite" : "roadmap"}
        // controla se o mapa é satélite ou 2D
        >
          <CustomMarker />
        </Map>
      </APIProvider>

      {/* Botão de alternância do mapa */}
      <button
        className="absolute bottom-10 left-20 cursor-pointer"
        onClick={() => setIsSatellite(!isSatellite)}
      >
        <Image
          src={isSatellite ? "/localizacao/b-mapa-2d-quadria.svg" : "/localizacao/b-satelite-quadria.svg"}
          width={200}
          height={200}
          alt="mudar mapa entre 2d e satélite"
        />
      </button>
    </div>
  );
};

export default GoogleMap;
