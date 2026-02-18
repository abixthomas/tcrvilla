"use client"

import React from "react"
import { motion } from "framer-motion"
import { MapPin, BedDouble, Bath, Ruler, CheckCircle, Home, Calendar } from "lucide-react"

export function PropertyHero({ property }) {
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
        { label: "Built", value: "2024", icon: Calendar },
    ]

    return (
        <section className="bg-white border-b border-gray-100 pt-32 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">

                    {/* Left: Title & Location */}
                    <div className="space-y-4 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3"
                        >

                            {property.featured && (
                                <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-emerald-100">
                                    <CheckCircle className="w-3 h-3" />
                                    Verified Property
                                </span>
                            )}
                        </motion.div>

                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl font-display font-medium text-primary leading-tight mb-3"
                            >
                                {property.title}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-2 text-gray-500"
                            >
                                <MapPin className="w-4 h-4 text-secondary" />
                                <span className="text-base font-medium">{property.location}, Thrissur</span>
                            </motion.div>
                        </div>

                        {/* Quick Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-2"
                        >
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
                                        <stat.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
                                        <p className="text-sm font-bold text-primary">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Price - Simplified & Minimal */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-start lg:items-end lg:min-w-[280px]"
                    >
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Asking Price</span>
                        <div className="text-4xl md:text-5xl font-display font-medium text-primary mb-1">
                            {formatPrice(property.price)}
                        </div>
                        <p className="text-gray-400 text-[10px]">*Excluding registration fees</p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
