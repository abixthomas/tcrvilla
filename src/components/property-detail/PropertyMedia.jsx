"use client"

import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Maximize2, X, ChevronLeft, ChevronRight, Grid, ImageIcon } from "lucide-react"

export function PropertyMedia({ property }) {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    // Fallback images if property.images is empty or undefined
    const images = property.images && property.images.length > 0 ? property.images : [
        property.image,
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"
    ];

    const openLightbox = (index) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
        document.body.style.overflow = "hidden" // Prevent scrolling
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
        document.body.style.overflow = "auto" // Restore scrolling
    }

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }, [images.length])

    const prevImage = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }, [images.length])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return
            if (e.key === "Escape") closeLightbox()
            if (e.key === "ArrowRight") nextImage()
            if (e.key === "ArrowLeft") prevImage()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [lightboxOpen, nextImage, prevImage])

    return (
        <section className="py-24 bg-white relative" id="gallery">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-8 h-[2px] bg-secondary" />
                            <span className="text-secondary font-bold uppercase tracking-widest text-xs">Visual Tour</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-medium text-gray-900">Gallery Details</h3>
                    </div>
                    <button
                        onClick={() => openLightbox(0)}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm group"
                    >
                        <Grid className="w-4 h-4 text-gray-500 group-hover:text-gray-900" />
                        View All {images.length} Photos
                    </button>
                </div>

                {/* Masonry Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px] auto-rows-[200px]">

                    {/* Main Hero Image (Spans 2x2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(0)}
                    >
                        <img src={images[0]} alt="Property Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                            <p className="text-white text-sm font-bold">Main Exterior</p>
                        </div>
                    </motion.div>

                    {/* Secondary Images */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(1)}
                    >
                        <img src={images[1] || images[0]} alt="Property Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(2)}
                    >
                        <img src={images[2] || images[0]} alt="Property Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </motion.div>

                    {/* Tall Image (Spans 1 col, 2 rows sometimes - adapted here for grid balance) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(3)}
                    >
                        <img src={images[3] || images[0]} alt="Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </motion.div>

                    {/* "More" Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden cursor-pointer group bg-gray-900"
                        onClick={() => openLightbox(4)}
                    >
                        <img src={images[4] || images[0]} alt="More" className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <span className="text-3xl font-display font-bold">+{images.length - 4}</span>
                            <span className="text-xs font-medium uppercase tracking-widest mt-1">More Photos</span>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Immersive Lightbox Overlay */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Toolbar */}
                        <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-50 text-white">
                            <div className="flex items-center gap-3">
                                <span className="font-display font-medium text-lg hidden sm:block">{property.title}</span>
                                <span className="text-white/50 text-sm">{currentIndex + 1} / {images.length}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button onClick={(e) => { e.stopPropagation(); /* Logic for fullscreen/share */ }} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white">
                                    <Maximize2 className="w-5 h-5" />
                                </button>
                                <button onClick={closeLightbox} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white hover:text-red-500">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Main Image Stage */}
                        <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center px-4 md:px-20">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    alt={`Gallery Image ${currentIndex + 1}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="max-h-full max-w-full object-contain rounded-md shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all hover:scale-110"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all hover:scale-110"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Thumbnail Strip (Bottom) */}
                        <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 px-4 overflow-x-auto pb-2 scrollbar-hide" onClick={(e) => e.stopPropagation()}>
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${idx === currentIndex ? "border-secondary scale-110 z-10" : "border-transparent opacity-50 hover:opacity-100"}`}
                                >
                                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
