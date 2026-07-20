import type { Produto, Dimensao } from "../../types/produto";

import bau1 from "../../assets/produtos/baus/bau-1.webp";
import bau2 from "../../assets/produtos/baus/bau-2.webp";
import bau3 from "../../assets/produtos/baus/bau-3.webp";
import bau4 from "../../assets/produtos/baus/bau-4.webp";




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

export const bauCasal: Produto = {
  id: "baus",

  nome: "Baú Casal",

  categoria: "Baús",

  descricao:
    "Os baús combinam elegância, funcionalidade e aproveitamento inteligente de espaço. Além de oferecerem uma base firme e sofisticada para o " +
    "colchão, contam com um amplo espaço interno ideal para organizar roupas de cama, malas e itens do dia a dia, mantendo o quarto sempre " +
    "harmonioso. Produzidos com madeiras de reflorestamento e acabamento em tecido de linho, entregam durabilidade, respirabilidade e um toque "+
    "natural de luxo ao ambiente. Funcionalidade que valoriza o espaço.",

  imagem: bau1,

  galeria: [
    bau1,
    bau2,
    bau3, 
    bau4
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