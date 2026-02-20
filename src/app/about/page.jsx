import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AboutHero } from "@/components/about/AboutHero"
import { VisionPhilosophy } from "@/components/about/VisionPhilosophy"
import { GenesisTimeline } from "@/components/about/GenesisTimeline"
import { StatsCounter } from "@/components/about/StatsCounter"
import { TeamGrid } from "@/components/about/TeamGrid"
import { LegacyCTA } from "@/components/about/LegacyCTA"

export default function AboutPage() {
    return (
        <main className="bg-slate-950 min-h-screen">
            {/* <Navbar /> Already inside Layout */}

            <AboutHero />
            <VisionPhilosophy />
            <GenesisTimeline />
            <StatsCounter />
            <TeamGrid />
            <LegacyCTA />

            {/* <Footer /> Already inside Layout */}
        </main>
    )
}
