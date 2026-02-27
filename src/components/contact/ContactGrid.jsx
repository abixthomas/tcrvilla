"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Phone, Mail, MapPin, ArrowRight, User, Building2, MessageSquare, ArrowUpRight } from "lucide-react"

export function ContactGrid() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    const formRef = useRef(null);
    const formInView = useInView(formRef, { once: true, margin: "-100px" });

    // Premium iOS style spring animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 }
        }
    };

    return (
        <section className="relative min-h-screen bg-[#F5F5F7] text-[#1D1D1F] overflow-hidden pb-32">

            {/* 1. Cinematic Colorful Hero (Now 65vh for proper text containment) */}
            <motion.div
                className="relative h-[65vh] w-full z-0 overflow-hidden bg-primary"
                style={{ y: y1 }}
            >
                {/* Rich Premium Dark Brand Gradient vs Washed Out Milky White */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/80 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop"
                    alt="Luxury Estate Backdrop"
                    className="w-full h-full object-cover object-bottom opacity-40 scale-105"
                />
            </motion.div>

            {/* 2. Primary Title - Centered & Encased in the Color Block */}
            <div className="relative z-20 container mx-auto px-4 md:px-8 -mt-[16rem] md:-mt-[22rem] pointer-events-none flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ opacity: opacityHero }}
                    className="max-w-3xl"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
                        Concierge Services
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6 drop-shadow-xl" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
                        Let's start a conversation.
                    </h1>
                    <p className="text-white drop-shadow-md text-lg md:text-xl font-light font-medium" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}>
                        Experience uncompromised service. Connect directly with our team for immediate assistance.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-30 container mx-auto px-4 md:px-8 mt-12 md:mt-24">

                {/* 3. Priority Contact Section: The "Commands Row" (iOS Widgets) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20"
                >
                    {/* Widget 1: Phone */}
                    <motion.a
                        href="tel:+914872345678"
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                        className="group relative bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-start overflow-hidden border border-gray-100/50"
                    >
                        {/* Interactive Color Flare */}
                        <motion.div
                            className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                            variants={{ hover: { scale: 1.5, opacity: 1, backgroundColor: "rgba(18, 41, 71, 0.08)" } }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />

                        <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-white shadow-sm relative z-10">
                            <Phone className="w-7 h-7" />
                        </div>

                        {/* Floating Action Button */}
                        <motion.div
                            className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, x: -10, y: 10 },
                                hover: { opacity: 1, scale: 1, x: 0, y: 0 }
                            }}
                        >
                            <ArrowUpRight className="w-5 h-5" />
                        </motion.div>

                        <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-3 tracking-tight group-hover:text-primary transition-colors duration-300 relative z-10">Direct Call</h3>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed relative z-10 max-w-[90%]">Speak instantly with our luxury specialists for exclusive property viewings.</p>

                        <div className="mt-auto relative z-10">
                            <p className="text-sm font-medium text-primary/60 uppercase tracking-widest mb-1">Phone</p>
                            <p className="text-2xl font-display font-medium text-[#1D1D1F] group-hover:text-primary transition-colors duration-300">
                                +91 (487) 234 5678
                            </p>
                        </div>
                    </motion.a>

                    {/* Widget 2: Email */}
                    <motion.a
                        href="mailto:hello@thrissur.villas"
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                        className="group relative bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-start overflow-hidden border border-gray-100/50"
                    >
                        {/* Interactive Color Flare */}
                        <motion.div
                            className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
                            variants={{ hover: { scale: 1.5, opacity: 1, backgroundColor: "rgba(182, 34, 46, 0.08)" } }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />

                        <div className="w-16 h-16 rounded-2xl bg-secondary/5 text-secondary flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-secondary group-hover:text-white shadow-sm relative z-10">
                            <Mail className="w-7 h-7" />
                        </div>

                        {/* Floating Action Button */}
                        <motion.div
                            className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-secondary"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, x: -10, y: 10 },
                                hover: { opacity: 1, scale: 1, x: 0, y: 0 }
                            }}
                        >
                            <ArrowUpRight className="w-5 h-5" />
                        </motion.div>

                        <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-3 tracking-tight group-hover:text-secondary transition-colors duration-300 relative z-10">Email Inquiry</h3>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed relative z-10 max-w-[90%]">Request curated portfolios, detailed floor plans, and pricing structures.</p>

                        <div className="mt-auto relative z-10">
                            <p className="text-sm font-medium text-secondary/60 uppercase tracking-widest mb-1">Email</p>
                            <p className="text-xl font-display font-medium text-[#1D1D1F] group-hover:text-secondary transition-colors duration-300">
                                hello@thrissur.villas
                            </p>
                        </div>
                    </motion.a>

                    {/* Widget 3: Location */}
                    <motion.div
                        variants={itemVariants}
                        whileHover="hover"
                        className="group relative bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-start overflow-hidden border border-gray-100/50"
                    >
                        {/* Map Aesthetic BG */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none" />

                        {/* Interactive Color Flare */}
                        <motion.div
                            className="absolute -right-20 -top-20 w-64 h-64 bg-neutral-900/5 rounded-full blur-3xl"
                            variants={{ hover: { scale: 1.5, opacity: 1, backgroundColor: "rgba(23, 23, 23, 0.08)" } }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />

                        <div className="relative z-10 w-16 h-16 rounded-2xl bg-neutral-100 text-neutral-800 flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-neutral-900 group-hover:text-white shadow-sm">
                            <MapPin className="w-7 h-7" />
                        </div>

                        {/* Floating Action Button */}
                        <motion.div
                            className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-900"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, x: -10, y: 10 },
                                hover: { opacity: 1, scale: 1, x: 0, y: 0 }
                            }}
                        >
                            <ArrowUpRight className="w-5 h-5" />
                        </motion.div>

                        <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-3 tracking-tight group-hover:text-neutral-900 transition-colors duration-300 relative z-10">Headquarters</h3>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed relative z-10 max-w-[90%]">Schedule a private consultation at our executive lounge.</p>

                        <div className="mt-auto relative z-10">
                            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-1">Visit</p>
                            <p className="text-lg font-medium text-[#1D1D1F] leading-snug group-hover:text-neutral-900 transition-colors duration-300">
                                The Ivory Tower, Suite 402<br />Thrissur City
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 4. Secondary Form Section: The "Canvas" */}
                <div className="max-w-4xl mx-auto" ref={formRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] tracking-tight mb-4">Prefer to write?</h2>
                            <p className="text-gray-500 font-light max-w-lg mx-auto text-base">
                                Leave your details below and our specialists will craft a customized portfolio tailored to your unique requirements.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                            {/* Row 1: Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className="block text-sm font-medium text-[#1D1D1F] pl-2">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="fullName"
                                            placeholder="Johnathan Doe"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent rounded-2xl text-[#1D1D1F] placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="emailAddress" className="block text-sm font-medium text-[#1D1D1F] pl-2">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="emailAddress"
                                            placeholder="contact@domain.com"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent rounded-2xl text-[#1D1D1F] placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Phone & Property */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#1D1D1F] pl-2">Phone Number</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            placeholder="+91 (000) 000-0000"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent rounded-2xl text-[#1D1D1F] placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="propertyType" className="block text-sm font-medium text-[#1D1D1F] pl-2">Area of Interest</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Building2 className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <select
                                            id="propertyType"
                                            defaultValue=""
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent rounded-2xl text-[#1D1D1F] focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="text-gray-400">Select an option</option>
                                            <option value="villa">Signature Villa Collection</option>
                                            <option value="apartment">Opulent Penthouses</option>
                                            <option value="commercial">Bespoke Commercial</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Message Area */}
                            <div className="space-y-2 pt-2">
                                <label htmlFor="message" className="block text-sm font-medium text-[#1D1D1F] pl-2">Your Message</label>
                                <div className="relative">
                                    <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                                        <MessageSquare className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="How can we help you today?"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent rounded-2xl text-[#1D1D1F] placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-[#1D1D1F] text-white font-medium py-4 px-10 rounded-2xl hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group mx-auto"
                                >
                                    Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
