"use client";

import React, { useRef, useState, useEffect } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    useTransform,
    useInView,
} from "framer-motion";
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
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });
    const [isMobile, setIsMobile] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Auto-play tilt on mobile when in view
    useEffect(() => {
        if (isMobile && isInView) {
            const interval = setInterval(() => {
                const time = Date.now() / 1500;
                x.set(Math.sin(time) * 3);
                y.set(Math.cos(time) * 3);
            }, 16);
            return () => clearInterval(interval);
        } else if (isMobile && !isInView) {
            x.set(0);
            y.set(0);
        }
    }, [isMobile, isInView, x, y]);

    const handleMouseMove = (e) => {
        if (isMobile || !ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: index * 0.05,
            }}
            viewport={{ once: true, margin: "-10%" }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d", transform }}
            className="relative h-full"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
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
        </motion.div>
    );
}

export function Services() {
    return (
        <section id="services" className="relative py-16 md:py-24 bg-white overflow-hidden">
            {/* Cinema-quality Background Elements - Themed */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-primary/3 rounded-full blur-[100px] mix-blend-multiply animate-blob" />
                <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-secondary/3 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-2000" />
                <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-primary/3 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6"
                    >
                        <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                        <span className="text-gray-800 font-bold uppercase tracking-widest text-[10px] md:text-xs">Excellence in Every Detail</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-medium text-gray-900 mb-6 leading-tight tracking-tight"
                    >
                        Beyond Ordinary <br />
                        <span className="text-gradient-elite relative">
                            Real Estate Services
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-full"></span>
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-light"
                    >
                        We redefine the property experience with a suite of white-glove services designed for the most discerning clients.
                    </motion.p>
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
