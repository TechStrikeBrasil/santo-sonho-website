import type { Produto, Dimensao } from "../../types/produto";

import latexSense1 from "../../assets/produtos/travesseiro-latex-sense-14/latex-sense-1.webp";
import latexSense2 from "../../assets/produtos/travesseiro-latex-sense-14/latex-sense-2.webp";

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const travesseiroLatexSense14: Produto = {
  id: "travesseiro-latex-sense-14",

  nome: "Travesseiro Latex Sense 14 cm",

  categoria: "Travesseiros",

  descricao:
    "Com uma espuma de poliuretano de altíssima qualidade, o Latex Touch confere experiência muito semelhante ao latex natural de borracha, já que possui alta densidade, altíssima resiliência e toque sedoso e macio.",

  imagem: latexSense1,

  galeria: [
    latexSense1,
    latexSense2
  ],

  caracteristicas: [
    "Alta Resiliência",
    "Toque Macio",
  ],

  especificacoes: [
    {
      label: "Capa",
      value: "53% Algodão/ 47% Poliester",
    },
    {
      label: "Espuma",
      value: "100% Poliuretano",
    },
    {
      label: "Tamanho",
      value: "14x40x60 cm",
    },
  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};