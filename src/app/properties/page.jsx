"use client"

import { useState, useMemo } from "react"
// import { Navbar } from "@/components/layout/Navbar" // Removed duplicate
import { PropertyFilterPanel } from "@/components/properties/PropertyFilterPanel"
import { PropertyGrid } from "@/components/properties/PropertyGrid"
import { propertiesData } from "@/data/properties"
// import { Footer } from "@/components/layout/Footer" // Removed duplicate
import { motion, AnimatePresence } from "framer-motion"
import { Filter } from "lucide-react"

export default function PropertiesPage() {
    // Filter State
    const [filters, setFilters] = useState({
        type: null,
        locations: [],
        amenities: [],
        priceRange: [40, 500]
    })

    // UI State
    const [isFilterOpen, setIsFilterOpen] = useState(true)

    // Filter Logic
    const filteredProperties = useMemo(() => {
        return propertiesData.filter(property => {
            // Type Filter
            if (filters.type && property.type !== filters.type) return false

            // Location Filter
            if (filters.locations.length > 0 && !filters.locations.includes(property.location)) return false

            // Price Filter (Todo: Implement range slider logic fully if needed, currently placeholder in UI)

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
                <AnimatePresence mode="wait">
                    {isFilterOpen && (
                        <motion.aside
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "25%", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="hidden lg:block bg-white border-r border-gray-200 h-[calc(100vh-6rem)] sticky top-24 z-30 overflow-hidden"
                        >
                            <PropertyFilterPanel
                                filters={filters}
                                setFilters={setFilters}
                                totalCount={propertiesData.length}
                                filteredCount={filteredProperties.length}
                            />
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
                                className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2"
                            >
                                Luxury <span className="text-secondary">Collection</span>
                            </motion.h1>
                            <p className="text-gray-500 max-w-xl text-sm md:text-base">
                                Explore Thrissur's finest real estate.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Filter Toggle Button */}
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-all text-gray-700"
                            >
                                <Filter className="h-4 w-4" />
                                {isFilterOpen ? "Hide Filters" : "Show Filters"}
                            </button>
                        </div>
                    </div>

                    {/* The Grid Component */}
                    <PropertyGrid properties={filteredProperties} />

                </section>

            </main>
        </div>
    )
}
