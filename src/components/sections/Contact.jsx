"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

function ContactCard({ icon: Icon, title, info, subInfo, action, gradient, delay }) {
    return (
        <motion.a
            href={action}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center p-5 md:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 gap-5 max-w-md mx-auto w-full overflow-hidden"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex-shrink-0 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
            </div>

            <div className="flex-grow text-left relative z-10">
                <h3 className="text-base font-semibold text-gray-400 uppercase tracking-wide mb-1 group-hover:text-primary/80 transition-colors">{title}</h3>
                <p className="text-lg md:text-xl font-display font-bold text-gray-900 group-hover:text-primary transition-colors">{info}</p>

            </div>

            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:bg-primary transition-all duration-300 shadow-sm group-hover:shadow-md">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
            </div>
        </motion.a>
    );
}

export function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-white overflow-hidden scroll-mt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                            rotate: [0, 45, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3],
                            x: [0, -50, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"
                    />
                </div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="container mx-auto px-4 relative z-10"
            >

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-4 shadow-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">Always Here For You</span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight"
                    >
                        Let's Start a <span className="text-gradient-elite inline-block relative">
                            Conversation
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-full"
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-500 text-lg max-w-xl mx-auto font-light"
                    >
                        Whether you're looking to buy, sell, or just have a chat about the market, our team is ready to assist you.
                    </motion.p>
                </div>

                {/* Primary Actions */}
                <motion.div
                    variants={containerVariants}
                    className="flex flex-col md:flex-row justify-center gap-6 mb-16 max-w-4xl mx-auto"
                >
                    <ContactCard
                        icon={Phone}
                        title="Call Us Directly"
                        info="+91 9846 123 456"
                        action="tel:+919846123456"
                        gradient="from-blue-600 to-cyan-500"
                        delay={0.1}
                    />
                    <ContactCard
                        icon={Mail}
                        title="Email Support"
                        info="hello@thrissurvillas.com"
                        action="mailto:hello@thrissurvillas.com"
                        gradient="from-primary to-indigo-600"
                        delay={0.2}
                    />
                </motion.div>

                {/* Secondary: Form & Office */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto"
                >

                    {/* Office Info */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="bg-white/50 rounded-3xl p-8 border border-white shadow-lg backdrop-blur-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-xl font-display font-bold text-gray-900 mb-6 relative z-10 flex items-center gap-2">
                                Visit Our Office
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex gap-4 group/item"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-secondary shadow-sm mt-1 group-hover/item:scale-110 transition-transform">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">Headquarters</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            2nd Floor, City Center,<br />
                                            Swaraj Round, Thrissur,<br />
                                            Kerala - 680001
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex gap-4 group/item"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-secondary shadow-sm mt-1 group-hover/item:scale-110 transition-transform">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">Working Hours</h4>
                                        <p className="text-gray-500 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-400 text-xs mt-0.5">Sunday: Closed</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Embedded Map Visual */}
                            <div className="mt-8 h-40 rounded-xl overflow-hidden shadow-sm border border-gray-200/50 relative group/map transform transition-transform hover:scale-[1.02] duration-300">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125575.24151240188!2d76.12831885820312!3d10.527641599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e4fceaa2318795!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1703067160759!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "grayscale(100%)" }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="group-hover/map:filter-none transition-all duration-700 opacity-60 group-hover/map:opacity-100"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover/map:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg text-[10px] font-bold text-gray-800 border border-white/50 transform translate-y-2 group-hover/map:translate-y-0 transition-transform">
                                        Open in Google Maps
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-7 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-slate-200/40 relative overflow-hidden"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-gray-900">Send us a Message</h3>
                            </div>

                            <form className="space-y-5" suppressHydrationWarning={true}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <motion.div variants={itemVariants}>
                                        <div className="space-y-1.5" suppressHydrationWarning={true}>
                                            <label className="text-xs font-semibold text-gray-600 ml-1">First Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 text-sm font-medium hover:bg-gray-50/80"
                                                placeholder="John"
                                            />
                                        </div>
                                    </motion.div>
                                    <motion.div variants={itemVariants}>
                                        <div className="space-y-1.5" suppressHydrationWarning={true}>
                                            <label className="text-xs font-semibold text-gray-600 ml-1">Last Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 text-sm font-medium hover:bg-gray-50/80"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div variants={itemVariants}>
                                    <div className="space-y-1.5" suppressHydrationWarning={true}>
                                        <label className="text-xs font-semibold text-gray-600 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 text-sm font-medium hover:bg-gray-50/80"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="space-y-1.5" suppressHydrationWarning={true}>
                                        <label className="text-xs font-semibold text-gray-600 ml-1">Message</label>
                                        <textarea
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 text-sm font-medium resize-none hover:bg-gray-50/80"
                                            placeholder="Tell us about what you're looking for..."
                                        />
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                    <Button size="lg" className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:to-primary text-white text-base font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 gap-2 relative overflow-hidden group">
                                        <span className="relative z-10 flex items-center gap-2">Send Message <Send className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" /></span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    </Button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
