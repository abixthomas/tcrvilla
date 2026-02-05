"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
// import { Navbar } from "@/components/layout/Navbar" // Removed duplicate
import { PropertyFilterPanel } from "@/components/properties/PropertyFilterPanel"
import { PropertyGrid } from "@/components/properties/PropertyGrid"
import { propertiesData } from "@/data/properties"
// import { Footer } from "@/components/layout/Footer" // Removed duplicate
import { motion, AnimatePresence } from "framer-motion"
import { Filter } from "lucide-react"

export default function PropertiesPage() {
    const searchParams = useSearchParams()

    // Filter State
    const [filters, setFilters] = useState({
        type: null,
        locations: [],
        priceRange: [10, 1000],
        landRange: [0, 100], // Default 0-100 Cents
        sqftRange: [0, 20000],
        bhk: null,
        baths: null
    })

    // Deep Linking: Initialize filters from URL
    useEffect(() => {
        const type = searchParams.get('type')
        const location = searchParams.get('location')
        const minPrice = searchParams.get('minPrice')
        const maxPrice = searchParams.get('maxPrice')

        if (type || location || minPrice || maxPrice) {
            setFilters(prev => ({
                ...prev,
                type: type || null,
                locations: location ? [location] : [],
                priceRange: [
                    minPrice ? Number(minPrice) : 10,
                    maxPrice ? Number(maxPrice) : 1000
                ]
            }))
        }
    }, [searchParams])

    // UI State
    const [isFilterOpen, setIsFilterOpen] = useState(true)

    // Filter Logic
    const filteredProperties = useMemo(() => {
        return propertiesData.filter(property => {
            // Type Filter
            if (filters.type && property.type !== filters.type) return false

            // Location Filter
            if (filters.locations.length > 0 && !filters.locations.includes(property.location)) return false

            // Price Filter
            const minPrice = filters.priceRange[0] * 100000
            const maxPrice = filters.priceRange[1] * 100000
            if (property.price < minPrice || property.price > maxPrice) return false

            // Land Area Filter (Cents)
            const minLand = filters.landRange[0]
            const maxLand = filters.landRange[1]
            if ((property.landArea || 0) < minLand || (property.landArea || 0) > maxLand) return false

            // Building Area Filter (Sqft)
            const minSqft = filters.sqftRange[0]
            const maxSqft = filters.sqftRange[1]
            if (property.sqft < minSqft || property.sqft > maxSqft) return false

            // Room Filters
            if (filters.bhk) {
                if (filters.bhk === 6) {
                    if (property.bhk < 6) return false // 6 means 6+
                } else {
                    if (property.bhk !== filters.bhk) return false
                }
            }

            if (filters.baths) {
                if (filters.baths === 6) {
                    if (property.baths < 6) return false
                } else {
                    if (property.baths !== filters.baths) return false
                }
            }

            return true
        })
    }, [filters])

    return (
        <div className="bg-gray-50 min-h-screen font-sans">

            {/* Main Content - Starts below Navbar (handled by layout) */}
            <main className="min-h-screen flex relative">

                {/* 
                    LEFT PANEL: FILTERING ORCHESTRA (30%) 
                    Sticky Sidebar for Desktop
                */}
                <AnimatePresence mode="popLayout">
                    {isFilterOpen && (
                        <motion.aside
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: "25%",
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    mass: 0.8
                                }
                            }}
                            exit={{
                                width: 0,
                                opacity: 0,
                                transition: {
                                    duration: 0.2,
                                    ease: "easeInOut"
                                }
                            }}
                            className="hidden lg:block bg-white border-r border-gray-200 h-[calc(100vh-6rem)] sticky top-24 z-30 overflow-hidden shrink-0"
                        >
                            <div className="w-full h-full min-w-[300px]">
                                <PropertyFilterPanel
                                    filters={filters}
                                    setFilters={setFilters}
                                    totalCount={propertiesData.length}
                                    filteredCount={filteredProperties.length}
                                    onClose={() => setIsFilterOpen(false)}
                                />
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>

                {/* 
                    RIGHT PANEL: PROPERTY STREAM 
                    Scrollable Area
                */}
                <section className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto min-h-[calc(100vh-6rem)]">

                    {/* Header for Right Panel */}
                    <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-display font-medium text-gray-900 mb-2 tracking-tight"
                            >
                                Luxury <span className="text-secondary italic">Collection</span>
                            </motion.h1>
                            <p className="text-gray-500 max-w-xl text-sm md:text-base">
                                Explore Thrissur's finest real estate.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Old Filter Button Removed - Replaced by Holographic Tab below */}
                        </div>
                    </div>

                    {/* The Grid Component */}
                    <PropertyGrid properties={filteredProperties} />

                </section>

                {/* 
                    HOLOGRAPHIC SMART TAB (Floating Toggle)
                    Appears when filters are closed.
                    Fixed to the left edge of the screen like a drawer handle.
                */}
                <AnimatePresence>
                    {!isFilterOpen && (
                        <motion.button
                            initial={{ x: -100, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30
                                }
                            }}
                            exit={{
                                x: -100,
                                opacity: 0,
                                transition: { duration: 0.3 }
                            }}
                            whileHover={{
                                x: 5,
                                scale: 1.05,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsFilterOpen(true)}
                            className="fixed left-0 top-32 z-40 flex items-center gap-3 pl-4 pr-6 py-4 bg-white/80 backdrop-blur-xl border-y border-r border-white/50 shadow-2xl rounded-r-2xl group overflow-hidden cursor-pointer"
                            style={{
                                boxShadow: "5px 0 25px -5px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.5)"
                            }}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

                            {/* Icon Container with Pulse */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping opacity-75 md:hidden" />
                                <div className="relative bg-secondary text-white p-2 rounded-full shadow-lg shadow-secondary/30 group-hover:rotate-180 transition-transform duration-700 ease-in-out">
                                    <Filter className="h-4 w-4" />
                                </div>
                            </div>

                            {/* Text - Vertical Layout Awareness */}
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Open</span>
                                <span className="text-sm font-bold text-gray-800 tracking-tight group-hover:text-secondary transition-colors">Filters</span>
                            </div>

                        </motion.button>
                    )}
                </AnimatePresence>

            </main>
        </div>
    )
}
