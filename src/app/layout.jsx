
import { Inter, Montserrat, Playfair_Display } from "next/font/google"; // Swapped Open_Sans for Inter
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";

import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/providers/LenisProvider";

// Body Component - Tall x-height for max legibility
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Interface Component - Geometric for UI Controls
const montserrat = Montserrat({
  variable: "--font-interface", // Renamed from serif to specific UI role
  subsets: ["latin"],
  display: "swap",
});

// Heading Component - Editorial Serif
const playfair = Playfair_Display({
  variable: "--font-luxury", // Renamed for clarity
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Thrissur Villas | Premium Real Estate",
  description: "The most trusted real estate platform in Thrissur. Buy, sell, and rent luxury properties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased subpixel-antialiased", // Added subpixel-antialiased
          inter.variable,
          montserrat.variable,
          playfair.variable
        )}
      >
        <LenisProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
