import type { Produto, Dimensao } from "../../types/produto";

import camomile1 from "../../assets/produtos/travesseiro-camomile/camomile-1.webp";
import camomile2 from "../../assets/produtos/travesseiro-camomile/camomile-2.webp";


const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const travesseiroCamomile: Produto = {
  id: "travesseiro-camomile",

  nome: "Travesseiro Camomile",

  categoria: "Travesseiros",

  descricao:
    "Tecido com moléculas de Camomila que proporcionam um sono tranquilo e relaxante. "+
    "Através de tecnologia inovadora, o aroma aplicado no tecido do travesseiro Camomile Nabeles " +
    "é ativado quando pressionado ou esfregado. Assim, as moléculas da camomila expandem, evidenciando ainda mais seu cheiro e proporcionando uma agradável sensação de bem-estar.",

  imagem: camomile1,

  galeria: [
    camomile1,
    camomile2
  ],

  caracteristicas: [
    "Travesseiro Relaxante",
    "Tecido com aroma de camomila",
  ],

  especificacoes: [
    {
      label: "Tamanho",
      value: "50 x 70 cm",
    },
    {
      label: "Tecido",
      value: "Com aroma de camomila.",
    },
    {
      label: "Enchimento",
      value: "Fibra siliconada macia e firme.",
    },
  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};