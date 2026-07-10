import type { Produto, Dimensao } from "../../types/produto";

import eminence1 from "../../assets/produtos/eminence/eminence-1.webp";

const medidasPadrao: Dimensao[] = [
  { label: "Queen", value: "1,58 x 1,98 m" },
  { label: "King Size", value: "1,93 x 2,03 m" },
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const eminence: Produto = {
  id: "colchao-eminence",

  nome: "Colchão Eminence",

  categoria: "Colchão",

  descricao:
    "O Colchão Planet Sense traduz a união perfeita entre sustentabilidade, tradição artesanal e conforto absoluto. Com materiais nobres como pelo de" +
    "camelo, algodão orgânico, MemoVisco Gel e Látex Talalay, aliados ao molejo Comfort Edge Double Coil, entrega uma experiência de sono única, leve e" +
    "envolvente como dormir nas nuvens.",

  imagem: eminence1,

  galeria: [
    eminence1,
  ],

  caracteristicas: [
    "Conforto Absoluto e Sustentabilidade",
    "Uma experiência de sono única, leve e envolvente",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Suporta até 250 kg por pessoa.",
    },
    {
      label: "Estofamento",
      value: "Látex, Látex FiveZone, Ecofoam, HSS Edge Foam",
    },
    {
      label: "Tecido",
      value: "Molejo Reflex Support System 23cm, 267 molas por m².",
    },
    {
      label: "Molas",
      value: "Molejo Comfort Edge Doble Coil 25cm, 512 molas por m².",
    },
  ],

  dimensoes: dimensoesColchao("38 cm"),

  destaque: true,
};