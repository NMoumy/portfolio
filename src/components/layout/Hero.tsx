"use client";

const Hero = () => {
  return (
    <header
      id="hero"
      className="relative h-screen w-screen flex items-center justify-center text-center flex-col gap-4 overflow-hidden bg-gradient-to-b from-primary to-background"
    >
      <div id="stars" className="stars z-0"></div>
      <div id="stars2" className="stars2 z-0"></div>
      <div id="stars3" className="stars3 z-0"></div>

      <div className="z-10">
        <h1 className="">Salut ! Mon nom est</h1>
        <h1 className="text-accent">Moumy Ndiaye</h1>
        <p className="text-lg">Je suis une développeuse logiciel</p>
        <button className="mt-2 glassmorphic py-3 px-7 rounded-lg hover:text-white">
          Me contacter
        </button>
      </div>
    </header>
  );
};

export default Hero;
