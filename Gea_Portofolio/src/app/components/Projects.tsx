import { useEffect, useRef, useState } from "react";
import { ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AML Risk Modelling",
    description:
      "Membangun model machine learning untuk mendeteksi transaksi mencurigakan menggunakan algoritma Random Forest dan XGBoost. Terintegrasi dengan kerangka kerja FATF dan regulasi AML/CFT.",
    category: "AML RISK",
    categoryColor: "#FF4D4D",
    gradient: "linear-gradient(135deg, #FF4D4D, #FF8C00)",
    tags: ["#AML", "#Compliance", "#FinancialCrime", "#RiskAssessment"],
    image: "https://images.unsplash.com/photo-1676311651686-9d42d06be214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    leftBtn: { label: "Lihat Detail", href: "https://docs.google.com/document/d/1RfYATqzWCWenntI0IaCZ8fRK3rWLGbAnjs1Ct0rEDsI/edit?tab=t.0" },
    rightBtn: { label: "Lihat di Colab", href: "https://colab.research.google.com/drive/1iz4w7duG3fDOQiUoQN57xW6h6C1ms7-B?usp=sharing" },
  },
  {
    id: 2,
    title: "Climate Risk Test",
    description:
      "Mengukur dampak risiko iklim (fisik & transisi) terhadap portofolio kredit bank menggunakan skenario NGFS. Selaras dengan kerangka TCFD dan regulasi OJK.",
    category: "CLIMATE RISK",
    categoryColor: "#00D4FF",
    gradient: "linear-gradient(135deg, #00D4FF, #00FFA3)",
    tags: ["#ClimateRisk", "#ESG", "#Portfolio", "#Sustainability"],
    image: "https://images.unsplash.com/photo-1666537072206-6a7a01ecb7d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    leftBtn: { label: "Lihat Detail", href: "https://docs.google.com/document/d/1CoKUGBOg55bVjMzSXIcwzOogvHceSY1JSa3WGsVyI4A/edit?tab=t.0" },
    rightBtn: { label: "Lihat di Canva", href: "https://www.canva.com/design/DAHFkwnJmSA/1fkkuPc028fca_7BEyGuwQ/edit" },
  },
  {
    id: 3,
    title: "Credit Scoring Model",
    description:
      "Pengembangan scorecard kredit end-to-end menggunakan logistic regression dan gradient boosting. Implementasi IFRS 9 untuk perhitungan ECL (Expected Credit Loss).",
    category: "CREDIT RISK",
    categoryColor: "#7B2FBE",
    gradient: "linear-gradient(135deg, #7B2FBE, #00D4FF)",
    tags: ["#Python", "#MachineLearning", "#CreditScoring", "#IFRS9"],
    image: "https://images.unsplash.com/photo-1740818576423-34be7fe85176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    leftBtn: { label: "Lihat Detail", href: "https://www.canva.com/design/DAG8ShJ7vkU/BrKCQiF8VqDbgzt8WJtT1Q/edit" },
    rightBtn: { label: "Lihat di Colab", href: "https://colab.research.google.com/drive/15M0289DxENwbO895hP-hsI1uKgMQI5aI?usp=sharing" },
  },
  {
    id: 4,
    title: "ISO 31000 & UU PDP 27 2022",
    description:
      "Merancang dan mengimplementasikan Enterprise Risk Management (ERM) framework berbasis ISO 31000:2018 dan Undang-Undang Perlindungan Data Pribadi (UU PDP) No. 27 Tahun 2022.",
    category: "ISO & COMPLIANCE",
    categoryColor: "#8A2BE2",
    gradient: "linear-gradient(135deg, #8A2BE2, #FF4D4D)",
    tags: ["#ISO31000", "#UUPDP", "#Compliance", "#DataProtection"],
    image: "https://images.unsplash.com/photo-1771931322109-180bb1b35bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    leftBtn: { label: "Lihat Detail", href: "https://docs.google.com/document/d/1oPT1EoNG_awl2FGYoCA8sz7V2JPJATeL-OW1nKrDf7M/edit?tab=t.0" },
    rightBtn: null, // Single button only
  },
];

