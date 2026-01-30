"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { HeroSearch } from "./HeroSearch"
import { useRef } from "react"

export function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    return (
        <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background with Parallax/Zoom effect */}
            <motion.div
                style={{ y, scale, opacity }}
                className="absolute inset-0 z-0"
            >
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-full h-full relative"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full"
                        poster="https://images.unsplash.com/photo-1600596542815-2a4d04774c13?q=80&w=2075&auto=format&fit=crop"
                    >
                        <source src="https://videos.pexels.com/video-files/3770033/3770033-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                        <img
                            src="https://images.unsplash.com/photo-1600596542815-2a4d04774c13?q=80&w=2075&auto=format&fit=crop"
                            alt="Luxury Villa in Kerala"
                            className="object-cover w-full h-full"
                        />
                    </video>
                    {/* Enhanced Overlay with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-black/20 to-black/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse" />
                </motion.div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="inline-block border border-white/20 backdrop-blur-md rounded-full px-4 py-1 mb-6 bg-white/5"
                    >
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">The Gold Standard in Real Estate</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "-0.02em" }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                        className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-6 tracking-tight drop-shadow-2xl leading-none"
                    >
                        Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-amber-200 to-secondary animate-gradient-x bg-[length:200%_auto]">Beyond</span> <br />
                        Boundaries
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-lg md:text-2xl text-gray-200/90 max-w-3xl mx-auto font-light leading-relaxed font-sans"
                    >
                        Curating the finest waterfront villas and sky-high residences in Thrissur.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.5, type: "spring", bounce: 0.4 }}
                >
                    <HeroSearch />
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="mt-20 hidden md:inline-flex flex-wrap justify-center gap-12 md:gap-24 text-center border-t border-white/10 pt-8 backdrop-blur-md bg-black/10 rounded-full px-16 py-6 border border-white/5"
                >
                    {[
                        { label: "Active Listings", value: "500+" },
                        { label: "Trusted Agents", value: "50+" },
                        { label: "Happy Families", value: "1200+" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col transform hover:scale-110 transition-transform duration-300 group">
                            <span className="text-3xl md:text-4xl font-bold text-white font-serif group-hover:text-secondary transition-colors">{stat.value}</span>
                            <span className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em] mt-1">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
            >
                <span className="text-[10px] uppercase tracking-widest mb-2">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    )
}
