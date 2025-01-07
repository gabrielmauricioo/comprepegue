import { GridContainer } from "../GridContainer";
import { Title } from "../Title";
import { ItemBenefits } from "./ItemBenefits";

export function Benefits() {
  return (
    <section className="xl:mt-40 mt-24 bg-grey-light flex flex-col">
      <GridContainer>
        {/* Título */}
        <div className="flex flex-col items-center justify-center mt-32">
          <Title texto="É PARA VOCÊ?" />
          <h3 className="text-[22px] text-center leading-[140%] w-full max-w-[586px] mt-10">
            Se você sofre com dificuldades em algumas dessas áreas,{" "}
            <span className="font-medium">eu posso te ajudar!</span>
          </h3>
        </div>

        {/* Grid Responsivo */}
        <div className="grid  place-items-center justify-center mb-20 gap-y-12 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {/* Itens da Primeira Linha */}
          <ItemBenefits
            url="/depression-icon.svg"
            titulo="Depressão"
            description="Vive com tristeza persistente e perda de interesse em atividades do dia a dia."
            dialogTitle="Depressão"
            dialogDescription=" A depressão é uma condição emocional que pode impactar profundamente o bem-estar e a qualidade de vida. Ela se manifesta como tristeza persistente, falta de energia, perda de interesse em atividades antes prazerosas e, muitas vezes, dificuldades em lidar com as tarefas do dia a dia. Por meio da terapia, é possível identificar as causas, compreender os sintomas e encontrar caminhos para a recuperação e o equilíbrio emocional."
          />
          <ItemBenefits
            url="/ansiedade-icon.svg"
            titulo="Ansiedade"
            description="Se preocupa com o futuro e tem dificuldade em relaxar até nos momentos de lazer."
            dialogTitle="Ansiedade"
            dialogDescription=" A ansiedade é uma resposta natural ao estresse, mas, quando constante, pode se tornar um obstáculo para viver plenamente. Ela se caracteriza por preocupações excessivas, dificuldade em relaxar e sintomas físicos como tensão muscular e aceleração dos batimentos cardíacos. A terapia ajuda a entender os gatilhos, desenvolver estratégias de enfrentamento e promover uma vida mais tranquila."
          />
          <ItemBenefits
            url="/burnot-icon.svg"
            titulo="Burnout"
            description="Sente exaustão física e mental devido ao excesso de trabalho e pressão constante."
            dialogTitle="Burnout"
            dialogDescription=" O burnout, ou síndrome do esgotamento profissional, é resultado de um estresse crônico relacionado ao trabalho. Ele causa exaustão física e mental, sensação de incapacidade e até desmotivação. Com a ajuda da terapia, é possível aprender a gerenciar o estresse, recuperar a energia e estabelecer limites saudáveis no ambiente profissional."
          />

          {/* Itens da Segunda Linha */}
          <ItemBenefits
            url="/autismo-icon.svg"
            titulo="Autismo"
            description="Enfrenta desafios na comunicação e interação social, com foco em interesses específicos."
            dialogTitle="Autismo"
            dialogDescription=" O Transtorno do Espectro Autista (TEA) afeta a comunicação, a interação social e pode incluir interesses intensos em temas específicos. Cada pessoa com autismo tem suas próprias características e desafios únicos. O acompanhamento terapêutico busca fortalecer habilidades sociais, emocionais e comportamentais, promovendo inclusão e bem-estar."
          />
          <ItemBenefits
            url="/borderline-icon.svg"
            titulo="Borderline"
            description="Lida com emoções intensas e dificuldade em manter relacionamentos estáveis."
            dialogTitle="Borderline"
            dialogDescription=" O Transtorno de Personalidade Borderline é caracterizado por emoções intensas, impulsividade e dificuldade em manter relacionamentos estáveis. É comum que as pessoas com esse transtorno enfrentem altos e baixos emocionais que afetam sua vida diária. A terapia oferece suporte para gerenciar emoções, fortalecer relacionamentos e criar estabilidade emocional."
          />
          <ItemBenefits
            url="/coach-icon.svg"
            titulo="Coach de Carreira"
            description="Busca orientação para superar desafios profissionais e alcançar seus objetivos."
            dialogTitle="Coach de Carreira"
            dialogDescription=" O coaching de carreira é uma abordagem focada no desenvolvimento profissional. Ele ajuda a identificar seus objetivos, superar barreiras e criar estratégias para alcançar o sucesso. Com orientação personalizada, você pode construir um plano de ação que alinha suas habilidades, valores e ambições com o mercado de trabalho."
          />
        </div>
      </GridContainer>
    </section>
  );
}
