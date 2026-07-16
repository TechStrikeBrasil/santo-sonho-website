import type { Produto, Dimensao } from "../../types/produto";

import latexSense1 from "../../assets/produtos/travesseiro-latex-sense-18/latex-sense-1.webp";
import latexSense2 from "../../assets/produtos/travesseiro-latex-sense-18/latex-sense-2.webp";
import latexSense3 from "../../assets/produtos/travesseiro-latex-sense-18/latex-sense-3.webp";


const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const travesseiroLatexSense18: Produto = {
  id: "travesseiro-latex-sense-18",

  nome: "Travesseiro Latex Sense 18 cm",

  categoria: "Travesseiros",

  descricao:
    "Com uma espuma de poliuretano de altíssima qualidade, o Latex Touch confere experiência muito semelhante ao latex natural de borracha, já que possui alta densidade, altíssima resiliência e toque sedoso e macio.",

  imagem: latexSense1,

  galeria: [
    latexSense1,
    latexSense2,
    latexSense3
  ],

  caracteristicas: [
    "Ultra Rebound",
    "Toque de seda",
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
      value: "18x40x60 cm",
    },
  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};