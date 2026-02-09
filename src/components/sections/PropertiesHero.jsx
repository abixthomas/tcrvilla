"use client"

import { motion } from "framer-motion"

export function PropertiesHero() {
    return (
        <section className="relative h-[45vh] min-h-[400px] overflow-hidden bg-[#0f172a] flex items-end pb-16">

            {/* Background Texture (Subtle Mesh - Reduced intensity) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col justify-end items-start lg:pl-12">

                {/* 1. Header Content (Compact & Impactful) */}
                <div className="flex flex-col justify-end items-start w-full max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="h-[1px] w-12 bg-secondary" />
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                            Exclusive Portfolio
                        </span>
                    </motion.div>

                    {/* Adjusted Heading Wrapper for Descenders */}
                    <div className="relative mb-4 pb-1">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="text-4xl md:text-6xl font-display font-medium text-white tracking-tight leading-tight"
                        >
                            <span className="block">Discover</span>
                            <span className="block italic font-light text-white/90" style={{ paddingBottom: '0.1em' }}>
                                True Luxury
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 max-w-xl mt-2 text-base font-light leading-relaxed border-l-2 border-white/10 pl-6"
                    >
                        From architectural marvels to serene sanctuaries, find the home that reflects your legacy.
                    </motion.p>
                </div>

            </div>
        </section>
    )
}
