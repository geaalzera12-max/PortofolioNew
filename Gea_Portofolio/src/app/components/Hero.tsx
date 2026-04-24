import { useEffect, useState, useRef } from "react";
import { ChevronDown, ArrowRight, Download } from "lucide-react";
import profilePhoto from "figma:asset/WhatsApp_Image_2026-04-24_at_22.16.11.jpeg";

const TYPED_STRINGS = ["Gea Alzera", "Risk Specialist", "Data Analyst"];

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Typing effect
  useEffect(() => {
    const current = TYPED_STRINGS[currentIndex];
    const speed = isDeleting ? 60 : 100;
    const timer = setTimeout(() => {
      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % TYPED_STRINGS.length);
      } else {
        setTypedText(
          isDeleting
            ? current.substring(0, typedText.length - 1)
            : current.substring(0, typedText.length + 1)
        );
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentIndex]);

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#tentang");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const el = document.querySelector("#proyek");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Social Button Component
  const SocialButton = ({ social }: { social: any }) => (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      title={social.label}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "#0D1B2A",
        border: "1px solid rgba(0,212,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#E8F4FD",
        textDecoration: "none",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = social.hoverBorder;
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,212,255,0.2)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.15)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {social.icon}
    </a>
  );

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "#050A14",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: "72px",
      }}
    >
      {/* Particle-like background dots */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              borderRadius: "50%",
              background: i % 3 === 0 ? "#00D4FF" : i % 3 === 1 ? "#7B2FBE" : "#00FFA3",
              opacity: Math.random() * 0.4 + 0.1,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 8 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grid lines background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,47,190,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
        className="hero-grid"
      >
        {/* Left: Text Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "#00D4FF",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "32px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #00D4FF)",
              }}
            />
            Risk Management Specialist
          </div>

          {/* Main Heading */}
          <div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(42px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: "1.1",
                letterSpacing: "-2px",
                color: "#E8F4FD",
                margin: 0,
              }}
            >
              Halo, saya
            </h1>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(42px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: "1.1",
                letterSpacing: "-2px",
                background: "linear-gradient(135deg, #00D4FF, #7B2FBE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: 0,
                minHeight: "1.2em",
              }}
            >
              {typedText}
              <span
                style={{
                  WebkitTextFillColor: "#00D4FF",
                  animation: "blink 1s step-end infinite",
                }}
              >
                |
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(18px, 2.5vw, 28px)",
              fontWeight: 600,
              letterSpacing: "-0.5px",
              background: "linear-gradient(135deg, #00D4FF, #7B2FBE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
            }}
          >
            Junior Risk Management Specialist
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              lineHeight: "28px",
              color: "#7C9CB8",
              margin: 0,
              maxWidth: "500px",
            }}
          >
            Menganalisis risiko finansial dengan pendekatan berbasis data — dari pemodelan risiko kredit hingga kepatuhan ESG dan anti-pencucian uang.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={scrollToProjects}
              style={{
                padding: "14px 36px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #00D4FF, #7B2FBE)",
                border: "none",
                color: "#050A14",
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,212,255,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Lihat Portfolio <ArrowRight size={16} />
            </button>
            <a
              href="#footer"
              onClick={(e) => { e.preventDefault(); document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                padding: "14px 36px",
                borderRadius: "999px",
                background: "transparent",
                border: "1.5px solid rgba(0,212,255,0.9)",
                color: "#00D4FF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                transition: "background 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,212,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <Download size={16} /> Hubungi Saya
            </a>
          </div>

          {/* Social Icons — updated with real links */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#E8F4FD">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.532 5.843L.058 23.5l5.818-1.525A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.52-5.18-1.426l-.37-.22-3.453.906.92-3.367-.24-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                ),
                href: "https://api.whatsapp.com/send/?phone=6285778120188&text&type=phone_number&app_absent=0",
                label: "WhatsApp",
                hoverColor: "rgba(37,211,102,0.2)",
                hoverBorder: "rgba(37,211,102,0.6)",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#E8F4FD">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                href: "https://www.linkedin.com/in/gealzera12/",
                label: "LinkedIn",
                hoverColor: "rgba(0,119,181,0.2)",
                hoverBorder: "rgba(0,119,181,0.6)",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#E8F4FD">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                ),
                href: "https://instagram.com/gealzera12",
                label: "@gealzera12",
                hoverColor: "rgba(225,48,108,0.2)",
                hoverBorder: "rgba(225,48,108,0.6)",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#E8F4FD">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
                href: "https://facebook.com",
                label: "Facebook",
                hoverColor: "rgba(24,119,242,0.2)",
                hoverBorder: "rgba(24,119,242,0.6)",
              },
            ].map((social) => (
              <SocialButton key={social.label} social={social} />
            ))}
          </div>
        </div>

        {/* Right: Profile Image */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Glow behind hex */}
          <div
            style={{
              position: "absolute",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)",
              filter: "blur(40px)",
              zIndex: 0,
            }}
          />

          {/* Hexagonal frame */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "340px",
              height: "390px",
            }}
          >
            {/* Animated gradient border */}
            <div
              style={{
                position: "absolute",
                inset: "-3px",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                background: "linear-gradient(135deg, #00D4FF, #7B2FBE, #00FFA3, #00D4FF)",
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease infinite",
                zIndex: 0,
              }}
            />
            {/* White/dark inset */}
            <div
              style={{
                position: "absolute",
                inset: "3px",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                background: "#050A14",
                zIndex: 1,
              }}
            />
            {/* Profile image */}
            <div
              style={{
                position: "absolute",
                inset: "6px",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                overflow: "hidden",
                zIndex: 2,
              }}
            >
              <img
                src={profilePhoto}
                alt="Gea Alzera"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  imageRendering: "high-quality",
                  filter: "brightness(1) saturate(1.1) contrast(1.05)",
                }}
              />
            </div>
          </div>

          {/* Floating Stat Card */}
          <div
            style={{
              marginTop: "-40px",
              position: "relative",
              zIndex: 3,
              background: "rgba(13,27,42,0.92)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: "16px",
              padding: "16px 24px",
              backdropFilter: "blur(20px)",
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {[
              { value: "4+", label: "Proyek" },
              { value: "ISO", label: "31000" },
              { value: "Basel", label: "II & III" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#00D4FF",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "#7C9CB8",
                    letterSpacing: "0.08em",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "transparent",
          border: "none",
          color: "#7C9CB8",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.6,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.1em",
          animation: "bounceDown 2s ease-in-out infinite",
        }}
      >
        <span>SCROLL</span>
        <ChevronDown size={20} />
      </button>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-top: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}