import Image, { StaticImageData } from "next/image";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CardProjectProps {
    src: StaticImageData;
    title: string;
    description: string;
    tags?: string[];
    linkProject?: string;
    linkGithub?: string;
    linkProjectTwo?: string;
}

export function CardProject({ src, title, description, tags, linkProject, linkGithub, linkProjectTwo }: CardProjectProps) {
    return (
        <div 
            className="flex flex-col rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition"
            data-aos="fade-up"
        >
            <div className="relative w-full aspect-video bg-zinc-950">
                <Image 
                    src={src} 
                    alt={title}
                    className="w-full h-full object-cover object-top"
                    priority 
                />
            </div>

            <div className="flex flex-col flex-1 p-5 space-y-3">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="px-2.5 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300 font-mono">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="pt-3 mt-auto flex flex-wrap gap-3">
                    {linkProject && (
                        <a 
                            href={linkProject}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-white text-black font-semibold text-xs px-3.5 py-2 rounded hover:bg-zinc-200 transition"
                        >
                            <FaExternalLinkAlt size={10} />
                            <span>Ver Projeto</span>
                        </a>
                    )}
                    {linkProjectTwo && (
                        <a 
                            href={linkProjectTwo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 border border-zinc-700 text-white font-semibold text-xs px-3.5 py-2 rounded hover:bg-zinc-800 transition"
                        >
                            <FaExternalLinkAlt size={10} />
                            <span>Ver Projeto 2</span>
                        </a>
                    )}
                    {linkGithub && (
                        <a 
                            href={linkGithub} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1.5 border border-zinc-700 text-white font-semibold text-xs px-3.5 py-2 rounded hover:bg-zinc-800 transition"
                        >
                            <SiGithub size={12} />
                            <span>GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
