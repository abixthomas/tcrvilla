"use client"

import React from "react"
import { BedDouble, Bath, Ruler, Trees, Key, Calendar, CheckCircle2, MapPinned } from "lucide-react"

export function PropertyOverview({ property }) {

    const details = [
        { label: "Bedrooms", value: `${property.beds} Beds`, icon: BedDouble },
        { label: "Bathrooms", value: `${property.baths} Baths`, icon: Bath },
        { label: "Area", value: `${property.sqft} Sqft`, icon: Ruler },
        { label: "Land", value: "5 Cents", icon: Trees }, // Mock data if missing
        { label: "Ownership", value: "Freehold", icon: Key },
        { label: "Year Built", value: "2025", icon: Calendar },
        { label: "Status", value: "Ready to Move", icon: CheckCircle2 },
        { label: "Location", value: property.location, icon: MapPinned },
    ]

    return (
        <div className="w-full">
            <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-display font-bold text-primary">Property Overview</h2>
                <div className="h-0.5 w-12 bg-secondary rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {details.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow group"
                    >
                        <div className="w-8 h-8 mb-2 text-secondary/80 group-hover:text-secondary group-hover:scale-110 transition-transform">
                            <item.icon className="w-full h-full stroke-[1.5]" />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</span>
                        <span className="text-sm font-bold text-primary">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
