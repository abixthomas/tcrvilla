"use client"

import React from "react"
import { motion } from "framer-motion"
import { Home, PenTool, Compass, Maximize, AppWindow, Layers, Ruler } from "lucide-react"

export function PropertyNarrative({ property }) {

    // Feature data driven by property type/data (Mocked for luxury feel where data is missing)
    const features = [
        {
            icon: <Ruler className="w-4 h-4 md:w-5 md:h-5" />,
            label: "Total Area",
            value: `${property.sqft} Sq.Ft`,
            desc: "Expansive carpet area"
        },
        {
            icon: <Compass className="w-4 h-4 md:w-5 md:h-5" />,
            label: "Orientation",
            value: "East Facing",
            desc: "Optimal morning sunlight"
        },
        {
            icon: <Layers className="w-4 h-4 md:w-5 md:h-5" />,
            label: "Flooring",
            value: "Italian Marble",
            desc: "Imported from Tuscany"
        },
        {
            icon: <AppWindow className="w-4 h-4 md:w-5 md:h-5" />,
            label: "Windows",
            value: "Floor to Ceiling",
            desc: "Double-glazed soundproof"
        }
    ]

    return (
        <section className="py-12 md:py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-6 md:space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-primary mb-4 leading-tight">
                                The Narrative of <br />
                                <span className="text-gradient-elite">Elevated Living.</span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 font-light text-balance">
                                Nestled in the heart of {property.location}'s most prestigious enclave, this
                                <span className="font-medium text-primary"> {property.type.toLowerCase()}</span> is a symphony of glass, steel, and warm tropical hardwoods.
                                Every corner has been curated to facilitate a lifestyle of effortless elegance and total privacy.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light text-balance">
                                Designed by award-winning architects, the open-plan layout bridges the gap between
                                indoor sanctuary and outdoor splendor, featuring floor-to-ceiling windows that capture
                                the golden hour perfectly.
                            </p>
                        </motion.div>

                        <div className="flex gap-4 items-center">
                            <div className="h-px bg-gray-200 flex-1" />
                            <span className="font-display italic text-gray-400 text-sm">Est. 2024</span>
                        </div>
                    </div>

                    {/* Right: Premium Detail Grid (Compact & Efficient) */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {/* Hero Feature Box */}
                        <motion.div
                            className="bg-primary text-white p-6 md:p-8 rounded-2xl col-span-2 relative overflow-hidden group min-h-[200px] flex flex-col justify-between"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -top-4 -right-4 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                                <Home className="w-32 h-32 md:w-40 md:h-40" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="font-display text-xl md:text-2xl mb-2">Architectural Identity</h3>
                                <p className="font-light text-white/80 text-xs md:text-sm mb-4 max-w-sm">
                                    Modern Dravidian fusion featuring tropical climate-responsive design.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                                <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] uppercase tracking-widest border border-white/10">Sustainable</span>
                                <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] uppercase tracking-widest border border-white/10">Smart Home</span>
                            </div>
                        </motion.div>

                        {/* Feature Grid Items */}
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-gray-50 p-4 md:p-5 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="mb-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{item.label}</h4>
                                    <div className="font-display text-base md:text-lg font-semibold text-gray-800 text-nowrap">{item.value}</div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Finishes Box */}
                        <motion.div
                            className="bg-secondary/5 border border-secondary/10 p-5 rounded-2xl col-span-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <PenTool className="w-4 h-4 text-secondary" />
                                <h4 className="font-display text-base font-semibold text-secondary">Premium Finishes</h4>
                            </div>
                            <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">
                                Curated with imported Italian marble flooring, Burmese teak woodwork,
                                and Kohler sanitary fittings.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
