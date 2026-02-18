"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PropertyConcierge({ property }) {
    const [focusedField, setFocusedField] = useState(null)
    const [price, setPrice] = useState(0)

    // Animated Price Counter Effect
    React.useEffect(() => {
        const target = property.price || 0
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (current >= target) {
                setPrice(target)
                clearInterval(timer)
            } else {
                setPrice(current)
            }
        }, duration / steps)
        return () => clearInterval(timer)
    }, [property.price])

    return (
        <aside className="sticky top-24 h-fit p-6 lg:p-8">
            <motion.div
                className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <div className="p-8 pb-6 border-b border-gray-100 bg-gray-50/50">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Guide Price</p>
                    <div className="items-baseline flex gap-1">
                        <span className="text-3xl lg:text-4xl font-display font-medium text-primary">
                            {price >= 10000000
                                ? `₹ ${(price / 10000000).toFixed(2)} Cr`
                                : `₹ ${(price / 100000).toFixed(2)} L`}
                        </span>
                        <span className="text-sm text-gray-400 font-light">+ Taxes</span>
                    </div>
                </div>

                {/* Intelligent Form */}
                <div className="p-8 space-y-6">
                    <div className="space-y-4">
                        {["Name", "Phone", "Email"].map((field) => (
                            <div key={field} className="relative">
                                <motion.input
                                    type={field === "Email" ? "email" : "text"}
                                    placeholder={`Your ${field}`}
                                    className="w-full h-14 px-4 bg-gray-50 rounded-xl border border-gray-200 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-800"
                                    onFocus={() => setFocusedField(field)}
                                    onBlur={() => setFocusedField(null)}
                                    animate={{
                                        borderColor: focusedField === field ? "#EF4444" : "#E5E7EB",
                                        boxShadow: focusedField === field ? "0 0 15px rgba(239, 68, 68, 0.15)" : "none"
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3 pt-2">
                        <Button className="w-full h-14 bg-secondary hover:bg-secondary/90 text-white rounded-xl text-lg shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 group">
                            <span className="font-semibold tracking-wide">Request Details</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-12 border-gray-200 hover:border-primary/50 hover:text-primary rounded-xl gap-2">
                                <Phone className="w-4 h-4" /> Call
                            </Button>
                            <Button variant="outline" className="h-12 border-gray-200 hover:border-primary/50 hover:text-primary rounded-xl gap-2">
                                <Calendar className="w-4 h-4" /> Visit
                            </Button>
                        </div>
                    </div>

                    <div className="text-center pt-4">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Rajesh is Online</span>
                        </div>
                        <p className="text-xs text-gray-400">Typical response time: 2 mins</p>
                    </div>
                </div>
            </motion.div>
        </aside>
    )
}
