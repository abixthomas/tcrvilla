"use client"

import { motion } from "framer-motion"
import { Calculator, ShieldCheck, Home, PenTool, TrendingUp, Users } from "lucide-react"

const services = [
    {
        icon: TrendingUp,
        title: "Property Valuation",
        description: "Get precise market value estimates for your property from our certified experts.",
    },
    {
        icon: ShieldCheck,
        title: "Legal Assistance",
        description: "Complete legal support for property registration, title verification, and documentation.",
    },
    {
        icon: Calculator,
        title: "Home Loans",
        description: "Exclusive partnerships with top banks to get you the best interest rates and quick approvals.",
    },
    {
        icon: PenTool,
        title: "Interior Design",
        description: "Transform your space with our premium interior design partners tailored to your taste.",
    },
    {
        icon: Home,
        title: "Vastu Consulting",
        description: "Expert guidance on Vastu Shastra to bring harmony and prosperity to your home.",
    },
    {
        icon: Users,
        title: "NRI Services",
        description: "Dedicated support for NRIs including property management and remote transaction assistance.",
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function Services() {
    return (
        <section id="services" className="py-32 bg-white relative overflow-hidden scroll-mt-28">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Expertise</h4>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
                            Comprehensive Real <br /> Estate Services
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Beyond buying and selling, we offer a full spectrum of services to make your real estate journey smooth and successful.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                variants={item}
                                className="group p-10 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed max-w-xs group-hover:text-gray-600">
                                    {service.description}
                                </p>
                                <div className="w-12 h-1 bg-secondary/30 mt-8 rounded-full group-hover:w-full group-hover:bg-secondary transition-all duration-500" />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
