import type { Produto, Dimensao } from "../../types/produto";

import viseu1 from "../../assets/produtos/viseu/viseu-1.webp";
import viseu2 from "../../assets/produtos/viseu/viseu-2.webp";
import viseu3 from "../../assets/produtos/viseu/viseu-3.webp";
import viseu4 from "../../assets/produtos/viseu/viseu-4.webp";
import viseu5 from "../../assets/produtos/viseu/viseu-5.webp";

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

export const viseu: Produto = {
  id: "colchao-viseu",

  nome: "Colchão Viseu",

  categoria: "Colchão",

  descricao:
    "O Colchão Vizeu foi desenvolvido para oferecer o equilíbrio ideal entre conforto, suporte e durabilidade.",

  imagem: viseu1,

  galeria: [
    viseu1,
    viseu2,
    viseu3,
    viseu4,
    viseu5,
  ],

  caracteristicas: [
    "Molas ensacadas",
    "Alta resistência (High Steel)",
    "Sustentação uniforme e progressiva",
  ],

  especificacoes: [
    {
      label: "Molejo",
      value: "Ensacado individualmente High Steel 2.0",
    },
    {
      label: "Molas",
      value: "Alta resistência (High Steel).",
    },
    {
      label: "Funcionamento",
      value: "Molas independentes com atuação ponto a ponto.",
    },
    {
      label: "Suporte",
      value: "Sustentação uniforme e progressiva.",
    },
    {
      label: "Alinhamento Postural",
      value: "Mantém a coluna em posição adequada durante o sono.",
    },
    {
      label: "Durabilidade",
      value: "Estrutura projetada para maior resistência e vida útil prolongada.",
    },
  ],

  dimensoes: dimensoesColchao("24 cm"),

  destaque: false,
};