"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
    Home, MapPin, Camera, CheckCircle, ChevronRight,
    ChevronLeft, Upload, X, Star, Building2, Landmark,
    Bed, Bath, Maximize2, Calendar, DollarSign, User,
    Phone, Mail, FileText, Tag, ArrowRight, Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils"

// ─── KERALA DATA ────────────────────────────────────────────────────────────
const KERALA_DISTRICTS = [
    "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha",
    "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad",
    "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
]

const CATEGORIES = ["Residential", "Commercial", "Agricultural", "Industrial"]
const SUBCATEGORIES = {
    Residential: ["Villa", "Apartment", "House", "Penthouse", "Row House", "Studio"],
    Commercial: ["Office Space", "Shop", "Showroom", "Warehouse", "Hotel"],
    Agricultural: ["Farm Land", "Plantation", "Orchard"],
    Industrial: ["Factory", "Godown", "Industrial Plot"]
}
const OWNERSHIP_TYPES = ["Freehold", "Leasehold", "Co-operative Society", "Power of Attorney"]

// ─── STEP DEFINITIONS ────────────────────────────────────────────────────────
const STEPS = [
    { id: 1, label: "Basic Info", icon: FileText },
    { id: 2, label: "Location", icon: MapPin },
    { id: 3, label: "Media", icon: Camera },
    { id: 4, label: "Contact", icon: User },
]

// ─── COUNTER CHIP ─────────────────────────────────────────────────────────────
function CounterChip({ value, options, onChange }) {
    return (
        <div className="flex flex-wrap gap-2">
            {options.map(opt => (
                <button
                    key={opt}
                    type="button"
                    onClick={() => onChange(opt)}
                    className={cn(
                        "w-10 h-10 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:scale-105",
                        value === opt
                            ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                            : "bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                    )}
                >
                    {opt === 6 ? "5+" : opt}
                </button>
            ))}
        </div>
    )
}

// ─── FORM INPUT ───────────────────────────────────────────────────────────────
function FormInput({ label, required, icon: Icon, error, className, ...props }) {
    return (
        <div className={cn("flex flex-col gap-1.5", className)}>
            {label && (
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                    {label}
                    {required && <span className="text-secondary">*</span>}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                )}
                <input
                    {...props}
                    className={cn(
                        "w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200",
                        "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
                        "hover:border-gray-300",
                        Icon && "pl-10",
                        error && "border-secondary focus:border-secondary focus:ring-secondary/10",
                        props.className
                    )}
                />
            </div>
            {error && <p className="text-xs text-secondary font-medium">{error}</p>}
        </div>
    )
}

// ─── FORM SELECT ──────────────────────────────────────────────────────────────
function FormSelect({ label, required, icon: Icon, error, children, className, ...props }) {
    return (
        <div className={cn("flex flex-col gap-1.5", className)}>
            {label && (
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                    {label}
                    {required && <span className="text-secondary">*</span>}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                )}
                <select
                    {...props}
                    className={cn(
                        "w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-all duration-200 appearance-none cursor-pointer",
                        "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
                        "hover:border-gray-300",
                        Icon && "pl-10",
                        error && "border-secondary",
                        props.className
                    )}
                >
                    {children}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            {error && <p className="text-xs text-secondary font-medium">{error}</p>}
        </div>
    )
}

// ─── RADIO GROUP ──────────────────────────────────────────────────────────────
function RadioGroup({ label, required, options, value, onChange, name }) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                    {label}
                    {required && <span className="text-secondary">*</span>}
                </label>
            )}
            <div className="flex gap-3">
                {options.map(opt => (
                    <label
                        key={opt.value}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 cursor-pointer transition-all duration-200 text-sm font-medium",
                            value === opt.value
                                ? "border-primary bg-primary/5 text-primary"
                                : "border-gray-200 text-gray-600 hover:border-gray-300"
                        )}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={opt.value}
                            checked={value === opt.value}
                            onChange={() => onChange(opt.value)}
                            className="sr-only"
                        />
                        <div className={cn(
                            "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                            value === opt.value ? "border-primary" : "border-gray-300"
                        )}>
                            {value === opt.value && <div className="w-2 h-2 rounded-full bg-primary" />}
                        </div>
                        {opt.label}
                    </label>
                ))}
            </div>
        </div>
    )
}

