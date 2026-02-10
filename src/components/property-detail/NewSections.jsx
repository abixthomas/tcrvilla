"use client"

import React from "react"
import { Box, Play, ChevronRight, CheckCircle, MapPin, Zap, Phone } from "lucide-react"

export function VirtualTourBanner() {
    return (
        <div className="bg-gray-900 rounded-3xl overflow-hidden relative min-h-[250px] flex items-center justify-center text-center p-8 group cursor-pointer">
            {/* Background Image/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90 z-10" />
            <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000" />

            <div className="relative z-20 max-w-lg mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">360° Experience</span>
                </div>
                <h3 className="text-3xl font-display font-medium text-white mb-3">Virtual Tour Available</h3>
                <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
                    Step inside and explore every corner of this magnificent villa from the comfort of your screen. High-definition 3D rendering.
                </p>
                <button className="bg-secondary text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl shadow-secondary/20 hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                    <Play className="w-4 h-4 fill-white" /> Start Virtual Tour
                </button>
            </div>
        </div>
    )
}

export function AboutResidence({ property }) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">

            {/* 1. Header & Vision - The "Hook" */}
            <div className="relative p-8 md:p-12 overflow-hidden bg-gray-50">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl md:text-4xl font-display font-medium text-gray-900 leading-tight">
                                About This Property
                            </h2>
                            <div className="h-px flex-1 bg-gray-200" />
                        </div>

                        <div className="space-y-4 text-gray-600 leading-relaxed font-light text-base md:text-lg">
                            <p>
                                <span className="font-semibold text-gray-900">Your Spacious Sanctuary Awaits.</span>
                                Discover the perfect blend of modern luxury and family-centric design in this expansive 1880 sqft residence. Situated on a generous 5.5 cent plot in Mannuthy, this home is more than just a structure—it's a canvas for your best life.
                            </p>
                            <p>
                                Crafted for those who value space, privacy, and connection, every corner of this 4-bedroom masterpiece radiates warmth. With contemporary Kerala architecture, abundant natural light, and premium finishes, it stands as a testament to quality living.
                            </p>
                            <p className="font-medium text-secondary">
                                Ready to move in? Your dream home is just one step away.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-2xl font-display font-bold text-secondary">4</span>
                                <div className="leading-tight">
                                    <span className="block text-[10px] font-bold uppercase text-gray-400">Bedrooms</span>
                                    <span className="block text-xs font-bold text-gray-900">All Attached</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-2xl font-display font-bold text-secondary">1880</span>
                                <div className="leading-tight">
                                    <span className="block text-[10px] font-bold uppercase text-gray-400">Square Feet</span>
                                    <span className="block text-xs font-bold text-gray-900">Built-Up Area</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-2xl font-display font-bold text-secondary">5.5</span>
                                <div className="leading-tight">
                                    <span className="block text-[10px] font-bold uppercase text-gray-400">Cents</span>
                                    <span className="block text-xs font-bold text-gray-900">Plot Area</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Feature Highlights */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm">Ready to Occupy</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Move in immediately with zero waiting period. Fully finished and cleaned.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3 hover:-translate-y-1 transition-transform duration-300 delay-75">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Zap className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm">100% Loan Support</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Hassle-free financing with full bank loan assistance and documentation.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3 hover:-translate-y-1 transition-transform duration-300 delay-100">
                            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                                <Box className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm">Modern Design</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Contemporary architecture with spacious halls and excellent ventilation.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3 hover:-translate-y-1 transition-transform duration-300 delay-150">
                            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm">Prime Location</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Located in a good residential area with easy access to city amenities.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Detailed Content Grid (Features & Connectivity) */}
            <div className="p-8 md:p-12 border-t border-gray-100">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Left: Features List */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-6">Why This Home is Perfect For You</h3>
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    "Ideal for Large & Joint Families",
                                    "Perfect for Professionals with Growing Needs",
                                    "Excellent Investment Opportunity",
                                    "Great Choice for NRI Buyers",
                                    "Secure & Peaceful Residential Neighborhood",
                                    "Quality Construction with Premium Finishes"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                        <span className="text-sm text-gray-600 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-1">Need Financial Assistance?</h4>
                                    <p className="text-sm text-gray-500">We offer complete support for bank loans and property verification.</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors">
                                        Documentation
                                    </button>
                                    <button className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-secondary/20 hover:scale-105 transition-transform">
                                        Check Eligibility
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Connectivity (Refined) */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-primary">Location Advantage</h3>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-wide">Prime Area</span>
                        </div>
                        <div className="space-y-0 divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                            {[
                                { place: "Swaraj Round", dist: "4.5 km", time: "12 min" },
                                { place: "Railway Station", dist: "5.2 km", time: "15 min" },
                                { place: "Jubilee Mission Hospital", dist: "3.0 km", time: "8 min" },
                                { place: "NH 544 Highway", dist: "1.5 km", time: "4 min" },
                            ].map((loc, i) => (
                                <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                                    <span className="text-sm font-medium text-gray-700">{loc.place}</span>
                                    <div className="text-right">
                                        <span className="block text-sm font-bold text-gray-900">{loc.dist}</span>
                                        <span className="text-[10px] text-gray-400 font-medium">{loc.time} drive</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="https://wa.me/919562976969" className="block w-full bg-[#25D366] text-white p-4 rounded-xl shadow-lg hover:bg-[#20bd5a] transition-colors text-center group">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <Phone className="w-5 h-5 fill-current" />
                                <span className="font-bold text-lg">95629 76969</span>
                            </div>
                            <span className="text-xs font-medium text-white/90">Click to Schedule Site Visit</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
