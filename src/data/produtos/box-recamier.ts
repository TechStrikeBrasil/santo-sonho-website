import type { Produto, Dimensao } from "../../types/produto";

import recamier1 from "../../assets/produtos/recamier/recamier-1.webp";
import recamier2 from "../../assets/produtos/recamier/recamier-2.webp";
import recamier3 from "../../assets/produtos/recamier/recamier-3.webp";


const medidasPadrao: Dimensao[] = [
  { label: "Casal", value: "1,38 x 1,88 m" },
  { label: "Queen", value: "1,58 x 1,98 m" },
  { label: "King Size", value: "1,93 x 2,03 m" },
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const recamier: Produto = {
  id: "box-recamier",

  nome: "Recamier",

  categoria: "Baús",

  descricao:
    "O box baú com auxiliar combina armazenamento inteligente e praticidade extra em um único produto. Possui amplo espaço interno para "+
    "organização e uma cama auxiliar sempre pronta para uso, sem comprometer o espaço do quarto." +
    "Com estrutura resistente e acabamento em tecido de linho, oferece durabilidade, elegância e funcionalidade no dia a dia.",

  imagem: recamier1,

  galeria: [
    recamier1,
    recamier2,
    recamier3
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