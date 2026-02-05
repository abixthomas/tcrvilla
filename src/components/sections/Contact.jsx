"use client"

import React from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section id="contact" className="py-24 bg-gray-50 scroll-mt-28">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</h4>
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-gray-900 mb-6 leading-tight">
                        Contact Our <span className="text-gradient-elite">Real Estate Experts</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Have a question about a property? Want to list your home? We're here to help you every step of the way.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-2xl rounded-3xl overflow-hidden bg-white">

                    {/* Contact Form */}
                    <div className="p-8 md:p-12">
                        <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <div className="relative" suppressHydrationWarning={true}>
                                        <input type="text" data-lpignore="true" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-0 outline-none transition-colors" placeholder="John" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <div className="relative" suppressHydrationWarning={true}>
                                        <input type="text" data-lpignore="true" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-0 outline-none transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email Address</label>
                                <div className="relative" suppressHydrationWarning={true}>
                                    <input type="email" data-lpignore="true" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-0 outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <div className="relative" suppressHydrationWarning={true}>
                                    <textarea rows={4} data-lpignore="true" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-0 outline-none transition-colors" placeholder="I'm interested in..." />
                                </div>
                            </div>

                            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                                Send Message <Send className="h-4 w-4" />
                            </Button>
                        </form>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900">Call Us</h5>
                                    <p className="text-gray-500 text-sm">+91 9846 123 456</p>
                                    <p className="text-gray-500 text-sm">+91 487 234 5678</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900">Email Us</h5>
                                    <p className="text-gray-500 text-sm">hello@thrissurvillas.com</p>
                                    <p className="text-gray-500 text-sm">sales@thrissurvillas.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map & Info */}
                    <div className="relative bg-gray-200 min-h-[400px] lg:min-h-full group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125575.24151240188!2d76.12831885820312!3d10.527641599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e4fceaa2318795!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1703067160759!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%)" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full group-hover:filter-none transition-all duration-500"
                        />

                        <div className="absolute top-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary p-3 rounded-lg text-white">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 text-lg mb-1">Visit Our Office</h5>
                                    <p className="text-gray-600">
                                        2nd Floor, City Center,<br />
                                        Swaraj Round, Thrissur,<br />
                                        Kerala - 680001
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-8 left-8 bg-primary text-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                            <Clock className="h-5 w-5 text-secondary" />
                            <div className="text-sm">
                                <span className="block font-bold">Mon - Sat</span>
                                <span className="opacity-80">9:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
