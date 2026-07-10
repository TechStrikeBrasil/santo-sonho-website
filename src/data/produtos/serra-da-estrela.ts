import type { Produto, Dimensao } from "../../types/produto";

import serradaestrela1 from "../../assets/produtos/serra-da-estrela/serra-da-estrela-1.webp";
import serradaestrela2 from "../../assets/produtos/serra-da-estrela/serra-da-estrela-2.webp";
import serradaestrela3 from "../../assets/produtos/serra-da-estrela/serra-da-estrela-3.webp";
import serradaestrela4 from "../../assets/produtos/serra-da-estrela/serra-da-estrela-4.webp";
import serradaestrela5 from "../../assets/produtos/serra-da-estrela/serra-da-estrela-5.webp";
import serradaestrela6 from "../../assets/produtos/serra-da-estrela/serra-da-estrela-6.webp";


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

export const serraDaEstrela: Produto = {
  id: "colchao-serra-da-estrela",

  nome: "Colchão Serra da Estrela",

  categoria: "Colchão",

  descricao:
    "Produzido com a renomada malha belga Lava e laterais Chablis Blanc com tecnologia Sense Ice, o colchão Serra da Estrela mantém a noite sempre agradável.",

  imagem: serradaestrela1,

  galeria: [
    serradaestrela1,
    serradaestrela2,
    serradaestrela3,
    serradaestrela4,
    serradaestrela5,
    serradaestrela6,
  ],

  caracteristicas: [
    "Estofamento UltraRebound",
    "Máximo frescor e conforto térmico",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Suporta até 310 kg por pessoa.",
    },
    {
      label: "Estofamento",
      value: "Espuma de Alta Qualidade UltraRebound (Ultrarebote) e Memory Foam Visco Gel.",
    },
    {
      label: "Tipo de molas",
      value: "Ensacadas Individualmente.",
    },
    {
      label: "Tecido",
      value: "Malha Belga da Lava de alta gramatura com Chablis Blanc e Tecnologia Sense Ice.",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antimofo, antialérgico, antifungos e antibactérias. Íons de Prata, Fios de carbono (Grafeno), Coolmax, Aloe Vera, Smell Free e Purotex.",
    },
  ],

  dimensoes: dimensoesColchao("35 cm"),

  destaque: true,
};