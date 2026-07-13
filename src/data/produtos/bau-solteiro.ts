import type { Produto, Dimensao } from "../../types/produto";

import bau1 from "../../assets/produtos/bau-solteiro/bau-solteiro-1.webp";
import bau2 from "../../assets/produtos/bau-solteiro/bau-solteiro-2.webp";

const medidasPadrao: Dimensao[] = [
  { label: "Solteiro", value: "0,78 x 1,88 m" },
  { label: "Solteiro", value: "0,88 x 1,88 m" },
  { label: "Solteirão", value: "0,96 x 2,03 m" },
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const bauSolteiro: Produto = {
  id: "bau-solteiro",

  nome: "Baú Solteiro",

  categoria: "Baús",

  descricao:
    "O box baú de solteiro é a escolha ideal para quem busca funcionalidade sem abrir mão da sofisticação. Com amplo espaço interno, permite "+
    "organizar roupas de cama, malas e objetos do dia a dia, mantendo o quarto sempre prático e visualmente harmonioso. "+
    "Sua estrutura resistente, aliada ao acabamento em tecido de linho, oferece durabilidade, respirabilidade e um toque de elegância natural. Uma "+
    "solução inteligente que transforma cada centímetro do ambiente em conforto e bem-estar.",

  imagem: bau1,

  galeria: [
    bau1,
    bau2,
  ],

  caracteristicas: [
    "Pés em madeira",
    "Tratamento anticupim",
    "Pistões a gás",
  ],

  especificacoes: [

  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};