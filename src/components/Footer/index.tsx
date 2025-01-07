import Link from "next/link";
import { GridContainer } from "../GridContainer";
import Image from "next/image";

export function Footer(){
  const phoneNumber = "+554196932816";
  const message = "Olá Psicólogo Bruno Machado, gostaria de agendar uma consulta!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return(
    <section className="bg-[#EBEEEF] mt-12 pt-12 xl:pb-20 pb-14 ">
      <GridContainer>
          <div className="flex xl:flex-row flex-col justify-between items-center ">
            <div className=" flex xl:flex-col gap-5">
              <Image
                src="/logo-footer.svg"
                width={136}
                height={115}
                alt="Logo Psicólogo Bruno Machado"
                className="mb-"

              />
            <div className="flex flex-col xl:flex-row justify-between items-start mt-4">
              <div className=" flex flex-col gap-y-3 xl:mb-0 mb-8" >
                <Link href="https://www.instagram.com/brunomestr/?igsh=MWpqdWkwZjZsbnM1dQ%3D%3D" >
                  <div className="flex flex-row gap-x-2 mt-1">
                    <Image
                      src="insta-icon.svg"
                      width={22}
                      height={22}
                      alt="Instagram logo"
                      className="xl:w-[27px]"
                    />
                    <p className="xl:text-base text-sm">
                      @brunomestr
                    </p>
                    </div>
                </Link>
                <Link href={whatsappLink} passHref >
                  <div className="flex flex-row gap-x-2 mt-1">
                  <Image
                    src="/whats-icon.svg"
                    width={22}
                    height={22}
                    alt="WhatsApp logo"
                    className="xl:w-[27px]"
                  />
                  <p className="xl:text-base text-sm">
                    (41) 9693-2816
                  </p>
                  </div>
                </Link>
                 <Link href="" >
                  <div className="flex flex-row gap-x-2 mt-1">
                  <Image
                    src="/email-icon.svg"
                    width={22}
                    height={22}
                    alt="Email icon"
                    className="xl:w-[27px]"
                  />
                  <p className="xl:text-base text-sm">
                    bgm-m@hotmail.com 
                  </p>
                  </div>
                </Link>
                </div>
              </div>
              </div>
              <div className="w-full max-w-[625px] xl:mt-36  text-center xl:text-left">
                <p className="mb-2">O atendimento online não é recomendado para pessoas em situação de violência, violação de direitos ou emergências. </p>
                <p className="" >
                  Em caso de crise suicida ligue para <span className="font-medium">188 (CVV)</span> ou
                  acesse o site{" "}
                  <span className="font-medium">
                    <Link href="https://cvv.org.br/">www.cvv.org.br.</Link>
                  </span>{" "}
                  E, em caso de emergência, procure atendimento em um hospital mais
                  próximo.
              </p>
              </div>
            </div>
      </GridContainer>
    </section>
  )
}