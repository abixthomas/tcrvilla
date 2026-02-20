"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
    return (
        <section className="py-24 bg-[#0F172A] relative overflow-hidden">
            {/* Abstract Background Shape */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1E3A8A]/10 skew-x-12 transform origin-top translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#EF4444] font-bold tracking-widest uppercase text-sm mb-4 block">The Inner Circle</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                            Architectural Insights, <br /> Delivered.
                        </h2>
                        <p className="text-slate-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                            Join our curated list of design enthusiasts. Receive a monthly digest of trends, market analysis, and the philosophy behind our latest creations.
                        </p>

                        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto relative">
                            <div className="relative flex-grow">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-slate-800/50 border border-slate-700 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-[#EF4444] transition-colors placeholder:text-slate-500 font-light"
                                />
                            </div>
                            <button className="bg-[#EF4444] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-red-600 transition-colors flex items-center justify-center gap-2 group">
                                Join <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <p className="text-slate-600 text-xs mt-6">
                            No spam. Just high-end design. Unsubscribe anytime.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
