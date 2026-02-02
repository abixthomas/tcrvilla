"use client"

import { motion } from "framer-motion"
import { Globe, Plane, FileCheck, PhoneCall, Wallet, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NRICorner() {
    return (
        <section id="nri-corner" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white overflow-hidden relative scroll-mt-28">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Content Column - Wider (7/12) */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-secondary/20 mb-6">
                                <Globe className="h-4 w-4 text-secondary" />
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">Global Kerala Community</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                                Manage Your Assets for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Peace of Mind Abroad
                                </span>
                            </h2>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl">
                                Distance shouldn't be a barrier to managing your investments. We provide a premium, white-glove concierge service designed exclusively for our NRI clients, ensuring your property is maintained, secure, and appreciating while you are away.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    {
                                        icon: FileCheck,
                                        title: "Legal Assistance",
                                        desc: "Power of Attorney, registration, and documentation handling."
                                    },
                                    {
                                        icon: PhoneCall,
                                        title: "24/7 Relationship Manager",
                                        desc: "A dedicated expert to update you on every milestone."
                                    },
                                    {
                                        icon: Wallet,
                                        title: "Financial Management",
                                        desc: "Hassle-free tax payments, rentals, and utility bill management."
                                    },
                                    {
                                        icon: Video,
                                        title: "Video Consultations",
                                        desc: "Live site visits and virtual tours at your convenience."
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 group-hover:border-secondary/30 group-hover:shadow-md transition-all h-fit">
                                            <item.icon className="h-5 w-5 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
                                    Download NRI Guide
                                </Button>
                                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 text-primary">
                                    Schedule a Call
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Column - Smaller (5/12) */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                                    alt="Luxury NRI Villa"
                                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/95 backdrop-blur-md p-5 rounded-xl border border-white/40 shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-100 p-2 rounded-full text-green-700 mt-1">
                                                <Plane className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <p className="text-gray-900 text-sm font-medium italic mb-2">
                                                    "Managing my property from London has never been this easy. Thrissur Villas handles everything!"
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <div className="h-6 w-6 rounded-full bg-gray-200 overflow-hidden">
                                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                                                    </div>
                                                    <div className="text-xs">
                                                        <span className="font-bold text-gray-900 block">Dr. Alex George</span>
                                                        <span className="text-gray-500">London, UK</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
