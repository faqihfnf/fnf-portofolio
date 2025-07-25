import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/src/components/ui/navbar";
import Footer from "@/src/components/ui/footer";
import ReduxProvider from "@/src/components/ReduxProvider";
import { Toaster } from "@/src/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Faqih Nur Fahmi - Portfolio",
  description: "Faqih Nur Fahmi Portfolio - A passionate full-stack developer creating amazing web experiences",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${poppins.className}`}>
        {/* ✅ Bungkus semuanya dalam komponen client */}
        <ReduxProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Toaster />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
