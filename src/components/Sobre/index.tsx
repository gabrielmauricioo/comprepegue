import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { Title } from "../Title";
import { Badge } from "../ui/badge";

export function Sobre(){
  return(
    <section className="flex mt-32 mb-20">
      <GridContainer>
        <div className="flex flex-col">
          {/* Foto e Sobre*/}
          <div className="flex flex-col-reverse xl:flex-row  justify-between">
            {/* Foto */}
            <Image
              src="/brunnosobre6.webp"
              width={460}
              height={400}
              alt="Foto do bruno Machado"
              className="pt-12"
              
            />
            {/* Sobre*/}
            <div className="place-items-center xl:place-items-start text-center xl:text-left">
              <Title
                texto="ME CONHEÇA MELHOR"
                
              />
              <h2 className="xl:text-[36px] text-[32px] mb-3 mt-6">Muito Prazer,<br/> 
              Bruno Machado</h2>
              <span className="text-[16px] font-medium xl:font-normal ">CRP 08/39365</span>
              <div className="w-full max-w-[579px] mt-3">
              <p className="leading-[140%] mb-2 text-sm">Olá, eu sou o <span className="font-medium">Psicólogo Bruno Machado</span> e estou aqui para te ajudar na busca do seu processo de autoconhecimento e estabilidade emocional. Aqui você possui um espaço seguro e acolhedor para que você possa explorar seus sentimentos, compreender suas dificuldades e encontrar caminhos para uma vida mais leve e significativa.</p>
              <p className="leading-[140%] mb-2 text-sm">Sou especialista em <span className="font-medium">Neuropsicologia, Terapia Cognitivo-Comportamental (TCC), Abordagem Centrada na Pessoa, Coaching e Psicologia Clínica.</span> Minha missão é ajudar pessoas a superarem desafios emocionais, alcançarem autoconhecimento e viverem de forma mais equilibrada e significativa.</p>
              <p className="leading-[140%] mb-2 text-sm">Durante minha trajetória, desenvolvi uma abordagem com escuta analítica integrada, que une técnicas científicas e um olhar humanizado, sempre adaptado às necessidades únicas de cada pessoa. Seja para lidar com ansiedade, estresse, depressão ou para promover desenvolvimento pessoal.</p>

              <p className="w-full max-w-[518px] leading-[140%] text-sm">Acredito que cada jornada é única e que, com o suporte certo, é possível transformar desafios em oportunidades de crescimento. <span className="font-medium">Vamos começar essa jornada juntos?</span></p>
            </div>
            
            </div>

          </div>
          {/* icones */}
          <div className="flex flex-col sm:flex-row place-items-center justify-center gap-6 sm:gap-10 xl:mt-20 mt-16">
            <Badge className="xl:w-[257px] w-[230px] h-[46px] bg-blue-light rounded-2xl gap-2 flex justify-center">
              <Image
                src="/safe-icon.svg"
                width={22}
                height={22}
                alt="icone"
                className="xl:w-[24px]"
              />
              <p className="text-black font-normal text-base">AMBIENTE SEGURO</p>
            </Badge>
            <Badge className="xl:w-[257px] w-[230px] h-[46px] bg-blue-light rounded-2xl gap-2 flex justify-center">
              <Image
                src="/rede-icon.svg"
                width={24}
                height={24}
                alt="icone"
                className="xl:w-[24px]"
              />
              <p className="text-black font-normal text-base">100% ONLINE</p>
            </Badge>
            <Badge className="xl:w-[257px] w-[230px] h-[46px] bg-blue-light rounded-2xl gap-2 flex justify-center">
              <Image
                src="/time-icon.svg"
                width={24}
                height={24}
                alt="icone"
                className="xl:w-[24px]"
              />
              <p className="text-black font-normal text-base">SESSÃO DE 50 MIN</p>
            </Badge>
            
          </div>
        </div>

      </GridContainer>
    

    </section>
   
  )
}