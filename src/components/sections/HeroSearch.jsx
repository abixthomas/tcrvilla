"use client"

import * as React from "react"
import { Search, MapPin, Home, DollarSign, ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

// Dummy Data (Should match your filters)
const LOCATIONS = [
    "Thrissur City", "Punkunnam", "Viyyur", "Kuttoor", "Puthur", "M.G. Road",
    "Ayyanthole", "Mannuthy", "Ollur", "Amala Nagar", "Sobha City Area"
]

const PROPERTY_TYPES = [
    "All Residential", "Villa", "Apartment", "Land", "Commercial"
]

const PRICE_RANGES = [
    { label: "Budgets", val: [0, 1500] },
    { label: "Below ₹40L", val: [0, 40] },
    { label: "₹40L - ₹80L", val: [40, 80] },
    { label: "₹80L - ₹1.5Cr", val: [80, 150] },
    { label: "₹1.5Cr - ₹3Cr", val: [150, 300] },
    { label: "₹3Cr+", val: [300, 1000] },
]

export function HeroSearch() {
    const router = useRouter()

    // State
    const [location, setLocation] = React.useState(null)
    const [propertyType, setPropertyType] = React.useState(null)
    const [priceRange, setPriceRange] = React.useState(PRICE_RANGES[0])

    const [openDropdown, setOpenDropdown] = React.useState(null) // 'location' | 'type' | 'price' | null
    const [locSearch, setLocSearch] = React.useState("")

    const handleSearch = () => {
        const params = new URLSearchParams()
        if (location && location !== "Thrissur City") params.set("location", location)
        if (propertyType && propertyType !== "All Residential") params.set("type", propertyType)

        if (priceRange.label !== "Budgets") {
            params.set("minPrice", priceRange.val[0])
            params.set("maxPrice", priceRange.val[1])
        }

        router.push(`/properties?${params.toString()}`)
    }

    const toggleDropdown = (key) => {
        setOpenDropdown(openDropdown === key ? null : key)
        if (key === 'location' && openDropdown !== 'location') {
            setLocSearch("")
        }
    }

    // Close on click outside (simple implementation)
    // In production, use useOnClickOutside hook

    return (
        <div className="w-full max-w-4xl mx-auto relative z-50">

            {/* Main Search Bar */}
            <div className="bg-white rounded-2xl p-3 md:p-4 shadow-2xl flex flex-col md:flex-row items-center gap-2 animate-in fade-in zoom-in duration-500 border border-white/20">

                {/* 1. LOCATION */}
                <div className="flex-1 w-full relative">
                    <button
                        onClick={() => toggleDropdown('location')}
                        className="w-full flex items-center justify-between hover:bg-gray-50 p-2 md:p-3 rounded-xl transition-all group text-left"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-full transition-colors ${openDropdown === 'location' ? 'bg-secondary text-white' : 'bg-blue-50 text-secondary'}`}>
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Location</div>
                                <div className="font-bold text-gray-800 text-sm md:text-base truncate max-w-[120px] md:max-w-[150px]">
                                    {location || "Select Location"}
                                </div>
                            </div>
                        </div>
                        <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform", openDropdown === 'location' && "rotate-180 text-secondary")} />
                    </button>

                    {/* Dropdown */}
                    <DropdownContent isOpen={openDropdown === 'location'}>
                        <div className="p-2 border-b border-gray-100 sticky top-0 bg-white z-10">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Type to search..."
                                    value={locSearch}
                                    onChange={(e) => setLocSearch(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-8 pr-3 text-xs font-medium focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-gray-400"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        </div>
                        <div className="max-h-64 overflow-y-auto custom-scrollbar p-1">
                            {LOCATIONS.filter(l => l.toLowerCase().includes(locSearch.toLowerCase())).map(loc => (
                                <DropdownItem
                                    key={loc}
                                    label={loc}
                                    isSelected={location === loc}
                                    onClick={() => { setLocation(loc); setOpenDropdown(null); }}
                                />
                            ))}
                        </div>
                    </DropdownContent>
                </div>

                {/* Divider (Desktop) */}
                <div className="hidden md:block w-px h-10 bg-gray-100" />

                {/* 2. PROPERTY TYPE */}
                <div className="flex-1 w-full relative">
                    <button
                        onClick={() => toggleDropdown('type')}
                        className="w-full flex items-center justify-between hover:bg-gray-50 p-2 md:p-3 rounded-xl transition-all group text-left"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-full transition-colors ${openDropdown === 'type' ? 'bg-secondary text-white' : 'bg-blue-50 text-secondary'}`}>
                                <Home className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Property Type</div>
                                <div className="font-bold text-gray-800 text-sm md:text-base">
                                    {propertyType || "All Types"}
                                </div>
                            </div>
                        </div>
                        <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform", openDropdown === 'type' && "rotate-180 text-secondary")} />
                    </button>

                    <DropdownContent isOpen={openDropdown === 'type'}>
                        <div className="p-1">
                            {PROPERTY_TYPES.map(type => (
                                <DropdownItem
                                    key={type}
                                    label={type}
                                    isSelected={propertyType === type}
                                    onClick={() => { setPropertyType(type); setOpenDropdown(null); }}
                                />
                            ))}
                        </div>
                    </DropdownContent>
                </div>

                {/* Divider (Desktop) */}
                <div className="hidden md:block w-px h-10 bg-gray-100" />

                {/* 3. PRICE RANGE */}
                <div className="flex-1 w-full relative">
                    <button
                        onClick={() => toggleDropdown('price')}
                        className="w-full flex items-center justify-between hover:bg-gray-50 p-2 md:p-3 rounded-xl transition-all group text-left"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-full transition-colors ${openDropdown === 'price' ? 'bg-secondary text-white' : 'bg-blue-50 text-secondary'}`}>
                                <DollarSign className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Budget</div>
                                <div className="font-bold text-gray-800 text-sm md:text-base">
                                    {priceRange.label}
                                </div>
                            </div>
                        </div>
                        <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform", openDropdown === 'price' && "rotate-180 text-secondary")} />
                    </button>

                    <DropdownContent isOpen={openDropdown === 'price'}>
                        <div className="p-1">
                            {PRICE_RANGES.map(range => (
                                <DropdownItem
                                    key={range.label}
                                    label={range.label}
                                    isSelected={priceRange.label === range.label}
                                    onClick={() => { setPriceRange(range); setOpenDropdown(null); }}
                                />
                            ))}
                        </div>
                    </DropdownContent>
                </div>

                {/* SEARCH BUTTON */}
                <div className="w-full md:w-auto mt-2 md:mt-0">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSearch}
                        className="w-full md:w-auto h-14 md:h-16 px-8 rounded-xl bg-secondary text-white font-bold text-lg shadow-lg shadow-secondary/30 hover:bg-secondary/90 transition-all flex items-center justify-center gap-2"
                    >
                        <Search className="h-5 w-5" />
                        <span className="md:hidden">Search Properties</span>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

// Helper Components
const DropdownContent = ({ isOpen, children }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 min-w-[200px]"
            >
                {children}
            </motion.div>
        )}
    </AnimatePresence>
)

const DropdownItem = ({ label, isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={cn(
            "w-full text-left px-4 py-3 text-sm font-medium transition-colors flex items-center justify-between hover:bg-blue-50/50",
            isSelected ? "text-secondary bg-blue-50" : "text-gray-600"
        )}
    >
        {label}
        {isSelected && <Check className="h-4 w-4" />}
    </button>
)
