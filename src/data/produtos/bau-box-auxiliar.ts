import type { Produto, Dimensao } from "../../types/produto";

import bau1 from "../../assets/produtos/box-bau-auxiliar/box-bau-1.webp";
import bau2 from "../../assets/produtos/box-bau-auxiliar/box-bau-2.webp";
import bau3 from "../../assets/produtos/box-bau-auxiliar/box-bau-3.webp";


const medidasPadrao: Dimensao[] = [
  { label: "Solteiro", value: "0,78 x 1,88 m" },
  { label: "Solteiro", value: "0,88 x 1,88 m" },
  { label: "Solteirão", value: "0,96 x 2,03 m" },
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const bauAuxiliar: Produto = {
  id: "bau-box-auxiliar",

  nome: "Box Baú com auxiliar",

  categoria: "Baús",

  descricao:
    "O box baú com auxiliar combina armazenamento inteligente e praticidade extra em um único produto. Possui amplo espaço interno para "+
    "organização e uma cama auxiliar sempre pronta para uso, sem comprometer o espaço do quarto."+
    "Com estrutura resistente e acabamento em tecido de linho, oferece durabilidade, elegância e funcionalidade no dia a dia.",

  imagem: bau1,

  galeria: [
    bau1,
    bau2,
    bau3
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