import type { Produto, Dimensao } from "../../types/produto";

import barcelos1 from "../../assets/produtos/barcelos/barcelos-1.webp";
import barcelos2 from "../../assets/produtos/barcelos/barcelos-2.webp";
import barcelos3 from "../../assets/produtos/barcelos/barcelos-3.webp";
import barcelos4 from "../../assets/produtos/barcelos/barcelos-4.webp";
import barcelos5 from "../../assets/produtos/barcelos/barcelos-5.webp";
import barcelos6 from "../../assets/produtos/barcelos/barcelos-6.webp";


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

export const barcelos: Produto = {
  id: "colchao-barcelos",

  nome: "Colchão Barcelos",

  categoria: "Colchão",

  descricao:
    "O Colchão Barcelos foi desenvolvido para proporcionar o equilíbrio perfeito entre conforto, suporte e resistência.",

  imagem: barcelos1,

  galeria: [
    barcelos1,
    barcelos2,
    barcelos3,
    barcelos4,
    barcelos5,
    barcelos6,
  ],

  caracteristicas: [
    "Menor transferência de movimento e maior durabilidade",
    "Tecido em malha",
    "Equilíbrio entre firmeza e aconchego",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Até 195 kg por pessoa.",
    },
    {
      label: "Sistema de Molas",
      value: "Molas ensacadas individualmente.",
    },
    {
      label: "Diferencial",
      value: "Menor transferência de movimento e maior durabilidade.",
    },
  ],

  dimensoes: dimensoesColchao("28 cm"),

  destaque: false,
};