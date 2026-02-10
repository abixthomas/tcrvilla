"use client"

import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Lenis from "lenis"
import { propertiesData } from "@/data/properties"

// Visual Replication Components
import { PropertyHero } from "@/components/property-detail/PropertyHero"
import { PropertyOverview } from "@/components/property-detail/PropertyOverview"
import { PropertySidebar } from "@/components/property-detail/PropertySidebar"
import { VirtualTourBanner, AboutResidence } from "@/components/property-detail/NewSections"
import { PropertyVideo } from "@/components/property-detail/PropertyVideo"
import { PropertyMedia } from "@/components/property-detail/PropertyMedia"

export default function PropertyDetailPage() {
    const params = useParams()
    const [property, setProperty] = useState(null)

    // Initialize Lenis
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => lenis.destroy()
    }, [])

    useEffect(() => {
        if (params.id) {
            setProperty(propertiesData.find(p => p.id === parseInt(params.id)))
        }
    }, [params.id])

    if (!property) return null

    return (
        <main className="bg-gray-50 min-h-screen pb-24 font-sans">

            {/* 1. Hero Section (Image + Header Details) */}
            <PropertyHero property={property} />

            {/* 2. Main Content Container (Standard, No Overlap) */}
            <div className="container mx-auto px-4 md:px-6 py-12">

                {/* Property Overview Section with proper spacing */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
                    <PropertyOverview property={property} />
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* LEFT COLUMN (Content) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* About & Floor Plans */}
                        <AboutResidence property={property} />

                        {/* Gallery */}
                        <PropertyMedia property={property} />

                        {/* Video */}
                        <PropertyVideo />
                    </div>

                    {/* RIGHT COLUMN (Sticky Sidebar) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24" id="inquiry-form">
                            <PropertySidebar property={property} />
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Sticky Action Bar */}
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl z-50 flex items-center justify-between animate-in slide-in-from-bottom-5 fade-in duration-500">
                <div>
                    <span className="text-[10px] font-bold uppercase text-gray-500 block tracking-widest">Asking Price</span>
                    <span className="text-xl font-display font-bold text-secondary">₹{(property.price / 100000).toFixed(2)}L</span>
                </div>
                <button
                    onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-secondary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all active:scale-95"
                >
                    Send Inquiry
                </button>
            </div>

        </main>
    )
}
