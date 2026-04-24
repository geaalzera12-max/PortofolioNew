import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#tentang" },
  { label: "Tools", href: "#tools" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#footer" },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "72px",
          background: scrolled ? "rgba(5,10,20,0.92)" : "rgba(5,10,20,0.7)",
          backdropFilter: "blur(20px) saturate(180%)",
          borderBottom: scrolled ? "1px solid rgba(0,212,255,0.15)" : "1px solid transparent",
          transition: "all 0.3s ease",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            height: "100%",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "22px",
              fontWeight: 700,
              color: "#00D4FF",
              textShadow: "0 0 20px rgba(0,212,255,0.7)",
              textDecoration: "none",
              letterSpacing: "-0.5px",
            }}
          >
            GA
          </a>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex"
            style={{ gap: "40px", alignItems: "center" }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  style={{
                    color: isActive ? "#00D4FF" : "#7C9CB8",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    textDecoration: isActive ? "underline" : "none",
                    textUnderlineOffset: "4px",
                    transition: "color 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#00D4FF";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = isActive ? "#00D4FF" : "#7C9CB8";
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "#E8F4FD",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 90,
          background: "rgba(5,10,20,0.97)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            style={{
              color: "#E8F4FD",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "28px",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.5px",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
