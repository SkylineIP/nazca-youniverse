import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface HomeStudioSidebarProps {
  logo: string;
  buttons: { name: string; value: string }[];
  selectedItem: string;
  onSelectItem: (newView: string) => void;
  color?: string;
}


const HomeStudioSidebar = ({ logo, buttons, selectedItem, onSelectItem, color }: HomeStudioSidebarProps) => {
  const router = useRouter();
  const sidebarButtons = buttons
  const [buttonSize, setButtonSize] = React.useState<number>(30);
  React.useEffect(() => {
    const check = () => setButtonSize(window.innerWidth >= 3840 ? 60 : 30);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className='col-span-5 row-span-24 grid grid-cols-4 grid-rows-24 border-r border-[#12100B] '>
      <Image
        src={logo}
        alt="Nazca Logo"
        className=' col-span-5 row-span-2 row-start-3 transition-transform animate-fade-down animate-duration-[2000ms] duration-1000 '
        width={800}
        height={180}
      />
      <div className='grid grid-cols-4 grid-rows-12 col-span-5 row-span-10 row-start-9 4k:text-5xl text-[24px]'>
        {sidebarButtons.map((button, index) => (
          <div
            key={index}
            style={{
              animationDelay: `${index * 200}ms`,
              gridRow: `${index * 3 + 1} / span 3`
            }}
            className={`col-span-4 col-start-2 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out animate-fade-left duration-1000 relative`}
            onClick={() => {
              onSelectItem(button.value)
            }}
          >
            <Image
              src="/localizacao/outline.png"
              alt="Selected outline"
              layout="fill"
              objectFit="contain"
              className={`transition-opacity duration-300 ease-in-out ${selectedItem === button.value ? 'opacity-100' : 'opacity-0'}`}
            />
            <span className={`text-[#4A4F54] relative uppercase ${selectedItem === button.value ? 'font-impact' : 'font-aviano'} `}>
              {button.name}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          router.push('/youniverse/homestudio')
        }}
        className='col-span-2 row-span-1 flex items-center row-start-19 cursor-pointer transition-transform duration-300 ease-in-out animate-fade-right animate-delay-[1200ms] duration-1000'
      >
        <span
          style={{ 
            backgroundColor: color,
            '--arrow-color': color 
          } as React.CSSProperties}
          className={`
                            relative px-8 py-2 h-full w-full 
                            text-2xl 4k:text-5xl uppercase font-impact 
                            text-white
                            transition-colors duration-300 ease-in-out
                            after:content-[''] after:absolute after:top-0 4k:after:right-[-45px] after:right-[-21px] after:border-t-[21px] after:border-l-[21px] after:border-b-[21px]
                            after:w-0 after:h-0 tracking-[8px]
                            4k:after:border-t-[45px] 4k:after:border-b-[45px] 4k:after:border-l-[45px]
                            after:border-t-transparent after:border-b-transparent after:border-l-[var(--arrow-color)]
                            `}
        >
          Voltar
        </span>
      </button>
      <div className='col-span-5 row-span-1 flex row-start-23 justify-center items-center gap-4'>
        <Image onClick={() => {
          router.push('/menu-youniverse')
        }} src="/util/b-home-youniverse-nazca.svg" key={"home"} alt="Home" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2  animate-fade-up animate-delay-100 duration-1000' width={buttonSize} height={buttonSize} />
        <Image src="/util/b-duvida-youniverse-nazca.svg" key={"duvida"} alt="Dúvidas" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2  animate-fade-up animate-delay-300 duration-1000' width={buttonSize} height={buttonSize} />
        <Image src="/util/b-som-youniverse-nazca.svg" key={"som"} alt="Som" className=' hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out mx-2  animate-fade-up animate-delay-500 duration-1000' width={buttonSize} height={buttonSize} />
      </div>
    </div>
  )
}

export default HomeStudioSidebar