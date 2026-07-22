import type { Produto, Dimensao } from "../../types/produto";

import granHotel1 from "../../assets/produtos/gran-hotel/gran-hotel-1.webp";
import granHotel2 from "../../assets/produtos/gran-hotel/gran-hotel-2.webp";
import granHotel3 from "../../assets/produtos/gran-hotel/gran-hotel-3.webp";
import granHotel4 from "../../assets/produtos/gran-hotel/gran-hotel-4.webp";
import granHotel5 from "../../assets/produtos/gran-hotel/gran-hotel-5.webp";
import granHotel6 from "../../assets/produtos/gran-hotel/gran-hotel-6.webp";

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

export const granHotel: Produto = {
  id: "colchao-gran-hotel",

  nome: "Colchão Gran Hotel",

  categoria: "Colchão",

  descricao:
    "O Colchão Gran Hotel reúne conforto, tecnologia e acabamento premium para proporcionar noites de sono mais restauradoras. Com molas ensacadas individualmente, " +
    "revestimento em malha com viscose de eucalipto e tratamento antiácaro, antifungos e antibactérias, oferece excelente sustentação, toque macio e um ambiente de descanso mais limpo e saudável.",

  imagem: granHotel1,

  galeria: [
    granHotel1,
    granHotel2,
    granHotel3,
    granHotel4,
    granHotel5,
    granHotel6,
  ],

  caracteristicas: [
    "Suporta até 130 kg por pessoa",
    "Acabamento premium",
    "Excelente estabilidade e conforto",
    "Molas ensacadas individualmente"
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Suporta até 130 kg por pessoa.",
    },
    {
      label: "Molejo",
      value: "Molas ensacadas individualmente.",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, Antifungos e Antibactérias",
    },
    {
      label: "Revestimento",
      value: "Malha com Viscose de Eucalipto",
    },
    
  ],

  dimensoes: dimensoesColchao("22 cm"),

  destaque: false,
};