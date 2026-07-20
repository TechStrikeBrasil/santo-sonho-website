import type { Produto, Dimensao } from "../../types/produto";

import euroflex1 from "../../assets/produtos/travesseiro-euroflex/euroflex-1.webp";
import euroflex2 from "../../assets/produtos/travesseiro-euroflex/euroflex-2.webp";

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const travesseiroEuroflex: Produto = {
  id: "travesseiro-euroflex",

  nome: "Travesseiro Euroflex",

  categoria: "Travesseiros",

  descricao:
    "A Nabeles trouxe da Europa pra você, o que há de mais moderno em tecnologia do sono para desenvolver os Travesseiros Euroflex antiestático. "+
    "O tecido é complementado por fios de carbono intense, um poderoso agente capaz de anular a estática e a tensão do corpo, proporcionando bem-estar e uma ótima noite de sono.",

  imagem: euroflex1,

  galeria: [
    euroflex1,
    euroflex2
  ],

  caracteristicas: [
    "Antiestresse e antiestático",
    "Ajuda em um sono mais tranquilo",
  ],

  especificacoes: [
    {
      label: "Tamanho",
      value: "50 x 70 cm",
    },
    {
      label: "Tecido",
      value: "Tecido com fios de carbono",
    },
    {
      label: "Enchimento",
      value: "Fibra siliconada macia e firme.",
    },
  ],

  dimensoes: [],

  destaque: false,
};