// ─── STEP PROGRESS BAR ────────────────────────────────────────────────────────
function StepProgress({ currentStep }) {
    return (
        <div className="flex items-center justify-center gap-0 mb-4 md:mb-0">
            {STEPS.map((step, i) => {
                const isCompleted = currentStep > step.id
                const isActive = currentStep === step.id
                const Icon = step.icon
                return (
                    <div key={step.id} className="flex items-center">
                        <div className="flex flex-col items-center gap-1.5">
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                                isCompleted ? "bg-primary border-primary text-white shadow-lg shadow-primary/30" :
                                    isActive ? "bg-white border-primary text-primary shadow-lg shadow-primary/20" :
                                        "bg-white border-gray-300 text-gray-500"
                            )}>
                                {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                            </div>
                            <span className={cn(
                                "text-xs font-bold whitespace-nowrap",
                                isActive ? "text-primary" : isCompleted ? "text-primary/70" : "text-gray-600"
                            )}>
                                {step.label}
                            </span>
                        </div>
                        {i < STEPS.length - 1 && (
                            <div className={cn(
                                "w-12 md:w-24 h-0.5 mb-5 mx-1 transition-all duration-500",
                                currentStep > step.id ? "bg-primary" : "bg-gray-300"
                            )} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

// ─── IMAGE UPLOAD ZONE ────────────────────────────────────────────────────────
function ImageUploadZone({ images, onAdd, onRemove, onSetMain }) {
    const inputRef = useRef(null)

    const handleFiles = (files) => {
        const newFiles = Array.from(files).slice(0, 8 - images.length)
        newFiles.forEach(file => {
            if (file.size > 5 * 1024 * 1024) return
            const url = URL.createObjectURL(file)
            onAdd({ file, url, isMain: images.length === 0 })
        })
    }

    const handleDrop = (e) => {
        e.preventDefault()
        handleFiles(e.dataTransfer.files)
    }

    return (
        <div className="space-y-4">
            <div
                onDrop={handleDrop}
                onDragOver={e => e.preventDefault()}
                onClick={() => inputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center cursor-pointer hover:border-primary hover:bg-primary/3 transition-all duration-300 group"
            >
                <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={e => handleFiles(e.target.files)}
                />
                <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Upload className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                        <p className="text-base font-semibold text-gray-700">Drag & drop photos here</p>
                        <p className="text-sm text-gray-400 mt-1">
                            or <span className="text-primary font-semibold">click to browse</span> — Max 5MB per image, up to 8 photos
                        </p>
                    </div>
                </div>
            </div>

            {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {images.map((img, i) => (
                        <div key={i} className="relative group rounded-xl overflow-hidden aspect-square bg-gray-100">
                            <img src={img.url} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => onSetMain(i)}
                                    className={cn(
                                        "p-1.5 rounded-full transition-colors",
                                        img.isMain ? "bg-yellow-400 text-yellow-900" : "bg-white/80 text-gray-700 hover:bg-yellow-400 hover:text-yellow-900"
                                    )}
                                >
                                    <Star className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => onRemove(i)}
                                    className="p-1.5 rounded-full bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white transition-colors"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            {img.isMain && (
                                <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <Star className="w-2.5 h-2.5 fill-current" /> Main
                                </div>
                            )}
                        </div>
                    ))}
                    {images.length < 8 && (
                        <button
                            type="button"
                            onClick={() => inputRef.current?.click()}
                            className="aspect-square rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 text-gray-400 hover:border-primary hover:text-primary transition-all"
                        >
                            <Upload className="w-5 h-5" />
                            <span className="text-xs font-medium">Add More</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

import { useLenis } from "@/components/providers/LenisProvider"

// ... imports ...

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function PostAdPage() {
    const lenis = useLenis()
    const topRef = useRef(null)
    const [step, setStep] = useState(1)
    const [submitted, setSubmitted] = useState(false)

    // Scroll to top when step changes
    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true, force: true })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [step, lenis])

    const [form, setForm] = useState({
        title: "", transactionType: "Sell", readyToMove: "Yes",
        constructedYear: "", category: "", subcategory: "",
        ownershipType: "", price: "", landArea: "", landUnit: "Cent",
        buildingArea: "", buildingAreaUnit: "Sqft", bedrooms: null,
        bathrooms: null, description: "", houseName: "", street: "",
        locality: "", state: "Kerala", district: "Thrissur",
        city: "", postOffice: "", images: [],
        contactName: "", contactPhone: "", contactEmail: "",
    })

    const set = (key, value) => setForm(prev => ({ ...prev, [key]: value }))
    const handleImageAdd = (img) => set("images", [...form.images, img])
    const handleImageRemove = (i) => set("images", form.images.filter((_, idx) => idx !== i))
    const handleSetMain = (mainIdx) => set("images", form.images.map((img, i) => ({ ...img, isMain: i === mainIdx })))
    const formatPrice = (val) => val.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const nextStep = () => setStep(s => Math.min(s + 1, 4))
    const prevStep = () => setStep(s => Math.max(s - 1, 1))
    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-red-50/20 flex items-center justify-center px-4">
                <div className="text-center max-w-md mx-auto">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/30">
                        <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-3xl font-display font-bold text-gray-900 mb-3">Property Listed!</h1>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        Your property has been submitted successfully. Our team will review and publish it within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/properties" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                            <Home className="w-4 h-4" /> View Properties
                        </Link>
                        <button
                            onClick={() => { setSubmitted(false); setStep(1) }}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors"
                        >
                            Post Another
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-red-50/10">
            {/* Decorative Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            {/* ── PREMIUM HEADER SECTION ────────────────────────────────────────── */}
            <div ref={topRef} className="relative pt-32 pb-20 overflow-hidden">
                {/* Background with Gradient & Pattern */}
                <div className="absolute inset-0 bg-[#1E3A8A]">
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-950/30 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-xs font-medium uppercase tracking-wider mb-4">
                        <Sparkles className="w-3 h-3" /> Sell or Rent Faster
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        List Your Property for <span className="text-secondary">Free</span>
                    </h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Connect with thousands of genuine buyers and tenants in Thrissur.
                        Simple 4-step process, zero brokerage.
                    </p>
                </div>
            </div>

            {/* Main Content Form - Overlapping the Header */}
            <div className="container mx-auto px-4 pb-20 -mt-10 relative z-20 max-w-4xl">
                {/* Sticky Progress Bar */}
                <div className="sticky top-24 z-40 mb-10 -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="bg-white/95 backdrop-blur-xl shadow-xl shadow-gray-200/20 border border-white/40 rounded-2xl p-4 md:p-6 transition-all duration-300">
                        <StepProgress currentStep={step} />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl shadow-gray-200/60 border border-white/80 overflow-hidden">

                        {/* ── STEP 1: BASIC INFO ─────────────────────────────── */}
                        {step === 1 && (
                            <div className="p-6 md:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-display font-bold text-gray-900">Property Description & Price</h2>
                                        <p className="text-sm text-gray-400">Tell us about your property</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <FormInput
                                        label="Property Title" required icon={Tag}
                                        placeholder="e.g. Luxury 4BHK Villa in Thrissur"
                                        value={form.title} onChange={e => set("title", e.target.value)}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <RadioGroup label="Transaction Type" required name="transactionType"
                                            value={form.transactionType} onChange={v => set("transactionType", v)}
                                            options={[{ value: "Sell", label: "Sell" }, { value: "Rent", label: "Rent" }]}
                                        />
                                        <RadioGroup label="Ready to Move" required name="readyToMove"
                                            value={form.readyToMove} onChange={v => set("readyToMove", v)}
                                            options={[{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }]}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <FormSelect label="Category" required icon={Building2}
                                            value={form.category} onChange={e => { set("category", e.target.value); set("subcategory", "") }}>
                                            <option value="">Select Category</option>
                                            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                        </FormSelect>
                                        <FormSelect label="Subcategory" required icon={Home}
                                            value={form.subcategory} onChange={e => set("subcategory", e.target.value)} disabled={!form.category}>
                                            <option value="">Select Subcategory</option>
                                            {(SUBCATEGORIES[form.category] || []).map(s => <option key={s} value={s}>{s}</option>)}
                                        </FormSelect>
                                        <FormSelect label="Ownership Type" required icon={Landmark}
                                            value={form.ownershipType} onChange={e => set("ownershipType", e.target.value)}>
                                            <option value="">Select Ownership</option>
                                            {OWNERSHIP_TYPES.map(o => <option key={o} value={o}>{o}</option>)}
                                        </FormSelect>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormInput label="Total Property Cost (₹)" required icon={DollarSign}
                                            placeholder="e.g. 1,50,00,000"
                                            value={form.price} onChange={e => set("price", formatPrice(e.target.value))}
                                        />
                                        <FormInput label="Constructed Year" icon={Calendar}
                                            placeholder="e.g. 2022" type="number" min="1900" max={new Date().getFullYear()}
                                            value={form.constructedYear} onChange={e => set("constructedYear", e.target.value)}
                                        />
                                    </div>

                                    <div className="border-t border-gray-100 pt-6">
                                        <h3 className="text-base font-display font-bold text-gray-800 mb-5 flex items-center gap-2">
                                            <Maximize2 className="w-4 h-4 text-primary" /> Extra Information
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex gap-2">
                                                <FormInput label="Land Area" placeholder="Enter area" type="number"
                                                    value={form.landArea} onChange={e => set("landArea", e.target.value)} className="flex-1" />
                                                <FormSelect label="Unit" value={form.landUnit} onChange={e => set("landUnit", e.target.value)} className="w-28">
                                                    {["Cent", "Acre", "Sqft", "Sqm"].map(u => <option key={u}>{u}</option>)}
                                                </FormSelect>
                                            </div>
                                            <div className="flex gap-2">
                                                <FormInput label="Building Area" placeholder="Enter area" type="number"
                                                    value={form.buildingArea} onChange={e => set("buildingArea", e.target.value)} className="flex-1" />
                                                <FormSelect label="Unit" value={form.buildingAreaUnit} onChange={e => set("buildingAreaUnit", e.target.value)} className="w-28">
                                                    {["Sqft", "Sqm"].map(u => <option key={u}>{u}</option>)}
                                                </FormSelect>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                    <Bed className="w-4 h-4 text-primary" /> Bedrooms
                                                </label>
                                                <CounterChip value={form.bedrooms} options={[1, 2, 3, 4, 5, 6]} onChange={v => set("bedrooms", v)} />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                    <Bath className="w-4 h-4 text-primary" /> Bathrooms
                                                </label>
                                                <CounterChip value={form.bathrooms} options={[1, 2, 3, 4, 5, 6]} onChange={v => set("bathrooms", v)} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-semibold text-gray-700">Description</label>
                                        <textarea rows={4}
                                            placeholder="Describe your property in detail — amenities, surroundings, special features..."
                                            value={form.description} onChange={e => set("description", e.target.value)}
                                            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-gray-300 resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── STEP 2: LOCATION ───────────────────────────────── */}
                        {step === 2 && (
                            <div className="p-6 md:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-display font-bold text-gray-900">Property Location</h2>
                                        <p className="text-sm text-gray-400">Help buyers find your property</p>
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormInput label="Property (House) Name / Number" icon={Home}
                                            placeholder="e.g. 'Green Villa' or 12/A"
                                            value={form.houseName} onChange={e => set("houseName", e.target.value)} />
                                        <FormInput label="Property Street" icon={MapPin}
                                            placeholder="Street name"
                                            value={form.street} onChange={e => set("street", e.target.value)} />
                                    </div>
                                    <FormInput label="Property Locality / Area" icon={MapPin}
                                        placeholder="e.g. Punkunnam, Ayyanthole"
                                        value={form.locality} onChange={e => set("locality", e.target.value)} />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormSelect label="State" required value={form.state} onChange={e => set("state", e.target.value)}>
                                            <option value="Kerala">Kerala</option>
                                        </FormSelect>
                                        <FormSelect label="District" required value={form.district} onChange={e => set("district", e.target.value)}>
                                            {KERALA_DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                                        </FormSelect>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormInput label="Property City" required placeholder="City name"
                                            value={form.city} onChange={e => set("city", e.target.value)} />
                                        <FormInput label="Post Office" placeholder="Post office name"
                                            value={form.postOffice} onChange={e => set("postOffice", e.target.value)} />
                                    </div>
                                    <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 text-center">
                                        <MapPin className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                                        <p className="text-sm text-gray-400 font-medium">Map pin integration coming soon</p>
                                        <p className="text-xs text-gray-300 mt-1">Your address details will be used to locate the property</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── STEP 3: MEDIA ──────────────────────────────────── */}
                        {step === 3 && (
                            <div className="p-6 md:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Camera className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-display font-bold text-gray-900">Property Photos</h2>
                                        <p className="text-sm text-gray-400">High quality photos get 3x more enquiries</p>
                                    </div>
                                </div>
                                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 mb-6 flex gap-3">
                                    <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <div className="text-sm text-primary/80">
                                        <strong className="text-primary">Pro Tip:</strong> Upload photos in daylight. Include exterior, living room, kitchen, bedrooms & bathrooms. Star the best photo as your main image.
                                    </div>
                                </div>
                                <ImageUploadZone images={form.images} onAdd={handleImageAdd} onRemove={handleImageRemove} onSetMain={handleSetMain} />
                            </div>
                        )}

                        {/* ── STEP 4: CONTACT & REVIEW ───────────────────────── */}
                        {step === 4 && (
                            <div className="p-6 md:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <User className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-display font-bold text-gray-900">Contact Information</h2>
                                        <p className="text-sm text-gray-400">How buyers can reach you</p>
                                    </div>
                                </div>

                                <div className="space-y-5 mb-8">
                                    <FormInput label="Contact Person Name" required icon={User}
                                        placeholder="Your full name"
                                        value={form.contactName} onChange={e => set("contactName", e.target.value)} />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormInput label="Contact Number" required icon={Phone}
                                            placeholder="10-digit mobile number" type="tel" maxLength={10}
                                            value={form.contactPhone} onChange={e => set("contactPhone", e.target.value.replace(/\D/g, ""))} />
                                        <FormInput label="Email Address" icon={Mail}
                                            placeholder="your@email.com" type="email"
                                            value={form.contactEmail} onChange={e => set("contactEmail", e.target.value)} />
                                    </div>
                                </div>

                                {/* Summary */}
                                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                                    <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">Listing Summary</h3>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        {[
                                            ["Title", form.title || "—"],
                                            ["Type", form.transactionType],
                                            ["Category", form.subcategory || form.category || "—"],
                                            ["Price", form.price ? `₹ ${form.price}` : "—"],
                                            ["Location", [form.locality, form.city, form.district].filter(Boolean).join(", ") || "—"],
                                            ["Photos", `${form.images.length} uploaded`],
                                        ].map(([k, v]) => (
                                            <div key={k} className="flex flex-col gap-0.5">
                                                <span className="text-xs text-gray-400 font-medium">{k}</span>
                                                <span className="text-gray-800 font-semibold truncate">{v}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── NAVIGATION FOOTER ──────────────────────────────── */}
                        <div className="px-6 md:px-10 py-5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between gap-4">
                            {step > 1 ? (
                                <button type="button" onClick={prevStep}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-primary hover:text-primary transition-all">
                                    <ChevronLeft className="w-4 h-4" /> Back
                                </button>
                            ) : (
                                <Link href="/"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-primary hover:text-primary transition-all">
                                    <ChevronLeft className="w-4 h-4" /> Cancel
                                </Link>
                            )}

                            <div className="text-xs text-gray-400 font-medium">Step {step} of {STEPS.length}</div>

                            {step < 4 ? (
                                <button type="button" onClick={nextStep}
                                    className="inline-flex items-center gap-2 px-8 py-2.5 rounded-xl bg-gradient-to-r from-secondary to-secondary/80 text-white font-semibold text-sm shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all duration-200">
                                    Continue <ChevronRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button type="submit"
                                    className="inline-flex items-center gap-2 px-8 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200">
                                    Post Property Now <ArrowRight className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
