"use client"

import { motion } from "framer-motion"

export function PropertiesHero() {
    return (
        <section className="relative h-[40vh] min-h-[400px] overflow-hidden bg-[#0f172a] flex items-end pb-12">

            {/* Background Texture (Subtle Mesh - Reduced intensity) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full pt-44 pb-6 text-center">

                {/* 1. Header Content (Compact & Impactful) */}
                <div className="flex flex-col justify-center items-center w-full max-w-5xl">

                    {/* Adjusted Heading Wrapper for Single Line */}
                    <div className="relative mb-3 pb-1">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white tracking-tight leading-[1] drop-shadow-2xl flex flex-col md:flex-row items-center gap-x-3 md:gap-x-4"
                        >
                            <span>Discover</span>
                            <span className="italic font-light text-white/95" style={{ paddingBottom: '0.1em' }}>
                                True Luxury
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 max-w-2xl mt-1 text-base md:text-lg font-light leading-relaxed drop-shadow-md tracking-wide"
                    >
                        From architectural marvels to serene sanctuaries, find the home that reflects your legacy.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
