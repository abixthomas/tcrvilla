"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Building, MapPin, Award, Zap, Star } from "lucide-react"

const milestones = [
    {
        year: "1998",
        title: "The First Brick",
        description: "Founding the Vision. Starting with a single blueprint and a promise of uncompromising quality in the heart of Thrissur.",
        icon: Building,
        align: "right"
    },
    {
        year: "2005",
        title: "Iconic Landmarks",
        description: "Completion of our first premium gated community, setting a new standard for elite projects in Kerala.",
        icon: MapPin,
        align: "left"
    },
    {
        year: "2015",
        title: "The Green Revolution",
        description: "Sustainable Luxury. Integrating smart home tech and eco-friendly architecture into every master plan.",
        icon: Zap,
        align: "right"
    },
    {
        year: "2024",
        title: "Future Horizons",
        description: "Leading the digital transformation of luxury real estate management and virtual experiences.",
        icon: Star,
        align: "left"
    }
]

export function GenesisTimeline() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-medium text-primary"
                    >
                        Our <span className="border-b-2 border-secondary pb-2">Genesis</span>
                    </motion.h2>
                </div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* Background Vertical Line (Gray) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden md:block rounded-full" />

                    {/* Animated Filled Line (Colored) */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary via-primary to-secondary -translate-x-1/2 hidden md:block rounded-full z-0"
                    />

                    {milestones.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mb-20 relative ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: item.align === 'left' ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`w-full md:w-5/12 ${item.align === 'left' ? 'text-center md:text-right' : 'text-center md:text-left'} relative z-10`}
                                >
                                    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-secondary/30 transition-all duration-500 group">
                                        <span className="text-secondary font-bold text-lg mb-2 block tracking-widest uppercase">{item.year}</span>
                                        <h3 className="text-2xl font-bold mb-3 font-display text-primary">{item.title}</h3>
                                        <p className="text-slate-500 leading-relaxed text-sm md:text-base font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Center Node (Desktop) */}
                                <motion.div
                                    initial={{ scale: 0, backgroundColor: "#fff" }}
                                    whileInView={{ scale: 1, backgroundColor: "#fff" }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-14 h-14 rounded-full border-[4px] border-white shadow-lg z-10 bg-white"
                                >
                                    <motion.div
                                        whileInView={{
                                            backgroundColor: ["#fff", "#f8fafc", "#e2e8f0"],
                                            borderColor: ["#e2e8f0", "#dbeafe", "#0f172a"],
                                            boxShadow: ["0 0 0px rgba(15, 23, 42, 0)", "0 0 20px rgba(15, 23, 42, 0.2)"],
                                            scale: [1, 1.1, 1]
                                        }}
                                        viewport={{ margin: "-50% 0px -50% 0px" }} // Triggers exactly when centered
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="w-full h-full rounded-full flex items-center justify-center border-2 border-slate-200 bg-white"
                                    >
                                        <Icon className="w-6 h-6 text-primary drop-shadow-md" />
                                    </motion.div>
                                </motion.div>

                                {/* Empty Side for Balance */}
                                <div className="w-full md:w-5/12 hidden md:block" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
