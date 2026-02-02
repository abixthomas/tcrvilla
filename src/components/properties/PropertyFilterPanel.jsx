"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ChevronDown, ChevronUp, Check, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
// import { propertiesData } from "@/data/properties" // Not directly needed, parent controls filter state

const LOCATIONS = [
    "Punkunnam", "Viyyur", "Kuttoor", "Puthur", "M.G. Road",
    "Ayyanthole", "Mannuthy", "Ollur", "Amala Nagar", "Sobha City Area"
]

const PROPERTY_TYPES = ["Villa", "Apartment", "Plot", "Farmhouse"]

const AMENITIES_LIST = [
    "Swimming Pool", "Gym", "Private Garden", "Power Backup",
    "Security", "Parking", "Wi-Fi", "Home Theater"
]

export function PropertyFilterPanel({ filters, setFilters, totalCount, filteredCount }) {
    // Accordion States
    const [openSections, setOpenSections] = useState({
        location: true,
        price: true,
        type: true,
        amenities: false
    })

    // Location Search State
    const [locSearch, setLocSearch] = useState("")
    const [isLocDropdownOpen, setIsLocDropdownOpen] = useState(false)

    // Handlers
    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
    }

    const handleLocationToggle = (loc) => {
        setFilters(prev => {
            const current = prev.locations || []
            const updated = current.includes(loc)
                ? current.filter(l => l !== loc)
                : [...current, loc]
            return { ...prev, locations: updated }
        })
    }

    const handleTypeToggle = (type) => {
        setFilters(prev => ({
            ...prev,
            type: prev.type === type ? null : type
        }))
    }

    const handleAmenityToggle = (amenity) => {
        setFilters(prev => {
            const current = prev.amenities || []
            const updated = current.includes(amenity)
                ? current.filter(a => a !== amenity)
                : [...current, amenity]
            return { ...prev, amenities: updated }
        })
    }

    // Price Handler
    const handlePriceChange = (e, index) => {
        const newVal = parseInt(e.target.value);
        const newRange = [...filters.priceRange]; // Use props directly if possible, or local
        // For simplicity in this non-library setup, we might stick to props update if latency allows, 
        // OR use local state then commit on mouse up. 
        // Let's implement a direct update for responsiveness.
        newRange[index] = newVal;
        if (index === 0 && newRange[0] > newRange[1]) newRange[0] = newRange[1];
        if (index === 1 && newRange[1] < newRange[0]) newRange[1] = newRange[0];

        setFilters(prev => ({ ...prev, priceRange: newRange }));
    }

    // Filtered Locations based on search
    const visibleLocations = LOCATIONS.filter(l => l.toLowerCase().includes(locSearch.toLowerCase()))

    return (
        <aside className="w-full h-full flex flex-col bg-white border-r border-gray-200">

            {/* Header - Professional & Compact */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-secondary" />
                    <h2 className="text-sm font-bold uppercase tracking-wider text-gray-800">Filters</h2>
                </div>
                {(filters.type || (filters.locations && filters.locations.length > 0) || (filters.amenities && filters.amenities.length > 0)) && (
                    <button
                        onClick={() => setFilters({ type: null, locations: [], amenities: [], priceRange: [40, 500] })}
                        className="text-xs text-secondary font-bold hover:underline"
                    >
                        CLEAR ALL
                    </button>
                )}
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">

                {/* 1. Location Filter - Searchable Dropdown */}
                <div className="border-b border-gray-100 pb-6">
                    <button
                        onClick={() => toggleSection('location')}
                        className="w-full flex items-center justify-between mb-4 group"
                    >
                        <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Location</span>
                        {openSections.location ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-secondary" />}
                    </button>

                    <AnimatePresence>
                        {openSections.location && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                {/* Selected Chips */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {(filters.locations || []).map(loc => (
                                        <span key={loc} className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-md border border-secondary/20">
                                            {loc}
                                            <X
                                                className="h-3 w-3 cursor-pointer hover:text-red-600"
                                                onClick={(e) => { e.stopPropagation(); handleLocationToggle(loc) }}
                                            />
                                        </span>
                                    ))}
                                </div>

                                {/* Search Input */}
                                <div className="relative mb-2">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search location..."
                                        value={locSearch}
                                        onChange={(e) => {
                                            setLocSearch(e.target.value)
                                            setIsLocDropdownOpen(true)
                                        }}
                                        onFocus={() => setIsLocDropdownOpen(true)}
                                        className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                                    />
                                    {locSearch && (
                                        <X
                                            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600"
                                            onClick={() => setLocSearch("")}
                                        />
                                    )}
                                </div>

                                {/* Dropdown List */}
                                {(isLocDropdownOpen || locSearch.length > 0) && (
                                    <div className="max-h-40 overflow-y-auto border border-gray-200 rounded-lg mt-1 shadow-sm">
                                        {visibleLocations.map(loc => {
                                            const isSelected = (filters.locations || []).includes(loc)
                                            return (
                                                <div
                                                    key={loc}
                                                    onClick={() => handleLocationToggle(loc)}
                                                    className="px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                                                >
                                                    <span className={cn(isSelected ? "text-secondary font-bold" : "text-gray-600")}>
                                                        {loc}
                                                    </span>
                                                    {isSelected && <Check className="h-3 w-3 text-secondary" />}
                                                </div>
                                            )
                                        })}
                                        {visibleLocations.length === 0 && (
                                            <div className="p-3 text-xs text-gray-400 text-center">No locations found</div>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 2. Price Range - Scroll Type */}
                <div className="border-b border-gray-100 pb-6">
                    <button
                        onClick={() => toggleSection('price')}
                        className="w-full flex items-center justify-between mb-4 group"
                    >
                        <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Price Range</span>
                        {openSections.price ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-secondary" />}
                    </button>

                    <AnimatePresence>
                        {openSections.price && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden px-1"
                            >
                                <div className="text-xs font-bold text-gray-700 mb-2 flex justify-between">
                                    <span>₹{filters.priceRange[0]}L</span>
                                    <span>₹{filters.priceRange[1]}L</span>
                                </div>
                                <div className="relative h-10 flex items-center">
                                    {/* Slider Track */}
                                    <div className="absolute w-full h-1 bg-gray-200 rounded-full"></div>
                                    <div
                                        className="absolute h-1 bg-secondary rounded-full"
                                        style={{
                                            left: `${(filters.priceRange[0] / 500) * 100}%`,
                                            right: `${100 - (filters.priceRange[1] / 500) * 100}%`
                                        }}
                                    ></div>

                                    {/* Native Inputs for Glider Logic */}
                                    {/* Min Slider */}
                                    <input
                                        type="range" min="0" max="500" step="5"
                                        value={filters.priceRange[0]}
                                        onChange={(e) => handlePriceChange(e, 0)}
                                        className="absolute w-full h-full pointer-events-none opacity-0 z-30 range-slider-thumb"
                                    />
                                    {/* Max Slider */}
                                    <input
                                        type="range" min="0" max="500" step="5"
                                        value={filters.priceRange[1]}
                                        onChange={(e) => handlePriceChange(e, 1)}
                                        className="absolute w-full h-full pointer-events-none opacity-0 z-30 range-slider-thumb"
                                    />

                                    {/* Visual Thumbs */}
                                    <div
                                        className="absolute w-4 h-4 bg-white border-2 border-secondary rounded-full shadow-md z-20 pointer-events-none"
                                        style={{ left: `${(filters.priceRange[0] / 500) * 100}%`, transform: 'translateX(-50%)' }}
                                    ></div>
                                    <div
                                        className="absolute w-4 h-4 bg-white border-2 border-secondary rounded-full shadow-md z-20 pointer-events-none"
                                        style={{ left: `${(filters.priceRange[1] / 500) * 100}%`, transform: 'translateX(-50%)' }}
                                    ></div>
                                </div>
                                <p className="text-[10px] text-gray-400 text-center mt-2">Drag sliders to adjust budget</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 3. Property Type - Checkboxes */}
                <div className="border-b border-gray-100 pb-6">
                    <button
                        onClick={() => toggleSection('type')}
                        className="w-full flex items-center justify-between mb-4 group"
                    >
                        <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Property Type</span>
                        {openSections.type ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-secondary" />}
                    </button>

                    <AnimatePresence>
                        {openSections.type && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden space-y-2"
                            >
                                {PROPERTY_TYPES.map(type => (
                                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                className="peer sr-only"
                                                checked={filters.type === type}
                                                onChange={() => handleTypeToggle(type)}
                                            />
                                            <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-secondary peer-checked:border-secondary transition-all">
                                                <Check className="h-3 w-3 text-white opacity-0 peer-checked:opacity-100" />
                                            </div>
                                        </div>
                                        <span className={cn(
                                            "text-sm group-hover:text-secondary transition-colors",
                                            filters.type === type ? "font-bold text-gray-900" : "text-gray-600"
                                        )}>
                                            {type}
                                        </span>
                                    </label>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 4. Amenities - New Section */}
                <div>
                    <button
                        onClick={() => toggleSection('amenities')}
                        className="w-full flex items-center justify-between mb-4 group"
                    >
                        <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Amenities</span>
                        {openSections.amenities ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-secondary" />}
                    </button>

                    <AnimatePresence>
                        {openSections.amenities && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden space-y-2"
                            >
                                {AMENITIES_LIST.map(amenity => (
                                    <label key={amenity} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                className="peer sr-only"
                                                checked={(filters.amenities || []).includes(amenity)}
                                                onChange={() => handleAmenityToggle(amenity)}
                                            />
                                            <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center peer-checked:bg-secondary peer-checked:border-secondary transition-all">
                                                <Check className="h-3 w-3 text-white opacity-0 peer-checked:opacity-100" />
                                            </div>
                                        </div>
                                        <span className={cn(
                                            "text-sm transition-colors",
                                            (filters.amenities || []).includes(amenity) ? "text-gray-900 font-bold" : "text-gray-600 group-hover:text-secondary"
                                        )}>
                                            {amenity}
                                        </span>
                                    </label>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>

            {/* Footer Status */}
            <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                <p className="text-xs text-center text-gray-500">
                    <span className="font-bold text-gray-900">{filteredCount}</span> results found
                </p>
            </div>
        </aside>
    )
}
