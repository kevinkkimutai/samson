import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Client Solutions & Servicing Executive | Samson Mburu",
  description:
    "Showcasing expertise in client solutions, business optimization, and service excellence. Connect to collaborate on innovative business strategies.",
  keywords: "Samson Mburu, client solutions, servicing executive, business strategies, customer experience, service management",
  author: "Kelvin Kimutai",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Samson Mburu | Client Solutions & Servicing Executive",
    description:
      "Explore expertise in client solutions, customer service, and business optimization. Connect for collaboration opportunities.",
    url: "https://samson.tau.vercel.app",
    siteName: "Client Solutions & Servicing Executive",
    images: [
      {
        url: "https://samson.tau.vercel.app/sam.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Samson Mburu | Client Solutions & Servicing Executive",
    description:
      "Expert in client solutions, business strategies, and service excellence. Let's collaborate!",
    images: ["https://samson.tau.vercel.app/sam.png"],
  },
  robots: "index, follow",
  canonical: "https://samson.tau.vercel.app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
      <main>
      {children}
      </main>
        <Footer />
      </body>
    </html>
  );
}
