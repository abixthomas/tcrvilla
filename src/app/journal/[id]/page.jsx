"use client"

import React from "react"
import { articles } from "@/lib/data/journal"
import { notFound, useParams } from "next/navigation"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, User } from "lucide-react"

export default function JournalArticle() {
    const params = useParams()
    const article = articles.find(a => String(a.id) === String(params.id))

    if (!article) {
        return notFound()
    }

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <main className="bg-[#F5F5F7] min-h-screen pb-24">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-[#EF4444] origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Immersive Parallax Hero */}
            <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-[#0B1120]">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0 origin-center"
                >
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />
                </motion.div>

                <div className="absolute inset-0 z-10 flex flex-col justify-end container mx-auto px-4 sm:px-8 pb-16 md:pb-24 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link href="/journal" className="inline-flex items-center gap-2 text-white hover:text-[#EF4444] transition-colors mb-8 group uppercase tracking-widest text-xs font-semibold backdrop-blur-md bg-white/10 px-5 py-3 rounded-full border border-white/20">
                            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                            Back to Journal
                        </Link>

                        <div className="flex items-center gap-4 text-[#EF4444] text-xs md:text-sm font-bold uppercase tracking-widest mb-6 border-l-2 border-[#EF4444] pl-4">
                            <span>{article.category}</span>
                            <span className="text-white/40 font-mono">&bull;</span>
                            <span className="text-white/80 font-mono tracking-normal">{article.date}</span>
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-white font-medium leading-[1.1] mb-8 drop-shadow-2xl">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/90 font-medium text-sm md:text-base">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                                <User className="w-4 h-4 text-[#EF4444]" />
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                                <Clock className="w-4 h-4 text-[#EF4444]" />
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article Content - God-Tier Reading Typography */}
            <section className="container mx-auto px-4 sm:px-8 pt-20 max-w-3xl relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8 md:space-y-12 text-[#334155] text-lg md:text-xl leading-[1.8] font-light"
                >
                    {article.content.map((block, i) => {
                        if (block.type === 'paragraph') {
                            return (
                                <p key={i} className={i === 0 ? "first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-[#1E3A8A] first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest first-line:text-[#1E3A8A] first-line:font-semibold" : ""}>
                                    {block.text}
                                </p>
                            )
                        } else if (block.type === 'blockquote') {
                            return (
                                <motion.blockquote
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative -mx-4 sm:-mx-8 md:-mx-16 my-16 p-8 md:p-12 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-l-4 border-[#EF4444]"
                                >
                                    <div className="absolute top-4 left-4 xl:-left-8 xl:top-8 text-8xl text-[#1E3A8A]/5 font-serif leading-none">"</div>
                                    <p className="relative z-10 font-display italic text-2xl md:text-3xl text-[#1E3A8A] leading-relaxed">
                                        {block.text}
                                    </p>
                                </motion.blockquote>
                            )
                        }
                        return null
                    })}
                </motion.div>

                {/* Article Footer & Author Tag */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-12 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-5 bg-white p-4 pr-12 rounded-full shadow-sm border border-gray-100">
                        <div className="w-16 h-16 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-display text-2xl font-bold shadow-inner border-[3px] border-white ring-2 ring-[#1E3A8A]/20">
                            {article.author.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-[#1E3A8A] text-lg">{article.author}</p>
                            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mt-1">Thrissur Villas Editorial</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}
