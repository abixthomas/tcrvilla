import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-secondary">Thrissur Villas</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            The #1 premium real estate platform in Thrissur. We connect buyers and sellers with trust, transparency, and technology.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-colors"
                                >
                                    <Icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {["About Us", "Our Services", "Featured Properties", "Latest Blog", "Contact Us"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="hover:text-secondary transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {["Property Valuation", "Legal Assistance", "Home Loans", "Interior Design", "Vastu Consulting"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="hover:text-secondary transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Stay Updated</h4>
                        <p className="text-gray-300 text-sm">Subscribe to our newsletter for the latest property news.</p>
                        <div className="flex gap-2">
                            <div className="flex-1 relative">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-secondary text-white placeholder:text-gray-400"
                                />
                            </div>
                            <Button size="sm" variant="secondary" className="shrink-0">Join</Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Thrissur Villas. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                        <Link href="#" className="hover:text-white">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
