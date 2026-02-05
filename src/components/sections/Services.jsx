"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, ShieldCheck, Landmark, PenTool, Home, Users, ArrowUpRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

// --- Data Configuration ---
const SERVICES = [
    {
        id: "01",
        title: "Valuation",
        fullTitle: "Property Valuation",
        desc: "AI-driven market analysis meets ground-truth expert verification.",
        icon: TrendingUp,
        color: "bg-blue-600",
        gradient: "from-blue-600/90 to-blue-900/90"
    },
    {
        id: "02",
        title: "Legal",
        fullTitle: "Legal Assistance",
        desc: "Ironclad documentation and title verification security.",
        icon: ShieldCheck,
        color: "bg-emerald-600",
        gradient: "from-emerald-600/90 to-emerald-900/90"
    },
    {
        id: "03",
        title: "Finance",
        fullTitle: "Home Loans",
        desc: "Exclusive interest rates from top-tier banking partners.",
        icon: Landmark,
        color: "bg-purple-600",
        gradient: "from-purple-600/90 to-purple-900/90"
    },
    {
        id: "04",
        title: "Interiors",
        fullTitle: "Interior Artistry",
        desc: "Transforming spaces into curated living experiences.",
        icon: PenTool,
        color: "bg-pink-600",
        gradient: "from-pink-600/90 to-pink-900/90"
    },
    {
        id: "05",
        title: "Vastu",
        fullTitle: "Vastu Shastra",
        desc: "Aligning energy flow for prosperity and peace.",
        icon: Home,
        color: "bg-amber-600",
        gradient: "from-amber-600/90 to-amber-900/90"
    },
    {
        id: "06",
        title: "NRI",
        fullTitle: "NRI Concierge",
        desc: "Remote asset management for the global citizen.",
        icon: Users,
        color: "bg-indigo-600",
        gradient: "from-indigo-600/90 to-indigo-900/90"
    }
]

export function Services() {
    // Default to the first one active on desktop
    const [activeId, setActiveId] = useState("01")

    return (
        <section id="services" className="py-24 bg-gray-50 overflow-hidden relative">

            {/* Header - Compact & Centered */}
            <div className="container mx-auto px-4 mb-16 text-center z-10 relative">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#ef4444] font-bold tracking-[0.2em] text-xs uppercase mb-2 block"
                >
                    Our Expertise
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-display font-medium text-gray-900"
                >
                    Service <span className="text-gray-400 italic">Ecosystem</span>
                </motion.h2>
            </div>

            {/* THE ACCORDION CONTAINER */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row h-auto md:h-[500px] gap-3 md:gap-2">

                    {SERVICES.map((service) => {
                        const isActive = activeId === service.id
                        const Icon = service.icon

                        return (
                            <motion.div
                                key={service.id}
                                layout
                                onClick={() => setActiveId(service.id)}
                                onHoverStart={() => setActiveId(service.id)}
                                className={cn(
                                    "relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                                    isActive
                                        ? "flex-[3.5] bg-white shadow-2xl ring-1 ring-black/5"
                                        : "flex-[1] bg-white/50 hover:bg-white shadow-sm hover:shadow-lg border border-transparent hover:border-gray-100"
                                )}
                                // Mobile: forced height behavior
                                style={{
                                    height: typeof window !== 'undefined' && window.innerWidth < 768 ? (isActive ? "300px" : "80px") : "100%"
                                }}
                            >
                                {/* ACTIVE STATE: Full Content */}
                                <AnimatePresence mode="popLayout">
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-10"
                                        >
                                            <div className="flex justify-between items-start">
                                                <div className={cn("p-4 rounded-2xl text-white shadow-lg", service.color)}>
                                                    <Icon className="w-8 h-8" />
                                                </div>
                                                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm group">
                                                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#ef4444] transition-colors" />
                                                </div>
                                            </div>

                                            <div>
                                                <motion.h3
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="text-2xl md:text-4xl font-display font-medium text-gray-900 mb-4"
                                                >
                                                    {service.fullTitle}
                                                </motion.h3>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="text-gray-500 text-lg leading-relaxed max-w-md font-interface"
                                                >
                                                    {service.desc}
                                                </motion.p>
                                            </div>

                                            {/* Decorative Number */}
                                            <span className="absolute top-4 right-4 text-9xl font-display font-bold text-gray-50 opacity-[0.04] pointer-events-none select-none">
                                                {service.id}
                                            </span>

                                            {/* Accent Gradient Line */}
                                            <div className={cn("absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r", service.gradient)} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* INACTIVE STATE: Vertical/Compact Label */}
                                <div className={cn(
                                    "absolute inset-0 z-0 flex items-center justify-center transition-opacity duration-300",
                                    isActive ? "opacity-0" : "opacity-100"
                                )}>
                                    {/* Desktop: Vertical Text */}
                                    <div className="hidden md:flex flex-col items-center gap-4">
                                        <span className="text-2xl font-display font-bold text-gray-300 transform -rotate-90 whitespace-nowrap">
                                            {service.title}
                                        </span>
                                        <div className="w-1 h-12 bg-gray-200 rounded-full" />
                                        <span className="text-gray-300 font-mono text-xs">{service.id}</span>
                                    </div>

                                    {/* Mobile: Horizontal Label */}
                                    <div className="md:hidden w-full px-6 flex items-center justify-between">
                                        <span className="text-xl font-display font-medium text-gray-500">
                                            {service.title}
                                        </span>
                                        <Plus className="w-5 h-5 text-gray-300" />
                                    </div>
                                </div>

                                {/* Hover Gradient Overlay for Inactive Cards */}
                                {!isActive && (
                                    <div className={cn(
                                        "absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br",
                                        service.gradient
                                    )} />
                                )}
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
