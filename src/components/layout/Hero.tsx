
const Hero = () => {
  return (
    <header id="hero" className="h-screen w-screen flex-center text-center flex-col gap-4 bg-secondary">
      <div className="">
        <h1 className="">Salut ! Mon nom est</h1>
        <h1 className="text-accent">Moumy Ndiaye</h1>
      </div>
      <p className="text-lg">Je suis une développeuse logiciel</p>
      {/* use client pour le bouton */}
      <button className="mt-2 glassmorphic py-3 px-7 rounded-lg hover:text-white">Me contacter</button>
    </header>
  );
};

export default Hero;
