import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

export function Hero() {
  const phoneNumber = "+554196932816";
  const message = "Olá Psicólogo Bruno Machado, gostaria de agendar uma consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="xl:mt-40 mt-20" id="home">
      <GridContainer>
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between">
          <div className="w-full xl:max-w-[708px] xl:mx-0 mx-auto flex flex-col items-center xl:items-start text-center xl:text-left">
            {/* Centralizar Badge */}
            <Badge className="bg-blue-light text-black xl:px-20 xl:py-2 rounded-2xl text-[18px]  font-semibold mb-6 px-8">
              <span className="text-blue-dark pr-2">Psicólogo</span>Bruno
            </Badge>
            
            {/* Título e Descrição */}
            <h1 className="xl:text-[42px] text-[30px] leading-[120%] mb-4">
              Transforme Sua Vida com Apoio Psicológico Personalizado
            </h1>
            <h4 className="w-full max-w-[637px] xl:text-[22px] leading-[140%] mb-4">
              Liberte-se da ansiedade e conquiste uma vida plena. Aprenda a superar pensamentos negativos, fortaleça sua capacidade de resolver problemas e eleve sua autoestima merecida.
            </h4>
            
            {/* Centralizar Button */}
            <Link href={whatsappLink} passHref>
              <Button className="flex xl:text-[20px] text-sm bg-blue-light text-black xl:px-9 xl:py-6 rounded-2xl gap-2 hover:bg-grey-dark transition-colors">
                Descubra como a terapia pode mudar sua vida
                <Image
                  src="/whats-icon.svg"
                  width={16}
                  height={16}
                  alt="Icone whatsapp"
                  className="xl:w-[24px]"
                />
              </Button>
            </Link>
          </div>
          
          {/* Imagem */}
          <Image
            src="/brunohero03.webp"
            height={700}
            width={380}
            alt="Foto do Bruno Machado"
            className="xl:pt-8 pt-12 mr-10 xl:mx-auto"
          />
        </div>
      </GridContainer>
    </section>
  );
}
