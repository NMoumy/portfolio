import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/layout/Hero";
import Projects from "@/components/sections/Projects";
// import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      {/* <Services /> */}
      <Contact />
    </main>
  );
}
