import type { Produto, Dimensao } from "../../types/produto";

import dubai1 from "../../assets/produtos/travesseiro-dubai-14/dubai-1.webp";
import dubai2 from "../../assets/produtos/travesseiro-dubai-14/dubai-2.webp";
import dubai3 from "../../assets/produtos/travesseiro-dubai-14/dubai-3.webp";

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const travesseiroDubai: Produto = {
  id: "travesseiro-dubai",

  nome: "Travesseiro Dubai",

  categoria: "Travesseiros",

  descricao:
    "Produto com design totalmente diferenciado e rico em detalhes. Tecido, zíper, faixas, acabamento impressionante. Sua espuma possui alto suporte e firmeza elevada; conferindo uma experiência completa para amantes de travesseiros firmes e confiáveis. ",

  imagem: dubai1,

  galeria: [
    dubai1,
    dubai2,
    dubai3
  ],

  caracteristicas: [
    "Tecido de Alto Padrão",
    "Firme e confiável",
  ],

  especificacoes: [
    {
      label: "Dimensões",
      value: "Baixo (11cm) | Médio (14cm) | Alto (18cm)",
    },
    {
      label: "Tecido",
      value: "Tecido de Alto Padrão",
    },
    {
      label: "Espuma",
      value: "Firme Espuma Memory Foam",
    },    
  ],

  dimensoes: [],

  destaque: false,
};