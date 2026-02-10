"use client"

import React, { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { Layers, Compass, Maximize, Ruler, Home, Zap } from "lucide-react"

// Magnetic Card Component
const BentoCard = ({ title, value, icon, colSpan = "col-span-1" }) => {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        // Calculate percentage from center
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const xSpring = useSpring(x, { stiffness: 300, damping: 20 })
    const ySpring = useSpring(y, { stiffness: 300, damping: 20 })
    const transform = useMotionTemplate`rotateX(${ySpring * -10}deg) rotateY(${xSpring * 10}deg)`

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d", transform }}
            className={`relative group bg-white/40 backdrop-blur-2xl border border-white/40 shadow-xl rounded-3xl p-6 md:p-8 overflow-hidden ${colSpan}`}
        >
            {/* Dynamic Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon Stroke Animation */}
            <div className="mb-4 relative z-10 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/60 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <div className="text-secondary/80 group-hover:text-secondary transition-colors duration-300">
                    {React.cloneElement(icon, {
                        className: "w-6 h-6 stroke-[1.5]",
                    })}
                </div>
            </div>

            <div className="relative z-10 transition-transform duration-300 group-hover:translate-z-10 group-hover:scale-105">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 font-interface">{title}</h4>
                <p className="font-display text-2xl md:text-3xl font-medium text-gray-800">{value}</p>
            </div>
        </motion.div>
    )
}

export function SpatialOverview({ property }) {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, #E5E7EB 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.4 }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Narrative Text */}
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-primary leading-tight"
                        >
                            Spatial <br />
                            <span className="text-gradient-elite italic pr-4">Harmony.</span>
                        </motion.h2>

                        <p className="text-lg text-gray-600 font-light leading-relaxed max-w-xl text-balance">
                            Experience a layout designed not just for living, but for thriving.
                            From the expansive
                            <span className="font-medium text-gray-900 border-b border-secondary/30 mx-1">{property.sqft} sq.ft</span>
                            floor plan to the thoughtful separation of private and public zones,
                            every dimension serves a purpose.
                        </p>
                    </div>

                    {/* Bento Breeze Grid */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6 perspective-1000">
                        <BentoCard
                            title="Total Span"
                            value={`${property.sqft} Sq.Ft`}
                            icon={<Ruler />}
                            colSpan="col-span-2"
                        />
                        <BentoCard
                            title="Bedrooms"
                            value={`${property.beds} Suites`}
                            icon={<Home />}
                        />
                        <BentoCard
                            title="Bathrooms"
                            value={`${property.baths} Spas`}
                            icon={<Zap />}
                        />
                        <BentoCard
                            title="Orientation"
                            value="East Facing"
                            icon={<Compass />}
                            colSpan="col-span-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
