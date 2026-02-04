"use client"

import { Award } from "lucide-react"

const partners = [
    "HDFC Bank", "SBI Home Loans", "Axis Bank", "ICICI Bank", "LIC Housing", "Federal Bank", "Canara Bank"
]

export function Awards() {
    return (
        <section className="py-12 bg-primary border-t border-white/10 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-white/60 text-sm font-medium uppercase tracking-widest">Our Banking & Lending Partners</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div
                    className="animate-marquee whitespace-nowrap flex items-center gap-32 pr-32 group-hover:[animation-play-state:paused]"
                    style={{ animationDuration: "60s" }}
                >
                    {partners.concat(partners).map((partner, i) => (
                        <div key={i} className="flex items-center gap-4 text-white/40 font-bold text-3xl font-serif hover:text-white transition-colors cursor-default">
                            <Award className="h-8 w-8 opacity-50" />
                            {partner}
                        </div>
                    ))}
                </div>

                <div
                    className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-32 pr-32 group-hover:[animation-play-state:paused]"
                    style={{ animationDuration: "60s" }}
                >
                    {partners.concat(partners).map((partner, i) => (
                        <div key={i} className="flex items-center gap-4 text-white/40 font-bold text-3xl font-serif hover:text-white transition-colors cursor-default">
                            <Award className="h-8 w-8 opacity-50" />
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
