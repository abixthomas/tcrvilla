"use client"

import React from "react"
import { motion } from "framer-motion"
import { Waves, Dumbbell, Car, Shield, Wifi, Zap } from "lucide-react"

export function AmenitiesEcosystem({ property }) {
    // Map amenities to icons (Basic mapping, can be expanded)
    const getIcon = (amenity) => {
        const lower = amenity.toLowerCase()
        if (lower.includes("pool")) return <Waves className="w-6 h-6" />
        if (lower.includes("gym")) return <Dumbbell className="w-6 h-6" />
        if (lower.includes("parking")) return <Car className="w-6 h-6" />
        if (lower.includes("security")) return <Shield className="w-6 h-6" />
        if (lower.includes("wifi") || lower.includes("wi-fi")) return <Wifi className="w-6 h-6" />
        return <Zap className="w-6 h-6" />
    }

    const amenitiesList = property.amenities || ["Swimming Pool", "Gym", "Parking", "24/7 Security"]

    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-4">
                        Amenities Ecosystem
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-light">
                        A curated vision of comfort and leisure, where every facility is just a heartbeat away
                        from your central living space.
                    </p>
                </div>

                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Central Hub */}
                    <motion.div
                        className="w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-2xl z-20 relative"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <div className="text-center text-white">
                            <span className="block text-3xl font-display font-bold">40+</span>
                            <span className="text-[10px] uppercase tracking-widest font-medium">Features</span>
                        </div>
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    </motion.div>

                    {/* Orbit Ring 1 */}
                    <div className="absolute w-[300px] h-[300px] border border-dashed border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />

                    {/* Orbit Ring 2 */}
                    <div className="absolute w-[500px] h-[500px] border border-primary/10 rounded-full" />

                    {/* Orbiting Items */}
                    {amenitiesList.slice(0, 6).map((amenity, index) => {
                        const angle = (index * (360 / 6)) * (Math.PI / 180)
                        const radius = 200 // Distance from center
                        const x = Math.cos(angle) * radius
                        const y = Math.sin(angle) * radius

                        return (
                            <motion.div
                                key={index}
                                className="absolute flex flex-col items-center gap-2"
                                style={{ x, y }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors duration-300 cursor-pointer group">
                                    {getIcon(amenity)}
                                </div>
                                <span className="text-sm font-medium text-gray-600 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
                                    {amenity}
                                </span>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
