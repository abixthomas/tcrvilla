"use client"

import { motion } from "framer-motion"
import { Globe, Plane, FileCheck, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NRICorner() {
    return (
        <section id="nri-corner" className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative scroll-mt-28">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6">
                                <Globe className="h-4 w-4 text-secondary" />
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">Global Kerala Community</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                                Exclusive Services for <br /> <span className="text-primary">NRI Investors</span>
                            </h2>

                            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                                Living abroad shouldn't stop you from building your dream home in your hometown. We offer a dedicated concierge service to handle everything from legal paperwork to property management while you are away.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    { icon: FileCheck, text: "Seamless Legal Documentation & Power of Attorney support" },
                                    { icon: Plane, text: "Airport Pick-up & Property Tour for your visits" },
                                    { icon: PhoneCall, text: "Dedicated Relationship Manager available 24/7" },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="bg-secondary/10 p-2 rounded-lg text-secondary mt-1">
                                            <item.icon className="h-4 w-4" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button size="lg" className="bg-primary text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all">
                                Request NRI Guide
                            </Button>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200&auto=format&fit=crop"
                                alt="NRI Services"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <p className="text-white italic text-lg mb-4">"Invested in a villa in Thrissur while sitting in Dubai. The process was smoother than I could have imagined!"</p>
                                    <div className="flex items-center gap-3">
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-secondary" alt="User" />
                                        <div className="text-white">
                                            <div className="font-bold text-sm">Thomas Mathew</div>
                                            <div className="text-xs opacity-70">Business Owner, Dubai</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
