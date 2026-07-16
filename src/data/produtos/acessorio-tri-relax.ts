import type { Produto, Dimensao } from "../../types/produto";

import triRelax1 from "../../assets/produtos/acessorios/trirelax/tri-relax-1.webp";
const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const triRelax: Produto = {
  id: "acessorio-tri-relax",

  nome: "Tri - Relax",

  categoria: "Acessórios",

  descricao:
    "O Tri-Relax é um suporte de posicionamento inovador, desenvolvido para proporcionar máximo conforto e relaxamento. Sua inclinação, aliada às múltiplas possibilidades de uso, "+ 
    "permite ângulos ideais de alinhamento corporal, conforme recomendações médicas, auxiliando pessoas que apresentam condições como ronco, refluxo gastroesofágico e varizes.",

  imagem: triRelax1,

  galeria: [
    triRelax1
  ],

  caracteristicas: [
    "Conforto e Relaxamento",
    "Auxílio contra distúrbios do sono",
  ],

  especificacoes: [

  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};