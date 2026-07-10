import type { Produto, Dimensao } from "../../types/produto";

import aldeia1 from "../../assets/produtos/aldeia-de-mos/aldeia-de-mos-1.webp";
import aldeia2 from "../../assets/produtos/aldeia-de-mos/aldeia-de-mos-2.webp";
import aldeia3 from "../../assets/produtos/aldeia-de-mos/aldeia-de-mos-3.webp";
import aldeia4 from "../../assets/produtos/aldeia-de-mos/aldeia-de-mos-4.webp";
import aldeia5 from "../../assets/produtos/aldeia-de-mos/aldeia-de-mos-5.webp";
import aldeia6 from "../../assets/produtos/aldeia-de-mos/aldeia-de-mos-6.webp";




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

export const aldeiaDeMos: Produto = {
  id: "colchao-aldeia-de-mos",

  nome: "Colchão Aldeia de Mos",

  categoria: "Colchão",

  descricao:
    "O colchão Aldeia de Mós entrega a verdadeira sensação de “dormir nas nuvens”.",

  imagem: aldeia1,

  galeria: [
    aldeia1,
    aldeia2,
    aldeia3,
    aldeia4,
    aldeia5,
    aldeia6,
  ],

  caracteristicas: [
    "Ultra macio e confortável",
    "Máximo conforto, frescor e saúde do sono",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Suporta até 200 kg por pessoa.",
    },
    {
      label: "Estofamento",
      value: "Látex 100 % Natural, Visco Elástico Memory Foam, Ultra Rebound (Ultrarebote)e HyperSoft.",
    },
    {
      label: "Tecido",
      value: "Malha Belga da Lava de altíssima gramatura.",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antimofo, antialérgico, antifungos e antibactérias. Íons de Prata, Fios de carbono (Grafeno), Coolmax, Aloe Vera, Smell Free e Purotex.",
    },
  ],

  dimensoes: dimensoesColchao("40 cm"),

  destaque: true,
};