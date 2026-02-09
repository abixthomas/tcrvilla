"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bed, Bath, Expand, Heart, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function PropertyCard({ property, index }) {
    const [imgSrc, setImgSrc] = useState(
        (property.images && property.images.length > 0 ? property.images[0] : property.image) ||
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
    )

    return (
        <motion.div
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 h-full"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                    src={imgSrc}
                    alt={property.title}
                    onError={() => setImgSrc("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80")}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {property.type}
                </div>
                <button className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-red-500 p-2 rounded-full backdrop-blur-sm transition-all">
                    <Heart className="h-5 w-5 fill-current" />
                </button>

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-2xl font-bold font-display tracking-tight text-white drop-shadow-md">
                        ₹{(property.price / 100000).toFixed(1)}L
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-display font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors tracking-tight">
                            {property.title}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {property.location}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between py-4 border-t border-gray-100 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Bed className="h-4 w-4" />
                        <span className="text-sm font-medium">{property.bhk || property.buds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Bath className="h-4 w-4" />
                        <span className="text-sm font-medium">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Expand className="h-4 w-4" />
                        <span className="text-sm font-medium">{property.sqft} sqft</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <Link href="/properties" className="w-full">
                        <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
                            View Details <ArrowUpRight className="h-4 w-4" />
                        </Button>
                    </Link>
                    <a href="tel:+919846123456" className="flex-1">
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                            Call
                        </Button>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}
