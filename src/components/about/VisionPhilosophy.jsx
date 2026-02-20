"use client"

import { motion } from "framer-motion"

export function VisionPhilosophy() {
    return (
        <section className="py-24 bg-white text-slate-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: The Quote */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Decorative Line matching reference */}
                        <div className="w-20 h-1 bg-secondary mb-8"></div>

                        <h2 className="text-2xl md:text-3xl font-sans font-light leading-relaxed text-primary tracking-wide mb-8">
                            We don't follow trends. We set the <span className="font-medium text-secondary">standard</span>. Our structures are a visceral dialogue between raw materials and human aspiration.
                        </h2>
                        <div className="space-y-6 text-slate-600 font-sans text-lg font-light leading-loose max-w-2xl">
                            <p>
                                True luxury lies in the unseen details. It is the whisper of the wind through a well-placed courtyard, the play of light on a textured wall, and the silent strength of a foundation built to last generations.
                            </p>
                            <p>
                                We believe that a home should be more than a shelter; it should be a sanctuary that rejuvenates the spirit and inspires the mind. This philosophy drives every line we draw and every brick we lay.
                            </p>
                            <p>
                                In a world of fleeting trends, we anchor our designs in the eternal. By harmonizing modern innovation with the wisdom of traditional Kerala architecture, we create spaces that breathe, evolve, and tell a story that is uniquely yours.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Image & Content */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-lg overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                                alt="Architectural Detail"
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                            />
                        </motion.div>


                    </div>
                </div>
            </div>
        </section>
    )
}
