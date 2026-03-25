"use client";

import { useState } from "react";
import { tokens as t } from "@/lib/tokens";
import { Icons } from "@/components/icons";

// --- STAR RATING ---
export const Stars = ({ rating = 4.5, s = 16, showVal = true }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
    {[1,2,3,4,5].map(i => <Icons.Star key={i} filled={i <= Math.round(rating)} s={s}/>)}
    {showVal && <span style={{ marginLeft: 6, fontFamily: t.fonts.display, fontWeight: 700, fontSize: s * 0.85, color: t.colors.charcoal }}>{rating.toFixed(1)}</span>}
  </span>
);

// --- BADGE ---
const badgeCfg = {
  verified: { label: "Verified", icon: Icons.Shield, bg: t.colors.successLight, c: t.colors.success, b: "#B8E0CC" },
  topReviewed: { label: "Top Reviewed", icon: Icons.Star, bg: t.colors.warningLight, c: t.colors.warning, b: "#F0D9A8" },
  customerFavorite: { label: "Customer Favorite", icon: Icons.Heart, bg: t.colors.dangerLight, c: t.colors.danger, b: "#F0BFBF" },
  strongSupport: { label: "Strong Support", icon: Icons.Msg, bg: t.colors.ice, c: t.colors.azure, b: "#B3D4F0" },
  fastResponse: { label: "Fast Response", icon: Icons.Bolt, bg: t.colors.warningLight, c: t.colors.warning, b: "#F0D9A8" },
  premiumExperience: { label: "Premium Experience", icon: Icons.Crown, bg: "rgba(229,153,62,0.08)", c: t.colors.amber, b: "#E8D0A8" },
};

export const Badge = ({ type, size = "sm" }) => {
  const cfg = badgeCfg[type];
  if (!cfg) return null;
  const Ic = cfg.icon;
  const sm = size === "sm";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: sm ? 4 : 5, padding: sm ? "2px 8px" : "4px 10px", borderRadius: t.radii.full, background: cfg.bg, border: `1px solid ${cfg.b}`, fontSize: sm ? 11 : 12.5, fontFamily: t.fonts.display, fontWeight: 600, color: cfg.c, whiteSpace: "nowrap" }}>
      <Ic s={sm ? 12 : 14} filled/>{cfg.label}
    </span>
  );
};

// --- BEST FOR LABEL ---
export const BestForLabel = ({ label }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: t.radii.full, background: `linear-gradient(135deg,${t.colors.azure},${t.colors.ocean})`, fontSize: 11, fontFamily: t.fonts.display, fontWeight: 700, color: "#fff", letterSpacing: "0.03em", textTransform: "uppercase" }}>
    ★ {label}
  </span>
);

// --- BUTTON ---
export const Btn = ({ children, v = "primary", sz = "md", icon, full, onClick, active, href }) => {
  const [h, setH] = useState(false);
  const vars = {
    primary: { bg: h ? `linear-gradient(135deg,${t.colors.ocean},${t.colors.azure})` : `linear-gradient(135deg,${t.colors.azure},${t.colors.ocean})`, c: "#fff", bd: "none", sh: h ? t.shadows.glow : t.shadows.sm },
    secondary: { bg: h ? t.colors.snow : "#fff", c: t.colors.navy, bd: `1.5px solid ${h ? t.colors.azure : t.colors.silver}`, sh: t.shadows.sm },
    accent: { bg: h ? `linear-gradient(135deg,${t.colors.amber},#D08A30)` : `linear-gradient(135deg,${t.colors.amber},${t.colors.amberLight})`, c: "#fff", bd: "none", sh: h ? t.shadows.amberGlow : t.shadows.sm },
    ghost: { bg: h || active ? t.colors.ice : "transparent", c: active ? t.colors.azure : t.colors.charcoal, bd: active ? `1.5px solid ${t.colors.azure}` : "1.5px solid transparent", sh: "none" },
    white: { bg: h ? "#fff" : "rgba(255,255,255,0.95)", c: t.colors.midnight, bd: "none", sh: t.shadows.md },
    dark: { bg: h ? t.colors.navy : t.colors.midnight, c: "#fff", bd: "none", sh: t.shadows.md },
  };
  const sizes = {
    sm: { p: "7px 16px", f: 13 },
    md: { p: "10px 22px", f: 14 },
    lg: { p: "14px 30px", f: 15.5 },
    xl: { p: "16px 36px", f: 16.5 },
  };
  const vr = vars[v] || vars.primary;
  const sr = sizes[sz] || sizes.md;
  const style = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
    padding: sr.p, fontFamily: t.fonts.display, fontWeight: 600, fontSize: sr.f,
    color: vr.c, background: vr.bg, border: vr.bd, borderRadius: t.radii.md,
    boxShadow: vr.sh, cursor: "pointer", transition: "all 0.25s ease",
    width: full ? "100%" : "auto", letterSpacing: "0.01em",
    transform: h ? "translateY(-1px)" : "none", textDecoration: "none",
  };

  const content = <>{children}{icon && <span style={{ display: "flex" }}>{icon}</span>}</>;

  if (href) {
    return <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={style}>{content}</a>;
  }

  return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={style}>{content}</button>;
};

