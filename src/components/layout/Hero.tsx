"use client";

import Image from "next/image";
import ContactButton from "../ui/ContactButton";

const Hero = () => {
  return (
    <header
      id="hero"
      className="relative h-screen w-screen flex items-center justify-center text-center flex-col gap-4 overflow-hidden bg-gradient-to-b from-primary to-background"
    >
      <div id="stars" className="stars z-0"></div>
      <div id="stars2" className="stars2 z-0"></div>
      <div id="stars3" className="stars3 z-0"></div>

      <div className="z-10 relative">
        <Image
          src="/heroIcon/LeftIcon.png"
          width={50}
          height={50}
          alt="Description of the icon"
          className="absolute left-[-70px] top-[-40px] hidden sm:block"
        />
        <Image
          src="/heroIcon/RightIcon.png"
          width={50}
          height={50}
          alt="Description of the icon"
          className="absolute right-[-70px] top-[-40px] hidden sm:block"
        />
        <h1 className="">Salut ! Mon nom est</h1>
        <h1 className="text-accent focus-in-expand">Moumy Ndiaye</h1>
        <p className="text-lg p-2">Je suis développeuse logiciel</p>
        <ContactButton />
      </div>
    </header>
  );
};

export default Hero;
