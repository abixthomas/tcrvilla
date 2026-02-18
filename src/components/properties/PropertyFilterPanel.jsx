"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as Slider from "@radix-ui/react-slider"
import * as Accordion from "@radix-ui/react-accordion"
import { Search, X, ChevronDown, Check, Filter, MapPin, Sparkles, MoveRight } from "lucide-react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// --- UTILS ---
const formatCurrency = (val) => {
    if (val >= 100) return `₹${(val / 100).toFixed(2)}Cr`
    return `₹${val}L`
}

const formatLand = (val, unit) => {
    if (unit === 'acre') return `${(val / 100).toFixed(2)} Ac`
    return `${Math.round(val)} Cents`
}

// --- DUMMY DATA ---
const LOCATIONS = [
    "Punkunnam", "Viyyur", "Kuttoor", "Puthur", "M.G. Road",
    "Ayyanthole", "Mannuthy", "Ollur", "Amala Nagar", "Sobha City Area"
]

const LAND_HISTOGRAM_DATA = [10, 25, 45, 30, 60, 80, 50, 40, 20, 15, 5, 10, 25, 45, 30, 60, 80, 50, 40, 20] // 20 bars

// --- COMPONENTS ---

const FilterSection = ({ value, title, icon: Icon, children }) => (
    <Accordion.Item value={value} className="border-b border-white/10 last:border-0">
        <Accordion.Header>
            <Accordion.Trigger className="w-full flex items-center justify-between py-5 px-1 group">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-red-50 text-slate-400 group-hover:text-red-500 transition-colors">
                        <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-interface text-xs font-semibold text-slate-700 uppercase tracking-widest group-hover:text-slate-900">{title}</span>
                </div>
                <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="pb-6 px-1">
                {children}
            </div>
        </Accordion.Content>
    </Accordion.Item>
)

