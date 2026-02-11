"use client"

import React, { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { propertiesData as properties } from "@/data/properties"
import { PropertyHero } from "@/components/property-detail/PropertyHero"
import { ImageGallery } from "@/components/property-detail/ImageGallery"

import { PropertyOverviewGrid } from "@/components/property-detail/PropertyOverviewGrid"
import { PropertyNarrative } from "@/components/property-detail/PropertyNarrative"
import { PropertyHighlights } from "@/components/property-detail/PropertyHighlights"
import { PropertySidebar } from "@/components/property-detail/PropertySidebar"
import { Navbar } from "@/components/layout/Navbar"
import { Play } from "lucide-react"

export default function PropertyDetailPage() {
    const params = useParams()
    const [property, setProperty] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (params.id) {
            const found = properties.find(p => p.id === parseInt(params.id))
            setProperty(found)
            setLoading(false)
        }
    }, [params.id])

    if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>
    if (!property) return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Property not found</div>

    return (
        <main className="min-h-screen bg-gray-50/50">
            <Navbar />

            {/* 1. New Header Section */}
            <PropertyHero property={property} />

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* LEFT COLUMN: Main Content (Scrollable) */}
                    <div className="w-full lg:w-[65%] space-y-12">

                        {/* A. Image Gallery */}
                        <ImageGallery property={property} />

                        {/* B. Video Link Section */}
                        <div className="bg-black rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group cursor-pointer shadow-lg">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop')] bg-cover bg-center" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

                            <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                <Play className="w-6 h-6 text-white fill-current" />
                            </div>

                            <div className="relative z-10 text-center md:text-left">
                                <h3 className="text-xl font-display font-bold text-white mb-1">Watch Property Video</h3>
                                <p className="text-white/60 text-sm">Take a cinematic tour of this residence.</p>
                            </div>

                            <button className="relative z-10 md:ml-auto px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-gray-100 transition-colors">
                                Play Video
                            </button>
                        </div>

                        {/* Overview Grid */}
                        <PropertyOverviewGrid property={property} />

                        {/* C. Features (Amenities) */}


                        {/* D. About (Narrative) */}
                        <div id="about" className="border-t border-gray-100 pt-12">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-8 h-[2px] bg-secondary" />
                                <span className="text-secondary font-bold uppercase tracking-widest text-xs">The Story</span>
                            </div>
                            <h3 className="text-2xl font-display font-medium text-gray-900 mb-8">About This Property</h3>
                            <PropertyNarrative property={property} />
                        </div>

                        {/* E. Highlights (Bento Grid) */}
                        <PropertyHighlights property={property} />

                    </div>

                    {/* RIGHT COLUMN: Sidebar (Sticky) */}
                    <div className="w-full lg:w-[35%]">
                        <div className="sticky top-32">
                            <PropertySidebar property={property} />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
