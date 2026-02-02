"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react"

export function EMICalculator() {
    const [amount, setAmount] = useState(5000000)
    const [rate, setRate] = useState(8.5)
    const [tenure, setTenure] = useState(20)
    const [emi, setEmi] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // EMI Calculation Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
        const r = rate / 12 / 100
        const n = tenure * 12
        const calculatedEmi = amount * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1))
        setEmi(Math.round(calculatedEmi))
    }, [amount, rate, tenure])

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumSignificantDigits: 3
        }).format(val)
    }

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Financial Planning</h4>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                            Smart EMI Calculator
                        </h2>
                        <p className="text-gray-500 text-lg mb-8">
                            Plan your finances with our easy-to-use home loan calculator. Get an estimate of your monthly installments instantly.
                        </p>


                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-lg">
                            {/* Mounted check for inputs */}
                            {mounted ? (
                                <>
                                    {/* Loan Amount */}
                                    <div className="mb-8">
                                        <div className="flex justify-between mb-4">
                                            <label className="font-bold text-gray-700 flex items-center gap-2">
                                                <DollarSign className="h-4 w-4 text-secondary" /> Loan Amount
                                            </label>
                                            <span className="text-primary font-bold bg-white px-3 py-1 rounded-md shadow-sm border border-gray-100">
                                                {formatCurrency(amount)}
                                            </span>
                                        </div>
                                        <input
                                            type="range"
                                            min="1000000"
                                            max="50000000"
                                            step="100000"
                                            value={amount}
                                            onChange={(e) => setAmount(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                                            <span>₹10L</span>
                                            <span>₹5Cr</span>
                                        </div>
                                    </div>

                                    {/* Interest Rate */}
                                    <div className="mb-8">
                                        <div className="flex justify-between mb-4">
                                            <label className="font-bold text-gray-700 flex items-center gap-2">
                                                <Percent className="h-4 w-4 text-secondary" /> Interest Rate
                                            </label>
                                            <span className="text-primary font-bold bg-white px-3 py-1 rounded-md shadow-sm border border-gray-100">
                                                {rate}%
                                            </span>
                                        </div>
                                        <input
                                            type="range"
                                            min="5"
                                            max="15"
                                            step="0.1"
                                            value={rate}
                                            onChange={(e) => setRate(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                                            <span>5%</span>
                                            <span>15%</span>
                                        </div>
                                    </div>

                                    {/* Tenure */}
                                    <div className="mb-2">
                                        <div className="flex justify-between mb-4">
                                            <label className="font-bold text-gray-700 flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-secondary" /> Tenure (Years)
                                            </label>
                                            <span className="text-primary font-bold bg-white px-3 py-1 rounded-md shadow-sm border border-gray-100">
                                                {tenure} Years
                                            </span>
                                        </div>
                                        <input
                                            type="range"
                                            min="1"
                                            max="30"
                                            step="1"
                                            value={tenure}
                                            onChange={(e) => setTenure(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                                            <span>1 Year</span>
                                            <span>30 Years</span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="h-[400px] flex items-center justify-center text-gray-400">
                                    Loading calculator...
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Result Visualization */}
                    <div className="lg:w-1/2 flex flex-col items-center justify-center relative">
                        {/* Decorative Circle Background */}
                        <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl transform scale-75" />

                        <motion.div
                            key={emi}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-primary text-white p-12 rounded-full w-80 h-80 flex flex-col items-center justify-center shadow-2xl relative z-10 border-8 border-white/10"
                        >
                            <div className="text-sm font-medium text-gray-300 uppercase tracking-widest mb-2">Monthly EMI</div>
                            <div className="text-4xl font-serif font-bold mb-2">{formatCurrency(emi)}</div>
                            <div className="text-xs text-gray-400 text-center max-w-[200px]">
                                *Estimated figure. Actual loan terms may vary bank to bank.
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-md">
                            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center">
                                <div className="text-xs text-gray-500 uppercase font-bold mb-1">Principal Amount</div>
                                <div className="text-lg font-bold text-primary">{formatCurrency(amount)}</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center">
                                <div className="text-xs text-gray-500 uppercase font-bold mb-1">Total Interest</div>
                                <div className="text-lg font-bold text-secondary">{formatCurrency((emi * tenure * 12) - amount)}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
