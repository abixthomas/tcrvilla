"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, Mail, ChevronRight, ChevronDown, MapPin, Building2, UserCircle2 } from "lucide-react"

export function ContactGrid() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const opacityHero = useTransform(scrollY, [0, 400], [1, 0.2]);

    return (
        <section className="relative min-h-screen bg-[#FAFAFA] overflow-hidden pb-32">
            {/* Cinematic Hero Background */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[60vh] md:h-[70vh] w-full z-0 overflow-hidden"
                style={{ y: y1 }}
            >
                <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop"
                    alt="Luxury Estate Backdrop"
                    className="w-full h-full object-cover object-bottom scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-[#FAFAFA]" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 pt-40 md:pt-48">

                {/* Header Titles */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ opacity: opacityHero }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center justify-center gap-3 mb-6">
                        <span className="w-12 h-[1px] bg-secondary/60"></span>
                        <p className="text-white font-interface uppercase tracking-[0.3em] text-xs font-bold">
                            Exclusive Service
                        </p>
                        <span className="w-12 h-[1px] bg-secondary/60"></span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white tracking-wide">
                        Connect With Us
                    </h1>
                </motion.div>

                {/* Asymmetric Bento Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 max-w-7xl mx-auto items-stretch">

                    {/* LEFT COLUMN: Inquire Privately Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="xl:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 h-full flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"></div>

                        <div>
                            <div className="mb-10">
                                <h2 className="text-3xl md:text-4xl font-display text-primary mb-3">Inquire Privately</h2>
                                <p className="text-gray-500 font-light max-w-md">Our luxury property specialists are ready to discuss your unique requirements.</p>
                            </div>

                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Name Input */}
                                    <div className="group/input relative">
                                        <label htmlFor="fullName" className="flex items-center gap-2 text-[10px] font-interface text-gray-400 uppercase tracking-widest mb-3 group-focus-within/input:text-primary transition-colors cursor-pointer font-semibold">
                                            <UserCircle2 className="w-3.5 h-3.5" /> Full Name
                                        </label>
                                        <input
                                            id="fullName"
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-transparent border-b border-gray-200 pb-3 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-all rounded-none"
                                        />
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-focus-within/input:w-full" />
                                    </div>

                                    {/* Email Input */}
                                    <div className="group/input relative">
                                        <label htmlFor="emailAddress" className="flex items-center gap-2 text-[10px] font-interface text-gray-400 uppercase tracking-widest mb-3 group-focus-within/input:text-primary transition-colors cursor-pointer font-semibold">
                                            <Mail className="w-3.5 h-3.5" /> Email Address
                                        </label>
                                        <input
                                            id="emailAddress"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-transparent border-b border-gray-200 pb-3 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-all rounded-none"
                                        />
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-focus-within/input:w-full" />
                                    </div>

                                    {/* Phone Input */}
                                    <div className="group/input relative">
                                        <label htmlFor="phoneNumber" className="flex items-center gap-2 text-[10px] font-interface text-gray-400 uppercase tracking-widest mb-3 group-focus-within/input:text-primary transition-colors cursor-pointer font-semibold">
                                            <Phone className="w-3.5 h-3.5" /> Phone Number
                                        </label>
                                        <input
                                            id="phoneNumber"
                                            type="tel"
                                            placeholder="+91 0000 0000"
                                            className="w-full bg-transparent border-b border-gray-200 pb-3 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-all rounded-none"
                                        />
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-focus-within/input:w-full" />
                                    </div>

                                    {/* Property Type Dropdown Native */}
                                    <div className="group/input relative">
                                        <label htmlFor="propertyType" className="flex items-center gap-2 text-[10px] font-interface text-gray-400 uppercase tracking-widest mb-3 group-focus-within/input:text-primary transition-colors cursor-pointer font-semibold">
                                            <Building2 className="w-3.5 h-3.5" /> Property Type
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="propertyType"
                                                className="w-full bg-transparent border-b border-gray-200 pb-3 text-gray-800 focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer rounded-none relative z-10"
                                                defaultValue=""
                                            >
                                                <option value="" disabled className="text-gray-400">Select Portfolio</option>
                                                <option value="villa">Signature Villa</option>
                                                <option value="apartment">Luxury Apartment</option>
                                                <option value="plot">Premium Plot</option>
                                                <option value="commercial">Commercial Estate</option>
                                            </select>
                                            <ChevronDown className="absolute right-0 top-1 w-4 h-4 text-gray-400 pointer-events-none z-0" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-focus-within/input:w-full" />
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div className="group/input relative pt-2">
                                    <label htmlFor="message" className="block text-[10px] font-interface text-gray-400 uppercase tracking-widest mb-3 group-focus-within/input:text-primary transition-colors cursor-pointer font-semibold">
                                        How can we assist you?
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="3"
                                        placeholder="Share your specific requirements..."
                                        className="w-full bg-transparent border-b border-gray-200 pb-3 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-all resize-none rounded-none"
                                    ></textarea>
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-focus-within/input:w-full" />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-6">
                                    <button type="submit" className="w-full md:w-auto bg-primary hover:bg-secondary text-white font-interface uppercase tracking-widest text-xs font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-[0_10px_20px_rgba(239,68,68,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3">
                                        Request Consultation <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Info Cards */}
                    <div className="xl:col-span-5 flex flex-col gap-8 h-full">

                        {/* Headquarters Navy Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="bg-primary text-white p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group flex-shrink-0"
                        >
                            {/* Decorative Concentric Circles */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-1000" />

                            <div className="relative z-10 flex items-start gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-interface text-white/50 uppercase tracking-widest mb-1 font-bold">Main Office</p>
                                    <h3 className="text-xl font-display font-medium leading-relaxed">
                                        The Ivory Tower, Suite 402<br />
                                        Skyline Avenue, Thrissur
                                    </h3>
                                </div>
                            </div>

                            <a href="#" className="relative z-10 inline-flex items-center gap-2 text-xs font-interface text-white/80 uppercase tracking-widest font-bold hover:text-secondary transition-colors group/link cursor-pointer pl-16">
                                View On Map
                                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                        {/* Quick Contacts Row */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 flex-shrink-0">
                            {/* Concierge Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                className="bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300 border border-gray-50 flex flex-col justify-center"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-5 text-secondary">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <p className="text-[9px] font-interface text-gray-400 uppercase tracking-widest mb-2 font-bold">Concierge</p>
                                <p className="text-primary font-bold text-xs lg:text-sm xl:text-base">+91 (487) 234 5678</p>
                            </motion.div>

                            {/* Email Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                className="bg-white p-6 sm:p-8 rounded-[1.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300 border border-gray-50 flex flex-col justify-center"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-5 text-secondary">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <p className="text-[9px] font-interface text-gray-400 uppercase tracking-widest mb-2 font-bold">Inquiries</p>
                                <a href="mailto:hello@thrissur.villas" className="text-primary font-bold text-xs lg:text-sm truncate hover:text-secondary transition-colors">hello@thrissur.villas</a>
                            </motion.div>
                        </div>

                        {/* Interactive Dark Map Placeholder - Takes remaining space */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                            className="bg-[#0B1120] min-h-[200px] flex-grow rounded-[2rem] shadow-2xl relative overflow-hidden group cursor-crosshair border border-gray-800"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />

                            {/* Fake Google Map UI Elements */}
                            <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <span className="text-[9px] font-interface text-white/40 uppercase tracking-widest font-bold">Satellite Precision Enabled</span>
                            </div>

                            {/* Pulsing Location Dot */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] relative z-10 border-2 border-secondary" />
                                <div className="w-10 h-10 bg-secondary/40 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}
