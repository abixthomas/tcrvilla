
import { Hero } from "@/components/sections/Hero";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { Services } from "@/components/sections/Services";
import { NRICorner } from "@/components/sections/NRICorner";
import { AboutUs } from "@/components/sections/AboutUs";
import { EMICalculator } from "@/components/sections/EMICalculator";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { CallToAction } from "@/components/sections/CTA";
import { ChatWidget } from "@/components/ui/chat-widget";
import { VirtualTourTeaser } from "@/components/sections/VirtualTourTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <Awards />
      <FeaturedProperties />
      <VirtualTourTeaser />
      <NRICorner />
      <Services />
      <EMICalculator />
      <AboutUs />
      <Testimonials />
      <Contact />
      <CallToAction />
      <ChatWidget />
    </>
  );
}
