import { Heart } from "lucide-react";

const socials = [
  {
    label: "WhatsApp",
    tooltip: "Chat via WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=6285778120188&text&type=phone_number&app_absent=0",
    hoverFill: "rgba(37,211,102,0.12)",
    hoverStroke: "rgba(37,211,102,0.60)",
    hoverIconColor: "#25D366",
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill={color}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.532 5.843L.058 23.5l5.818-1.525A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.52-5.18-1.426l-.37-.22-3.453.906.92-3.367-.24-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    tooltip: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/gealzera12/",
    hoverFill: "rgba(0,119,181,0.12)",
    hoverStroke: "rgba(0,119,181,0.60)",
    hoverIconColor: "#0077B5",
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill={color}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    tooltip: "@gealzera12",
    href: "https://instagram.com/gealzera12",
    hoverFill: "rgba(225,48,108,0.12)",
    hoverStroke: "rgba(225,48,108,0.60)",
    hoverIconColor: "#E1306C",
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill={color}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    tooltip: "Facebook",
    href: "https://facebook.com",
    hoverFill: "rgba(24,119,242,0.12)",
    hoverStroke: "rgba(24,119,242,0.60)",
    hoverIconColor: "#1877F2",
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" width="22" height="22" fill={color}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

function SocialIcon({ s }: { s: typeof socials[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      title={s.tooltip}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        background: hovered ? s.hoverFill : "#0D1B2A",
        border: `1px solid ${hovered ? s.hoverStroke : "rgba(0,212,255,0.15)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? `0 8px 24px ${s.hoverFill}` : "none",
      }}
    >
      {s.icon(hovered ? s.hoverIconColor : "#7C9CB8")}
    </a>
  );
}

import { useState } from "react";

export function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "#050A14",
        borderTop: "1px solid rgba(0,212,255,0.12)",
        padding: "80px 24px 48px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Wave top divider */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "80px", overflow: "hidden" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,80 C480,0 960,80 1440,20 L1440,0 L0,0 Z" fill="#0D1B2A" />
        </svg>
      </div>

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          position: "relative",
          paddingTop: "40px",
        }}
      >
        {/* Name */}
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 700,
            letterSpacing: "-1.5px",
            background: "linear-gradient(135deg, #00D4FF, #7B2FBE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: 0,
            textAlign: "center",
            textShadow: "none",
          }}
        >
          Gea Alzera
        </h2>

        {/* Title */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "17px",
            lineHeight: "28px",
            color: "#7C9CB8",
            margin: 0,
            textAlign: "center",
          }}
        >
          Junior Risk Management Specialist
        </p>

        {/* WhatsApp CTA Button */}
        <a
          href="https://api.whatsapp.com/send/?phone=6285778120188&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "14px 40px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            border: "none",
            color: "#fff",
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(37,211,102,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.532 5.843L.058 23.5l5.818-1.525A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.52-5.18-1.426l-.37-.22-3.453.906.92-3.367-.24-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Chat di WhatsApp
        </a>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "16px" }}>
          {socials.map((s) => (
            <SocialIcon key={s.label} s={s} />
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "200px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)",
          }}
        />

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            color: "#3D5A78",
            letterSpacing: "0.05em",
            textAlign: "center",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          © 2026 Gea Alzera. All rights reserved.{" "}
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            Made with <Heart size={11} color="#FF4D4D" fill="#FF4D4D" />
          </span>
        </p>
      </div>
    </footer>
  );
}
