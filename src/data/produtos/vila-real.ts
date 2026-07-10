import type { Produto, Dimensao } from "../../types/produto";

import vilareal1 from "../../assets/produtos/vila-real/vila-real-1.webp";
import vilareal2 from "../../assets/produtos/vila-real/vila-real-2.webp";
import vilareal3 from "../../assets/produtos/vila-real/vila-real-3.webp";
import vilareal4 from "../../assets/produtos/vila-real/vila-real-4.webp";
import vilareal5 from "../../assets/produtos/vila-real/vila-real-5.webp";
import vilareal6 from "../../assets/produtos/vila-real/vila-real-6.webp";


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

export const vilaReal: Produto = {
  id: "colchao-vila-real",

  nome: "Colchão Vila Real",

  categoria: "Colchão",

  descricao:
    "O Colchão Vila Real foi criado para transformar o descanso em uma experiência de conforto profundo e equilíbrio absoluto. A combinação de Visco + " +
    "Látex se adapta ao corpo com precisão, aliviando tensões e proporcionando noites mais leves, silenciosas e renovadoras. " +
    "Vila Real. Onde o conforto encontra a elegância do bem-dormir",

  imagem: vilareal1,

  galeria: [
    vilareal1,
    vilareal2,
    vilareal3,
    vilareal4,
    vilareal5,
    vilareal6,
  ],

  caracteristicas: [
    "Molejo Confort 2.0",
    "Durabilidade e conforto sem igual",
  ],

  especificacoes: [
    {
      label: "Molas",
      value: "Molejo Confort 2.0.",
    },
    {
      label: "Tecido",
      value: "Tecido de malha.",
    },
    {
      label: "Estofamento",
      value: " ViscoLatex, com adaptação ao corpo, alívio de pressão, elasticidade e durabilidade.",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antimofo, antialérgico, antifungos e antibactérias, íons de prata e Purotex.",
    },
  ],

  dimensoes: dimensoesColchao("32 cm"),

  destaque: false,
};