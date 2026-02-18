"use client"

import { useEffect, useState, createContext, useContext } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const LenisContext = createContext(null)

export function useLenis() {
    return useContext(LenisContext)
}

export function LenisProvider({ children }) {
    const [lenis, setLenis] = useState(null)

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        setLenis(lenisInstance)

        let reqId

        function raf(time) {
            lenisInstance.raf(time)
            reqId = requestAnimationFrame(raf)
        }

        // Integrate Lenis with ScrollTrigger
        lenisInstance.on('scroll', ScrollTrigger.update)

        // Add Lenis's ticker to GSAP's ticker for smoother animation sync
        gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000)
        })

        // Disable GSAP's default lag smoothing optimization to prevent stutter during heavy scroll
        gsap.ticker.lagSmoothing(0)

        reqId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(reqId)
            lenisInstance.destroy()
            gsap.ticker.remove(lenisInstance.raf)
        }
    }, [])

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    )
}
