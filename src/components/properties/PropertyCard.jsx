"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Heart, MapPin, BedDouble, Ruler, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PropertyCard({ property }) {
    const [isHovered, setIsHovered] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // 3D Tilt Logic
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
        setIsHovered(false)
    }

    // Auto-play images on hover
    const handleMouseEnter = () => {
        setIsHovered(true)
        // Simple interval for demo, could be more robust
        // In a real app, use `useEffect` with `isHovered` dependency
    }

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative group h-[450px] w-full bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer"
        >
            {/* Layer 1: Image Carousel (Parallax Depth) */}
            <div
                className="absolute inset-0 h-full w-full"
                style={{ transform: "translateZ(20px)" }}
            >
                <img
                    src={property.images[0]}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                        {property.type}
                    </span>
                    {property.status === "Hot Deal" && (
                        <span className="px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg animate-pulse">
                            Hot Deal
                        </span>
                    )}
                </div>

                <button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-secondary hover:text-white transition-colors duration-300">
                    <Heart className="h-5 w-5 fill-transparent hover:fill-current transition-all" />
                </button>
            </div>

            {/* Layer 2: Content (Floats above) */}
            <div
                className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-3"
                style={{ transform: "translateZ(60px)" }}
            >
                {/* Price Tag */}
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-serif font-bold text-white drop-shadow-md">
                        ₹{(property.price / 100000).toFixed(1)}L
                    </span>
                    <span className="text-gray-300 text-sm font-medium">Onwards</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white leading-tight line-clamp-2 drop-shadow-sm group-hover:text-secondary transition-colors">
                    {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1 text-gray-300 text-sm">
                    <MapPin className="h-3 w-3" />
                    {property.location}
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 py-3 border-t border-white/10 mt-1">
                    <div className="flex items-center gap-2 text-white">
                        <BedDouble className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-bold">{property.bhk} BHK</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <Ruler className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-bold">{property.sqft} Sqft</span>
                    </div>
                </div>

                {/* Hover Actions - Slide Up */}
                <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500">
                    <Button className="w-full bg-white text-primary hover:bg-secondary hover:text-white font-bold rounded-xl transition-colors">
                        View Property Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
