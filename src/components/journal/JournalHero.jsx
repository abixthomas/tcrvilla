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
        <section ref={containerRef} className="relative h-[65vh] overflow-hidden bg-[#1E3A8A] text-white">
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
                {/* Overlay removed per user request for brightness/readability */}
            </motion.div>

            {/* Content Content - Brutalist Luxury */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl drop-shadow-2xl mt-12"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[2px] w-12 bg-[#EF4444]" />
                        <span className="uppercase tracking-[0.3em] text-sm font-bold text-white drop-shadow-md">The Journal</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-medium leading-[1.1] mb-8 tracking-tight drop-shadow-lg text-white">
                        Curated Perspectives on <br />
                        <span className="italic font-light text-slate-100">Modern Living.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white max-w-2xl font-light leading-relaxed mb-12 drop-shadow-md">
                        An editorial deep dive into design philosophy, architectural trends, and the art of crafting legacy.
                    </p>

                    <div className="flex gap-4">
                        <span className="text-xs font-mono text-white border border-white/40 px-3 py-1 rounded-full drop-shadow-sm bg-black/20 backdrop-blur-sm">ISSUE 01</span>
                        <span className="text-xs font-mono text-white border border-white/40 px-3 py-1 rounded-full drop-shadow-sm bg-black/20 backdrop-blur-sm">EST. 2024</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
