"use client"

import { motion } from "framer-motion"

export function LegacyCTA() {
    return (
        <section className="relative py-32 overflow-hidden bg-primary">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-900/50" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-display font-medium text-white mb-6">
                        Join the <span className="italic font-serif">Legacy</span>
                    </h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 font-light">
                        Discover a life of refinement. Schedule a private walk-through of our completed landmarks and witness the future of your home.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-primary font-bold px-10 py-4 rounded-xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                            Book Consultation
                        </button>
                        <button className="bg-transparent border border-white/30 text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                            Download Brochure
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
