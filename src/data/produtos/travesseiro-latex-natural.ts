import type { Produto, Dimensao } from "../../types/produto";

import latexNatural1 from "../../assets/produtos/travesseiro-latex-natural/latex-natural-1.webp"
import latexNatural2 from "../../assets/produtos/travesseiro-latex-natural/latex-natural-2.webp"

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const travesseiroLatexNatural: Produto = {
  id: "travesseiro-latex-natural",

  nome: "Travesseiro Latex Natural True",

  categoria: "Travesseiros",

  descricao:
    "Único travesseiro brasileiro feito com 100% de latex vegetal (de seringueira). O latex vegetal confere alta resiliência e maciez à espuma, sem formar saliências no travesseiro com o uso. "+
    "Não contém latex sintético (poliuretano), derivado do petróleo que provoca alergias respiratórias. "+
    "Formato plano exclusivo da espuma de latex vegetal. A cabeça não desliza para os lados. "+
    "O formato oval dos travesseiros de poliuretano provocam desconfortos, por falta de apoio à cabeça nas extremidades do travesseiro. Seu toque é mais macio e suave com sustentação confortável da cabeça. Imune à ácaros, bactérias e fungos por natureza, além de ser totalmente lavável. Fim das alergias respiratórias. "+
    "É térmico e higiênico, tem circulação interna de ar com células intercomunicantes entre si.",

  imagem: latexNatural1,

  galeria: [
    latexNatural1,
    latexNatural2,
  ],

  caracteristicas: [
    "100% Latex Vegetal",
    "Sem enchimentos",
  ],

  especificacoes: [
    {
      label: "Capa",
      value: "100% Algodão",
    },
    {
      label: "Espuma",
      value: "100% Poliuretano",
    },
    {
      label: "Tamanho",
      value: "14x50X70 cm",
    },
  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};