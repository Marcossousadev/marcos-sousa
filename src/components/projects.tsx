import { CardProject } from "./ui/card-project";
import Paxumo from "@/assets/paxumo.png";
import Totem from "@/assets/totem.png";
import Busca from "@/assets/busca_img.png";
import FitPro from "@/assets/fitpro.png";
import JavaCRUD from "@/assets/javaCrud.png";

const projects = [
    {
        src: Paxumo,
        title: "Paxumo - PDV",
        description:
            "Uma plataforma de PDV integrada a gateway de pagamentos com credenciais de recebimento personalizadas, onde cada venda é direcionada automaticamente para a conta do cliente.",
        tags: ["Next.js", "Node.js", "Gateway de Pagamentos", "Tailwind CSS"],
        linkProject: "https://paxumo-pdv.vercel.app/",
    },
    {
        src: Totem,
        title: "Totem de Autoatendimento",
        description:
            "Um totem de atendimento com interface intuitiva para clientes e painel administrativo para gerenciamento de solicitações.",
        tags: ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL"],
        linkProject: "https://self-checkout-2-admin.vercel.app/",
        linkProjectTwo: "https://self-checkout-2-web-g3zd.vercel.app/",
    },
    {
        src: Busca,
        title: "Busca de Processos",
        description:
            "Automação para busca de processos por CPF e CNPJ, com suporte a cadastro em lote de documentos e consultas automatizadas.",
        tags: [
            "Node.js",
            "Automação",
            "Processamento em Lote",
            "Next.js",
            "PostgreSQL",
            "Tailwind CSS",
        ],
    },
    {
        src: FitPro,
        title: "FitPro",
        description:
            "Aplicativo de gestão e acompanhamento fitness que conecta personal trainers e alunos, facilitando treinos e evolução.",
        tags: [
            "React Native",
            "TypeScript",
            "StyleSheets",
            "Node.js/Fastify",
            "PostgreSQL",
            "Tailwind CSS",
        ],
        linkProject: "https://www.instagram.com/fit_proia/",
    },
    {
        src: JavaCRUD,
        title: "CRUD Java",
        description:
            "CRUD em Java desenvolvido como projeto de estudo para praticar operações de persistência de dados.",
        tags: ["Java", "Spring Boot", "H2 Database", "Maven", "JPA"],
        linkProject:
            "https://github.com/Marcossousadev/projeto-cadastro-usuarios.git",
    },
];

export function Projects() {
    return (
        <section
            id="projetos"
            className="flex w-full flex-col items-center text-zinc-100"
        >
            <h2 className="mb-1 text-center text-xl font-bold md:text-2xl">
                PROJETOS
            </h2>

            <p className="mb-8 text-center text-xs text-zinc-400">
                Alguns dos projetos que desenvolvi
            </p>

            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <CardProject
                        key={project.title}
                        {...project}
                    />
                ))}
            </div>

            <span className="mt-8 text-center text-xs text-zinc-400">
                Já desenvolvi diversos outros projetos em ambiente corporativo
                e freelance!
            </span>
        </section>
    );
}