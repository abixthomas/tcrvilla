"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useRef } from "react"

export function JournalHero() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-[#1E3A8A] text-white h-[60vh] min-h-[550px]">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 bg-[#0B1120]"
            >
                <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
                    alt="Architectural Abstract"
                    className="w-full h-full object-cover object-center"
                />

            </motion.div>

            {/* Content - Brutalist Luxury */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 w-full h-full pt-36 md:pt-48 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl text-left"
                >
                    <div className="flex justify-start mb-4">
                        <span className="inline-block text-[#EF4444] font-bold tracking-[0.3em] uppercase text-xs drop-shadow-md">Since 1998</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium mb-4 leading-tight text-white drop-shadow-2xl">
                        Crafting <span className="italic text-[#EF4444] font-serif">Legacies</span>
                    </h1>

                    <p className="text-base md:text-lg text-white max-w-xl font-medium leading-relaxed drop-shadow-xl">
                        We don't just build homes; we curate the future of luxury living in the cultural capital of Kerala.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
