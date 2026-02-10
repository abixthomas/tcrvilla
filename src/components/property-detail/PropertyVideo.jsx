"use client"

import React from "react"
import { Play } from "lucide-react"

export function PropertyVideo() {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-900 rounded-3xl overflow-hidden group cursor-pointer mt-12 mb-24">
            <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
                alt="Video Thumbnail"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 hue-rotate-15"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-2xl shadow-secondary/50 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 fill-white text-white ml-1" />
                </div>
                <h3 className="text-white font-display text-2xl mt-6 font-bold">Cinematic Property Tour</h3>
                <p className="text-white/60 text-sm">2:45 min duration</p>
            </div>
        </div>
    )
}
