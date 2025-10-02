"use client";

import React from "react";
import { createTheme } from "@mui/material/styles";
import useOrientation from "./components/verificaOrientacao";
import { ThemeProvider } from "@mui/material/styles";
import { useContextDefault } from "@/context/Context";
import TelaCheia from "./components/TelaCheia";
import Music from "./components/Music";

//configurar tema
//cores e fontes
const theme = createTheme({
  palette: {
    background: {
      default: "#080830",
    },
    primary: {
      main: "#EBF7FD",
    },
    secondary: {
      main: "#EBF7FD",
    },
    text: {
      primary: "#080830",
      secondary: "#EBF7FD",
    },
  },
  typography: {
    fontFamily: `"Questrial", sans-serif`,
  },
});
const OrientationWarning = () => (
  <div className="flex flex-col items-center justify-center h-screen background text-primary font-[Questrial]">
    <h1 className="text-2xl font-bold mb-4">Modo Paisagem Necessário</h1>
    <p className="text-center">
      Por favor, rotacione seu dispositivo para o modo paisagem para uma melhor experiência.
    </p>
  </div>
);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const isLandscape = useOrientation();
  const context = useContextDefault();
  const abrirImagensTelaCheia = context?.abrirImagensTelaCheia;

  return (
    <ThemeProvider theme={theme}>
      {/* pathname === '/' || pathname === '/menu' ? '' : <BarraLateral /> */}
      {isLandscape ? children : <OrientationWarning />}
      {abrirImagensTelaCheia?.open && (<TelaCheia />)}
      <Music />
    </ThemeProvider>
  );
}

