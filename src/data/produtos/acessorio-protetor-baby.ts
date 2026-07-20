import type { Produto, Dimensao } from "../../types/produto";

import protetorBaby1 from "../../assets/produtos/acessorios/protetor-baby/protetor-baby-1.webp";

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const protetorBaby: Produto = {
  id: "acessorio-protetor-baby",

  nome: "Protetor Impermeável Baby",

  categoria: "Acessórios",

  descricao:
    "Protetor em Matelassê IMPERMEÁVEL para colchão. Fabricado em Algodão.",

  imagem: protetorBaby1,

  galeria: [
    protetorBaby1,
  ],

  caracteristicas: [
  ],

  especificacoes: [
    {
      label: "Composição",
      value: "100% Tecido Algodão / Manta de Poliéster Siliconizada"
    },
    {
      label: "Forro",
      value: "100% PVC"
    },
    {
      label: "Tamanho",
      value: "70cm x 130cm"
    },

  ],

  dimensoes: [],

  destaque: false,
};