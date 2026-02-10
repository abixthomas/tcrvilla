"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, MapPin, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PropertyHero({ property }) {

    return (
        <section className="bg-white">
            {/* 1. Cinematic Hero (Solid Background) */}
            <div className="relative h-[40vh] min-h-[400px] overflow-hidden bg-[#0f172a] flex items-end pb-12 group">

                {/* Background Texture (Blobs) */}
                <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                </div>

                {/* Content (Centered & Cinematic) */}
                <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full pt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white tracking-tight leading-[1] drop-shadow-2xl mb-4">
                            {property.title}
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4 text-secondary" /> {property.location}, Thrissur
                        </p>
                    </motion.div>
                </div>

            </div>

            {/* 2. Primary Details Header (Compact) */}
            <div className="border-b border-gray-100 bg-white">
                <div className="container mx-auto px-4 md:px-6 py-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">

                        {/* Title & Location */}
                        <div className="space-y-2 max-w-3xl">
                            {/* Badges */}
                            <div className="flex items-center gap-2">
                                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                                    {property.type}
                                </span>
                                {property.status && (
                                    <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                                        <CheckCircle className="w-3 h-3" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Verified</span>
                                    </div>
                                )}
                            </div>

                            <h1 className="text-2xl md:text-3xl font-display font-medium text-gray-900 leading-tight">
                                {property.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs md:text-sm">
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                                    <span>{property.location}, Thrissur</span>
                                </div>
                                <span className="hidden md:block text-gray-300">|</span>
                                <div className="flex items-center gap-1.5">
                                    <span className="font-semibold text-gray-900">ID:</span>
                                    <span>KUS929</span>
                                </div>
                            </div>
                        </div>

                        {/* Price & Actions */}
                        <div className="flex flex-col items-start lg:items-end gap-3 w-full lg:w-auto">
                            <div className="text-left lg:text-right">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Asking Price</p>
                                <div className="text-2xl md:text-4xl font-display font-medium text-secondary">
                                    ₹{(property.price / 100000).toFixed(2)}<span className="text-xl md:text-2xl">L</span>
                                </div>
                                <p className="text-[9px] text-gray-400">*Excluding registration</p>
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <Button variant="outline" className="flex-1 h-10 text-xs border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white rounded-lg gap-1.5 transition-all">
                                    <Share2 className="w-3.5 h-3.5" /> Share
                                </Button>
                                <Button variant="outline" className="flex-1 h-10 text-xs border-gray-200 hover:border-red-500 hover:text-red-500 rounded-lg gap-1.5 transition-all">
                                    <Heart className="w-3.5 h-3.5" /> Save
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
