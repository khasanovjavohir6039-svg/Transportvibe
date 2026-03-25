"use client";

import { useState, useEffect } from "react";
import { tokens as t } from "@/lib/tokens";
import { Icons } from "@/components/icons";
import { Btn, Wrap } from "@/components/shared";

export default function Nav({ activePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [dd, setDd] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const items = [
    { label: "Compare", href: "/compare" },
    { label: "Advisor", href: "/advisor" },
    { label: "Full Service", href: "/full-service", accent: true },
    { label: "Companies", href: "/companies" },
    { label: "Stories", href: "/stories" },
    { label: "Resources", href: "/resources", children: [
      { label: "Guides", href: "/resources/guides" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Route Guides", href: "/resources/routes" },
      { label: "State Guides", href: "/resources/states" },
      { label: "Industry News", href: "/resources/news" },
      { label: "Glossary", href: "/glossary" },
    ]},
    { label: "For Companies", href: "/for-companies" },
  ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 1000,
      background: scrolled ? "rgba(255,255,255,0.95)" : "#fff",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: `1px solid ${scrolled ? t.colors.mist : "transparent"}`,
      boxShadow: scrolled ? t.shadows.sm : "none",
      transition: "all 0.3s ease",
    }}>
      <Wrap style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Icons.Logo s={32}/>
          <span style={{ fontFamily: t.fonts.display, fontWeight: 800, fontSize: 20, color: t.colors.midnight, letterSpacing: "-0.02em" }}>
            Transport<span style={{ color: t.colors.azure }}>Vibe</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {items.map(it => {
            const isActive = activePage === it.label;
            return (
              <div key={it.label} style={{ position: "relative" }}
                onMouseEnter={() => it.children && setDd(it.label)}
                onMouseLeave={() => setDd(null)}>
                <a href={it.href} style={{
                  fontFamily: t.fonts.display, fontWeight: isActive ? 700 : 500, fontSize: 14,
                  color: isActive ? t.colors.azure : it.accent ? t.colors.azure : t.colors.charcoal,
                  textDecoration: "none", padding: "8px 12px", borderRadius: t.radii.md,
                  display: "inline-flex", alignItems: "center", gap: 3,
                  background: isActive ? t.colors.ice : dd === it.label ? t.colors.ice : "transparent",
                  transition: "all 0.2s",
                }}>
                  {it.label}{it.children && <Icons.ChevDown s={14}/>}
                </a>
                {it.children && dd === it.label && (
                  <div style={{
                    position: "absolute", top: "100%", left: 0, background: "#fff",
                    borderRadius: t.radii.lg, boxShadow: t.shadows.xl,
                    border: `1px solid ${t.colors.mist}`, padding: 8, minWidth: 190, marginTop: 4,
                  }}>
                    {it.children.map(c => (
                      <a key={c.label} href={c.href} style={{
                        display: "block", padding: "9px 14px", fontFamily: t.fonts.body,
                        fontSize: 13.5, color: t.colors.charcoal, textDecoration: "none",
                        borderRadius: t.radii.sm,
                      }}>{c.label}</a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Btn v="ghost" sz="sm" href="/review">Leave a Review</Btn>
          <Btn v="primary" sz="sm" href="/advisor">Get Started</Btn>
        </div>
      </Wrap>
    </nav>
  );
}
