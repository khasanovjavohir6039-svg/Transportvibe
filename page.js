"use client";

import { useState } from "react";
import { tokens as t } from "@/lib/tokens";
import { Icons } from "@/components/icons";
import { Stars, Badge, Btn, Wrap, SectionHead, CompanyCard } from "@/components/shared";
import { companies, reviewsData, storiesData, guidesData } from "@/lib/data";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

// ---- HERO ----
function Hero() {
  const [ff, setFf] = useState(null);
  const inp = (field) => ({ flex: 1, minWidth: 180, padding: "15px 16px 15px 42px", border: `1.5px solid ${ff === field ? t.colors.azure : t.colors.mist}`, borderRadius: t.radii.md, fontFamily: t.fonts.body, fontSize: 15, color: t.colors.ink, outline: "none", background: ff === field ? "#fff" : t.colors.snow, transition: "all 0.2s", boxShadow: ff === field ? t.shadows.glow : "none", boxSizing: "border-box" });
  return (
    <section style={{ background: `linear-gradient(165deg, ${t.colors.midnight} 0%, ${t.colors.navy} 40%, ${t.colors.ocean} 100%)`, padding: "80px 0 100px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)`, backgroundSize: "60px 60px" }}/>
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,125,191,0.15), transparent 70%)" }}/>
      <div style={{ position: "absolute", bottom: -80, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(229,153,62,0.1), transparent 70%)" }}/>
      <Wrap style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: t.radii.full, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", marginBottom: 28 }}>
            <Icons.Shield s={14}/><span style={{ fontFamily: t.fonts.display, fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.85)", letterSpacing: "0.02em" }}>Trusted by thousands of car shippers</span>
          </div>
          <h1 style={{ fontFamily: t.fonts.display, fontWeight: 800, fontSize: "clamp(36px,5vw,56px)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08, margin: 0 }}>Find the right way<br/>to <span style={{ color: t.colors.sky }}>ship your car</span></h1>
          <p style={{ fontFamily: t.fonts.body, fontSize: "clamp(16px,2vw,19px)", color: "rgba(255,255,255,0.7)", marginTop: 20, lineHeight: 1.6, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>Compare trusted companies, get AI-powered recommendations, and ship with confidence — not guesswork.</p>
          <div style={{ marginTop: 40, background: "rgba(255,255,255,0.97)", padding: 12, borderRadius: t.radii.xl, boxShadow: t.shadows.xl, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 180, position: "relative" }}>
              <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: t.colors.slate }}><Icons.MapPin s={16}/></span>
              <input placeholder="Ship from (city, state, or zip)" style={inp("from")} onFocus={() => setFf("from")} onBlur={() => setFf(null)}/>
            </div>
            <div style={{ flex: 1, minWidth: 180, position: "relative" }}>
              <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: t.colors.slate }}><Icons.MapPin s={16}/></span>
              <input placeholder="Ship to (city, state, or zip)" style={inp("to")} onFocus={() => setFf("to")} onBlur={() => setFf(null)}/>
            </div>
            <Btn v="primary" sz="lg" icon={<Icons.Search s={18}/>} href="/compare">Compare</Btn>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 36, flexWrap: "wrap" }}>
            {[{ icon: <Icons.BarChart s={18}/>, label: "Compare Companies", sub: "Side-by-side analysis", href: "/compare" }, { icon: <Icons.Sparkle s={18}/>, label: "Get Advisor Help", sub: "AI-powered match", href: "/advisor" }, { icon: <Icons.Handshake s={18}/>, label: "Full Service", sub: "We handle everything", href: "/full-service" }].map((p, i) => (
              <a key={i} href={p.href} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", padding: "8px 16px", borderRadius: t.radii.md, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.2s" }}>
                <span style={{ color: t.colors.sky }}>{p.icon}</span>
                <div style={{ textAlign: "left" }}><span style={{ fontFamily: t.fonts.display, fontWeight: 600, fontSize: 13.5, color: "#fff", display: "block" }}>{p.label}</span><span style={{ fontFamily: t.fonts.body, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{p.sub}</span></div>
              </a>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}

// ---- HOW IT WORKS ----
function HowItWorks() {
  return (
    <section style={{ padding: "80px 0", background: t.colors.white }}>
      <Wrap>
        <SectionHead align="center" label="How it works" title="From research to shipped — in four steps" sub="TransportVibe gives you the tools to make an informed decision. No guesswork, no pressure."/>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[{ icon: <Icons.Eye s={26}/>, n: "01", title: "Research & Read Reviews", desc: "Browse real reviews, video testimonials, and customer stories from verified shippers." },
            { icon: <Icons.BarChart s={26}/>, n: "02", title: "Compare Side by Side", desc: "See companies ranked with clear trust scores, badges, and \"Best For\" labels." },
            { icon: <Icons.Sparkle s={26}/>, n: "03", title: "Get AI Recommendations", desc: "Tell us your move details — our Advisor matches you with the right company and explains why." },
            { icon: <Icons.Check s={26}/>, n: "04", title: "Choose or Let Us Handle It", desc: "Book yourself with confidence, or switch to Full Service and we manage everything." },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "28px 20px", borderRadius: t.radii.lg, background: t.colors.snow, border: `1px solid ${t.colors.mist}`, position: "relative" }}>
              {i < 3 && <div style={{ position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)", color: t.colors.silver, fontSize: 20, fontWeight: 700, zIndex: 1 }}>→</div>}
              <div style={{ width: 56, height: 56, borderRadius: t.radii.lg, background: t.colors.ice, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: t.colors.azure }}>{s.icon}</div>
              <span style={{ fontFamily: t.fonts.mono, fontSize: 11, color: t.colors.azure, fontWeight: 500 }}>{s.n}</span>
              <h3 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 16, color: t.colors.midnight, margin: "6px 0 8px" }}>{s.title}</h3>
              <p style={{ fontFamily: t.fonts.body, fontSize: 13.5, color: t.colors.graphite, lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

// ---- FEATURED COMPANIES ----
function FeaturedCompanies() {
  return (
    <section style={{ padding: "80px 0", background: t.colors.snow }}>
      <Wrap>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
          <SectionHead label="Trusted companies" title="Top-rated auto transport companies" sub="Verified profiles with real reviews from real customers."/>
          <Btn v="secondary" sz="md" icon={<Icons.Arrow s={16}/>} href="/companies">Browse All</Btn>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {companies.slice(0, 6).map((co, i) => <CompanyCard key={co.id} co={co} bestFor={i === 0 ? "Best Overall" : i === 5 ? "Best Premium" : null}/>)}
        </div>
      </Wrap>
    </section>
  );
}

// ---- ADVISOR PREVIEW ----
function AdvisorPreview() {
  return (
    <section style={{ padding: "80px 0", background: t.colors.white }}>
      <Wrap>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 60, alignItems: "center" }}>
          <div>
            <SectionHead label="AI Advisor" title="Get matched with the right company — and know why" sub="Tell us about your shipment, priorities, and budget. TransportVibe AI analyzes thousands of data points and returns ranked recommendations with real explanations."/>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {["Personalized match based on your specific route and needs", "Clear explanations of why each company fits — and what the tradeoffs are", "Confidence scoring so you know how strong each recommendation is", "Gets smarter with every shipment and review on the platform"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 22, height: 22, borderRadius: t.radii.full, background: t.colors.successLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, color: t.colors.success }}><Icons.Check s={12}/></div>
                  <span style={{ fontFamily: t.fonts.body, fontSize: 14.5, color: t.colors.charcoal, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <Btn v="primary" sz="lg" icon={<Icons.Arrow s={18}/>} href="/advisor">Try the Advisor</Btn>
          </div>
          <div style={{ background: t.colors.snow, borderRadius: t.radii.xl, padding: 28, border: `1px solid ${t.colors.mist}` }}>
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontFamily: t.fonts.display, fontWeight: 600, fontSize: 13, color: t.colors.azure, marginBottom: 4 }}>Based on your move from</p>
              <p style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 18, color: t.colors.midnight, margin: 0 }}>Los Angeles, CA → New York, NY</p>
            </div>
            {[{ rank: 1, label: "Best Overall", color: t.colors.azure, name: "Prestige Auto Transport", score: 96, rating: 4.8, reason: "Top performer on this corridor with exceptional communication and on-time delivery." },
              { rank: 2, label: "Best Value", color: t.colors.success, name: "Highway Express Carriers", score: 91, rating: 4.5, reason: "Most competitive pricing on CA→NY while maintaining solid customer satisfaction." },
              { rank: 3, label: "Safest Choice", color: "#6C5CE7", name: "Guardian Auto Shipping", score: 88, rating: 4.7, reason: "Industry-leading insurance coverage and zero damage claims on this route." },
            ].map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: t.radii.lg, padding: 16, marginBottom: i < 2 ? 12 : 0, border: `1px solid ${t.colors.cardBorder}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 12, color: r.color, textTransform: "uppercase", letterSpacing: "0.05em" }}>#{r.rank} {r.label}</span>
                  <span style={{ fontFamily: t.fonts.display, fontWeight: 800, fontSize: 13, color: r.color }}>{r.score}%</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 15, color: t.colors.midnight }}>{r.name}</span>
                  <Stars rating={r.rating} s={12} showVal={false}/>
                </div>
                <p style={{ fontFamily: t.fonts.body, fontSize: 13, color: t.colors.graphite, lineHeight: 1.5, margin: 0 }}>{r.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}

// ---- FULL SERVICE ----
function FullServicePreview() {
  return (
    <section style={{ padding: "80px 0", background: `linear-gradient(165deg, ${t.colors.midnight} 0%, ${t.colors.navy} 100%)`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -150, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(229,153,62,0.08), transparent 70%)" }}/>
      <Wrap style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: t.fonts.display, fontWeight: 600, fontSize: 13, color: t.colors.amber, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Full Service</p>
            <h2 style={{ fontFamily: t.fonts.display, fontWeight: 800, fontSize: "clamp(24px,3vw,34px)", color: "#fff", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.2 }}>Need zero-stress support?<br/><span style={{ color: t.colors.amberLight }}>Let us handle it.</span></h2>
            <p style={{ fontFamily: t.fonts.body, fontSize: 16, color: "rgba(255,255,255,0.65)", marginTop: 10, lineHeight: 1.6 }}>TransportVibe Full Service manages the entire shipping process — from finding the right company to confirming delivery.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "28px 0 32px" }}>
              {["Company vetting", "Quote negotiation", "Booking coordination", "Shipment monitoring", "Issue resolution", "Delivery confirmation"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ width: 20, height: 20, borderRadius: t.radii.full, background: "rgba(229,153,62,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: t.colors.amber }}><Icons.Check s={11}/></div>
                  <span style={{ fontFamily: t.fonts.body, fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}><Btn v="accent" sz="lg" icon={<Icons.Arrow s={18}/>} href="/full-service">Request Full Service</Btn><Btn v="white" sz="lg" href="/full-service">Learn More</Btn></div>
          </div>
          <div style={{ paddingLeft: 20 }}>
            {[{ step: "1", title: "Tell us about your move", desc: "Route, vehicle, timing, and preferences", color: t.colors.azure },
              { step: "2", title: "We find the best fit", desc: "AI-powered matching with vetted companies", color: t.colors.sky },
              { step: "3", title: "We handle booking", desc: "Negotiation, terms, and scheduling", color: t.colors.amber },
              { step: "4", title: "We monitor everything", desc: "Real-time tracking and updates to you", color: t.colors.amberLight },
              { step: "5", title: "Your car arrives safely", desc: "Delivery confirmation and support", color: t.colors.success },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: i < 4 ? 8 : 0, position: "relative" }}>
                {i < 4 && <div style={{ position: "absolute", left: 19, top: 40, width: 2, height: "calc(100% - 10px)", background: "rgba(255,255,255,0.08)" }}/>}
                <div style={{ width: 40, height: 40, borderRadius: t.radii.full, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.fonts.display, fontWeight: 800, fontSize: 15, color: "#fff", flexShrink: 0, zIndex: 1 }}>{s.step}</div>
                <div style={{ paddingTop: 4, paddingBottom: 20 }}>
                  <h4 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 15, color: "#fff", margin: 0 }}>{s.title}</h4>
                  <p style={{ fontFamily: t.fonts.body, fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "4px 0 0" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}

// ---- LATEST REVIEWS ----
function LatestReviews() {
  return (
    <section style={{ padding: "80px 0", background: t.colors.white }}>
      <Wrap>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
          <SectionHead label="Real reviews" title="What customers are saying" sub="Verified reviews from real shippers — not bots, not paid placements."/>
          <Btn v="secondary" sz="md" icon={<Icons.Arrow s={16}/>}>Read All Reviews</Btn>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {reviewsData.map((r, i) => (
            <div key={i} style={{ background: t.colors.snow, border: `1px solid ${t.colors.mist}`, borderRadius: t.radii.lg, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <Stars rating={r.rating} s={13}/><span style={{ fontFamily: t.fonts.body, fontSize: 11.5, color: t.colors.slate }}>{r.date}</span>
              </div>
              <p style={{ fontFamily: t.fonts.display, fontWeight: 600, fontSize: 13.5, color: t.colors.charcoal, margin: "6px 0 0" }}>{r.company}</p>
              <p style={{ fontFamily: t.fonts.body, fontSize: 13.5, color: t.colors.graphite, lineHeight: 1.55, marginTop: 10, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>&ldquo;{r.text}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, paddingTop: 12, borderTop: `1px solid ${t.colors.mist}` }}>
                <div style={{ width: 28, height: 28, borderRadius: t.radii.full, background: `linear-gradient(135deg,${t.colors.azure},${t.colors.ocean})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: t.fonts.display, fontWeight: 700, fontSize: 12 }}>{r.author[0]}</div>
                <div><p style={{ fontFamily: t.fonts.display, fontWeight: 600, fontSize: 13, color: t.colors.charcoal, margin: 0 }}>{r.author}</p><p style={{ fontFamily: t.fonts.body, fontSize: 12, color: t.colors.slate, margin: 0 }}>{r.route}</p></div>
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

// ---- CUSTOMER STORIES ----
function CustomerStories() {
  return (
    <section style={{ padding: "80px 0", background: t.colors.snow }}>
      <Wrap>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
          <SectionHead label="Customer stories" title="Real experiences from real shippers" sub="Deeper stories that show the full journey — from first search to delivery."/>
          <Btn v="secondary" sz="md" icon={<Icons.Arrow s={16}/>} href="/stories">All Stories</Btn>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {storiesData.map((s, i) => (
            <div key={i} style={{ background: "#fff", border: `1.5px solid ${t.colors.cardBorder}`, borderRadius: t.radii.lg, overflow: "hidden", cursor: "pointer", transition: "all 0.3s" }}>
              <div style={{ height: 170, background: `linear-gradient(135deg, ${t.colors.navy}, ${t.colors.ocean})`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <span style={{ color: "rgba(255,255,255,0.08)", fontFamily: t.fonts.display, fontWeight: 800, fontSize: 80, letterSpacing: "-0.04em" }}>TV</span>
                {s.video && <div style={{ position: "absolute", bottom: 14, right: 14, width: 36, height: 36, borderRadius: t.radii.full, background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", color: t.colors.azure, boxShadow: t.shadows.md }}><Icons.Play s={14}/></div>}
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 16, color: t.colors.midnight, margin: 0, lineHeight: 1.3 }}>{s.headline}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, fontFamily: t.fonts.body, fontSize: 12.5, color: t.colors.slate }}><Icons.MapPin s={13}/>{s.route}<span style={{ margin: "0 2px" }}>·</span>{s.time}</div>
                <p style={{ fontFamily: t.fonts.body, fontSize: 13.5, color: t.colors.graphite, lineHeight: 1.55, marginTop: 10, marginBottom: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{s.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

// ---- TRUST SECTION ----
function TrustSection() {
  return (
    <section style={{ padding: "80px 0", background: t.colors.white }}>
      <Wrap>
        <SectionHead align="center" label="Why trust TransportVibe" title="Built on transparency, powered by real data" sub="We're not a broker. We don't sell leads. We help you make the right decision with real information."/>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[{ icon: <Icons.Shield s={28}/>, title: "Verified Companies", desc: "Every listed company is checked against MC/DOT databases. Verification badges mean real credentials, not paid placement.", color: t.colors.success, bg: t.colors.successLight },
            { icon: <Icons.Eye s={28}/>, title: "Moderated Reviews", desc: "Every review goes through moderation. We catch fakes, flag suspicious patterns, and protect the integrity of every rating.", color: t.colors.azure, bg: t.colors.ice },
            { icon: <Icons.Play s={28}/>, title: "Video Testimonials", desc: "Real customers sharing real experiences on camera. Video reviews are nearly impossible to fake — that's the point.", color: t.colors.danger, bg: t.colors.dangerLight },
            { icon: <Icons.Sparkle s={28}/>, title: "Transparent AI", desc: "Our Advisor explains every recommendation. You see the reasoning, the tradeoffs, and the confidence level — not a black box.", color: t.colors.amber, bg: t.colors.warningLight },
            { icon: <Icons.BarChart s={28}/>, title: "Data-Driven Scores", desc: "Trust scores come from real review data across multiple categories. No company can buy a higher rating. Period.", color: t.colors.ocean, bg: t.colors.ice },
            { icon: <Icons.FileText s={28}/>, title: "Written Commitments", desc: "Full Service includes written service guarantees. We put our promises in writing because that's how trust works.", color: t.colors.charcoal, bg: t.colors.mist },
          ].map((item, i) => (
            <div key={i} style={{ padding: 28, borderRadius: t.radii.lg, border: `1px solid ${t.colors.mist}`, background: t.colors.snow }}>
              <div style={{ width: 52, height: 52, borderRadius: t.radii.lg, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, marginBottom: 18 }}>{item.icon}</div>
              <h3 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 17, color: t.colors.midnight, margin: "0 0 8px" }}>{item.title}</h3>
              <p style={{ fontFamily: t.fonts.body, fontSize: 14, color: t.colors.graphite, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

// ---- REVIEW CTA ----
function ReviewCTA() {
  return (
    <section style={{ padding: "60px 0", background: t.colors.ice }}>
      <Wrap style={{ textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ width: 56, height: 56, borderRadius: t.radii.full, background: `linear-gradient(135deg,${t.colors.azure},${t.colors.ocean})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "#fff" }}><Icons.Star filled s={24}/></div>
          <h2 style={{ fontFamily: t.fonts.display, fontWeight: 800, fontSize: 28, color: t.colors.midnight, letterSpacing: "-0.02em", margin: 0 }}>Already shipped your car?</h2>
          <p style={{ fontFamily: t.fonts.body, fontSize: 16, color: t.colors.graphite, marginTop: 10, lineHeight: 1.6 }}>Your review helps the next customer make a better decision. Share your experience and help build trust in this industry.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}><Btn v="primary" sz="lg" icon={<Icons.Arrow s={18}/>} href="/review">Leave a Review</Btn><Btn v="secondary" sz="lg" href="/stories">Share Your Story</Btn></div>
        </div>
      </Wrap>
    </section>
  );
}

// ---- RESOURCES ----
function ResourcesPreview() {
  return (
    <section style={{ padding: "80px 0", background: t.colors.snow }}>
      <Wrap>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
          <SectionHead label="Resources" title="Learn before you ship" sub="Guides, tips, and insights to help you make the right decision."/>
          <Btn v="secondary" sz="md" icon={<Icons.Arrow s={16}/>} href="/resources">All Resources</Btn>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {guidesData.map((g, i) => (
            <div key={i} style={{ background: "#fff", border: `1px solid ${t.colors.cardBorder}`, borderRadius: t.radii.lg, padding: 22, cursor: "pointer" }}>
              <span style={{ fontFamily: t.fonts.display, fontWeight: 600, fontSize: 11.5, color: t.colors.azure, textTransform: "uppercase", letterSpacing: "0.06em" }}>{g.cat}</span>
              <h3 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 15.5, color: t.colors.midnight, margin: "8px 0 12px", lineHeight: 1.35 }}>{g.title}</h3>
              <span style={{ fontFamily: t.fonts.body, fontSize: 12.5, color: t.colors.slate }}>{g.time} read</span>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

// ---- FINAL CTA ----
function FinalCTA() {
  return (
    <section style={{ padding: "90px 0", background: `linear-gradient(165deg, ${t.colors.midnight} 0%, ${t.colors.ocean} 100%)`, textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}/>
      <Wrap style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: t.fonts.display, fontWeight: 800, fontSize: "clamp(28px,4vw,42px)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0 }}>Ready to ship with confidence?</h2>
          <p style={{ fontFamily: t.fonts.body, fontSize: 18, color: "rgba(255,255,255,0.65)", marginTop: 16, lineHeight: 1.6 }}>Compare trusted companies, get AI-powered recommendations, or let TransportVibe handle everything.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 32 }}><Btn v="white" sz="xl" icon={<Icons.Arrow s={18}/>} href="/compare">Compare Companies</Btn><Btn v="accent" sz="xl" href="/full-service">Full Service</Btn></div>
        </div>
      </Wrap>
    </section>
  );
}

// ---- PAGE ----
export default function HomePage() {
  return (
    <div style={{ background: t.colors.snow }}>
      <Nav activePage="Home"/>
      <Hero/>
      <HowItWorks/>
      <FeaturedCompanies/>
      <AdvisorPreview/>
      <FullServicePreview/>
      <LatestReviews/>
      <CustomerStories/>
      <TrustSection/>
      <ReviewCTA/>
      <ResourcesPreview/>
      <FinalCTA/>
      <Footer/>
    </div>
  );
}
