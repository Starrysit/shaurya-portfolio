import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaurya Sharma — Full Stack Developer & AI/ML Enthusiast",
  description:
    "Portfolio of Shaurya Sharma — Full Stack Developer and AI/ML Enthusiast based in Ghaziabad, India. Building scalable applications, intelligent systems, and premium digital experiences.",
  keywords: [
    "Shaurya Sharma",
    "Full Stack Developer",
    "AI ML Engineer",
    "React Developer",
    "Spring Boot",
    "Portfolio",
    "Ghaziabad",
    "India",
  ],
  authors: [{ name: "Shaurya Sharma" }],
  openGraph: {
    title: "Shaurya Sharma — Full Stack Developer",
    description: "Building scalable applications, intelligent systems, and premium digital experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaurya Sharma — Full Stack Developer",
    description: "Building scalable applications, intelligent systems, and premium digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
