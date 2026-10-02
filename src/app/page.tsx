import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[#0d1117] text-zinc-100 bg-grid">
      <Navbar />
      <div className="w-full max-w-5xl px-6 flex flex-col items-center gap-16 md:gap-24 pt-24 pb-16">
        <HeroSection />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}



