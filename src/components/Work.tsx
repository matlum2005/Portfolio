import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    name: "Banking System",
    category: "Java Desktop Application",
    tools: "Java 21, Swing, OOP, JUnit 5, Maven",
    description: "Account management, secure authentication, validated transactions, and file-based persistence.",
    image: "/images/banking.webp",
    link: "https://github.com/matlum2005?tab=repositories",
  },
  {
    name: "Traffic Swarm Intelligence",
    category: "AI / Multi-Agent Simulation",
    tools: "Python, Java 21, Spring Boot, Next.js, SUMO, PSO, ACO",
    description: "Nine cooperating intersection agents optimize traffic signals using hybrid PSO and ACO.",
    image: "/images/traffic.webp",
    link: "https://github.com/matlum2005?tab=repositories",
  },
  {
    name: "FashionHero-EcommerceWeb",
    category: "Full-Stack Web Application",
    tools: " React, Next.js, Tailwind CSS, MySQL, Redis",
    description: "Full-stack commerce platform with role-based access, JWT authentication, and payment integration.",
    image: "/images/fashionhero.webp",
    link: "https://github.com/matlum2005?tab=FashionHero-EcommerceWeb",
  },
  {
    name: "Transport Management System",
    category: "Full-Stack Web Application",
    tools: "Java, React, TypeScript, MySQL, Spring Boot, Tailwind CSS",
    description: "Transport management system with role-based access, JWT authentication, and payment integration.",
    image: "/images/transport.webp",
    link: "https://github.com/matlum2005?tab=Transport",
  },
];

const Work = () => {
  useGSAP(() => {
    const box = document.getElementsByClassName("work-box");
    const container = document.querySelector(".work-container");
    if (!box.length || !container) return;
    const rectLeft = container.getBoundingClientRect().left;
    const parentWidth = container.getBoundingClientRect().width;
    const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
    const translateX = Math.max(0, box[0].getBoundingClientRect().width * box.length - (rectLeft + parentWidth) + padding);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });
    timeline.to(".work-flex", { x: -translateX, ease: "none" });
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>My <span>Work</span></h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" data-cursor="disable">View GitHub ↗</a>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
