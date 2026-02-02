
import { Montserrat, Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Montserrat({
  variable: "--font-serif",
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
          "min-h-screen bg-background font-sans antialiased",
          sans.variable,
          serif.variable
        )}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
