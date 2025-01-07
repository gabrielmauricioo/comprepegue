import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Title } from "../Title";
import { ItemFunciona } from "./ItemFunciona";
import { Button } from "../ui/button";
import Link from "next/link";

export function Funciona() {
  const phoneNumber = "+554196932816";
  const message = "Olá Psicólogo Bruno Machado, gostaria de agendar uma consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="mt-16 bg-grey-light flex flex-col px-4 sm:px-0">
      <GridContainer>
        {/* Titulo */}
        <div className="flex flex-col items-center justify-center mt-16 sm:mt-32">
          <Title texto="COMO FUNCIONA?" />
          <h3 className="text-[18px] sm:text-[22px] text-center leading-[140%] w-full max-w-[531px] mt-6 mb-10">
            Seu progresso é o meu compromisso, e cada passo é <span className="font-medium">pensado para você!</span>
          </h3>
        </div>

        {/* Passos */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 xl:mb-20 mb-10 place-items-center">
          <ItemFunciona
            passo="Passo 1"
            titulo="Conhecimento Inicial"
            texto="No primeiro passo, vamos nos conhecer melhor. Iremos agendar uma sessão inicial onde você pode compartilhar suas preocupações e objetivos. Esta é a base para entender suas necessidades específicas e planejar o melhor caminho a seguir."
            url="/pass1.png"
            alt="foto"
          />
          <ItemFunciona
            passo="Passo 2"
            titulo="Planejamento Personalizado"
            texto="Com base na nossa conversa inicial, desenvolvemos um plano de ação personalizado. Esse plano inclui a definição de metas, a frequência das sessões e as técnicas terapêuticas que serão utilizadas para ajudar você a alcançar seus objetivos."
            url="/pass2.png"
            alt="foto"
          />
          <ItemFunciona
            passo="Passo 3"
            titulo="Sessões Regulares"
            texto="Agora é hora de começar o trabalho prático. Realizamos sessões regulares, onde trabalhamos juntos para superar desafios, desenvolver novas habilidades e promover o seu bem-estar emocional. O progresso é continuamente monitorado e o plano ajustado conforme necessário."
            url="/pass3.png"
            alt="foto"
          />
        </div>

        <div className="flex justify-center items-center mb-20">
          <Link href={whatsappLink} passHref>
            <Button className="flex text-[16px] bg-blue-light text-black px-5 py-5 rounded-xl gap-2">
              QUERO AGENDAR UM HORÁRIO
              <Image src="/whats-icon.svg" width={24} height={24} alt="Ícone WhatsApp" />
            </Button>
          </Link>
        </div>
      </GridContainer>
    </section>
  );
}
