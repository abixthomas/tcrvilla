"use client"

import React from "react"
import { motion } from "framer-motion"

export function PropertyNarrative({ property }) {


    return (
        <section className="py-12 md:py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Text Content Only - Full Width */}
                <div className="space-y-6 md:space-y-8 max-w-4xl">
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
            </div>
        </section>
    )
}
