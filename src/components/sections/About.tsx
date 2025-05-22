import Image from "next/image";
import AboutTabs from "./AboutTabs";

const About = () => {
  return (
    <section id="about" className="h-screen flex items-center flex-col overflow-hidden relative">
      <Image src="/FlightIcon.png" height={150} width={150} className="absolute right-45 top-20 hidden xl:block" alt="Decorative icon"/>
      <div>
        <h2 className="section-title">
          Apprenez à me <span className="text-accent">connaître !</span>
        </h2>
      </div>
      <div className="flex flex-1 w-full justify-center md:mt-25 mt-15 px-4 overflow-hidden">
        <AboutTabs />
      </div>
    </section>
  );
};

export default About;
