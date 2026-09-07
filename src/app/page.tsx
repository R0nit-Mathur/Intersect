import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ConvergingSection } from "@/components/sections/ConvergingSection";
import { NarrativeSection } from "@/components/sections/NarrativeSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { ConversationSection } from "@/components/sections/ConversationSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <ConvergingSection />
        <NarrativeSection />
        <StudioSection />
        <ConversationSection />
      </main>
      <Footer />
    </>
  );
}