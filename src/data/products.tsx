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
    id: 10,
    name: "🔵 Galão de 60 Litros 🔵",
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
    id: 11,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    name: "Mesa Cinza com Tampo de Granito",
    brand: "Tampo de granito de alta qualidade",
    price: "R$ 200",
    oldPrice: "R$ 280",
    image: "/mesacinza.png",
     description:"A Mesa Redonda Cinza é perfeita para quem busca sofisticação e praticidade. Seu tampo de granito confere resistência e elegância, enquanto a base metálica garante estabilidade. Ideal para salas de jantar, varandas e áreas gourmet.",
     features: [
      "Durável e resistente – Tampo de granito de alta qualidade",
      "esign ergonômico – Fácil de segurar e manusear.",
      "Fácil de limpar – Superfície lisa que facilita a manutenção",
      "Compacta e versátil – Ideal para pequenos espaços.",
    ],
  },
  {
    id: 9,
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
    id: 10,
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
];
