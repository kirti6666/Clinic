import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DermisPro Skin Hair Laser Clinic",
  description: "Expert hands, compassionate care for your skin, hair, and anti-aging needs.",
};

import BookingModal from "@/components/BookingModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`} style={{ scrollBehavior: 'smooth' }}>
      <body className="min-h-full flex flex-col bg-ivory text-deep-forest font-sans">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingChatbot />
        <BookingModal />
      </body>
    </html>
  );
}