function useScrollVisible(threshold = 0.1) {
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

export function Projects() {
  const { ref, visible } = useScrollVisible(0.1);

  return (
    <section
      id="proyek"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "#0D1B2A",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top wave */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "80px", overflow: "hidden" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,0 C360,80 1080,0 1440,60 L1440,0 Z" fill="#050A14" />
        </svg>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-60px)",
            transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
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
              marginBottom: "16px",
            }}
          >
            <span style={{ width: "32px", height: "1px", background: "linear-gradient(90deg, transparent, #00D4FF)" }} />
            Portfolio
            <span style={{ width: "32px", height: "1px", background: "linear-gradient(90deg, #00D4FF, transparent)" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#E8F4FD",
              margin: "0 0 16px 0",
            }}
          >
            Daftar Project
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              lineHeight: "26px",
              color: "#7C9CB8",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Beberapa project yang telah saya kerjakan di bidang risk management dan analisis data finansial.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "28px",
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: (typeof projects)[0];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  // Slide direction alternates per row
  const slideFrom = index % 2 === 0 ? "translateX(-60px)" : "translateX(60px)";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#0D1B2A",
        border: `1px solid ${hovered ? project.categoryColor + "99" : "rgba(0,212,255,0.12)"}`,
        borderRadius: "24px",
        overflow: "hidden",
        transform: visible
          ? hovered
            ? "translateY(-10px)"
            : "translateY(0)"
          : slideFrom,
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + index * 0.15}s, transform 0.35s ease, border-color 0.3s ease`,
        boxShadow: hovered
          ? `0 20px 60px rgba(0,212,255,0.12), 0 0 40px ${project.categoryColor}15`
          : "0 8px 32px rgba(0,0,0,0.4)",
        cursor: "default",
      }}
    >
      {/* Image Area */}
      <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: "brightness(0.8) saturate(1.2)",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, transparent 30%, #0D1B2A 100%)`,
          }}
        />
        {/* Colored top gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: project.gradient,
            opacity: 0.18,
          }}
        />
        {/* Category Badge */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            padding: "6px 14px",
            borderRadius: "999px",
            background: `${project.categoryColor}28`,
            border: `1px solid ${project.categoryColor}`,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            fontWeight: 500,
            color: project.categoryColor,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: "28px" }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "19px",
            fontWeight: 600,
            color: "#E8F4FD",
            margin: "0 0 12px 0",
            lineHeight: "1.4",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            lineHeight: "22px",
            color: "#7C9CB8",
            margin: "0 0 20px 0",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 12px",
                borderRadius: "999px",
                background: "rgba(0,212,255,0.07)",
                border: "1px solid rgba(0,212,255,0.15)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#7C9CB8",
                letterSpacing: "0.05em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "12px" }}>
          {/* Left / Primary Button */}
          <a
            href={project.leftBtn.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: project.rightBtn ? 1 : undefined,
              width: project.rightBtn ? undefined : "100%",
              padding: "11px 20px",
              borderRadius: "999px",
              background: project.gradient,
              border: "none",
              color: "#050A14",
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${project.categoryColor}66`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <FileText size={14} /> {project.leftBtn.label}
          </a>

          {/* Right / Ghost Button (if exists) */}
          {project.rightBtn && (
            <a
              href={project.rightBtn.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "11px 20px",
                borderRadius: "999px",
                background: "transparent",
                border: `1.5px solid ${project.categoryColor}80`,
                color: project.categoryColor,
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                textDecoration: "none",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = `${project.categoryColor}18`;
                (e.currentTarget as HTMLElement).style.borderColor = project.categoryColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = `${project.categoryColor}80`;
              }}
            >
              <ExternalLink size={14} /> {project.rightBtn.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
