"use client"

import React from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Star, Quote } from "lucide-react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Cardiologist, Amala Hospital",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop", // Updated to Indian male doctor
        quote: "Thrissur Villas made my home buying experience absolutely seamless. Their knowledge of the local luxury market is unmatched. Highly recommended for busy professionals.",
        rating: 5
    },
    {
        name: "Sarah Thomas",
        role: "NRI Investor, Dubai",
        image: "https://images.unsplash.com/photo-1573496359-7014228112f4?q=80&w=200&auto=format&fit=crop",
        quote: "Living abroad, I was worried about the paperwork and legalities. The team handled everything remotely with complete transparency. I bought my dream villa without even flying down!",
        rating: 5
    },
    {
        name: "Mathew George",
        role: "Business Owner",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        quote: "The valuation service was spot on. Sold my ancestral property at a great price within weeks. Professionalism at its best.",
        rating: 5
    },
    {
        name: "Anjali Menon",
        role: "Architect",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
        quote: "As an architect, I appreciate their eye for quality. They only list properties that meet high standards of design and construction.",
        rating: 4
    },
    {
        name: "David Verghese",
        role: "Tech Entrepreneur",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
        quote: "The smart home features in their villas are world-class. It’s rare to find such modern amenities integrated so well with traditional Kerala aesthetics.",
        rating: 5
    },
    {
        name: "Lakshmi Nair",
        role: "Retired Professor",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop",
        quote: "We wanted a peaceful retirement home near the city but away from the noise. They found us the perfect gated community in Ayyanthole.",
        rating: 5
    },
    {
        name: "Col. Suresh Menon",
        role: "Army Officer (Retd)",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        quote: "Reviewing documents and verifying titles was my biggest concern. Their legal team is thorough and leaves nothing to chance. Very trustworthy.",
        rating: 5
    },
    {
        name: "Dr. Priya Joseph",
        role: "Dentist",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&auto=format&fit=crop", // Indian female doctor
        quote: "The 'Post Free Ad' feature helped me find a tenant for my apartment in just 2 days. The platform attracts serious and genuine enquiries only.",
        rating: 4
    },
    {
        name: "Krishnan lyer",
        role: "Chartered Accountant",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        quote: "Investment wise, they guided me to up-and-coming areas like Mannuthy which have appreciated significantly. Truly expert advice.",
        rating: 5
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Testimonials</h4>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                        Trusted by Hundreds of <br /> Happy Families
                    </h2>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-secondary'
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-16"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl h-full flex flex-col relative group hover:bg-white hover:border-white transition-colors duration-300">
                                <Quote className="absolute top-6 right-6 h-10 w-10 text-white/10 group-hover:text-primary/10 transition-colors" />

                                {/* Rating */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-secondary text-secondary" : "text-gray-400"}`}
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-200 text-lg leading-relaxed mb-8 flex-1 group-hover:text-gray-600 transition-colors italic">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                                    />
                                    <div>
                                        <h5 className="font-bold text-white group-hover:text-primary transition-colors">{testimonial.name}</h5>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
