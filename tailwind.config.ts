import type { Config } from "tailwindcss";
import tailwindAnimate from 'tailwindcss-animate';
import tailwindAnimated from 'tailwindcss-animated';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        institucional: "var(--institucional)",
        greenInstitucional: "var(--greenInstitucional)"
        
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      fontFamily: {
        bricolage: ['bricolage',],
        aviano: ['aviano-sans'],
        impact: ['impact'],
      },
      backgroundImage: {  
        'descanso': "url('/descanso/bg.jpg')",
        'descanso-home' : "url('/descanso/bg-descanso.png')",
        'conceito': "url('/conceito/bg.jpg')",
      },
      screens: {
        desktop: { min: "1536px" },
        desktopmini: { min: "901px", max: "1535px" },
        tablet: { min: "601px", max: "900px" },
        mobile: { max: "600px" },
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-slower': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [tailwindAnimate, tailwindAnimated],
} satisfies Config;
