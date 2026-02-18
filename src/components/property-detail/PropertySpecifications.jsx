"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    BedDouble, Ruler, PencilRuler, Key,
    Settings, ShieldCheck, Wind, PenTool,
    CheckCircle2, ArrowRight
} from "lucide-react"

export function PropertySpecifications({ property }) {
    if (!property) return null

    // Variants for animations
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    }

    const itemRight = {
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0 }
    }

    return (
        <section className="py-12 md:py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-20">

                    {/* LEFT COLUMN: PREMIUM HIGHLIGHTS */}
                    <div className="w-full lg:w-1/2">
                        {/* Section Header */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-lg md:text-xl font-display font-bold text-primary tracking-wide uppercase">
                                Premium Highlights
                            </h3>
                        </div>

                        {/* List Items */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            className="space-y-8"
                        >
                            {/* Item 1: Bedroom */}
                            <motion.div variants={item} className="flex gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <BedDouble className="w-6 h-6 text-red-500 stroke-[1.5]" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 flex-wrap mb-1">
                                        <h4 className="text-lg font-bold text-primary">Spacious 4 Bedroom Villa</h4>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                                            Luxury
                                        </span>
                                    </div>
                                    <p className="text-gray-500 font-light text-sm">Master bedroom with walk-in closet and en-suite.</p>
                                </div>
                            </motion.div>

                            {/* Item 2: Area */}
                            <motion.div variants={item} className="flex gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Ruler className="w-6 h-6 text-blue-500 stroke-[1.5]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">
                                        {property.sqft || "1880"} sqft Modern Living Space
                                    </h4>
                                    <p className="text-gray-500 font-light text-sm mb-2">Open concept design with double-height ceiling.</p>
                                    <button className="text-secondary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                        View Floor Plan <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Item 3: Architecture */}
                            <motion.div variants={item} className="flex gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <PencilRuler className="w-6 h-6 text-gray-600 stroke-[1.5]" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 flex-wrap mb-1">
                                        <h4 className="text-lg font-bold text-primary">Contemporary Kerala Architecture</h4>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 border border-gray-200">
                                            Designer Certified
                                        </span>
                                    </div>
                                    <p className="text-gray-500 font-light text-sm">Designed for tropical climate with optimal airflow.</p>
                                </div>
                            </motion.div>

                            {/* Item 4: Ready Status */}
                            <motion.div variants={item} className="flex gap-5 group">
                                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Key className="w-6 h-6 text-green-500 stroke-[1.5]" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 flex-wrap mb-1">
                                        <h4 className="text-lg font-bold text-primary">Ready to Occupy Immediately</h4>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 border border-green-200">
                                            Move-In Ready
                                        </span>
                                    </div>
                                    <p className="text-gray-500 font-light text-sm">Handover in 2 weeks.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: SPECIFICATIONS */}
                    <div className="w-full lg:w-1/2">
                        {/* Section Header */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <Settings className="w-5 h-5 text-gray-700" />
                            </div>
                            <h3 className="text-lg md:text-xl font-display font-bold text-primary tracking-wide uppercase">
                                Specifications
                            </h3>
                        </div>

                        {/* Spec Cards */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            className="space-y-4"
                        >
                            {/* Card 1 */}
                            <motion.div variants={itemRight} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors group">
                                <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-primary">Premium Bathroom Fittings</h5>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-medium text-gray-500">Kohler</span>
                                        <span className="px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-medium text-gray-500">Jaquar</span>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm font-light">Luxury touches with rain showers and wall-hung closets.</p>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div variants={itemRight} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors group">
                                <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-primary">Excellent Ventilation System</h5>
                                </div>
                                <p className="text-gray-500 text-sm font-light">Cross-ventilation design ensuring fresh air circulation in all rooms.</p>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div variants={itemRight} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors group">
                                <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-primary">Structural Highlights</h5>
                                </div>
                                <p className="text-gray-500 text-sm font-light">Earthquake resistant RCC framed structure with high-grade concrete.</p>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
