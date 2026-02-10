"use client"

import React from "react"
import { User, Mail, Phone, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PropertySidebar({ property }) {
    return (
        <div className="space-y-6">

            {/* Property Summary Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-display font-bold text-primary mb-4 border-b border-gray-100 pb-2">Property Summary</h3>

                <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Type</span>
                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-bold uppercase">{property.type}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">ID</span>
                        <span className="font-medium text-primary uppercase">KUS929</span> {/* Mock ID */}
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">Posted</span>
                        <span className="font-medium text-primary">Jan 16, 2024</span>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <span className="text-xs font-bold uppercase text-gray-400 block mb-1">Price</span>
                        <span className="text-3xl font-bold text-secondary">₹ {(property.price).toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-gray-400 block mt-1">*Price excludes registration fees</span>
                    </div>
                </div>
            </div>

            {/* Send Inquiry Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 relative overflow-hidden">
                {/* Decorative header accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary" />

                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                        <Mail className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-primary">Send Inquiry</h3>
                </div>

                <form className="space-y-4">
                    <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Full Name" className="w-full h-11 pl-10 pr-4 bg-gray-50 rounded-lg border border-gray-200 text-sm outline-none focus:border-secondary transition-colors" />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                        <input type="email" placeholder="Email Address" className="w-full h-11 pl-10 pr-4 bg-gray-50 rounded-lg border border-gray-200 text-sm outline-none focus:border-secondary transition-colors" />
                    </div>
                    <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                        <input type="tel" placeholder="Phone Number" className="w-full h-11 pl-10 pr-4 bg-gray-50 rounded-lg border border-gray-200 text-sm outline-none focus:border-secondary transition-colors" />
                    </div>
                    <div className="relative">
                        <textarea placeholder="I'm interested in this property..." className="w-full h-24 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm outline-none focus:border-secondary transition-colors resize-none" />
                    </div>

                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-11 rounded-lg font-bold text-sm tracking-wide gap-2">
                        Send Message <Send className="w-3 h-3" />
                    </Button>

                    <p className="text-[10px] text-gray-400 text-center">
                        We respect your privacy. No spam guaranteed.
                    </p>
                </form>
            </div>

            {/* Agent / Branding Card */}
            <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs">
                    TV
                </div>
                <div>
                    <span className="text-[10px] font-bold uppercase text-gray-400 block">Listed By</span>
                    <span className="font-bold text-primary">Thrissur Villas</span>
                </div>
            </div>

        </div>
    )
}
