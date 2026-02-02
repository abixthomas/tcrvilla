"use client"

import { motion } from "framer-motion"
import { Bed, Bath, Expand, Heart, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function PropertyCard({ property, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-3"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
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
                    <span className="text-2xl font-bold">{property.price}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-serif font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">
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
                        <span className="text-sm font-medium">{property.buds} Beds</span>
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
                    <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
                        View Details <ArrowUpRight className="h-4 w-4" />
                    </Button>
                    <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-white">
                        Call
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
