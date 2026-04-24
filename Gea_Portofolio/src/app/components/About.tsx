import { useEffect, useRef, useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import profilePhoto from "figma:asset/WhatsApp_Image_2026-04-24_at_22.16.11.jpeg";

const skills = [
  "ISO 31000", "Basel II", "Basel III", "IFRS 9",
  "Credit Risk", "Climate Risk", "Python", "Fraud Detection",
  "AML/CFT", "ERM Framework", "Risk Assessment", "Data Analysis",
];

function useScrollVisible(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export function About() {
  const { ref, visible } = useScrollVisible(0.15);

  const scrollToProjects = () => {
    document.querySelector("#proyek")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="tentang"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "#0D1B2A",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Wave top divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          overflow: "hidden",
        }}
      >
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,80 C360,0 1080,80 1440,20 L1440,0 L0,0 Z" fill="#050A14" />
        </svg>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left: Image */}
        <div
          style={{
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-60px)",
            transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(0,212,255,0.15)",
              boxShadow: "0 16px 48px rgba(0,212,255,0.1)",
            }}
          >
            <img
              src={profilePhoto}
              alt="Gea Alzera"
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                imageRendering: "high-quality",
                filter: "brightness(1) saturate(1.1) contrast(1.05)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(5,10,20,0.6) 100%)",
              }}
            />
          </div>

          {/* Floating Badge */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              right: "-20px",
              background: "rgba(0,255,163,0.1)",
              border: "1px solid #00FFA3",
              borderRadius: "999px",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backdropFilter: "blur(12px)",
            }}
          >
            <CheckCircle size={16} color="#00FFA3" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                fontWeight: 500,
                color: "#00FFA3",
                letterSpacing: "0.05em",
              }}
            >
              ISO 31000 Certified Approach
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
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
            <span style={{ width: "32px", height: "1px", background: "linear-gradient(90deg, transparent, #00D4FF)" }} />
            Tentang Saya
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              lineHeight: "1.15",
              color: "#E8F4FD",
              margin: 0,
            }}
          >
            Ahli Manajemen Risiko yang{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4FF, #7B2FBE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Berfokus pada Data
            </span>
          </h2>

          {/* Bio */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "#7C9CB8",
              margin: 0,
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.3s",
            }}
          >
            Saya adalah seorang Junior Risk Management Specialist dengan latar belakang kuat di bidang analisis risiko finansial. Berpengalaman dalam mengimplementasikan kerangka kerja ISO 31000, Basel II/III, dan IFRS 9 untuk mengelola eksposur risiko kredit, risiko iklim, serta ancaman kecurangan finansial.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: "#7C9CB8",
              margin: 0,
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.4s",
            }}
          >
            Dengan kemampuan analitik berbasis Python dan pemahaman mendalam tentang regulasi keuangan global, saya siap memberikan kontribusi nyata dalam menjaga integritas dan ketahanan sistem keuangan.
          </p>

          {/* Skills Grid */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {skills.map((skill, i) => (
              <span
                key={skill}
                style={{
                  padding: "6px 16px",
                  borderRadius: "999px",
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "#00D4FF",
                  cursor: "default",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${0.5 + i * 0.05}s`,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = "rgba(0,212,255,0.15)";
                  (e.target as HTMLElement).style.borderColor = "rgba(0,212,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "rgba(0,212,255,0.08)";
                  (e.target as HTMLElement).style.borderColor = "rgba(0,212,255,0.15)";
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={scrollToProjects}
            style={{
              alignSelf: "flex-start",
              padding: "14px 32px",
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
            Lihat Proyek Saya <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}