"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["All", "Architecture", "Interiors", "Lifestyle", "Market Insights"]

export function CategoryBar() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 800)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`sticky top-0 z-40 transition-all duration-300 ${isSticky ? 'py-4' : 'py-8'}`}>
            <div className={`absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-opacity duration-300 ${isSticky ? 'opacity-100' : 'opacity-0'}`} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className="relative px-4 py-2 group"
                        >
                            <span
                                className={`relative z-10 text-sm md:text-base font-medium transition-colors duration-300 ${activeCategory === category
                                        ? 'text-[#1E3A8A]'
                                        : 'text-slate-500 group-hover:text-[#1E3A8A]'
                                    }`}
                            >
                                {category}
                            </span>

                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className="absolute inset-0 bg-slate-100 rounded-lg -z-0"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
