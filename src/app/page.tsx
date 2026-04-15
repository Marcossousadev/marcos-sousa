import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Portfolio() {
  return (
   <main className="pt-24">
    <Navbar/>
    <HeroSection />
    <Skills/>
    <Projects/>
    <Footer/>
   </main>
  );
}
