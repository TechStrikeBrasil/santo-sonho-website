import type { Produto, Dimensao } from "../../types/produto";

import protetorMalha1 from "../../assets/produtos/acessorios/protetor-malha/protetor-malha-1.webp";
import protetorMalha2 from "../../assets/produtos/acessorios/protetor-malha/protetor-malha-2.webp";

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const protetorMalha: Produto = {
  id: "acessorio-protetor-malha",

  nome: "Protetor de Malha Impermeável Colchão Zambrano",

  categoria: "Acessórios",

  descricao:
    "O Protetor de Malha Impermeável Colchão Zambrano protege seu colchão contra manchas e líquidos. Disponível em diversas medidas.",

  imagem: protetorMalha1,

  galeria: [
    protetorMalha1,
    protetorMalha2
  ],

  caracteristicas: [
    "Macio e Confortável",
    "Não faz barulho"
  ],

  especificacoes: [
    {
      label: "Tamanhos",
      value: "Disponível em diversos tamanhos de colchão."
    },
  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};