"use client"

import { motion } from "framer-motion"
import { PropertyCard } from "./PropertyCard"

// Animation Variants for Staggered "Materialization"
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
}

export function PropertyGrid({ properties }) {
    if (properties.length === 0) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 py-20">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">No Properties Found</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        )
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20 justify-items-start content-start"
        >
            {properties.map((property) => (
                <motion.div key={property.id} variants={itemVariants} className="w-full">
                    <PropertyCard property={property} />
                </motion.div>
            ))}
        </motion.div>
    )
}
