import "./globals.css";

export const metadata = {
  title: "TransportVibe — Find the Right Way to Ship Your Car",
  description: "Compare trusted auto transport companies, get AI-powered recommendations, and ship with confidence. Real reviews, real trust scores, real guidance.",
  keywords: "car shipping, auto transport, vehicle shipping, car shipping reviews, auto transport comparison",
  openGraph: {
    title: "TransportVibe — Find the Right Way to Ship Your Car",
    description: "Compare trusted auto transport companies, get AI-powered recommendations, and ship with confidence.",
    type: "website",
    siteName: "TransportVibe",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