export function PropertyFilterPanel({ filters, setFilters, filteredCount, onClose }) {
    // Local State to handle high-frequency slider updates before committing to parent
    const [localPrice, setLocalPrice] = useState(filters.priceRange)
    const [localLand, setLocalLand] = useState(filters.landRange)
    const [landUnit, setLandUnit] = useState("cent") // 'cent' | 'acre'

    // Debounce Commits
    useEffect(() => {
        const timer = setTimeout(() => setFilters(prev => ({ ...prev, priceRange: localPrice })), 300)
        return () => clearTimeout(timer)
    }, [localPrice, setFilters])

    useEffect(() => {
        const timer = setTimeout(() => setFilters(prev => ({ ...prev, landRange: localLand })), 300)
        return () => clearTimeout(timer)
    }, [localLand, setFilters])

    // Sync local state when props change (e.g. on Reset)
    useEffect(() => {
        setLocalPrice(filters.priceRange)
    }, [filters.priceRange])

    useEffect(() => {
        setLocalLand(filters.landRange)
    }, [filters.landRange])

    // Location Dropdown State
    const [isLocOpen, setIsLocOpen] = useState(true)
    const [locSearch, setLocSearch] = useState("")

    // Handlers
    const handleLocationToggle = (loc) => {
        setFilters(prev => {
            const current = prev.locations || []
            return {
                ...prev,
                locations: current.includes(loc) ? current.filter(l => l !== loc) : [...current, loc]
            }
        })
    }

    // Variants
    const containerRef = useRef(null)

    useGSAP(() => {
        // Sticky Intelligence - Docking to top
        // Note: Using CSS position:sticky is often smoother for simple docking, 
        // but GSAP can handle the "breathing" trigger when stuck.

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top+=80", // Adjust based on navbar height
            end: "bottom bottom",
            onToggle: (self) => {
                if (self.isActive) {
                    gsap.to(containerRef.current, {
                        boxShadow: "0 0 20px rgba(239, 68, 68, 0.15)",
                        duration: 0.5
                    })
                } else {
                    gsap.to(containerRef.current, {
                        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", // Reset to default tailwind shadow-2xl equivalent
                        duration: 0.5
                    })
                }
            }
        })

        // Breathing Glow Animation (Idle State)
        gsap.to(containerRef.current, {
            boxShadow: "0 0 30px rgba(239, 68, 68, 0.1)",
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut"
        })

    }, { scope: containerRef })

    const containerVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 200,
                staggerChildren: 0.05
            }
        },
        exit: { x: "100%", opacity: 0 }
    }

    return (
        <motion.aside
            ref={containerRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="w-full md:w-[360px] h-full flex flex-col bg-white/80 backdrop-blur-xl border-l border-white/40 shadow-2xl relative sticky top-20"
        >
            {/* NOISE TEXTURE OVERLAY */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* HEADER */}
            <div className="flex-none p-6 border-b border-slate-100 flex items-center justify-between relative z-10 bg-white/40">
                <div>
                    <h2 className="text-xl font-display font-medium text-slate-900 tracking-tight">Filters</h2>
                    <p className="font-interface text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Refine your search</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => {
                            setFilters({ type: null, locations: [], priceRange: [10, 1000], landRange: [0, 100], sqftRange: [0, 20000], bhk: null, baths: null })
                            setLandUnit("cent")
                        }}
                        className="font-interface text-[10px] font-bold text-slate-400 hover:text-secondary transition-colors uppercase tracking-widest px-2"
                    >
                        Reset
                    </button>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-all active:scale-95 text-slate-400 hover:text-slate-900"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 relative z-10">
                <Accordion.Root type="multiple" defaultValue={['location', 'price', 'land', 'rooms']} className="space-y-1">

                    {/* 1. LOCATION (Inline Expandable List) */}
                    <FilterSection value="location" title="Location" icon={MapPin}>
                        <div className="relative">
                            <button
                                onClick={() => setIsLocOpen(!isLocOpen)}
                                className="w-full flex items-center justify-between bg-white border border-slate-200 px-3 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:border-slate-300 transition-all shadow-sm"
                            >
                                <span>{(filters.locations || []).length > 0 ? `${(filters.locations || []).length} Selected` : "Select Locations"}</span>
                                <ChevronDown className={cn("h-3.5 w-3.5 text-slate-400 transition-transform", isLocOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {isLocOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-2">
                                            <div className="relative mb-2">
                                                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                                                <input
                                                    autoFocus
                                                    type="text"
                                                    placeholder="Search..."
                                                    value={locSearch}
                                                    onChange={e => setLocSearch(e.target.value)}
                                                    className="w-full bg-slate-50 border border-slate-100 rounded-lg py-2 pl-8 pr-3 text-xs font-medium focus:ring-2 focus:ring-red-500/20 outline-none"
                                                />
                                            </div>
                                            <div className="max-h-48 overflow-y-auto custom-scrollbar border border-slate-100 rounded-lg bg-slate-50/50 p-1">
                                                {LOCATIONS.filter(l => l.toLowerCase().includes(locSearch.toLowerCase())).map(loc => {
                                                    const isSelected = (filters.locations || []).includes(loc)
                                                    return (
                                                        <div
                                                            key={loc}
                                                            onClick={() => handleLocationToggle(loc)}
                                                            className={cn(
                                                                "flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-xs font-medium transition-colors",
                                                                isSelected ? "bg-white text-red-600 shadow-sm" : "hover:bg-slate-100/50 text-slate-600"
                                                            )}
                                                        >
                                                            {loc}
                                                            {isSelected && <Check className="h-3 w-3 text-red-500" />}
                                                        </div>
                                                    )
                                                })}
                                                {LOCATIONS.filter(l => l.toLowerCase().includes(locSearch.toLowerCase())).length === 0 && (
                                                    <div className="px-4 py-3 text-[10px] text-slate-400 text-center">No locations found</div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Selected Tags Display */}
                            {(filters.locations || []).length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {(filters.locations || []).map(loc => (
                                        <div key={loc} className="inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[10px] font-bold text-slate-600">
                                            {loc}
                                            <button onClick={() => handleLocationToggle(loc)} className="p-0.5 hover:bg-slate-200 rounded-sm text-slate-400 hover:text-slate-700">
                                                <X className="h-2.5 w-2.5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </FilterSection>

                    {/* 2. LAND AREA (Histogram + Animated Toggle) */}
                    <FilterSection value="land" title="Land Area" icon={Filter}>
                        {/* Toggle */}
                        <div className="flex justify-center mb-6">
                            <div className="bg-slate-100 p-1 rounded-xl flex relative">
                                <motion.div
                                    className="absolute inset-y-1 bg-white rounded-lg shadow-sm border border-slate-200/50"
                                    layoutId="landUnitIndicator"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    style={{
                                        width: '50%',
                                        left: landUnit === 'cent' ? '4px' : '50%'
                                    }}
                                />
                                {['cent', 'acre'].map(u => (
                                    <button
                                        key={u}
                                        onClick={() => setLandUnit(u)}
                                        className={cn(
                                            "relative z-10 w-20 py-1.5 text-xs font-bold uppercase tracking-wider text-center transition-colors duration-200",
                                            landUnit === u ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                                        )}
                                    >
                                        {u}s
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Histogram Visual */}
                        <div className="h-12 flex items-end gap-[2px] mb-2 px-2 opacity-40 grayscale mask-gradient-b">
                            {LAND_HISTOGRAM_DATA.map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.02 }}
                                    className={cn(
                                        "flex-1 rounded-t-sm transition-colors",
                                        // Highlight bars within range
                                        i >= (localLand[0] / 5) && i <= (localLand[1] / 5) ? "bg-red-500" : "bg-slate-300"
                                    )}
                                />
                            ))}
                        </div>

                        {/* Radix Slider */}
                        <Slider.Root
                            className="relative flex items-center select-none touch-none w-full h-5"
                            value={localLand}
                            min={0}
                            max={landUnit === 'acre' ? 1000 : 100} // 10 Acres = 1000 Cents
                            step={landUnit === 'acre' ? 5 : 1}
                            onValueChange={setLocalLand}
                        >
                            <Slider.Track className="bg-slate-100 relative grow rounded-full h-1.5 overflow-hidden">
                                <Slider.Range className="absolute bg-gradient-to-r from-red-400 to-red-600 h-full rounded-full" />
                            </Slider.Track>
                            {localLand.map((val, i) => (
                                <Slider.Thumb
                                    key={i}
                                    className="block w-5 h-5 bg-white border-2 border-red-500 shadow-[0_4px_10px_rgba(239,68,68,0.2)] rounded-full hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-500/20 transition-all"
                                >
                                    {/* Floating Tooltip */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-sans text-[10px] font-medium py-1 px-2 rounded-md whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none tracking-tight">
                                        {formatLand(val, landUnit)}
                                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                                    </div>
                                </Slider.Thumb>
                            ))}
                        </Slider.Root>
                        <div className="flex justify-between mt-3 text-xs font-medium text-slate-500">
                            <span>{formatLand(localLand[0], landUnit)}</span>
                            <span>{formatLand(localLand[1], landUnit)}</span>
                        </div>
                    </FilterSection>

                    {/* 3. BUDGET (Dual Range + Gradient) */}

                    <FilterSection value="price" title="Budget" icon={Sparkles}>
                        <div className="pt-10 px-2">
                            <Slider.Root
                                className="relative flex items-center select-none touch-none w-full h-5 group"
                                value={localPrice}
                                min={10}
                                max={1500}
                                step={10}
                                onValueChange={setLocalPrice}
                            >
                                <Slider.Track className="bg-slate-100 relative grow rounded-full h-1.5 overflow-hidden">
                                    <Slider.Range className="absolute bg-gradient-to-r from-slate-400 to-slate-900 h-full rounded-full group-hover:from-red-400 group-hover:to-red-600 transition-all" />
                                </Slider.Track>
                                {localPrice.map((val, i) => (
                                    <Slider.Thumb
                                        key={i}
                                        className="block w-6 h-6 bg-white border border-slate-200 shadow-lg rounded-full hover:scale-110 focus:outline-none focus:ring-4 focus:ring-slate-900/10 transition-all flex items-center justify-center"
                                    >
                                        <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                                        {/* Persistent Tooltip */}
                                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-white border border-slate-100 shadow-xl text-slate-900 font-sans text-[10px] font-medium py-1 px-2.5 rounded-lg whitespace-nowrap z-20 tracking-tight">
                                            {formatCurrency(val)}
                                        </div>
                                    </Slider.Thumb>
                                ))}
                            </Slider.Root>
                        </div>
                    </FilterSection>

                    {/* 4. ROOMS (Pills with Pop) */}
                    <FilterSection value="rooms" title="Rooms" icon={Check}>
                        <div className="space-y-4">
                            {[
                                { label: "BHK", key: 'bhk' },
                                { label: "Bathrooms", key: 'baths' }
                            ].map((row) => (
                                <div key={row.key}>
                                    <label className="font-interface text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-2 block">{row.label}</label>
                                    <div className="flex gap-2 p-1 bg-slate-50 rounded-xl">
                                        {[2, 3, 4, 5, 6].map((num) => {
                                            const isActive = filters[row.key] === num;
                                            return (
                                                <motion.button
                                                    key={num}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => setFilters(p => ({ ...p, [row.key]: isActive ? null : num }))}
                                                    className={cn(
                                                        "flex-1 h-9 rounded-lg text-sm font-bold flex items-center justify-center transition-all relative overflow-hidden",
                                                        isActive
                                                            ? "text-white shadow-[0_4px_14px_rgba(239,68,68,0.4)]"
                                                            : "text-slate-400 hover:text-slate-600 hover:bg-white"
                                                    )}
                                                >
                                                    {isActive && (
                                                        <motion.div
                                                            layoutId={`pill-${row.key}`}
                                                            className="absolute inset-0 bg-red-500 z-0"
                                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                                        />
                                                    )}
                                                    <span className="relative z-10">{num}{num === 6 && '+'}</span>
                                                </motion.button>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FilterSection>
                </Accordion.Root>
            </div>

            {/* APPLY BUTTON */}
            <div className="p-5 border-t border-slate-100 bg-white/60 relative z-10">
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full bg-slate-900 hover:bg-black text-white py-3.5 rounded-xl font-interface text-xs font-bold uppercase tracking-widest shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2"
                >
                    Show {filteredCount} Properties
                </motion.button>
            </div>

        </motion.aside >
    )
}
