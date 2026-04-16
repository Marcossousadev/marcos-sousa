import Image from "next/image";
import MarcosDev from "@/assets/marcos_dev.jpeg";
import { LinkAction } from "./ui/link-action";
export function HeroSection() {
    return (
        <div className="w-full lg:min-h-screen flex flex-col md:flex-row items-center md:justify-around gap-3 md:gap-0 text-foreground pt-28">
            <div className="inline-block p-[3px] md:hidden rounded-full bg-gradient-to-r from-pink-400 via-orange-300 to-purple-400" data-aos="fade-down">
                <Image src={MarcosDev}
                    alt="img_marcos"
                    className="rounded-full w-28 h-28 md:h-36 md:w-36 object-cover"
                    priority
                />
            </div>
            <div className="flex flex-col items-center md:items-start md:gap-2 md:ml-20">
                <h1
                    className="text-foreground font-bold text-center text-3xl md:text-4xl mx-10 md:mx-0 md:w-sm md:text-start lg:text-6xl lg:w-2xl" data-aos="fade-down" data-aos-delay="200">
                    Eu sou programador e  crio soluções como <span className="bg-gradient-to-r from-orange-500 via-pink-400 to-purple-300 bg-clip-text text-transparent">freelancer!</span>
                </h1>
                <p className="text-[#C5C5C5] text-base mt-2 text-center w-2xs mx-10 md:mx-0 md:text-start md:w-sm md:text-lg lg:text-2xl lg:w-2xl lg:mt-5" data-aos="fade-down" data-aos-delay="300">
                    Sou um desenvolvedor de software full-stack experiente com mais de 3 anos de experiência profissional, especializado em desenvolvimento front-end.
                    Desenvolvo soluções personalizadas para clientes, utilizando as mais recentes tecnologias e práticas de desenvolvimento. Meu objetivo é criar experiências digitais excepcionais que atendam às necessidades dos meus clientes e superem suas expectativas.
                </p>
                <div
                    className="hidden md:flex md:flex-row md:gap-2 md:mt-5" data-aos="fade-right" data-aos-delay="200">
                    <LinkAction href="https://wa.me/558597961611?text=Oi%20tenho%20interesse%20no%20seu%20serviço" text="Fale comigo!" />
                    <LinkAction href="/curriculo.pdf" text="Baixar Currículo" transparent download={true} />
                </div>
            </div>
            <div
                className="flex flex-row gap-2 mt-5 md:hidden" data-aos="fade-right" data-aos-delay="300">
                <LinkAction href="https://wa.me/558597961611?text=Oi%20tenho%20interesse%20no%20seu%20serviço" text="Fale comigo!" />
                <LinkAction href="/curriculo.pdf" text="Baixar Currículo" transparent download={true} />
            </div>
            <div className="hidden md:inline-block p-[3px] rounded-full bg-gradient-to-r from-pink-400 via-orange-300 to-purple-400 mr-20" data-aos="fade-left">
                <Image src={MarcosDev}
                    alt="img_marcos"
                    className="rounded-full w-28 h-28 md:h-36 md:w-36 object-cover lg:h-48 lg:w-48"
                    priority
                />
            </div>
        </div>
    );
}