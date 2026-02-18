"use client"

import { useRef, useState, useEffect } from "react"
import { HeroSearch } from "./HeroSearch"
import { ArrowRight, Star } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
]

export function Hero() {
    const [currentImage, setCurrentImage] = useState(0)
    const [prevImage, setPrevImage] = useState(0)

    const containerRef = useRef(null)
    const bgRef = useRef(null)
    const textRef = useRef(null)
    const searchRef = useRef(null)
    const statsRef = useRef(null)

    useGSAP(() => {
        // Parallax Background
        gsap.to(bgRef.current, {
            y: "30%",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        })

        // Text Reveal - Staggered Words
        const words = textRef.current.querySelectorAll(".word")
        gsap.fromTo(words,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            }
        )

        // Search Reveal
        gsap.fromTo(searchRef.current,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 }
        )

        // Stats Reveal
        gsap.fromTo(statsRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
        )

    }, { scope: containerRef })

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((current) => {
                setPrevImage(current)
                return (current + 1) % HERO_IMAGES.length
            })
        }, 7000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gray-900"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >

            {/* STATIC FALLBACK (Immediate Load) - Using direct IMG tag for browser preloader priority */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HERO_IMAGES[0]}
                    alt="Background Fallback"
                    className="w-full h-full object-cover"
                    loading="eager"
                    priority="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
            </div>

            {/* Dynamic Background Slider - Stacked Approach */}
            <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
                {HERO_IMAGES.map((img, idx) => (
                    <div
                        key={idx}
                        style={{
                            zIndex: idx === currentImage ? 2 : 1,
                            opacity: idx === currentImage ? 1 : 0,
                            transform: idx === currentImage ? "scale(1.05)" : "scale(1.15)",
                            transition: "opacity 1.5s ease-in-out, transform 7s linear"
                        }}
                        // GSAP handles the parallax on the parent container, CSS handles the crossfade loop
                        className="absolute inset-0"
                    >
                        <img
                            src={img}
                            alt={`Luxury Slide ${idx}`}
                            loading="eager"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
                    </div>
                ))}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none z-20" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div
                    className="flex flex-col items-center pt-24 md:pt-32"
                >
                    {/* Badge Removed */}


                    {/* Main Heading with Premium Typography */}
                    {/* Main Heading with Premium Typography */}
                    {/* Main Heading with Premium Typography */}
                    <h1
                        ref={textRef}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-8 leading-tight tracking-tight text-center drop-shadow-lg"
                    >
                        <span className="word inline-block">Discover</span> <span className="word inline-block">Your</span>
                        <br className="hidden md:block" />
                        <span className="word inline-block italic font-normal text-white/90">Dream</span> <span className="word inline-block italic font-normal text-white/90">Sanctuary</span>
                    </h1>

                    {/* Subheading Removed as per request */}

                    {/* Search Component Wrapper */}
                    <div
                        ref={searchRef}
                        className="w-full max-w-4xl"
                    >
                        <HeroSearch />
                    </div>

                    {/* Integrated Stats Bar */}
                    <div
                        ref={statsRef}
                        className="mt-16 hidden md:grid grid-cols-3 divide-x divide-white/10 bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-8 py-6 w-full max-w-3xl shadow-2xl"
                    >
                        {[
                            { label: "Active Listings", value: "500+" },
                            { label: "Trusted Agents", value: "50+" },
                            { label: "Happy Families", value: "1.2k+" },
                        ].map((stat, i) => (
                            <div key={i} className="px-8 text-center group hover:bg-white/5 transition-colors rounded-lg py-2">
                                <div className="text-4xl font-display font-medium text-white mb-1 group-hover:text-secondary transition-colors">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {HERO_IMAGES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === idx ? "w-8 bg-secondary" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section >
    )
}
