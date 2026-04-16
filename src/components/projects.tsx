import { CardProject } from "./ui/card-project";
import MarcosDev from "@/assets/marcos_dev.jpeg";
import Paxumo from "@/assets/paxumo.png";
import Totem from "@/assets/totem.png";
export function Projects() {
    return (
        <div id="projetos" className="w-full text-foreground flex flex-col items-center mt-10 landscape:mt-8">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">PROJETOS</h1>
            <span className="text-xs mt-2 md:text-sm lg:text-lg">Não posso expor o código fonte!</span>
            <div className="w-full flex flex-col gap-5 items-center justify-center mt-5">
                <CardProject
                    src={Paxumo}
                    title="Paxumo - PDV"
                    description="Uma plataforma de PDV integrada a um gateway de pagamentos, onde o dono cria contas para seus clientes com credenciais de recebimento, os clientes gerenciam vendedores, e cada venda realizada já é automaticamente direcionada para a conta do cliente."
                    linkProject="https://paxumo-pdv.vercel.app/"
                />
                <CardProject
                    src={Totem}
                    title="Totem"
                    description="Um totem de atendimento com interface intuitiva e funcionalidades avançadas e painel administrativo."
                    linkProject="https://self-checkout-2-admin.vercel.app/"
                />
            </div>
            <span className="text-xs mt-5 md:text-sm lg:text-lg">Já desenvolvi mais projetos!</span>
        </div>
    );
}