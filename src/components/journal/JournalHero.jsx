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
        <section ref={containerRef} className="relative h-[85vh] overflow-hidden bg-[#1E3A8A] text-white">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/40 via-[#1E3A8A]/20 to-[#1E3A8A]" />
                <img
                    src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2000&auto=format&fit=crop"
                    alt="Architectural Abstract"
                    className="w-full h-full object-cover opacity-60"
                />
            </motion.div>

            {/* Content Content - Brutalist Luxury */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-[#EF4444]" />
                        <span className="uppercase tracking-[0.3em] text-sm font-bold text-slate-200">The Journal</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-medium leading-[1.1] mb-8 tracking-tight">
                        Curated Perspectives on <br />
                        <span className="italic font-light text-slate-300">Modern Living.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed mb-12">
                        An editorial deep dive into design philosophy, architectural trends, and the art of crafting legacy.
                    </p>

                    <div className="flex gap-4">
                        <span className="text-xs font-mono text-slate-400 border border-white/20 px-3 py-1 rounded-full">ISSUE 01</span>
                        <span className="text-xs font-mono text-slate-400 border border-white/20 px-3 py-1 rounded-full">EST. 2024</span>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-4 md:left-8"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest writing-vertical-rl text-slate-400">Scroll</span>
                        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                            <motion.div
                                animate={{ y: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className="absolute inset-0 w-full h-1/2 bg-[#EF4444]"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
