import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
