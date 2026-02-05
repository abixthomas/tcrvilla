"use client"

import React from "react"
import { motion } from "framer-motion"
import { Users, Award, Building, Clock } from "lucide-react"

const stats = [
    { label: "Happy Families", value: "1500+", icon: Users },
    { label: "Years Experience", value: "15+", icon: Clock },
    { label: "Properties Sold", value: "850+", icon: Building },
    { label: "Awards Won", value: "12", icon: Award },
]

export function AboutUs() {
    return (
        <section id="about" className="py-12 bg-white overflow-hidden scroll-mt-28">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Image & Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                                alt="Our Team"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20" />
                        </div>

                        {/* Floating Experience Badge */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                            <div className="text-center">
                                <span className="block text-5xl font-medium text-secondary font-display mb-1">15+</span>
                                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Years of <br />Excellence</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content & Stats */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-secondary font-bold uppercase tracking-[0.25em] text-xs mb-3">Who We Are</h4>
                            <h2 className="text-3xl md:text-5xl font-display font-medium text-gray-900 mb-6 leading-tight">
                                Building Trust, <span className="text-gradient-elite"><span className="whitespace-nowrap">One Home</span> at a Time</span>
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                Thrissur Villas was founded with a simple mission: to bring transparency and professionalism to the real estate market in Kerala's cultural capital. We combine local expertise with world-class service standards to help you find not just a house, but a home.
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-8">
                                {stats.map((stat, index) => {
                                    const Icon = stat.icon
                                    return (
                                        <div key={index} className="flex flex-col">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Icon className="h-5 w-5 text-secondary" />
                                                <span className="text-3xl font-bold text-primary font-display">{stat.value}</span>
                                            </div>
                                            <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="mt-10">
                                <button className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                                    Learn more about our journey
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
