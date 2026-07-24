import type { Produto, Dimensao } from "../../types/produto";

import portucale1 from "../../assets/produtos/portucale/portucale-1.webp";
import portucale2 from "../../assets/produtos/portucale/portucale-2.webp";
import portucale3 from "../../assets/produtos/portucale/portucale-3.webp";
import portucale4 from "../../assets/produtos/portucale/portucale-4.webp";
import portucale5 from "../../assets/produtos/portucale/portucale-5.webp";
import portucale6 from "../../assets/produtos/portucale/portucale-6.webp";



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

export const portucale: Produto = {
  id: "colchao-portucale",

  nome: "Colchão Portucale",

  categoria: "Colchão",

  descricao:
    "Imagine dormir com a leveza de uma brisa à beira-mar. "+
    "O Colchão Portucale foi criado para transformar cada noite em uma experiência de frescor, conforto e sofisticação, mesmo nos climas mais quentes. Seu descanso se torna profundo, envolvente e revigorante, "+
    "proporcionando a sensação única de acordar renovado todos os dias. Cada detalhe foi pensado para oferecer equilíbrio térmico, adaptação ao corpo e um conforto digno dos melhores resorts do mundo. " +
    "O Portucale é mais do que um colchão. É o luxo de dormir bem, todos os dias",

  imagem: portucale1,

  galeria: [
    portucale1,
    portucale2,
    portucale3,
    portucale4,
    portucale5,
    portucale6,
  ],

  caracteristicas: [
    "Suporta até 250 kg por pessoa",
    "Malha de alta gramatura",
    "Ajusta-se ao corpo e proporciona frescor",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Até 250 kg por pessoa.",
    },
    {
      label: "Tecido",
      value: "Malha de alta gramatura, com excelente respirabilidade e toque macio.",
    },
    {
      label: "Conforto",
      value: "Visco, que se molda ao corpo, reduz pontos de pressão e auxilia no controle térmico.",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antimofo, antialérgico, antifungos e antibactérias. Íons de Prata e Coolmax.",
    },
  ],

  dimensoes: dimensoesColchao("28 cm"),

  destaque: false,
};