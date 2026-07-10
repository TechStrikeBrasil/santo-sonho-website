import type { Produto, Dimensao } from "../../types/produto";

import diamond1 from "../../assets/produtos/diamond-plus/diamond-1.webp";
import diamond2 from "../../assets/produtos/diamond-plus/diamond-2.webp";
import diamond3 from "../../assets/produtos/diamond-plus/diamond-3.webp";
import diamond4 from "../../assets/produtos/diamond-plus/diamond-4.webp";
import diamond5 from "../../assets/produtos/diamond-plus/diamond-5.webp";
import diamond6 from "../../assets/produtos/diamond-plus/diamond-6.webp";


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

export const diamondPlus: Produto = {
  id: "colchao-diamond-plus",

  nome: "Colchão Diamond Plus",

  categoria: "Colchão",

  descricao:
    "O colchão Diamond oferece o melhor em tecnologia, além de possuir um design rico em detalhes HD, realçando ainda mais a sua beleza.",

  imagem: diamond1,

  galeria: [
    diamond1,
    diamond2,
    diamond3,
    diamond4,
    diamond5,
    diamond6,
  ],

  caracteristicas: [
    "Macio e Confortável",
    "Espuma de Ultrasoft",
  ],

  especificacoes: [
    {
      label: "Estofamento",
      value: "Memovisco Gel D45, Látex Talalay.",
    },
    {
      label: "Tipo de molas",
      value: "Molejo Comfort Edge Double Coil 25cm.",
    },
    {
      label: "Tecido",
      value: "Malha Belga da Lava de altíssima gramatura com Tencel, lateral em Linho.",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antimofo, antialérgico, antifungos e antibactérias. Íons de Prata, Purotex.",
    },
  ],

  dimensoes: dimensoesColchao("35 cm"),

  destaque: false,
};