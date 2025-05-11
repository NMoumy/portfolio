import AboutTabs from "./AboutTabs";

const About = () => {
  return (
    <section id="about" className="h-screen flex items-center flex-col">
      <div>
        <h2 className="section-title">
          Apprenez à me <span className="text-accent">connaître !</span>
        </h2>
      </div>
      <div className="flex flex-1 w-full justify-center md:mt-25 mt-15">
        <AboutTabs />
      </div>
    </section>
  );
};

export default About;
