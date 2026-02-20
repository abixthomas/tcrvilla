"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const team = [
    {
        name: "Vikram Menon",
        role: "Lead Architect",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
        quote: "Design is not just what it looks like and feels like. Design is how it works.",
        position: "50% 20%" // Adjusted to standard face focus
    },
    {
        name: "Anjali Nair",
        role: "Head of Interiors",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        quote: "Every space has a soul; my job is to find it and make it speak.",
        position: "50% 20%"
    },
    {
        name: "Rahul Varma",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
        quote: "Precision and punctuality are the cornerstones of trust.",
        position: "50% 20%"
    }
]

export function TeamGrid() {
    return (
        <section className="py-16 bg-slate-50 text-slate-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-medium mb-3 text-primary">
                            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Architects</span>
                        </h2>
                        <p className="text-slate-600 max-w-xl text-md">
                            Visionaries who understand that luxury is an experience of spatial harmony.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-secondary font-bold uppercase text-[10px] tracking-widest hover:gap-3 transition-all border-b border-transparent hover:border-secondary pb-1">
                        View Entire Team <ArrowRight className="w-3 h-3" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative h-[420px] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-slate-100"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ objectPosition: member.position || "50% 20%" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-50 transition-opacity" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {member.role}
                                </span>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">{member.name}</h3>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                    <p className="text-slate-300 text-sm mt-4 italic opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                        "{member.quote}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
