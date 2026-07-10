import type { Produto, Dimensao } from "../../types/produto";

import palacio1 from "../../assets/produtos/palacio-de-sintra/palacio-de-sintra-1.webp";
import palacio2 from "../../assets/produtos/palacio-de-sintra/palacio-de-sintra-2.webp";
import palacio3 from "../../assets/produtos/palacio-de-sintra/palacio-de-sintra-3.webp";
import palacio4 from "../../assets/produtos/palacio-de-sintra/palacio-de-sintra-4.webp";
import palacio5 from "../../assets/produtos/palacio-de-sintra/palacio-de-sintra-5.webp";
import palacio6 from "../../assets/produtos/palacio-de-sintra/palacio-de-sintra-6.webp";


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

export const palacioDeSintra: Produto = {
  id: "colchao-palacio-de-sintra",

  nome: "Colchão Palácio de Sintra",

  categoria: "Colchão",

  descricao:
    "O Colchão Palácio de Sintra representa o mais alto nível em conforto e elegância.",

  imagem: palacio1,

  galeria: [
    palacio1,
    palacio2,
    palacio3,
    palacio4,
    palacio5,
    palacio6,
  ],

  caracteristicas: [
    "Suporta até 280 kg por pessoa",
    "Adaptação e conforto excepcionais",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Até 280 kg por pessoa.",
    },
    {
      label: "Tecido",
      value: "Tecido em malha belga.",
    },
    {
      label: "Espumação",
      value: "Latex natural (indeformável).",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antimofo, antialérgico, antifungos e antibactérias.",
    },
  ],

  dimensoes: dimensoesColchao("28 cm"),

  destaque: false,
};