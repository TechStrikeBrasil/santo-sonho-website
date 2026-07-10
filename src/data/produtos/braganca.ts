import type { Produto, Dimensao } from "../../types/produto";

import braganca1 from "../../assets/produtos/braganca/braganca-1.webp";
import braganca2 from "../../assets/produtos/braganca/braganca-2.webp";
import braganca3 from "../../assets/produtos/braganca/braganca-3.webp";
import braganca4 from "../../assets/produtos/braganca/braganca-4.webp";
import braganca5 from "../../assets/produtos/braganca/braganca-5.webp";
import braganca6 from "../../assets/produtos/braganca/braganca-6.webp";



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

export const braganca: Produto = {
  id: "colchao-braganca",

  nome: "Colchão Bragança",

  categoria: "Colchão",

  descricao:
    "O Bragança é um colchão premium desenvolvido para quem busca alto padrão em conforto e tecnologia. Com revestimento em Látex Natural, oferece " +
    "ventilação superior, ajuste perfeito ao corpo e um toque hipoalergênico. Sua malha belga Lava com tecnologia Sense Ice garante frescor constante, " + 
    "enquanto as laterais Chablis Blanc e as molas ensacadas de alta resistência proporcionam suporte firme e durabilidade. Uma escolha perfeita para " +
    "quem deseja um sono realmente excepcional.",

  imagem: braganca1,

  galeria: [
    braganca1,
    braganca2,
    braganca3,
    braganca4,
    braganca5,
    braganca6,
  ],

  caracteristicas: [
    "Perfeito para um sono reparador",
    "Máximo frescor e conforto térmico",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Suporta até 200 kg por pessoa.",
    },
    {
      label: "Estofamento",
      value: " Látex 100 % Natural e Espuma de Alta Qualidade Ultra Rebound (Ultrarebote)",
    },
    {
      label: "Tecido",
      value: "Malha 3D Plana Belga da Lava de alta gramatura com Chablis Blanc e Tecnologia Sense Ice.",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antimofo, antialérgico, antifungos e antibactérias. Íons de Prata, Fios de carbono (Grafeno), Coolmax, Aloe Vera, Smell Free e Purotex.",
    },
  ],

  dimensoes: dimensoesColchao("32 cm"),

  destaque: false,
};