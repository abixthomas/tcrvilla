"use client"

import { motion } from "framer-motion"
import { Play, Move3d } from "lucide-react"

export function VirtualTourTeaser() {
    return (
        <section className="py-24 relative overflow-hidden h-[600px] flex items-center justify-center">
            {/* Background Video/Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
                    alt="Virtual Tour Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white mb-8">
                        <Move3d className="h-5 w-5 text-secondary animate-pulse" />
                        <span className="uppercase tracking-[0.2em] text-sm font-bold">Immersive Experience</span>
                    </div>

                    <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                        Walk Through Your <br />
                        Dream Home
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">
                        Experience every corner, every detail, and every view before you even step inside. Our 8K Virtual Tours bring properties to life.
                    </p>

                    <button className="group relative inline-flex items-center justify-center p-4 px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-secondary rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                            <Play className="w-6 h-6 fill-current" />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                            Start Virtual Tour
                        </span>
                        <span className="relative invisible">Start Virtual Tour</span>
                    </button>
                </motion.div>
            </div>

            {/* Floating 3D Elements Wrapper (Cosmetic) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-bounce duration-[3000ms]" />
                <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-primary/30 rounded-full blur-xl animate-bounce delay-1000" />
            </div>
        </section>
    )
}
