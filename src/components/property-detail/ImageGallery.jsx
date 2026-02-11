"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowRight } from "lucide-react"

export function ImageGallery({ property }) {
    const images = property.images || []
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    // Auto-play logic
    useEffect(() => {
        let interval
        if (isPlaying && !lightboxOpen && images.length > 1) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length)
            }, 6000) // Slower, smoother pacing
        }
        return () => clearInterval(interval)
    }, [isPlaying, lightboxOpen, images.length])

    if (!images.length) return null

    const openLightbox = (index) => {
        setIsPlaying(false)
        setCurrentIndex(index)
        setLightboxOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
        setIsPlaying(true)
        document.body.style.overflow = 'auto'
    }

    const nextImage = (e) => {
        e?.stopPropagation()
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = (e) => {
        e?.stopPropagation()
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <section className="mb-12 select-none" id="gallery">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="bg-white rounded-[2rem] p-2 border border-gray-100 shadow-sm overflow-hidden"
            >

                {/* FULL WIDTH LAYOUT - Cinematic */}
                <div
                    className="w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden cursor-pointer group"
                    onMouseEnter={() => setIsPlaying(false)}
                    onMouseLeave={() => setIsPlaying(true)}
                    onClick={() => openLightbox(currentIndex)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                            {/* Cinematic Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-60" />
                        </motion.div>
                    </AnimatePresence>

                    {/* TOP LEFT: Badge */}
                    <div className="absolute top-6 left-6 z-20">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Visual Tour</span>
                        </div>
                    </div>

                    {/* CENTER: Navigation Arrows (Visible on Hover) */}
                    <button
                        onClick={prevImage}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 z-20"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 z-20"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* BOTTOM LEFT: Counter */}
                    <div className="absolute bottom-6 left-6 z-20 text-white">
                        <span className="font-display font-medium text-2xl">
                            {String(currentIndex + 1).padStart(2, '0')}
                            <span className="text-sm text-white/60 font-normal ml-1">/ {String(images.length).padStart(2, '0')}</span>
                        </span>
                    </div>

                    {/* BOTTOM RIGHT: View Button */}
                    <div className="absolute bottom-6 right-6 z-20">
                        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">
                            <Maximize2 className="w-3 h-3" />
                            View Photos
                        </button>
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="absolute bottom-0 left-0 right-0 flex gap-0.5 z-10">
                        {images.map((_, idx) => (
                            <div key={idx} className="h-1 flex-1 bg-white/20">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: idx === currentIndex ? "100%" : "0%" }}
                                    transition={{ duration: idx === currentIndex ? 6 : 0.3, ease: "linear" }}
                                    className="h-full bg-white/80"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Lightbox Modal (Unchanged functionality, just preserved) */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Toolbar */}
                        <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-50 text-white">
                            <div className="flex items-center gap-3">
                                <h4 className="font-display font-medium text-lg hidden sm:block tracking-wide">{property.title}</h4>
                                <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border border-white/5">
                                    {currentIndex + 1} / {images.length}
                                </span>
                            </div>
                            <button
                                onClick={closeLightbox}
                                className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white hover:text-red-400 border border-white/5"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Main Image Stage */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full max-w-7xl max-h-[85vh] p-4 flex items-center justify-center group/lightbox"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`Fullscreen view ${currentIndex + 1}`}
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />

                            {/* Desktop Hover Nav Arrows */}
                            <button
                                className="absolute left-8 top-1/2 -translate-y-1/2 p-4 bg-black/20 hover:bg-black/50 text-white/50 hover:text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover/lightbox:opacity-100 -translate-x-4 group-hover/lightbox:translate-x-0 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                className="absolute right-8 top-1/2 -translate-y-1/2 p-4 bg-black/20 hover:bg-black/50 text-white/50 hover:text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover/lightbox:opacity-100 translate-x-4 group-hover/lightbox:translate-x-0 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </motion.div>

                        {/* Thumbnails */}
                        <div
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] p-2 no-scrollbar bg-black/20 backdrop-blur-md rounded-2xl border border-white/5"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => { setCurrentIndex(idx); setIsPlaying(false); }}
                                    className={`relative w-12 h-12 rounded-lg overflow-hidden border transition-all shrink-0 ${currentIndex === idx ? 'border-white scale-110 shadow-lg ring-2 ring-white/20' : 'border-transparent opacity-40 hover:opacity-100'
                                        }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
