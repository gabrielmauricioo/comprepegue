import { GridContainer } from "../GridContainer";
import { Title } from "../Title";
import { ItemQuestions } from "./ItemQuestions";


export function Questions(){
  return(
    <section className="mt-40">
      <GridContainer>
        <div className="flex flex-col items-center justify-center mb-20">
          <Title
            texto="TIRE SUAS DÚVIDAS"
          />
          <h3 className="text-[22px] text-center leading-[140%] w-full max-w-[586px] mt-10">Veja as perguntas mais frequentes!</h3>
        </div>
        <div className="w-full max-w-xl md:max-w-3xl mx-auto divide-y divide-gray-200 px-4">
          <ItemQuestions
            title="Como funciona o atendimento?"
            response="O atendimento funciona de forma online, com encontros semanais de duração média 50 minutos e dia de atendimentos horários fixo."
          />
          <ItemQuestions
            title="O atendimento é presencial ou online?"
            response="Atualmente, o atendimento é realizado de forma online, proporcionando mais conforto e flexibilidade para você. Dessa forma, você pode participar das sessões no ambiente que preferir, sem a necessidade de deslocamento."
          />
          <ItemQuestions
            title="Como agendar minha primeira sessão?"
            response="Para agendar sua primeira sessão, basta entrar em contato  através do WhatsApp. Durante o agendamento, definiremos o melhor dia e horário para você, além de esclarecer qualquer dúvida que possa ter."
          />
          <ItemQuestions
            title="Quais são as patologias que vocês atendem?"
            response='Atendo uma ampla variedade de questões emocionais e comportamentais, incluindo depressão, ansiedade, síndrome de burnout, transtorno de personalidade borderline, dificuldades relacionadas ao autismo, e também ofereço coaching de carreira. O meu objetivo é atender às suas necessidades específicas com empatia e profissionalismo.'
/>
          <ItemQuestions
            title="Como o progresso é acompanhado?"
            response="O progresso é acompanhado de forma contínua durante as sessões. Utilizamos ferramentas e técnicas personalizadas para monitorar sua evolução, identificando avanços e ajustando a abordagem terapêutica conforme necessário. Além disso, revisamos periodicamente os objetivos estabelecidos para garantir que você esteja no caminho certo."
          />
        </div>
      </GridContainer>
    </section>
  )
}
