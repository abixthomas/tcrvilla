"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const articles = [
    {
        id: 1,
        title: "The Renaissance of Tropical Brutalism",
        category: "Architecture",
        excerpt: "How concrete and greenery are merging to create sustainable, climate-responsive luxury homes in Kerala.",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200",
        date: "Oct 12, 2024",
        size: "large" // Spans full width or large block
    },
    {
        id: 2,
        title: "Minimalism is Not Empty",
        category: "Interiors",
        excerpt: "Why space is the ultimate luxury.",
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800",
        date: "Oct 08, 2024",
        size: "tall" // Vertical span
    },
    {
        id: 3,
        title: "Smart Homes, Silent Tech",
        category: "Lifestyle",
        excerpt: "Integrating technology that serves without being seen.",
        image: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=800",
        date: "Oct 05, 2024",
        size: "standard"
    },
    {
        id: 4,
        title: "The ROI of Wellness Architecture",
        category: "Market Insights",
        excerpt: "Health-centric design is the new gold standard.",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800",
        date: "Sep 28, 2024",
        size: "standard"
    },
    {
        id: 5,
        title: "Curating Light: A Study",
        category: "Architecture",
        excerpt: "Manipulating natural light to define spatial hierarchy.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
        date: "Sep 28, 2024",
        size: "wide"
    }

]

export function JournalGrid() {
    return (
        <section className="pb-24 pt-8 bg-white">
            <div className="container mx-auto px-4">
                {/* CSS Grid for Bento Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative rounded-xl overflow-hidden cursor-pointer ${article.size === 'large' ? 'md:col-span-2 md:row-span-1' :
                                article.size === 'tall' ? 'md:col-span-1 md:row-span-2' :
                                    article.size === 'wide' ? 'md:col-span-2' :
                                        'md:col-span-1'
                                }`}
                        >
                            {/* Image Background */}
                            <img
                                src={article.image}
                                alt={article.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 via-[#1E3A8A]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center justify-between mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <span className="text-[#EF4444] text-xs font-bold uppercase tracking-widest">{article.category}</span>
                                        <span className="text-slate-300 text-xs font-mono">{article.date}</span>
                                    </div>

                                    <h3 className={`font-display font-medium text-white mb-2 leading-tight ${article.size === 'large' ? 'text-3xl md:text-4xl' : 'text-2xl'
                                        }`}>
                                        {article.title}
                                    </h3>

                                    <p className="text-slate-300 text-sm font-light line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity delay-75">
                                        {article.excerpt}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-white border-b border-white/30 pb-1 w-fit opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                        <span className="text-xs uppercase tracking-wider font-medium">Read Article</span>
                                        <ArrowUpRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* "More Coming Soon" Filler Block to keep grid shape if needed, or just end here */}
                </div>
            </div>
        </section>
    )
}
