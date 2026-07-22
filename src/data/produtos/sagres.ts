import type { Produto, Dimensao } from "../../types/produto";

import sagres1 from "../../assets/produtos/sagres/sagres-1.webp";
import sagres2 from "../../assets/produtos/sagres/sagres-2.webp";
import sagres3 from "../../assets/produtos/sagres/sagres-3.webp";
import sagres4 from "../../assets/produtos/sagres/sagres-4.webp";
import sagres5 from "../../assets/produtos/sagres/sagres-5.webp";
import sagres6 from "../../assets/produtos/sagres/sagres-6.webp";
import sagres7 from "../../assets/produtos/sagres/sagres-7.webp";
import sagres8 from "../../assets/produtos/sagres/sagres-8.webp";

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

export const sagres: Produto = {
  id: "colchao-sagres",

  nome: "Colchão Sagres",

  categoria: "Colchão",

  descricao:
    "DESCRIÇÃO PROVISÓRIA!",

  imagem: sagres1,

  galeria: [
    sagres1,
    sagres2,
    sagres3,
    sagres4,
    sagres5,
    sagres6,
    sagres7,
    sagres8
  ],

  caracteristicas: [
    "DESCRIÇÃO PROVISÍORIA!",

  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "DEFINIR!",
    },    
  ],

  dimensoes: dimensoesColchao("22 cm"),

  destaque: false,
};