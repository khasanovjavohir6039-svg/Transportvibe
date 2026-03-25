// ============================================================
// SAMPLE DATA — Replace with real data / API calls later
// ============================================================

export const companies = [
  { id: "prestige-auto-transport", name: "Prestige Auto Transport", rating: 4.8, reviews: 312, badges: ["verified", "topReviewed", "premiumExperience"], desc: "Premium enclosed and open transport with dedicated support. Known for luxury and classic vehicle shipping nationwide.", areas: "Nationwide", types: ["Open", "Enclosed"], featured: true },
  { id: "highway-express-carriers", name: "Highway Express Carriers", rating: 4.5, reviews: 189, badges: ["verified", "fastResponse"], desc: "Fast, reliable open transport across all 50 states. Competitive pricing with consistent communication updates.", areas: "All 50 States", types: ["Open"], featured: false },
  { id: "guardian-auto-shipping", name: "Guardian Auto Shipping", rating: 4.7, reviews: 247, badges: ["verified", "customerFavorite", "strongSupport"], desc: "Customer-first approach with industry-leading communication. Strong insurance coverage and on-time delivery record.", areas: "Continental US", types: ["Open", "Enclosed"], featured: true },
  { id: "summit-vehicle-logistics", name: "Summit Vehicle Logistics", rating: 4.6, reviews: 198, badges: ["verified", "strongSupport"], desc: "Specializing in cross-country moves with real-time tracking. Transparent pricing with no hidden fees.", areas: "Coast to Coast", types: ["Open"], featured: false },
  { id: "atlas-car-movers", name: "Atlas Car Movers", rating: 4.4, reviews: 156, badges: ["verified", "fastResponse"], desc: "Budget-friendly open transport with reliable service. Great option for standard vehicles on popular routes.", areas: "Lower 48", types: ["Open"], featured: false },
  { id: "elite-enclosed-transport", name: "Elite Enclosed Transport", rating: 4.9, reviews: 134, badges: ["verified", "premiumExperience", "topReviewed"], desc: "White-glove enclosed transport for luxury, exotic, and classic vehicles. Premium handling from pickup to delivery.", areas: "Nationwide", types: ["Enclosed"], featured: true },
  { id: "pacific-coast-auto-movers", name: "Pacific Coast Auto Movers", rating: 4.3, reviews: 98, badges: ["verified"], desc: "West Coast specialist with strong coverage from California to Washington. Reliable open transport at fair prices.", areas: "West Coast", types: ["Open"], featured: false },
  { id: "sunshine-state-transport", name: "Sunshine State Transport", rating: 4.6, reviews: 221, badges: ["verified", "customerFavorite"], desc: "Florida-based carrier with nationwide reach. Particularly strong on East Coast corridors and snowbird routes.", areas: "East Coast + Nationwide", types: ["Open", "Enclosed"], featured: false },
  { id: "veteran-auto-logistics", name: "Veteran Auto Logistics", rating: 4.7, reviews: 176, badges: ["verified", "strongSupport", "topReviewed"], desc: "Veteran-owned and operated. Military-grade discipline applied to vehicle transport. Exceptional communication.", areas: "Nationwide", types: ["Open", "Enclosed"], featured: false },
  { id: "diamond-car-carriers", name: "Diamond Car Carriers", rating: 4.5, reviews: 143, badges: ["verified", "fastResponse"], desc: "Known for fast pickups and competitive pricing. Strong network of carriers covering all major corridors.", areas: "Continental US", types: ["Open"], featured: false },
  { id: "national-auto-shipping", name: "National Auto Shipping", rating: 4.2, reviews: 267, badges: ["verified"], desc: "High-volume broker with extensive carrier network. Wide coverage with budget-friendly pricing options.", areas: "All 50 States", types: ["Open", "Enclosed"], featured: false },
  { id: "pinnacle-vehicle-transport", name: "Pinnacle Vehicle Transport", rating: 4.8, reviews: 89, badges: ["verified", "premiumExperience"], desc: "Boutique transport service for high-value vehicles. Personalized attention with dedicated transport coordinators.", areas: "Nationwide", types: ["Enclosed"], featured: true },
];

export const reviewsData = [
  { rating: 5, company: "Prestige Auto Transport", date: "Mar 14, 2026", text: "Shipped my 1967 Mustang from California to New York in enclosed transport. Communication was incredible — got updates at every stage. Car arrived in perfect condition.", author: "Michael R.", route: "CA → NY" },
  { rating: 4.5, company: "Highway Express Carriers", date: "Mar 10, 2026", text: "Great value for the price. Pickup was one day late but delivery was right on time. Would use again for standard open transport.", author: "Sarah T.", route: "TX → FL" },
  { rating: 5, company: "Guardian Auto Shipping", date: "Mar 8, 2026", text: "First time shipping a car and they made it completely stress-free. Answered all my questions within minutes. Highly recommend.", author: "David K.", route: "IL → AZ" },
  { rating: 4, company: "Summit Vehicle Logistics", date: "Mar 5, 2026", text: "Solid service overall. The real-time tracking was a nice touch. Price was exactly as quoted with no surprises at delivery.", author: "Lisa M.", route: "WA → GA" },
];

export const storiesData = [
  { headline: "How I Shipped My Classic Corvette Across the Country", route: "Los Angeles, CA → Miami, FL", time: "5 min", excerpt: "When I inherited my grandfather's 1963 Corvette, I needed to ship it safely across the country...", video: true },
  { headline: "First-Time Shipper: What I Wish I Knew Before", route: "Chicago, IL → Portland, OR", time: "4 min", excerpt: "I had no idea what to expect. After comparing three companies and using the Advisor...", video: false },
  { headline: "Shipping a Tesla: Open vs Enclosed Transport", route: "Austin, TX → Seattle, WA", time: "6 min", excerpt: "I spent two weeks researching whether my Model S needed enclosed transport...", video: true },
];

export const guidesData = [
  { title: "How to Ship a Car: The Complete 2026 Guide", cat: "Guide", time: "12 min" },
  { title: "Open vs Enclosed Transport: Which Is Right?", cat: "Guide", time: "8 min" },
  { title: "10 Red Flags When Choosing a Shipping Company", cat: "Blog", time: "6 min" },
  { title: "Understanding Car Shipping Pricing", cat: "Blog", time: "7 min" },
];
