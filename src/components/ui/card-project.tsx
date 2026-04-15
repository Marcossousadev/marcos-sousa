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
        <div className="w-[80%] rounded-2xl bg-[#222222] cursor-pointer">
            <Image src={src} className="w-full h-36 object-cover rounded-t-2xl" alt={title} priority />
            <div>
                <div className="mt-2 p-5">
                <h2 className="text-base font-bold mb-2">{title}</h2>
                <p className="text-[#C5C5C5] text-sm">{description}</p>
                 <div className="mt-2 text-base font-semibold">

                 </div>
            </div>
            <div className="flex gap-4 ml-5 pb-5">         
                {
                    linkProject && (
                        <a href={linkProject} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-black flex items-center justify-center bg-white py-1 px-2 text-xs font-bold border-2 border-white rounded-md hover:underline">
                            <FaExternalLinkAlt className="inline mr-2" />
                            Ver Projeto
                        </a>
                    )
                }
                {
                    linkGithub && (
                        <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="text-white text-center flex items-center justify-center hover:underline border-2 border-white py-1 px-2 text-xs font-bold rounded-md">
                            <SiGithub className="inline mr-2" />
                            Ver no GitHub
                        </a>
                    )
                }
            </div>
            </div>
        </div>
    );
}