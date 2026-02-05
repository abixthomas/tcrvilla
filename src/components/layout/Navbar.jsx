"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, Globe, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import ThrissurVillasLogo from "@/components/brand/Logo"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "#services" },
    { name: "NRI Corner", href: "#nri-corner" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()

    // Handle scroll effect
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            {/* Top Bar - Corporate/Premium Feel */}
            <div className={cn(
                "fixed top-0 left-0 right-0 z-[60] py-2 px-4 transition-transform duration-300 hidden md:block",
                isScrolled ? "-translate-y-full" : "bg-primary text-white translate-y-0"
            )}>
                <div className="container mx-auto flex justify-between items-center text-xs tracking-wider opacity-90">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Phone className="h-3 w-3 text-secondary" /> +91 9846 123 456</span>
                        <span className="flex items-center gap-2"><Mail className="h-3 w-3 text-secondary" /> hello@thrissurvillas.com</span>
                    </div>
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2 cursor-pointer hover:text-secondary transition-colors"><Globe className="h-3 w-3" /> NRI Services</span>
                        <span className="text-secondary font-bold uppercase">The Gold Standard in Real Estate</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header
                className={cn(
                    "fixed left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "top-0 bg-white/95 backdrop-blur-md shadow-lg py-3"
                        : "top-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/" className="flex flex-col group">
                        <div className="flex items-center gap-3">
                            {/* Image Logo */}
                            <div className="flex items-center space-x-2 pl-1">
                                <ThrissurVillasLogo variant="header" />
                            </div>
                        </div>
                        {/* Tagline for Mobile/Scrolled state could be hidden or adapted */}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-sm p-1 rounded-full border border-white/10 shadow-inner md:bg-transparent md:border-none md:shadow-none md:backdrop-blur-none">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden",
                                    pathname === item.href
                                        ? "text-white bg-primary shadow-md"
                                        : isScrolled
                                            ? "text-gray-600 hover:text-primary hover:bg-gray-100"
                                            : "text-white/90 hover:bg-white/20 hover:text-white"
                                )}
                            >
                                <span className="relative z-10">{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            className={cn(
                                "rounded-full shadow-lg font-bold tracking-wide transition-all transform hover:scale-105",
                                isScrolled
                                    ? "bg-secondary text-white hover:bg-secondary/90"
                                    : "bg-white text-primary hover:bg-gray-100"
                            )}
                        >
                            Post Free Ad
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "md:hidden p-2 rounded-md transition-colors",
                            isScrolled ? "text-gray-800" : "text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white border-t border-gray-100 md:hidden overflow-hidden"
                        >
                            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100 last:border-none flex justify-between items-center"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                        <ChevronDown className="h-4 w-4 -rotate-90 text-gray-400" />
                                    </Link>
                                ))}
                                <Button className="w-full mt-4 bg-primary text-white">
                                    Post Free Ad
                                </Button>
                                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                                    <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-2">Contact Us</p>
                                    <p className="text-gray-700 font-medium">+91 9846 123 456</p>
                                    <p className="text-gray-700 font-medium">hello@thrissurvillas.com</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    )
}