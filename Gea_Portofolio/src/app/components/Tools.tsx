import { useEffect, useRef, useState } from "react";

const tools = [
  {
    name: "Google Colab",
    category: "DATA SCIENCE",
    color: "#FF9800",
    icon: (
      <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
        <circle cx="32" cy="32" r="30" fill="#FF9800" opacity="0.15" />
        <path d="M20 32 Q20 20 32 20 Q44 20 44 32 Q44 44 32 44 Q20 44 20 32Z" stroke="#FF9800" strokeWidth="2.5" fill="none"/>
        <circle cx="24" cy="32" r="4" fill="#FF9800"/>
        <circle cx="40" cy="32" r="4" fill="#4CAF50"/>
        <line x1="28" y1="32" x2="36" y2="32" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: "Microsoft Office",
    category: "PRODUCTIVITY",
    color: "#D83B01",
    icon: (
      <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
        <rect x="12" y="14" width="26" height="36" rx="3" fill="#D83B01" opacity="0.2"/>
        <path d="M14 18 L38 14 L38 50 L14 46Z" fill="#D83B01" opacity="0.8"/>
        <path d="M20 24 L28 24 M20 30 L32 30 M20 36 L28 36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <rect x="34" y="22" width="18" height="20" rx="2" fill="#217346" opacity="0.9"/>
      </svg>
    ),
  },
  {
    name: "VS Code",
    category: "DEVELOPMENT",
    color: "#007ACC",
    icon: (
      <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="8" fill="#007ACC" opacity="0.15"/>
        <path d="M12 20 L36 32 L12 44 Z" fill="#007ACC" opacity="0.4"/>
        <path d="M36 12 L52 20 L52 44 L36 52 L12 38 L12 26 Z" fill="none" stroke="#007ACC" strokeWidth="2.5"/>
        <path d="M36 20 L44 32 L36 44" stroke="#007ACC" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    category: "VERSION CONTROL",
    color: "#E8F4FD",
    icon: (
      <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
        <circle cx="32" cy="32" r="26" stroke="#E8F4FD" strokeWidth="2" fill="none" opacity="0.2"/>
        <path d="M32 14C22.06 14 14 22.06 14 32C14 40.04 19.3 46.78 26.53 49.18C27.43 49.34 27.75 48.8 27.75 48.34C27.75 47.92 27.73 46.58 27.73 45.18C23 46.12 21.78 43.92 21.4 42.77C21.18 42.19 20.22 40.36 19.38 39.94C18.7 39.6 17.8 38.66 19.36 38.64C20.82 38.62 21.87 40.06 22.23 40.66C23.9 43.48 26.65 42.68 27.83 42.22C27.99 41.04 28.47 40.24 28.98 39.78C24.67 39.32 20.18 37.68 20.18 30.54C20.18 28.5 20.92 26.82 22.27 25.5C22.07 25.04 21.39 23.12 22.47 20.56C22.47 20.56 24.01 20.08 27.75 22.48C29.43 22 31.21 21.76 32.99 21.76C34.77 21.76 36.55 22 38.23 22.48C41.97 20.06 43.51 20.56 43.51 20.56C44.59 23.12 43.91 25.04 43.71 25.5C45.06 26.82 45.8 28.48 45.8 30.54C45.8 37.7 41.29 39.32 36.98 39.78C37.65 40.34 38.23 41.44 38.23 43.14C38.23 45.56 38.21 47.5 38.21 48.34C38.21 48.8 38.53 49.36 39.43 49.18C46.66 46.78 51.96 40.02 51.96 32C51.96 22.06 43.94 14 32 14Z" fill="#E8F4FD"/>
      </svg>
    ),
  },
  {
    name: "Canva",
    category: "DESIGN",
    color: "#00C4CC",
    icon: (
      <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
        <circle cx="32" cy="32" r="28" fill="#00C4CC" opacity="0.15"/>
        <circle cx="22" cy="26" r="8" fill="#7B2FBE" opacity="0.8"/>
        <circle cx="42" cy="26" r="8" fill="#FF4D4D" opacity="0.8"/>
        <circle cx="32" cy="40" r="8" fill="#00C4CC" opacity="0.8"/>
        <circle cx="32" cy="32" r="5" fill="white" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: "Draw.io",
    category: "DIAGRAMMING",
    color: "#F08705",
    icon: (
      <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="6" fill="#F08705" opacity="0.1"/>
        <rect x="20" y="18" width="16" height="12" rx="3" stroke="#F08705" strokeWidth="2" fill="none"/>
        <rect x="36" y="34" width="16" height="12" rx="3" stroke="#00D4FF" strokeWidth="2" fill="none"/>
        <rect x="10" y="34" width="16" height="12" rx="3" stroke="#00FFA3" strokeWidth="2" fill="none"/>
        <path d="M28 30 L32 34 M44 34 L32 34 M18 34 L18 30" stroke="#7C9CB8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
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

export function Tools() {
  const { ref, visible } = useScrollVisible(0.15);

  return (
    <section
      id="tools"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "#050A14",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
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
            Stack & Tools
            <span style={{ width: "32px", height: "1px", background: "linear-gradient(90deg, #00D4FF, transparent)" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#E8F4FD",
              margin: 0,
            }}
          >
            Tools yang Saya Kuasai
          </h2>
        </div>

        {/* Tools Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="tools-grid"
        >
          {tools.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .tools-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function ToolCard({
  tool,
  index,
  visible,
}: {
  tool: (typeof tools)[0];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "rgba(13,27,42,0.95)"
          : "rgba(13,27,42,0.8)",
        backdropFilter: "blur(20px) saturate(180%)",
        border: `1px solid ${hovered ? `rgba(0,212,255,0.4)` : "rgba(0,212,255,0.12)"}`,
        borderRadius: "16px",
        padding: "36px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        cursor: "default",
        transform: visible
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(60px)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + index * 0.12}s, transform 0.3s ease, border-color 0.3s ease, background 0.3s ease`,
        boxShadow: hovered
          ? `0 16px 48px rgba(0,212,255,0.1), 0 0 30px ${tool.color}22`
          : "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "16px",
          background: `${tool.color}18`,
          border: `1px solid ${tool.color}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "box-shadow 0.3s ease",
          boxShadow: hovered ? `0 0 30px ${tool.color}40` : "none",
        }}
      >
        {tool.icon}
      </div>

      {/* Name */}
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "17px",
          fontWeight: 600,
          color: "#E8F4FD",
          textAlign: "center",
        }}
      >
        {tool.name}
      </span>

      {/* Category */}
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          color: "#7C9CB8",
          textTransform: "uppercase",
        }}
      >
        {tool.category}
      </span>
    </div>
  );
}
