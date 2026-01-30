"use client"

import React, { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-2xl shadow-2xl w-80 mb-4 overflow-hidden border border-gray-100"
                        >
                            <div className="bg-primary p-4 flex items-center justify-between">
                                <div>
                                    <h4 className="text-white font-bold">Thrissur Villas Assistant</h4>
                                    <p className="text-white/70 text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Online
                                    </p>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="p-4 h-64 overflow-y-auto bg-gray-50 flex flex-col gap-3">
                                <div className="self-start bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-700 max-w-[90%]">
                                    Hello! 👋 How can I help you find your dream home in Thrissur today?
                                </div>
                            </div>

                            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 text-sm px-3 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/20"
                                />
                                <Button size="icon" className="h-9 w-9 bg-secondary hover:bg-secondary/90">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-secondary/90 transition-colors flex items-center justify-center relative group"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}

                    <span className="absolute right-0 top-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </motion.button>
            </div>
        </>
    )
}
