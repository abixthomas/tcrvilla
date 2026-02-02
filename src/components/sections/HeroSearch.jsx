"use client"

import * as React from "react"
import { Search, MapPin, Home, DollarSign, SlidersHorizontal, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSearch() {
    const [activeTab, setActiveTab] = React.useState("buy")

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Tabs Removed as per client request */}

            {/* Main Search Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row items-center gap-4 animate-in fade-in zoom-in duration-500">

                {/* Location Dropdown */}
                <div className="flex-1 w-full relative group border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4">
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Location</label>
                    <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-50 p-2 rounded-full text-primary">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                                <div className="font-semibold text-gray-800">Thrissur City</div>
                                <div className="text-xs text-gray-500">Select area</div>
                            </div>
                        </div>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                </div>

                {/* Property Type */}
                <div className="flex-1 w-full relative group border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4 md:pl-4">
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Property Type</label>
                    <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-50 p-2 rounded-full text-primary">
                                <Home className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                                <div className="font-semibold text-gray-800">All Residential</div>
                                <div className="text-xs text-gray-500">Villas, Apartments...</div>
                            </div>
                        </div>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                </div>

                {/* Price Range */}
                <div className="flex-1 w-full relative group pb-4 md:pb-0 md:pl-4">
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 block">Price Range</label>
                    <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-50 p-2 rounded-full text-primary">
                                <DollarSign className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                                <div className="font-semibold text-gray-800">₹50L - ₹2Cr</div>
                                <div className="text-xs text-gray-500">Budget Range</div>
                            </div>
                        </div>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
                    <Button variant="outline" size="icon" className="h-14 w-14 rounded-xl border-gray-200 hover:bg-gray-50 hover:text-primary">
                        <SlidersHorizontal className="h-5 w-5" />
                    </Button>
                    <Button className="h-14 rounded-xl px-8 flex-1 md:flex-none text-lg font-medium bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    )
}
