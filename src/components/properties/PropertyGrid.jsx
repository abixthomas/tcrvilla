"use client"

import { useRef } from "react"
import { PropertyCard } from "@/components/ui/property-card"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"


export function PropertyGrid({ properties }) {
    if (properties.length === 0) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 py-20">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-display font-medium text-gray-900">No Properties Found</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        )
    }

    const gridRef = useRef(null)

    useGSAP(() => {
        ScrollTrigger.batch(gridRef.current.children, {
            onEnter: (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.05, // Much faster stagger
                    duration: 0.4, // Snappier duration
                    ease: "power2.out",
                    overwrite: true
                })
            },
            onLeaveBack: (batch) => {
                // Optional: Fade out when scrolling back up? 
                // Creating a "liquid" feel often implies things stay revealed or gently fade.
                // User asked for "Waterfall Reveal", usually meaning entry.
                // Keeping it simple for performance.
            },
            start: "top 85%"
        })

        // Initial set state to hidden for GSAP to reveal
        gsap.set(gridRef.current.children, { opacity: 0, y: 50, scale: 0.95 })

    }, { scope: gridRef, dependencies: [properties] })

    return (
        <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20 items-start"
        >
            {properties.map((property, index) => (
                <div key={property.id} className="w-full property-card will-change-transform">
                    <PropertyCard property={property} index={index} />
                </div>
            ))}
        </div>
    )
}
