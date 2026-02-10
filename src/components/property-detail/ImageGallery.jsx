"use client"

import React from "react"
import { motion } from "framer-motion"

export function ImageGallery({ property }) {
    const images = property.images || []
    if (images.length < 2) return null

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h3 className="text-3xl font-display font-medium text-primary">Visual Chronicle</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-[800px]">
                    {/* Main Feature Image (Left) */}
                    <motion.div
                        className="lg:col-span-2 lg:row-span-2 relative rounded-2xl overflow-hidden shadow-lg group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={images[1] || images[0]}
                            alt="Interior View"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </motion.div>

                    {/* Secondary Images (Right Column) */}
                    <div className="flex flex-col gap-6 h-full">
                        <motion.div
                            className="flex-1 relative rounded-2xl overflow-hidden shadow-lg group"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <img
                                src={images[2] || images[0]}
                                alt="Detail 1"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                        <motion.div
                            className="flex-1 relative rounded-2xl overflow-hidden shadow-lg group"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <img
                                src={images[0]}
                                alt="Detail 2"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* View All Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <span className="text-white font-medium tracking-widest uppercase border border-white px-4 py-2 rounded-full">View All</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
