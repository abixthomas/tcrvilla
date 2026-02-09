"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function CallToAction() {
    return (
        <section className="py-20 relative overflow-hidden bg-primary">
            <div className="absolute inset-0 opacity-20">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover mix-blend-overlay"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-wide">
                        Have a Property <span className="italic">to Sell?</span>
                    </h2>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        List your property on Thrissur's most premium real estate platform and connect with serious buyers today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact">
                            <Button variant="secondary" size="lg" className="text-lg px-8 h-14 rounded-full shadow-xl shadow-secondary/20 hover:scale-105 transition-transform">
                                <PlusCircle className="mr-2 h-5 w-5" /> Post Free Ad
                            </Button>
                        </Link>
                        <Link href="/#contact">
                            <Button variant="outline" size="lg" className="text-lg px-8 h-14 rounded-full bg-transparent text-white border-white hover:bg-white hover:text-primary transition-all">
                                Talk to an Agent
                            </Button>
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-gray-400">
                        * Featured listings get 3x more views. <span className="text-secondary underline cursor-pointer">Learn more</span>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
