"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

export function LenisProvider({ children }) {
    const lenisRef = useRef(null)

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        lenisRef.current = lenis

        let reqId

        function raf(time) {
            lenis.raf(time)
            reqId = requestAnimationFrame(raf)
        }

        reqId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(reqId)
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}
