import Image from "next/image";
import MarcosDev from "@/assets/marcos_dev.png";
import { LinkAction } from "./ui/link-action";
import { CodeWindow } from "./ui/code-window";

export function HeroSection() {
    return (
        <section id="sobre" className="w-full pt-8 md:pt-16 flex flex-col gap-12">
            {/* Top row: Profile & Corporate Dev Intro */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                        data-aos="fade-down"
                    >
                        Desenvolvedor de Software <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Full Stack</span>
                    </h1>
                    
                    <p 
                        className="text-zinc-400 text-base md:text-lg mt-4 max-w-2xl leading-relaxed"
                        data-aos="fade-down"
                        data-aos-delay="100"
                    >
                        Sou desenvolvedor de software full-stack com mais de 3 anos de experiência profissional, especialista no ecossistema JavaScript/TypeScript (<strong className="text-zinc-200">Node.js, React, Next.js</strong>), e em constante expansão no backend com <strong className="text-zinc-200">Java e Spring Boot</strong>. Focado em construir aplicações web escaláveis, código limpo e soluções de alto impacto para empresas e produtos digitais.
                    </p>

                    <div 
                        className="flex flex-row gap-3 mt-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <LinkAction href="https://wa.me/558597961611?text=Oi%20tenho%20interesse%20em%20conversar%20sobre%20uma%20oportunidade" text="Fale comigo!" />
                        <LinkAction href="/curriculo.pdf" text="Baixar Currículo" transparent download={true} />
                    </div>
                </div>

                <div className="relative shrink-0" data-aos="fade-left">
                    <div className="p-1 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-xl">
                        <Image 
                            src={MarcosDev}
                            alt="Marcos Sousa"
                            className="rounded-full w-36 h-36 md:w-52 md:h-52 object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Interactive Code Window */}
            <div className="w-full flex justify-center pt-4" data-aos="fade-up" data-aos-delay="300">
                <CodeWindow />
            </div>
        </section>
    );
}



