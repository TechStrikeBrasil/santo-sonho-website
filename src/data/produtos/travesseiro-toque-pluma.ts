import type { Produto, Dimensao } from "../../types/produto";

import toquePluma1 from "../../assets/produtos/travesseiro-toque-de-plumas/toque-plumas-1.webp";
import toquePluma2 from "../../assets/produtos/travesseiro-toque-de-plumas/toque-plumas-2.webp";

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const travesseiroToquePlumas: Produto = {
  id: "travesseiro-toque-pluma",

  nome: "Travesseiro Toque de Plumas",

  categoria: "Travesseiros",

  descricao:
    "Com a união do tecido 100% algodão com 230 fios e o enchimento com fibra ecológica super macia e extrafina, "+
    "o Travesseiro Toque de Pluma da Nabeles utiliza o que existe de mais moderno em tecnologia têxtil para proteger seu sono, proporcionando um descanso tranquilo e confortável.",

  imagem: toquePluma1,

  galeria: [
    toquePluma1,
    toquePluma2,
  ],

  caracteristicas: [
    "Impermeável",
    "Tecido em Algodão 230 fios",
  ],

  especificacoes: [
    {
      label: "Tamanho",
      value: "50 x 70 cm",
    },
    {
      label: "Tecido",
      value: "Tecido 100% Algodão com 230 fios impermeável",
    },
    {
      label: "Enchimento",
      value: "Fibra siliconada extrafina simular a 'plumas de ganso'",
    },
  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};