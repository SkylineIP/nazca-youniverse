"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { useContextDefault } from "@/context/Context";
import Image from "next/image";

const Home: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault();
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;

  const handleClick = () => {
    router.push("/menu"); // Redireciona para a página de localização
    setSubmenuAndSelected?.("", "/menu"); // Chama a função setSubmenuAndSelected com o submenu e caminho desejado
  };

  return (
    <div
      className="w-fulll h-screen bg-institucional overflow-hidden min-h-[800px] min-w-[1200px] flex justify-center items-center"
      onClick={handleClick}
    >
      Crie sua primeira experiência
    </div>
  );
};

export default Home;
