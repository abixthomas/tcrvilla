"use client"

import { motion, AnimatePresence } from "framer-motion"
import { HeroSearch } from "./HeroSearch"
import { useState, useEffect } from "react"
import { ArrowRight, Star } from "lucide-react"

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
]

export function Hero() {
    const [currentImage, setCurrentImage] = useState(0)
    const [prevImage, setPrevImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((current) => {
                setPrevImage(current)
                return (current + 1) % HERO_IMAGES.length
            })
        }, 7000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section
            className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gray-900"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >

            {/* STATIC FALLBACK (Immediate Load) - Using direct IMG tag for browser preloader priority */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HERO_IMAGES[0]}
                    alt="Background Fallback"
                    className="w-full h-full object-cover"
                    loading="eager"
                    priority="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
            </div>

            {/* Dynamic Background Slider - Stacked Approach */}
            <div className="absolute inset-0 z-0">
                {HERO_IMAGES.map((img, idx) => (
                    <motion.div
                        key={idx}
                        style={{ zIndex: idx === currentImage ? 2 : 1 }}
                        initial={false} // Disable initial animation to prevent flash
                        animate={{
                            opacity: idx === currentImage ? 1 : 0,
                            scale: idx === currentImage ? 1.05 : 1.15,
                        }}
                        transition={{
                            opacity: { duration: 1.5, ease: "easeInOut" },
                            scale: { duration: 7, ease: "linear" }
                        }}
                        className="absolute inset-0"
                    >
                        <img
                            src={img}
                            alt={`Luxury Slide ${idx}`}
                            loading="eager"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
                    </motion.div>
                ))}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none z-20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center pt-24 md:pt-32"
                >
                    {/* Badge Removed */}


                    {/* Main Heading with Premium Typography */}
                    <h1
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 leading-[1.1] tracking-tight text-balance"
                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
                    >
                        Discover Your <br />
                        <span className="text-white italic font-normal">Dream Sanctuary</span>
                    </h1>

                    {/* Subheading Removed as per request */}

                    {/* Search Component Wrapper */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="w-full max-w-4xl"
                    >
                        <HeroSearch />
                    </motion.div>

                    {/* Integrated Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="mt-16 hidden md:grid grid-cols-3 divide-x divide-white/10 bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-8 py-6 w-full max-w-3xl shadow-2xl"
                    >
                        {[
                            { label: "Active Listings", value: "500+" },
                            { label: "Trusted Agents", value: "50+" },
                            { label: "Happy Families", value: "1.2k+" },
                        ].map((stat, i) => (
                            <div key={i} className="px-8 text-center group hover:bg-white/5 transition-colors rounded-lg py-2">
                                <div className="text-4xl font-display font-medium text-white mb-1 group-hover:text-secondary transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {HERO_IMAGES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === idx ? "w-8 bg-secondary" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
