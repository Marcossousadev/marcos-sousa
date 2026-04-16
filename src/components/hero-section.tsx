import Image from "next/image";
import MarcosDev from "@/assets/marcos_dev.jpeg";
import { LinkAction } from "./ui/link-action";
export function HeroSection() {
    return (
        <div className="w-full lg:min-h-screen flex flex-col items-center text-foreground">
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <div className="inline-block p-[3px] rounded-full bg-gradient-to-r from-pink-400 via-orange-300 to-purple-400">
                    <Image src={MarcosDev} 
                    alt="img_marcos" 
                    className="rounded-full w-28 h-28 object-cover"
                    priority
                    />
                </div>
                <h1 
                className="text-foreground font-bold text-center text-3xl mx-10">Eu sou programador e  crio soluções como <span className="bg-gradient-to-r from-orange-500 via-pink-400 to-purple-300 bg-clip-text text-transparent">freelancer!</span></h1>
                <p className="text-[#C5C5C5] text-md text-center mx-10 w-2xs">
                   Sou um desenvolvedor de software full-stack experiente com mais de 3 anos de experiência profissional, especializado em desenvolvimento front-end.
                   Desenvolvo soluções personalizadas para clientes, utilizando as mais recentes tecnologias e práticas de desenvolvimento. Meu objetivo é criar experiências digitais excepcionais que atendam às necessidades dos meus clientes e superem suas expectativas.
                </p>
            </div>
            <div className="flex flex-row gap-2 mt-10">
                <LinkAction href="https://wa.me/558597961611?text=Oi%20tenho%20interesse%20no%20seu%20serviço" text="Fale comigo!"/>
                <LinkAction href="/curriculo.pdf" text="Baixar Currículo" transparent download={true}/>
            </div>
        </div>
    );
}