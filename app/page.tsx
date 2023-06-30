import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <main className="bg-dark text-light ">
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
};

export default HomePage;