import type { Produto, Dimensao } from "../../types/produto";

import cascaOvo1 from "../../assets/produtos/acessorios/casca-ovo/casca-ovo-1.webp";
const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const cascaOvo: Produto = {
  id: "acessorio-casca-ovo",

  nome: "Casca de Ovo - Descanso Anti-Escaras",

  categoria: "Acessórios",

  descricao:
    "O Descanso Antiescaras possui superfície perfilada que garante maior conforto e auxilia na prevenção de escaras "+ 
    "em pessoas que permanecem longos períodos acamadas. Sua camada de espuma ondulada favorece a circulação de ar entre o corpo e o colchão, promovendo mais frescor, bem-estar e qualidade no descanso.",

  imagem: cascaOvo1,

  galeria: [
    cascaOvo1
  ],

  caracteristicas: [
    "Prevenção de Escaras",
    "Frescor e bem estar",
  ],

  especificacoes: [

  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};