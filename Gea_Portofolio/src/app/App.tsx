import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Tools } from "./components/Tools";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import "../styles/fonts.css";

const SECTIONS = ["hero", "tentang", "tools", "proyek", "footer"];

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 100 && bottom > 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050A14",
        color: "#E8F4FD",
        overflowX: "hidden",
      }}
    >
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Footer />
    </div>
  );
}
