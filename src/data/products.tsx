export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  oldPrice?: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 16,
    name: "TV LED 32 Polegadas - Samsung!",
    brand: "Qualidade de Imagem Incrível",
    price: "R$ 450",
    oldPrice: "R$ 650",
    image: "/tv2.png",
     description:"TV LED de 32 polegadas em excelente estado de conservação. Imagem nítida e cores vibrantes para você aproveitar seus filmes, séries e programas favoritos com a melhor qualidade. Ideal para salas de estar, quartos e áreas de lazer.",
     features: [
      "Funcionando perfeitamente",
      "Controle remoto incluso.",
      "Conexões HDMI e USB para conectar seus dispositivos.",
      "Capacidade ampliada – Suporta grandes volumes de preparo.",
    ],
  },
  {
    id: 1,
    name: "Mesa com 4 Cadeiras de Madeira",
    brand: "Transforme sua sala",
    price: "R$ 300,00",
    oldPrice: "R$ 360,00",
    image: "/mesa1.png",
    description:"Mesa de jantar para sua sala",
    features: [
      "Mesa resistente com tampo branco",
      "Acompanha 4 cadeiras de madeira",
      "Ótima para cozinha, sala de jantar ou área gourmet",
      "Qualidade para sua casa",
    ],
  },
  {
    id: 2,
    name: "Vaso Sanitário Branco",
    brand: "Durabilidade e conforto",
    price: "R$ 120,00",
    image: "/vaso.png",
     description:"O Vaso Sanitário Branco é a escolha perfeita para quem busca durabilidade e conforto para o banheiro. Feito em cerâmica resistente, seu design moderno se adapta a diversos ambientes, proporcionando um visual elegante e funcionalidade eficiente.",
     features: [
      "Resistente e durável – Material de alta qualidade para longa vida útil.",
      "Design moderno – Estilo clean que combina com qualquer banheiro.",
      "Confortável e prático – Assento ergonômico para maior comodidade.",
      "Fácil instalação – Perfeito para reformas e novos projetos.",
    ],
  },
  {
    id: 3,
    name: "Abajur Clássico com Cúpula",
    brand: "Elegância e Luz para o Seu Ambiente!",
    price: "R$ 35,00",
    image: "/abajur1.png",
     description:"Ilumine e decore seu espaço com este abajur clássico, perfeito para adicionar um toque de sofisticação e aconchego. Ideal para salas, quartos e escritórios!",
     features: [
      "Design elegante e atemporal.",
      "Cúpula em tecido que proporciona luz suave e agradável.",
      "Base robusta e charmosa.",
      "Perfeito para criar um ambiente acolhedor.",
    ],
  },
  {
    id: 4,
    name: "Galão de 60 Litros",
    brand: "Resistente e Versátil!",
    price: "R$ 60,00",
    image: "/galao.png",
     description:"O galão plástico de 60 litros é ideal para armazenar líquidos, ração, grãos e diversos materiais com segurança e praticidade. Perfeito para indústrias, comércios, fazendas e até uso doméstico!",
     features: [
      "Alta capacidade – Armazene até 60 litros.",
      "Material resistente – Plástico reforçado para maior durabilidade.",
      "Tampa segura – Fechamento eficiente para evitar vazamentos.",
      "Alças laterais – Facilita o transporte e manuseio.",
    ],
  },
  {
    id: 5,
    name: "📺 TV Philips 32 polegadas",
    brand: "32 polegadas",
    price: "R$ 250,00",
    image: "/tv.png",
     description:"Leve entretenimento e tecnologia para sua casa com a TV Philips de 32 polegadas. Ideal para salas e ambientes compactos, oferece uma experiência de imagem incrível!",
     features: [
      "Tela HD",
      "Design Elegante – Combina com qualquer ambiente.",
      "Entradas HDMI e USB – Conecte dispositivos com facilidade.",
      "Economia de Energia – Eficiência energética garantida.",
    ],
  },
  {
    id: 6,
    name: "Secador Cabelo",
    brand: "Marca Mondial",
    price: "R$ 35,00",
    oldPrice: "R$ 40,00",
    image: "/secador.png",
     description:"gabriel",
     features: [
      "Potente e rápido – Ideal para secagem ágil e eficiente.",
      "Design ergonômico – Fácil de segurar e manusear.",
      "Leve e compacto – Perfeito para o dia a dia e viagens.",
      "Marca de confiança – Qualidade garantida pela Mondial.",
    ],
  },
  {
    id: 7,
    name: "Mesa Retangular Branca",
    brand: "Perfeita para o seu espaço",
    price: "R$ 400",
    oldPrice: "R$ 300",
    image: "/mesa2.png",
     description:"Ótima para sala de jantar, escritório ou área de lazer!",
     features: [
      "Tampo branco de alta resistência",
      "Estrutura firme e durável",
      "Design moderno que combina com qualquer ambiente",
      "Mesa para 6 pessoas",
    ],
  },
  {
    id: 15,
    name: "Abajur Quadrado com Base em Metal",
    brand: "Design Moderno e Sofisticado para Iluminar Seu Espaço! ",
    price: "R$ 35",
    image: "/abajur2.png",
     description:"Adicione um toque de elegância contemporânea à sua casa com este abajur de design único. Perfeito para salas de estar, quartos ou escritórios, ele combina funcionalidade com um estilo moderno e minimalista.",
     features: [
      "Design quadrado moderno e elegante.",
      "Base em metal resistente com acabamento sofisticado.",
      "Cúpula em tecido texturizado que proporciona uma luz suave e aconchegante.",
      "Ideal para criar um ambiente contemporâneo e convidativo.",
    ],
  },
  {
    id: 8,
    name: "Mesa de Plástico Pequena",
    brand: "Perfeita para o seu espaço",
    price: "R$ 40",
    oldPrice: "R$ 50",
    image: "/mesap.png",
     description:"Esta mesa de plástico branca é a solução perfeita para quem busca praticidade e versatilidade. Leve, resistente e fácil de limpar, ela se adapta a diferentes espaços, seja em casa, no jardim ou em eventos.",
     features: [
      "Design simples e funcional.",
      "Material resistente e durável.",
      "Leve e fácil de transportar.",
      "Ideal para uso interno e externo.",
    ],
  },
  {
    id: 9,
    name: "Mesa + 4 Cadeiras de Plástico",
    brand: "Perfeitas para o seu ambiente",
    price: "R$ 270",
    image: "/mesaplastico.png",
     description:"gabriel",
     features: [
      "Resistentes e leves",
      "Perfeitas para áreas externas e internas",
      "Fácil de limpar e transportar",
      "Ótima para bares, restaurantes ou jardim",
    ],
  },
  {
    id: 10,
    name: "Mesa Bistrô Redonda",
    brand: "Elegante e versátil",
    price: "R$ 250",
    oldPrice: "R$ 180",
    image: "/mesapreta.png",
     description:"A Mesa Bistrô Redonda com base preta e tampo de granito é a escolha perfeita para quem busca sofisticação e durabilidade na decoração. Seu design moderno e compacto a torna ideal para diversos ambientes, como cozinhas, varandas e áreas gourmet.",
     features: [
      "Elegante e versátil – Combina com qualquer ambiente.",
      "Base resistente – Estrutura metálica robusta e durável.",
      "Fácil de limpar – Superfície de granito que facilita a manutenção.",
      "Ideal para pequenos espaços – Compacta e funcional.",
    ],
  },
  {
    id: 11,
    name: "Janela de Correr de Vidro ",
    brand: "Luminosidade e Privacidade para o Seu Ambiente",
    price: "R$ 400",
    oldPrice: "R$ 600",
    image: "/janela.png",
     description:"Esta janela de correr combina funcionalidade e estilo, ideal para quem busca luminosidade e privacidade. O design moderno e o acabamento em alumínio garantem durabilidade e sofisticação para o seu espaço.",
     features: [
      "Sistema de correr suave e eficiente.",
      "Design moderno e elegante.",
      "Estrutura resistente.",
      "Vidro fosco para maior privacidade.",
    ],
  },  
  {
    id: 12,
    name: "Mesa Cinza com Tampo de Granito",
    brand: "Tampo de granito de alta qualidade",
    price: "R$ 200",
    oldPrice: "R$ 280",
    image: "/mesacinza2.png",
     description:"A Mesa Redonda Cinza é perfeita para quem busca sofisticação e praticidade. Seu tampo de granito confere resistência e elegância, enquanto a base metálica garante estabilidade. Ideal para salas de jantar, varandas e áreas gourmet.",
     features: [
      "Durável e resistente – Tampo de granito de alta qualidade",
      "esign ergonômico – Fácil de segurar e manusear.",
      "Fácil de limpar – Superfície lisa que facilita a manutenção",
      "Compacta e versátil – Ideal para pequenos espaços.",
    ],
  },
  {
    id: 13,
    name: "Ar-Condicionado 12.000 BTUs",
    brand: "Segtron",
    price: "R$ 600",
    oldPrice: "R$ 850",
    image: "/arcondiconado.png",
     description:"O ar-condicionado de 12.000 BTUs garante conforto térmico para ambientes de médio porte, proporcionando refrigeração eficiente e economia de energia. Ideal para quem busca um ambiente mais agradável em dias quentes.",
     features: [
      "Ótima oportunidade para quem busca conforto térmico com economia",
      "Potência de 12.000 BTUs – Resfria ambientes rapidamente.",
      "Acompanha a Evaporadora e condesadora",
      "Design compacto – Fácil instalação.",
    ],
  },
  {
    id: 14,
    name: "Forno Industrial a Gás",
    brand: "Segtron",
    price: "R$ 999",
    oldPrice: "R$ 1350",
    image: "/forno.png",
     description:"O forno industrial a gás é a escolha ideal para cozinhas profissionais, oferecendo potência, durabilidade e controle preciso para assados perfeitos. Perfeito para restaurantes, padarias e negócios gastronômicos.",
     features: [
      "Alto desempenho – Cozimento rápido e uniforme.",
      "Estrutura resistente – Material de qualidade para longa durabilidade.",
      "Controle de temperatura – Precisão para diferentes tipos de assados.",
      "Capacidade ampliada – Suporta grandes volumes de preparo.",
    ],
  },
  {
    id: 17,
    name: "🛋️ Abajur Rústico de Madeira",
    brand: "Estilo e Elegância! ",
    price: "R$ 100",
    oldPrice: "R$ 170",
    image: "/abajur3.png",
     description:"Transforme seu ambiente com este abajur rústico, perfeito para quem busca um toque vintage e sofisticado na decoração. Feito em madeira de alta qualidade e com design exclusivo!",
     features: [
      "Estilo industrial – Combina com qualquer ambiente.",
      "Material resistente – Estrutura de madeira e metal envelhecido.",
      "Iluminação aconchegante – Ideal para escritórios, salas e quartos.",
      "Pronto para uso – Com fio e interruptor para facilitar o manuseio.",
    ],
  },
  {
    id: 18,
    name: "Vaso Sanitário de Louça",
    brand: "Estilo e Elegância! ",
    price: "R$ 100",
    image: "/vaso2.png",
     description:"Renove seu banheiro com um vaso sanitário de louça de alta durabilidade e fácil instalação. Conforto e qualidade garantidos para seu dia a dia.",
     features: [
      "Material resistente e durável",
      "Design ergonômico para maior conforto",
      "Fácil de higienizar",
      "Compatível com sistemas convencionais de descarga",
    ],
  },
  {
    id: 19,
    name: "Pia de Louça com Coluna e Torneira",
    brand: "Estilo e Elegância! ",
    price: "R$ 140",
    image: "/pia2.png",
     description:"Perfeita para banheiros e lavabos, esta pia de louça com coluna traz elegância e funcionalidade para seu espaço. Seu design clássico se adapta a qualquer decoração.",
     features: [
      "Material resistente e durável",
      "Design compacto e sofisticado",
      "Acompanha torneira moderna",
      "Instalação prática",
    ],
  },
];
