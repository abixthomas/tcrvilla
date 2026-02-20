"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function AboutHero() {
    return (
        <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like feel (fixed) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
                    alt="Luxury Villa Legacy"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-start text-left text-white pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <span className="inline-block text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 drop-shadow-md">Since 1998</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium mb-4 leading-tight drop-shadow-2xl text-white">
                        Crafting <span className="italic text-secondary font-serif">Legacies</span>
                    </h1>
                    <p className="text-base md:text-lg text-white max-w-xl font-medium leading-relaxed drop-shadow-xl">
                        We don't just build homes; we curate the future of luxury living in the cultural capital of Kerala.
                    </p>
                </motion.div>
            </div>


            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    )
}
