import type { Produto, Dimensao } from "../../types/produto";

import porto1 from "../../assets/produtos/porto/porto-1.webp";
import porto2 from "../../assets/produtos/porto/porto-2.webp";
import porto3 from "../../assets/produtos/porto/porto-3.webp";
import porto4 from "../../assets/produtos/porto/porto-4.webp";
import porto5 from "../../assets/produtos/porto/porto-5.webp";
import porto6 from "../../assets/produtos/porto/porto-6.webp";



const medidasPadrao: Dimensao[] = [
  { label: "Solteiro", value: "0,88 x 1,88 m" },
  { label: "Solteirão", value: "0,96 x 2,03 m" },
  { label: "Viúva", value: "1,28 x 1,88 m" },
  { label: "Casal", value: "1,38 x 1,88 m" },
  { label: "Queen", value: "1,58 x 1,98 m" },
  { label: "King Size", value: "1,93 x 2,03 m" },
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const porto: Produto = {
  id: "colchao-porto",

  nome: "Colchão Porto",

  categoria: "Colchão",

  descricao:
    "O Colchão Porto une sofisticação e conforto em um só produto. Com espumas Ultra Rebound e molas ensacadas individuais que suportam até 200 kg "+
    "por pessoa, oferece excelente adaptação ao corpo e noites de sono estáveis e relaxantes. Seu acabamento em malha proporciona toque suave e "+
    "temperatura agradável, trazendo o padrão de conforto dos melhores hotéis para o seu descanso.",

  imagem: porto1,

  galeria: [
    porto1,
    porto2,
    porto3,
    porto4,
    porto5,
    porto6,
  ],

  caracteristicas: [
    "Suporta até 200 kg por pessoa",
    "Tecido  em malha Belga",
    "Molas com High Support System",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Até 200 kg por pessoa.",
    },
    {
      label: "Tecido",
      value: "Tecido em malha Belga.",
    },
    {
      label: "Tipo de mola",
      value: "Ensacadas Individualmente 2.0mm (High Support System).",
    },
  ],

  dimensoes: dimensoesColchao("28 cm"),

  destaque: false,
};