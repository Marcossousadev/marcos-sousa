import { MdEmail } from "react-icons/md";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export function Footer() {
    return (
        <footer id="contato" className="w-full bg-zinc-900 border-t border-zinc-800 text-zinc-100 py-12 mt-12">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-bold">Contato</h3>
                    <p className="text-sm text-zinc-400 max-w-md">
                        Desenvolvedor de Software Full Stack com mais de 3 anos de experiência em Node.js, React, Next.js e TypeScript, expandindo conhecimentos no ecossistema Java & Spring Boot.
                    </p>
                    <a href="mailto:marcos.a.sousa.dev@gmail.com" className="text-xs text-zinc-300 flex items-center gap-2 pt-1 hover:text-white transition">
                        <MdEmail size={16} /> marcos.a.sousa.dev@gmail.com
                    </a>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <a 
                        href="https://www.instagram.com/marcossousadev/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 hover:text-blue-400 transition"
                    >
                        <IoLogoInstagram size={18} /> Instagram
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/marcos-antonio-de-sousa-sampaio-00a97a29a/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 hover:text-blue-400 transition"
                    >
                        <IoLogoLinkedin size={18} /> LinkedIn
                    </a>
                    <a 
                        href="https://github.com/Marcossousadev" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 hover:text-blue-400 transition"
                    >
                        <IoLogoGithub size={18} /> GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}

