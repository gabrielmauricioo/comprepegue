import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Button } from "../ui/button";
import Link from "next/link";

export function Agendar(){
  const phoneNumber = "+554196932816";
  const message = "Olá Psicólogo Bruno Machado, gostaria de agendar uma consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return(
    <section className="mt-40 bg-grey-light">
      <GridContainer>
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center gap-x-20 pt-16">
          <Image
            src="/phone-mockup.png"
            width={274}
            height={410}
            alt="Conversa do Whatsapp"
            className="ml-4 mx-0"
          />
          <div className="pt-4 place-items-center xl:place-items-start">
            <h3 className="w-full max-w-[419px] leading-[140%] text-[22px] mb-4 text-center xl:text-left">Agende sua consulta agora mesmo pelo botão abaixo!</h3>
            <p className="w-full max-w-[419px] leading-[140%] mb-8 text-center xl:text-left">Meu atendimento é 100% on-line, garantindo praticidade e conforto para você. Todas as sessões são realizadas de forma segura e personalizada, sempre priorizando o seu bem-estar.</p>
            <Link href={whatsappLink} passHref >
              <Button className=" flex text-[16px] bg-blue-light text-black px-5 py-5 rounded-xl gap-2 mb-8 xl:my-0">
              AGENDAR CONSULTA
              <Image
                src="/whats-icon.svg"
                width={24}
                height={24}
                alt="Icone whatsapp"
              />
             </Button>
        </Link>
          </div>

        </div>
        
      </GridContainer>
    </section>
  )
}