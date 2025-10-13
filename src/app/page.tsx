"use client";

import { redirect, useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import FullscreenButton from "./components/FullScreenB";

// const Home: React.FC = () => {
//   const router = useRouter();
//   const [descanso, setDescanso] = useState(false);
  

//   return (
//     <div className="grid grid-cols-24 grid-rows-24 h-screen w-screen bg-descanso bg-cover bg-center bg-no-repeat">
//       <FullscreenButton/>
//       <>
//         <Image
//           src="/home/nazcalogo.png"
//           alt="Nazca Logo"
//           className={`col-span-10 col-start-8 row-start-10 transition-transform animate-fade-down animate-duration-[2000ms] duration-1000
//               ${descanso ? "-translate-y-80 scale-50" : "translate-y-0 "}`}
//           priority
//           width={800}
//           height={400}
//         />
//         <Image
//           src="/descanso/card.png"
//           alt="Card"
//           className={`col-span-6 cursor-pointer row-span-15 col-start-3 row-start-7 hover:scale-105 transition-transform animate-fade-down duration-[2s] ${descanso ? "translate-x-0" : "-translate-x-[900px]"}`}
//           onClick={() => {
//             router.push('/youniverse/descanso');
//           }}
//           width={500}
//           height={900}
//         />
//         <Image
//           src="/descanso/card.png"
//           alt="Card"
//           className={`col-span-6 row-span-15 col-start-10 row-start-7 hover:scale-105 transition-transform animate-fade-down duration-[2s] ${descanso ? "translate-x-0" : "-translate-x-[1200px]"}`}
//           width={500}
//           height={900}
//         />
//         <Image
//           src="/descanso/card.png"
//           alt="Card"
//           className={`col-span-6 row-span-15 col-start-17 row-start-7 hover:scale-105 transition-transform animate-fade-down duration-[2s] ${descanso ? "translate-x-0" : "-translate-x-[1900px]"}`}
//           width={500}
//           height={900}
//         />
//         <Image
//           src="/home/touch.png"
//           alt="Touch Icon"
//           className={`col-span-4 col-start-11 row-start-20 ${descanso ? "" : "animate-pulse"} transition-all animate-duration-[2000ms] cursor-pointer hover:scale-105 ease-in-out ${descanso ? "opacity-0" : "opacity-100"}`}
//           onClick={() => {
//             setDescanso(!descanso);
//           }}
//           width={200}
//           height={200}
//         />
//       </>
//     </div>
//   );
// };

const Home: React.FC = () => {
  redirect('/youniverse/descanso');
  return null;
}

export default Home;
