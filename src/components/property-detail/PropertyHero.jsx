"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin, BedDouble, Bath, Ruler, CheckCircle, Home, Calendar, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function PropertyHero({ property }) {
    const containerRef = useRef(null)
    const { scrollY } = useScroll()

    // Parallax effect for the background image
    const y = useTransform(scrollY, [0, 500], [0, 150])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    if (!property) return null

    // Helper to format price
    const formatPrice = (price) => {
        if (price >= 10000000) {
            return `₹ ${(price / 10000000).toFixed(2)} Cr`
        }
        return `₹ ${(price / 100000).toFixed(2)} L`
    }

    const stats = [
        { label: "Bedrooms", value: `${property.beds} BHK`, icon: BedDouble },
        { label: "Bathrooms", value: `${property.baths} Baths`, icon: Bath },
        { label: "Area", value: `${property.sqft} Sq.ft`, icon: Ruler },
        { label: "Type", value: property.type, icon: Home },
    ]

    // Use first image if available, else property.image
    const bgImage = (property.images && property.images.length > 0) ? property.images[0] : property.image

    return (
        <section ref={containerRef} className="relative h-[55vh] min-h-[500px] w-full overflow-hidden flex items-end bg-[#1E3A8A]">
            {/* Blueprint Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                {/* Diagonal lines for architectural feel */}
                <div className="absolute top-0 right-0 w-[500px] h-full border-l border-white/10 rotate-12 origin-top-right transform translate-x-20" />
                <div className="absolute top-0 right-0 w-[500px] h-full border-l border-white/10 -rotate-12 origin-top-right transform translate-x-40" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 md:px-6 relative z-30 pb-16">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-8">

                    {/* Left: Title & Stats */}
                    <div className="w-full lg:max-w-4xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            {/* Title */}
                            <h1 className="text-4xl md:text-6xl font-display font-medium text-white leading-tight">
                                {property.title}
                            </h1>

                            {/* Location (Hidden or subtle in this view? Keeping it for context) */}
                            {/* <div className="flex items-center gap-2 text-blue-200 text-lg">
                                <MapPin className="w-5 h-5" />
                                <span className="font-light">{property.location}, Thrissur</span>
                            </div> */}
                        </motion.div>

                        {/* Styled Stats Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center px-5 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:bg-white/10 transition-colors min-w-[180px]">
                                    {/* Red Icon Circle */}
                                    <div className="w-10 h-10 rounded-full bg-[#ef4444] flex items-center justify-center mr-4 shadow-md shrink-0">
                                        <stat.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-blue-200 mb-0.5">{stat.label}</p>
                                        <p className="text-xl font-display font-medium text-white leading-none pb-1">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Price */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-full lg:w-auto flex flex-col items-start lg:items-end mb-2"
                    >
                        <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">
                            {formatPrice(property.price)}
                        </div>
                        <p className="text-blue-200 text-xs tracking-wide">*Excluding registration & taxes</p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
