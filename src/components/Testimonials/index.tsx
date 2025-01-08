import { GridContainer } from "../GridContainer";
import { Title } from "../Title";
import { ItemTestimonials } from "./ItemTestimonials";

export function Testimonials() {
  return (
    <section id="depoimentos">
      <GridContainer>
        {/* Título */}
        <div className="flex flex-col items-center justify-center mt-40">
          <Title texto="RESULTADOS REAIS" />
          <h3 className="text-[18px] sm:text-[22px] text-center leading-[140%] w-full max-w-[669px] mt-8 mb-10">
            Depoimentos de quem encontrou{" "}
            <span className="font-medium">acolhimento e resultados</span> através dos atendimentos
          </h3>
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center items-center xl:mt-10 mb-24 gap-y-10 gap-x-6 sm:gap-x-12 xl:gap-x-20">
          <ItemTestimonials
            text1="“O psicólogo Bruno Machado foi essencial na minha jornada de autoconhecimento."
            text2="Consegui me reconectar comigo mesmo, compreender melhor meus sentimentos e enxergar minhas potencialidades!”"
            testimonial="Daniel Lopes, 30 anos"
          />
          <ItemTestimonials
            text1="“A abordagem dela é incrível! Em pouco tempo, percebi mudanças significativas no meu bem-estar emocional."
            text2="O plano personalizado que ela criou para mim foi essencial para eu alcançar meus objetivos.”"
            testimonial="Lucas Mattos, 28 anos"
          />
          <ItemTestimonials
            text1="“Nunca pensei que a terapia on-line pudesse ser tão eficaz. Ela conseguiu criar um ambiente acolhedor e seguro, mesmo à distância."
            text2="Sinto que estou finalmente no controle da minha vida.”"
            testimonial="Ana Paula, 40 anos"
          />
        </div>
      </GridContainer>
    </section>
  );
}
