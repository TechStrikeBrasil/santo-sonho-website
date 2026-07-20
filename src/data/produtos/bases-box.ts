import type { Produto, Dimensao } from "../../types/produto";

import box1 from "../../assets/produtos/bases-box/box-1.webp";
import box2 from "../../assets/produtos/bases-box/box-2.webp";


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

export const basesBox: Produto = {
  id: "box",

  nome: "Base Box",

  categoria: "Box",

  descricao:
    "As bases box representam a união entre luxo consciente, conforto e sofisticação natural. Produzidas com madeiras de reflorestamento" +
    "selecionadas, garantem sustentação sólida, alta durabilidade e respeito ao meio ambiente. O acabamento em tecido de linho confere elegância" +
    "atemporal, além de oferecer alta respirabilidade, toque agradável e melhor regulação térmica, contribuindo para um ambiente mais fresco, saudável" +
    "e acolhedor.",

  imagem: box1,

  galeria: [
    box1,
    box2,
  ],

  caracteristicas: [
    "Pés em madeira",
    "Tratamento anticupim",
    "Pistões a gás",
  ],

  especificacoes: [

  ],

  dimensoes: [],

  destaque: false,
};