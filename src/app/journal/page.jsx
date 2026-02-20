import { JournalHero } from "@/components/journal/JournalHero"
import { CategoryBar } from "@/components/journal/CategoryBar"
import { JournalGrid } from "@/components/journal/JournalGrid"
import { Newsletter } from "@/components/journal/Newsletter"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function JournalPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <JournalHero />
            <CategoryBar />
            <JournalGrid />
            <Newsletter />
            <Footer />
        </main>
    )
}
