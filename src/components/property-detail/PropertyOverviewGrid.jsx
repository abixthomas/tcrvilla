"use client"

import React from "react"
import {
    Key, Home, MapPin, Calendar,
    CheckCircle2, Ruler, Warehouse,
    BedDouble, Bath
} from "lucide-react"

export function PropertyOverviewGrid({ property }) {
    if (!property) return null

    const overviewItems = [
        { label: "Ownership", value: "Freehold", icon: Key },
        { label: "Town", value: property.location, icon: Home }, // Using location as Town
        { label: "Locality", value: "Thrissur", icon: MapPin },
        { label: "Constructed Year", value: "2024", icon: Calendar },
        { label: "Ready to Move", value: "Yes", icon: CheckCircle2 },
        { label: "Land Area", value: `${property.landArea || 5} Cent`, icon: Ruler },
        { label: "Building Area", value: `${property.sqft} Sq-Ft`, icon: Warehouse },
        { label: "Bed Rooms", value: property.beds, icon: BedDouble },
        { label: "Bath Rooms", value: property.baths, icon: Bath },
    ]

    return (
        <section className="py-8 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-8">
                <span className="w-8 h-[2px] bg-secondary" />
                <h3 className="text-2xl font-display font-medium text-secondary">Overview</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {overviewItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                        {/* Icon Box - Dark Blue */}
                        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-white shadow-md shadow-secondary/20 group-hover:scale-105 transition-transform duration-300">
                            <item.icon className="w-7 h-7 stroke-[1.5]" />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-900 text-sm md:text-base">{item.label}</span>
                            <span className="text-gray-500 text-sm font-medium">{item.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
