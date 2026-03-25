import { tokens as t } from "@/lib/tokens";
import { Icons } from "@/components/icons";

export default function Footer() {
  const cols = [
    { title: "Platform", links: [
      { label: "Compare", href: "/compare" },
      { label: "Advisor", href: "/advisor" },
      { label: "Full Service", href: "/full-service" },
      { label: "Company Directory", href: "/companies" },
      { label: "Customer Stories", href: "/stories" },
    ]},
    { title: "Resources", links: [
      { label: "Guides & Blog", href: "/resources" },
      { label: "Route Guides", href: "/resources/routes" },
      { label: "State Guides", href: "/resources/states" },
      { label: "Industry News", href: "/resources/news" },
      { label: "Glossary", href: "/glossary" },
      { label: "FAQ", href: "/faq" },
    ]},
    { title: "Tools", links: [
      { label: "Price Estimator", href: "/tools/price-estimator" },
      { label: "Shipping Checklist", href: "/tools/checklist" },
      { label: "Red Flag Checker", href: "/tools/red-flag-checker" },
      { label: "Ask Before You Ship", href: "/community" },
    ]},
    { title: "Company", links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "For Companies", href: "/for-companies" },
      { label: "Get Verified", href: "/for-companies/verified" },
      { label: "Claim Your Company", href: "/for-companies/claim" },
    ]},
  ];

  return (
    <footer style={{ background: t.colors.midnight, color: "#fff", padding: "60px 24px 30px" }}>
      <div style={{ maxWidth: 1220, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr repeat(4, 1fr)", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, textDecoration: "none" }}>
              <Icons.Logo s={32}/>
              <span style={{ fontFamily: t.fonts.display, fontWeight: 800, fontSize: 20, color: "#fff" }}>
                Transport<span style={{ color: t.colors.sky }}>Vibe</span>
              </span>
            </a>
            <p style={{ fontFamily: t.fonts.body, fontSize: 14, color: t.colors.slate, lineHeight: 1.6, maxWidth: 260, marginBottom: 20 }}>
              The trust-driven shipping intelligence platform. Find the right way to ship your car.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["T", "L", "Y"].map(s => (
                <span key={s} style={{ width: 36, height: 36, borderRadius: t.radii.md, border: `1px solid ${t.colors.navy}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.colors.slate, fontFamily: t.fonts.display, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 13, color: t.colors.silver, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 18 }}>{col.title}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(l => (
                  <a key={l.label} href={l.href} style={{ fontFamily: t.fonts.body, fontSize: 13.5, color: t.colors.slate, textDecoration: "none" }}>{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: `1px solid ${t.colors.navy}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: t.fonts.body, fontSize: 13, color: t.colors.slate, margin: 0 }}>© 2026 TransportVibe. All rights reserved.</p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
              <a key={l} href="#" style={{ fontFamily: t.fonts.body, fontSize: 12.5, color: t.colors.slate, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
