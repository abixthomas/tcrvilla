import { Inter, Montserrat, Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: {
    default: "Thrissur Lands | Premium Land Deals in Thrissur, Kerala",
    template: "%s | Thrissur Lands",
  },
  description:
    "Discover premium land plots for sale in Thrissur, Kerala. Residential, commercial, and investment properties with expert guidance. Your trusted land partner in the cultural capital of Kerala.",
  keywords: [
    "land for sale thrissur",
    "plots thrissur kerala",
    "buy land thrissur",
    "real estate thrissur",
    "plots for sale thrissur",
    "investment land kerala",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Thrissur Lands",
    title: "Thrissur Lands | Premium Land Deals",
    description: "Your trusted partner for premium land deals in Thrissur, Kerala.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased subpixel-antialiased overflow-x-hidden",
          inter.variable,
          montserrat.variable,
          cormorant.variable
        )}
      >
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </LenisProvider>
      </body>
    </html>
  );
}
