"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function PropertyInfoBar({ property }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) { // Show after hero
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-lg border-t border-gray-200 z-50 py-4 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
                >
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="hidden md:block">
                            <h4 className="font-display font-medium text-gray-900 text-lg">{property.title}</h4>
                            <span className="text-sm text-gray-500">{property.location}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right mr-4 hidden sm:block">
                                <span className="block text-2xl font-display font-bold text-primary"> ₹{(property.price / 100000).toFixed(1)}L</span>
                            </div>
                            <Button variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary/5">
                                Ask Question
                            </Button>
                            <Button className="bg-secondary hover:bg-secondary/90 text-white px-8">
                                Schedule Tour
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
