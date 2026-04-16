import Image from "next/image";
import { StaticImageData } from "next/image";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
interface CardProjectProps {
    src: StaticImageData;
    title: string;
    description: string;
    linkProject?: string;
    linkGithub?: string;
}
export function CardProject({ src, title, description, linkProject, linkGithub }: CardProjectProps) {
    return (
        <div className="w-[85%] md:w-[60%] lg:w-1/2 rounded-2xl bg-[#222222] cursor-pointer border-2 border-white/10 hover:border-white" data-aos="fade-right" data-aos-delay="200">
            <Image src={src} className="w-full h-full object-cover rounded-t-2xl" alt={title} priority />
            <div>
                <div className="mt-2 p-5">
                    <h2 className="text-base md:text-base lg:text-lg font-bold mb-2">{title}</h2>
                    <p className="text-[#C5C5C5] text-sm md:text-base lg:text-lg">{description}</p>
                    <div className="mt-2 text-base font-semibold">

                    </div>
                </div>
                <div className="flex gap-4 ml-5 pb-5">
                    {
                        linkProject && (
                            <a href={linkProject}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black bg-white py-1 px-3 md:px-4 md:py-2 md:text-sm lg:text-sm text-xs font-bold border-2 border-white rounded-md hover:bg-transparent hover:text-foreground transition">
                                <div className="flex items-center justify-center">
                                    <FaExternalLinkAlt className="inline mr-2" />
                                    Ver Projeto
                                </div>
                            </a>
                        )
                    }
                    {
                        linkGithub && (
                            <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="text-white text-center hover:underline border-2 border-white py-1 px-2 md:px-4 md:py-2 text-xs md:text-sm lg:text-sm font-bold rounded-md">
                                <div className="flex items-center justify-center">
                                    <SiGithub className="inline mr-2" />
                                    Ver no GitHub
                                </div>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
}