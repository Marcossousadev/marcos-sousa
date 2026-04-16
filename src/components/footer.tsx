import { MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
export function Footer() {
    return (
        <footer id="contato" className="w-full bg-[#222222] text-foreground mt-10 lg:px-25">
            <div className="w-full p-10 flex flex-col gap-2">
                <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">Contato</h1>
                <p className="text-sm text-[#C5C5C5] md:text-base lg:text-lg lg:w-2xl">Desenvolvedor de Software Full Stack experiente, com mais de 3 anos de experiência prática em design e implementação de soluções web robustas, escaláveis ​​e inovadoras. Habilidoso em utilizar um conjunto abrangente de habilidades que englobam tecnologias de front-end e back-end.</p>
                <span className="text-xs md:text-sm lg:text-base mt-2 flex flex-row gap-2 items-center lg:ml-2"><MdEmail size={15} className="md:scale-125 lg:scale-150"/> marcos.a.sousa.dev@gmail.com</span>

                <div className="w-full mt-5 flex flex-row gap-5 text-sm lg:items-center lg:justify-center">
                    <a href="https://www.instagram.com/marcossampaiosousa/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 md:gap-2 lg:text-base">
                        <IoLogoInstagram size={20} className="md:scale-110" />
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/marcos-antonio-de-sousa-sampaio-00a97a29a/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 md:gap-2 lg:text-base">
                        <IoLogoLinkedin size={20} className="md:scale-110" />
                        LinkedIn
                    </a>
                    <a href="https://github.com/Marcossousadev" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 md:gap-2 lg:text-base">
                        <IoLogoGithub size={20} className="md:scale-110" />
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}