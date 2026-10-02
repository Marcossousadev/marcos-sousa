import { FaHtml5, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiFastify, SiSpringboot } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const skillsList = [
    { name: "Java", icon: FaJava, color: "text-orange-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-emerald-500" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: BsTypescript, color: "text-blue-500" },
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Next.js", icon: RiNextjsFill, color: "text-zinc-200" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Fastify", icon: SiFastify, color: "text-white" },
    { name: "Redux", icon: TbBrandRedux, color: "text-purple-500" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: IoLogoCss3, color: "text-blue-600" },
];

export function Skills() {
    return (
        <section id="skills" className="w-full flex flex-col items-center text-zinc-100">
            <h2 className="font-bold text-xl md:text-2xl text-center mb-8" data-aos="fade-up">
                EXPERIÊNCIA COM
            </h2>

            <div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                {skillsList.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                        <div 
                            key={idx} 
                            className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition"
                        >
                            <Icon size={32} className={`${skill.color} mb-2`} />
                            <span className="text-xs font-medium text-zinc-300">{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
