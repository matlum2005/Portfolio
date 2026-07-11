import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import TechSphere from "@/sections/TechSphere";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Achievements from "@/sections/Achievements";
import Certificates from "@/sections/Certificates";
import GithubStats from "@/sections/GithubStats";
import Testimonials from "@/sections/Testimonials";
import Services from "@/sections/Services";
import Stats from "@/sections/Stats";
import Blog from "@/sections/Blog";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <TechSphere />
      <Projects />
      <Experience />
      <Achievements />
      <Certificates />
      <GithubStats />
      <Testimonials />
      <Services />
      <Stats />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
