"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Zap, Leaf, ShieldCheck, Waves,
    Wind, Sun, Smartphone, Wifi
} from "lucide-react"

export function PropertyHighlights({ property }) {

    const highlights = [
        {
            title: "Dravidian Modernism",
            desc: "Fusion of traditional Kerala architecture with contemporary minimalism.",
            icon: Wind,
            colSpan: "col-span-1 md:col-span-2",
            bg: "bg-gradient-to-br from-orange-50 to-orange-100/50",
            border: "border-orange-100",
            iconColor: "text-orange-500"
        },
        {
            title: "Smart Ecosystem",
            desc: "Fully integrated home automation.",
            icon: Smartphone,
            colSpan: "col-span-1",
            bg: "bg-gradient-to-br from-blue-50 to-blue-100/50",
            border: "border-blue-100",
            iconColor: "text-blue-500"
        },
        {
            title: "Sustainability",
            desc: "Solar powered with rainwater harvesting.",
            icon: Leaf,
            colSpan: "col-span-1",
            bg: "bg-gradient-to-br from-green-50 to-green-100/50",
            border: "border-green-100",
            iconColor: "text-green-500"
        },
        {
            title: "Private Oasis",
            desc: "Infinity pool with temperature control.",
            icon: Waves,
            colSpan: "col-span-1 md:col-span-2",
            bg: "bg-gradient-to-br from-cyan-50 to-cyan-100/50",
            border: "border-cyan-100",
            iconColor: "text-cyan-500"
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    }

    return (
        <section className="py-12 md:py-16 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex items-center gap-2 mb-8">
                    <span className="w-8 h-[2px] bg-secondary" />
                    <span className="text-secondary font-bold uppercase tracking-widest text-xs">Highlights</span>
                </div>

                <div className="mb-12 max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-display font-medium text-primary mb-4">
                        Curated for the <span className="text-gradient-elite">Exceptional.</span>
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                        Beyond the specifications, discover the lifestyle features that make this property truly unique.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
                >
                    {highlights.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className={`relative overflow-hidden rounded-3xl p-6 md:p-8 ${feature.colSpan} ${feature.bg} border ${feature.border} group`}
                        >
                            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                                <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-6 h-6 stroke-[1.5]" />
                                </div>

                                <div>
                                    <h4 className="font-display text-xl font-semibold text-primary mb-2">{feature.title}</h4>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Background Icon */}
                            <feature.icon className={`absolute -bottom-4 -right-4 w-32 h-32 ${feature.iconColor} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
