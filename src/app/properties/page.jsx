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



import { PropertiesHero } from "@/components/sections/PropertiesHero"

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
            <PropertiesHero />

            {/* Main Content - Starts below Hero */}
            <main className="min-h-screen flex relative">

                {/* 
                    LEFT PANEL: FILTERING ORCHESTRA (30%) 
                    Sticky Sidebar for Desktop
                */}
                {/* 
                    LEFT PANEL: FILTERING ORCHESTRA (30%) 
                    Sticky Sidebar for Desktop
                */}
                <AnimatePresence mode="popLayout">
                    {/* Desktop Sidebar */}
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

                {/* Mobile Filter Drawer (Overlay) */}
                <AnimatePresence>
                    {isFilterOpen && (
                        <div className="lg:hidden relative z-50">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsFilterOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            {/* Drawer */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed inset-y-0 left-0 w-[85vw] max-w-[360px] h-full shadow-2xl z-50 overflow-hidden"
                            >
                                <PropertyFilterPanel
                                    filters={filters}
                                    setFilters={setFilters}
                                    totalCount={propertiesData.length}
                                    filteredCount={filteredProperties.length}
                                    onClose={() => setIsFilterOpen(false)}
                                />
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* 
                    RIGHT PANEL: PROPERTY STREAM 
                    Scrollable Area
                */}
                <section className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto min-h-[calc(100vh-6rem)] relative z-10">

                    {/* Filter Status / Mobile Controls potentially go here if needed */}
                    <div className="mb-6 flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                            Showing <span className="font-bold text-gray-900">{filteredProperties.length}</span> Properties
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
                            className="fixed left-0 top-24 lg:top-32 z-40 flex items-center gap-2 pl-3 pr-5 py-3 lg:pl-4 lg:pr-6 lg:py-4 bg-white/90 backdrop-blur-xl border-y border-r border-white/50 shadow-2xl rounded-r-xl lg:rounded-r-2xl group overflow-hidden cursor-pointer"
                            style={{
                                boxShadow: "5px 0 25px -5px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.5)"
                            }}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

                            {/* Icon Container with Pulse */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping opacity-75 md:hidden" />
                                <div className="relative bg-secondary text-white p-1.5 lg:p-2 rounded-full shadow-lg shadow-secondary/30 group-hover:rotate-180 transition-transform duration-700 ease-in-out">
                                    <Filter className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                                </div>
                            </div>

                            {/* Text - Vertical Layout Awareness */}
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Open</span>
                                <span className="text-xs lg:text-sm font-bold text-gray-800 tracking-tight group-hover:text-secondary transition-colors">Filters</span>
                            </div>

                        </motion.button>
                    )}
                </AnimatePresence>

            </main>
        </div>
    )
}
