"use client"

import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BookingAgent({ property }) {
    const dates = ["Mon 12", "Tue 13", "Wed 14", "Thu 15"]

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {/* Left: Agent Profile */}
                    <div className="p-12 md:w-1/3 bg-gray-50 flex flex-col items-center text-center border-r border-gray-100">
                        <div className="relative mb-6">
                            <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden border-4 border-white shadow-lg">
                                {/* Placeholder Agent Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                                    alt="Rajesh Varma"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
                        </div>

                        <h3 className="font-display text-xl font-bold text-gray-900 mb-1">Rajesh Varma</h3>
                        <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-6">Senior Estate Partner</p>

                        <div className="w-full space-y-3">
                            <Button variant="outline" className="w-full gap-2 justify-start h-12">
                                <Phone className="w-4 h-4" />
                                +91 98765 43210
                            </Button>
                            <Button variant="outline" className="w-full gap-2 justify-start h-12 text-xs">
                                <Mail className="w-4 h-4" />
                                rajesh@thrissurvillas.com
                            </Button>
                        </div>
                    </div>

                    {/* Right: Scheduling */}
                    <div className="p-12 md:w-2/3 bg-primary text-white relative overflow-hidden">

                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                        <h3 className="text-3xl font-display font-medium mb-2">Ready to see your future home?</h3>
                        <p className="text-white/70 font-light mb-8">
                            Experience the tactile luxury and serene atmosphere of {property.title}.
                            Choose a time below for a private viewing.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <label className="text-xs uppercase tracking-widest text-white/60 mb-3 block">Quick Schedule</label>
                                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                    {dates.map((date, idx) => (
                                        <button
                                            key={idx}
                                            className={`flex flex-col items-center justify-center p-3 rounded-xl min-w-[80px] transition-all border ${idx === 0
                                                    ? "bg-white text-primary border-white"
                                                    : "bg-white/10 text-white border-white/10 hover:bg-white/20"
                                                }`}
                                        >
                                            <span className="text-[10px] opacity-80 uppercase">{date.split(" ")[0]}</span>
                                            <span className="text-lg font-bold">{date.split(" ")[1]}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button className="w-full h-14 bg-secondary hover:bg-secondary/90 text-white text-lg rounded-xl shadow-lg shadow-black/20">
                                Confirm Appointment
                            </Button>

                            <div className="flex items-center gap-2 text-xs text-white/50 justify-center">
                                <CheckCircle className="w-3 h-3 text-green-400" />
                                <span>Exclusive direct listing • No commission fees</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
