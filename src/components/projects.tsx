import { CardProject } from "./ui/card-project";
import Paxumo from "@/assets/paxumo.png";
import Totem from "@/assets/totem.png";
import Busca from "@/assets/busca_img.png";
import FitPro from "@/assets/fitpro.png";
import JavaCRUD from "@/assets/javaCrud.png";

export function Projects() {
    return (
        <section id="projetos" className="w-full flex flex-col items-center text-zinc-100">
            <h2 className="font-bold text-xl md:text-2xl text-center mb-1" data-aos="fade-up">
                PROJETOS
            </h2>
            <p className="text-xs text-zinc-400 mb-8 text-center" data-aos="fade-up" data-aos-delay="100">
                Alguns dos projetos que desenvolvi
            </p>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <CardProject
                    src={Paxumo}
                    title="Paxumo - PDV"
                    description="Uma plataforma de PDV integrada a gateway de pagamentos com credenciais de recebimento personalizadas, onde cada venda é direcionada automaticamente para a conta do cliente."
                    tags={["Next.js", "Node.js", "Gateway de Pagamentos", "Tailwind CSS"]}
                    linkProject="https://paxumo-pdv.vercel.app/"
                />
                <CardProject
                    src={Totem}
                    title="Totem de Autoatendimento"
                    description="Um totem de atendimento com interface intuitiva para clientes e painel administrativo para gerenciamento de solicitações."
                    tags={["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL"]}
                    linkProject="https://self-checkout-2-admin.vercel.app/"
                    linkProjectTwo="https://self-checkout-2-web-g3zd.vercel.app/"
                />
                <CardProject
                    src={Busca}
                    title="Busca de Processos"
                    description="Automação para busca de processos por CPF e CNPJ, com suporte a cadastro em lote de documentos e consultas automatizadas."
                    tags={["Nodejs", "Automação", "Processamento em Lote", "Next.js", "postgreSQL", "Tailwind CSS"]}
                />
                <CardProject
                    src={FitPro}
                    title="FitPro"
                    description="Aplicativo de gestão e acompanhamento fitness que conecta personal trainers e alunos, facilitando treinos e evolução."
                    tags={["React Native", "TypeScript", "StyleSheets", "Nodejs/Fastify", "postgreSQL", "Tailwind CSS"]}
                    linkProject="https://www.instagram.com/fit_proia/"
                />
                <CardProject
                    src={JavaCRUD}
                    title="CRUD Java"
                    description="CRUD Java de cadastro de alunos, estudo!"
                    tags={["Java", "Spring Boot", "H2 Database", "Maven", "JPA"]}
                    linkProject="https://github.com/Marcossousadev/projeto-cadastro-usuarios.git"
                />
            </div>
            
            <span className="text-xs text-zinc-400 mt-8 text-center" data-aos="fade-up">
                Já desenvolvi diversos outros projetos em ambiente corporativo e freelance!
            </span>
        </section>
    );
}

