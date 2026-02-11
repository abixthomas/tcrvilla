"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Waves, Dumbbell, Car, Shield, Wifi, Zap,
    Trees, Armchair, Utensils, Sun, Droplets,
    Gamepad2, Library, GraduationCap
} from "lucide-react"

export function AmenitiesGrid({ property }) {
    // Robust Icon Mapping
    const getIcon = (amenity) => {
        const lower = amenity.toLowerCase()
        if (lower.includes("pool")) return Waves
        if (lower.includes("gym") || lower.includes("fitness")) return Dumbbell
        if (lower.includes("parking") || lower.includes("garage")) return Car
        if (lower.includes("security") || lower.includes("cctv")) return Shield
        if (lower.includes("wifi") || lower.includes("internet")) return Wifi
        if (lower.includes("power") || lower.includes("backup") || lower.includes("generator")) return Zap
        if (lower.includes("garden") || lower.includes("park") || lower.includes("lawn")) return Trees
        if (lower.includes("furniture") || lower.includes("furnished")) return Armchair
        if (lower.includes("kitchen") || lower.includes("dining")) return Utensils
        if (lower.includes("solar")) return Sun
        if (lower.includes("water")) return Droplets
        if (lower.includes("game") || lower.includes("play")) return Gamepad2
        if (lower.includes("library") || lower.includes("study")) return Library
        if (lower.includes("school") || lower.includes("university")) return GraduationCap

        return Zap // Default
    }

    const amenitiesList = property.amenities || [
        "Swimming Pool", "Modern Gym", "Covered Parking",
        "24/7 Security", "Private Garden", "Smart Home",
        "Power Backup", "Clubhouse", "Kids Play Area"
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <section className="py-8">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
                {amenitiesList.map((amenity, idx) => {
                    const Icon = getIcon(amenity)

                    return (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="group relative overflow-hidden bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 flex flex-col items-center text-center gap-3">
                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-white flex items-center justify-center text-gray-400 group-hover:text-secondary group-hover:scale-110 transition-all duration-300 shadow-sm border border-gray-100 group-hover:border-secondary/20">
                                    <Icon className="w-6 h-6 stroke-[1.5]" />
                                </div>

                                {/* Text */}
                                <h4 className="font-display font-medium text-gray-900 group-hover:text-primary transition-colors text-sm md:text-base">
                                    {amenity}
                                </h4>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-secondary/10 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                        </motion.div>
                    )
                })}
            </motion.div>
        </section>
    )
}
