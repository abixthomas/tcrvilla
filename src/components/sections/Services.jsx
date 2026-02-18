"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Home,
    Key,
    Shield,
    Search,
    PenTool,
    Handshake,
    ArrowRight,
    Sparkles,
    Star,
} from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Premium Listings",
        description:
            "Exclusive access to the finest villas and luxury properties in Thrissur's most sought-after locations.",
        gradient: "from-blue-600 via-indigo-500 to-cyan-400",
        shadow: "shadow-blue-500/20",
    },
    {
        icon: Search,
        title: "Property Sourcing",
        description:
            "Personalized property search services to find the perfect home that matches your specific requirements and lifestyle.",
        gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
        shadow: "shadow-purple-500/20",
    },
    {
        icon: Shield,
        title: "Legal Assistance",
        description:
            "Comprehensive legal support for property documentation, verification, and registration processes.",
        gradient: "from-emerald-600 via-teal-500 to-cyan-400",
        shadow: "shadow-emerald-500/20",
    },
    {
        icon: Key,
        title: "Key Handover",
        description:
            "Seamless property handover experience with complete documentation and orientation of your new home.",
        gradient: "from-orange-600 via-amber-500 to-yellow-400",
        shadow: "shadow-orange-500/20",
    },
    {
        icon: PenTool,
        title: "Interior Design",
        description:
            "Expert consultation for interior design and customization to turn your house into a personalized dream home.",
        gradient: "from-rose-600 via-pink-500 to-red-400",
        shadow: "shadow-rose-500/20",
    },
    {
        icon: Handshake,
        title: "Resale Support",
        description:
            "Dedicated assistance for selling your property with market analysis and extensive buyer network access.",
        gradient: "from-cyan-600 via-sky-500 to-blue-400",
        shadow: "shadow-cyan-500/20",
    },
];

const ROTATION_RANGE = 15; // Reduced 
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

function TiltCard({ service, index }) {
    const cardRef = useRef(null);

    // Existing tilt logic replaced with GSAP 3D entrance
    // The user requested: "Trigger the entrance of the cards from the right side. As they enter, add a slight rotationY that straightens out (0deg) as they hit the center focus area."

    return (
        <div
            ref={cardRef}
            className="card-container relative h-full perspective-1000 opacity-0 will-change-transform" // Initial opacity 0 for GSAP to handle
        >
            <div
                className={`group relative h-full bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${service.shadow}`}
            >
                {/* Animated Background Mesh */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />

                {/* Top Highlight border */}
                <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full transform-style-3d">
                    <div className="mb-6 flex justify-between items-start">
                        {/* Icon Container - Refined Size */}
                        <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md shadow-gray-200 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500`}
                        >
                            <service.icon className="w-7 h-7 text-white drop-shadow-sm" />
                        </div>

                        {/* Arrow */}
                        <div
                            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-75"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-900" />
                        </div>
                    </div>

                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                    </h3>

                    <p className="text-gray-500 text-base leading-relaxed flex-grow group-hover:text-gray-600 transition-colors duration-300">
                        {service.description}
                    </p>

                    {/* Decorative corner shape */}
                    <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
            </div>
        </div>
    );
}

export function Services() {
    const containerRef = useRef(null)

    useGSAP(() => {
        // 1. Pinning totally removed. Title flows normally.

        // 2. 3D Card Entrance from Right
        const cards = gsap.utils.toArray(".card-container")

        cards.forEach((card, i) => {
            gsap.fromTo(card,
                {
                    x: 100, // From right
                    opacity: 0,
                    rotationY: 45, // Angled
                },
                {
                    x: 0,
                    opacity: 1,
                    rotationY: 0, // Straighten out
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%", // When card top hits 85% of viewport height
                        toggleActions: "play none none reverse"
                    }
                }
            )
        })

    }, { scope: containerRef })

    return (
        <section ref={containerRef} id="services" className="relative py-16 md:py-24 bg-white overflow-hidden">
            {/* Cinema-quality Background Elements - Themed */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-primary/3 rounded-full blur-[100px] mix-blend-multiply animate-blob" />
                <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-secondary/3 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-2000" />
                <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-primary/3 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 bg-white/80 backdrop-blur-sm p-4 rounded-3xl z-20">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6"
                    >
                        <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                        <span className="text-gray-800 font-bold uppercase tracking-widest text-[10px] md:text-xs">Excellence in Every Detail</span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-display font-medium text-gray-900 mb-6 leading-relaxed py-4"
                    >
                        Beyond Ordinary <br />
                        <span className="text-gradient-elite relative inline-block pb-2">
                            Real Estate Services
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-full"></span>
                        </span>
                    </h2>

                    <p
                        className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-light"
                    >
                        We redefine the property experience with a suite of white-glove services designed for the most discerning clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-1000">
                    {services.map((service, index) => (
                        <TiltCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