// --- WRAP ---
export const Wrap = ({ children, style }) => (
  <div style={{ maxWidth: 1220, margin: "0 auto", padding: "0 24px", ...style }}>{children}</div>
);

// --- SECTION HEAD ---
export const SectionHead = ({ label, title, sub, align = "left" }) => (
  <div style={{ textAlign: align, marginBottom: 36 }}>
    {label && <p style={{ fontFamily: t.fonts.display, fontWeight: 600, fontSize: 13, color: t.colors.azure, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{label}</p>}
    <h2 style={{ fontFamily: t.fonts.display, fontWeight: 800, fontSize: "clamp(24px,3vw,34px)", color: t.colors.midnight, margin: 0, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{title}</h2>
    {sub && <p style={{ fontFamily: t.fonts.body, fontSize: 16, color: t.colors.graphite, marginTop: 10, lineHeight: 1.6, maxWidth: align === "center" ? 540 : "none", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{sub}</p>}
  </div>
);

// --- COMPANY CARD ---
export const CompanyCard = ({ co, bestFor, showMeta = false }) => {
  const [h, setH] = useState(false);
  return (
    <a href={`/companies/${co.id || co.name.toLowerCase().replace(/\s+/g, '-')}`} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "block", textDecoration: "none", background: "#fff", border: `1.5px solid ${h ? t.colors.azure : t.colors.cardBorder}`, borderRadius: t.radii.lg, padding: 22, transition: "all 0.3s ease", boxShadow: h ? t.shadows.lg : t.shadows.sm, transform: h ? "translateY(-3px)" : "none", cursor: "pointer", position: "relative" }}>
      {bestFor && <span style={{ position: "absolute", top: 14, right: 14 }}><BestForLabel label={bestFor}/></span>}
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div style={{ width: showMeta ? 56 : 52, height: showMeta ? 56 : 52, borderRadius: t.radii.md, background: `linear-gradient(135deg,${t.colors.ice},${t.colors.mist})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${t.colors.cardBorder}`, color: t.colors.slate }}><Icons.Truck s={showMeta ? 24 : 22}/></div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: showMeta ? 17 : 16, color: t.colors.midnight, margin: 0 }}>{co.name}</h3>
          <div style={{ marginTop: 4, display: "flex", alignItems: "center", gap: 6 }}>
            <Stars rating={co.rating} s={showMeta ? 14 : 13}/>
            <span style={{ fontFamily: t.fonts.body, fontSize: 12.5, color: t.colors.slate }}>({co.reviews}{showMeta ? " reviews" : ""})</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: showMeta ? 14 : 12 }}>{co.badges.map(b => <Badge key={b} type={b}/>)}</div>
      <p style={{ fontFamily: t.fonts.body, fontSize: 13, color: t.colors.graphite, lineHeight: 1.5, marginTop: 10, marginBottom: 0, display: "-webkit-box", WebkitLineClamp: showMeta ? 10 : 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{co.desc}</p>
      {showMeta && co.areas && (
        <div style={{ display: "flex", gap: 16, marginTop: 14, paddingTop: 12, borderTop: `1px solid ${t.colors.mist}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, color: t.colors.slate }}><Icons.MapPin s={13}/><span style={{ fontFamily: t.fonts.body, fontSize: 12.5 }}>{co.areas}</span></div>
          {co.types && <div style={{ display: "flex", alignItems: "center", gap: 5, color: t.colors.slate }}><Icons.Truck s={13}/><span style={{ fontFamily: t.fonts.body, fontSize: 12.5 }}>{co.types.join(" · ")}</span></div>}
        </div>
      )}
      <div style={{ display: "flex", gap: 8, marginTop: 14, paddingTop: showMeta && !co.areas ? 12 : 0, borderTop: showMeta && !co.areas ? `1px solid ${t.colors.mist}` : "none" }}>
        <Btn v="primary" sz="sm">View Profile</Btn>
        <Btn v="secondary" sz="sm">Compare</Btn>
      </div>
    </a>
  );
};
