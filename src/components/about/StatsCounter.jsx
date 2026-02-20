"use client"

import { motion } from "framer-motion"
import { Users, Award, Building2, Map } from "lucide-react"

const stats = [
    { label: "Years of Trust", value: "25+", icon: Award },
    { label: "Happy Families", value: "500+", icon: Users },
    { label: "National Awards", value: "18", icon: StarIcon }, // Replaced generic icon with custom or similar
    { label: "Sq.Ft Delivered", value: "12M+", icon: Building2 },
]

function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
    )
}

export function StatsCounter() {
    return (
        <section className="bg-primary py-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center justify-center p-2"
                            >
                                <div className="mb-2 p-3 bg-white/10 rounded-full text-secondary backdrop-blur-sm">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 font-display tracking-tight">
                                    {stat.value}
                                </h3>
                                <p className="text-blue-200 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                    {stat.label}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
