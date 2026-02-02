"use client"

import { motion } from "framer-motion"
import { PropertyCard } from "@/components/ui/property-card"
import { propertiesData } from "@/data/properties"
import { Button } from "@/components/ui/button"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

export function FeaturedProperties() {
    return (
        <section id="properties" className="py-32 bg-gray-50/50 relative overflow-hidden scroll-mt-28">
            {/* Decor Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h4 className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-3">
                            <span className="w-12 h-[2px] bg-secondary" /> Exclusive Listings
                        </h4>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-[1.15] tracking-tight">
                            Featured Properties <br />
                            <span className="text-primary">For You</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Button variant="outline" className="mt-8 md:mt-0 rounded-full px-10 py-6 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 border-gray-300">
                            View All Collection
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                >
                    {propertiesData.slice(0, 6).map((property, index) => (
                        <PropertyCard key={property.id} property={property} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
