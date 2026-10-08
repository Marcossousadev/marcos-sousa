import { FaBriefcase, FaCreditCard, FaTicketSimple } from "react-icons/fa6";

  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Gateway de Pagamentos",
      period: "Atuação Profissional",
      icon: FaCreditCard,
      badgeColor: "from-blue-600 to-cyan-500",
      description:
        "Atuação no desenvolvimento e evolução de ecossistema de pagamentos digitais, abrangendo a plataforma de back-office administrativo, APIs financeiras de alta concorrência e interfaces de usuário.",
      highlights: [
        "Desenvolvimento e manutenção do sistema de Back-Office utilizando HTML, CSS e Laravel.",
        "Manutenção da API de Pagamentos com Node.js, assegurando segurança e estabilidade nas transações.",
        "Desenvolvimento da interface de usuário (Front-end) utilizando React com foco em usabilidade e performance."
      ],
      skills: ["Laravel", "Node.js", "React", "HTML5", "CSS3", "API de Pagamentos"]
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Plataformas de Raspadinhas Online",
      period: "Atuação Freelance / Projetos",
      icon: FaTicketSimple,
      badgeColor: "from-purple-600 to-blue-500",
      description:
        "Desenvolvimento de soluções completas para plataformas de raspadinhas online, com foco em lógica de negócios, dinamismo e experiência interativa em tempo real.",
      highlights: [
        "Criação da interface de usuário altamente responsiva e interativa utilizando React.",
        "Construção da lógica de backend, gerenciamento de estado e regras de negócio com Laravel."
      ],
      skills: ["React", "Laravel", "HTML/CSS", "Regras de Negócio"]
    }
  ];
  
export function Experience() {
  return (
    <section id="experiencia" className="w-full flex flex-col items-center text-zinc-100">
      <h2 className="font-bold text-xl md:text-2xl text-center mb-1 flex items-center gap-2" data-aos="fade-up">
        EXPERIÊNCIA PROFISSIONAL
      </h2>
      <p className="text-xs text-zinc-400 mb-8 text-center" data-aos="fade-up" data-aos-delay="100">
        Trajetória de trabalho em empresas e projetos relevantes
      </p>

      <div className="w-full flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
        {experiences.map((exp, idx) => {
          const Icon = exp.icon;
          return (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition shadow-lg flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.badgeColor} text-white shadow-md`}>
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-sm font-medium text-blue-400">{exp.company}</p>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 font-medium self-start sm:self-center">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              <ul className="flex flex-col gap-2 my-1">
                {exp.highlights.map((highlight, itemIdx) => (
                  <li key={itemIdx} className="text-xs md:text-sm text-zinc-400 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
