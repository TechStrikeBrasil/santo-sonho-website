import type { Produto, Dimensao } from "../../types/produto";

import atenas1 from "../../assets/produtos/atenas/atenas-1.webp";
import atenas2 from "../../assets/produtos/atenas/atenas-2.webp";
import atenas3 from "../../assets/produtos/atenas/atenas-3.webp";
import atenas4 from "../../assets/produtos/atenas/atenas-4.webp";
import atenas5 from "../../assets/produtos/atenas/atenas-5.webp";
import atenas6 from "../../assets/produtos/atenas/atenas-6.webp";

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

export const atenas: Produto = {
  id: "colchao-atenas",

  nome: "Colchão Atenas",

  categoria: "Colchão",

  descricao:
    "O Colchão Atenas é um modelo incrível, feito com excelentes matérias-primas, oferecendo conforto intermediário, nem muito firme e nem muito macio.",

  imagem: atenas1,

  galeria: [
    atenas1,
    atenas2,
    atenas3,
    atenas4,
    atenas5,
    atenas6,
  ],

  caracteristicas: [
    "Malha com Viscose de Eucalipto",
    "Antiácaro, antifungos e antibactérias",
    "Até 130kg por pessoa",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Até 130 kg por pessoa.",
    },
    {
      label: "Estofamento",
      value: "Espuma de alta qualidade, resistência e conforto.",
    },
    {
      label: "Tipo de mola",
      value: "Ensacadas individualmente.",
    },
    {
      label: "Tecido",
      value: "Malha com Viscose de Eucalipto.",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antifungos e antibactérias.",
    },
  ],

  dimensoes: dimensoesColchao("22 cm"),

  destaque: true,
};