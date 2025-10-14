import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ContextDefault } from "../context/Context";
import ThemeRegistry from "./materialUITheme";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Nazca Youniverse",
  description: "Nazca Youniverse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-background text-foreground font-[Questrial] grid `}>
        <Analytics />
        <ContextDefault>
          <ThemeRegistry>{children}</ThemeRegistry>
          {/* preciso colocar a barra lateral aqui, porque ela aparece em todas as telas, menos na rota '/' e na rota '/menu'*/}
        </ContextDefault>
      </body>
    </html>
  );
}
