import type { Produto, Dimensao } from "../../types/produto";

import rampa1 from "../../assets/produtos/acessorios/rampa-antirefluxo/antirefluxo-1.webp";
const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const rampaAntirefluxo: Produto = {
  id: "acessorio-rampa-antirrefluxo",

  nome: "Rampa Anti Refluxo",

  categoria: "Acessórios",

  descricao:
    "Ajuda evitar o refluxo " +
    "Melhora a postura da cabeça " +
    "Melhora a qualidade de sono "+
    "Diminui as dores das pernas "+
    "Dormências, câimbras e tensões musculares"+
    "Aumenta a circulação sanguínea ",

  imagem: rampa1,

  galeria: [
    rampa1
  ],

  caracteristicas: [
    "Melhora a qualidade do sono",
    "Diminui dores nas pernas",
  ],

  especificacoes: [

  ],

  dimensoes: [],

  destaque: false,
};