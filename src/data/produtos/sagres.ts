import type { Produto, Dimensao } from "../../types/produto";

import sagres1 from "../../assets/produtos/sagres/sagres-1.webp";
import sagres2 from "../../assets/produtos/sagres/sagres-2.webp";
import sagres3 from "../../assets/produtos/sagres/sagres-3.webp";
import sagres4 from "../../assets/produtos/sagres/sagres-4.webp";
import sagres5 from "../../assets/produtos/sagres/sagres-5.webp";
import sagres6 from "../../assets/produtos/sagres/sagres-6.webp";
import sagres7 from "../../assets/produtos/sagres/sagres-7.webp";
import sagres8 from "../../assets/produtos/sagres/sagres-8.webp";

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

export const sagres: Produto = {
  id: "colchao-sagres",

  nome: "Colchão Sagres",

  categoria: "Colchão",

  descricao:
    "O Colchão Sagres foi criado para oferecer o equilíbrio perfeito entre firmeza, conforto e sofisticação. Com molas ensacadas individualmente, sistema de conforto D45 Firme + D45 Soft e revestimento em malha com tratamento em Íons de Prata, proporciona sustentação, toque macio e mais higiene para noites de sono verdadeiramente restauradoras. "+
    "Inspirado nas tecnologias dos Estados Unidos, Itália e França, reúne acabamento premium, alta durabilidade e conforto para transformar a qualidade do seu descanso.",

  imagem: sagres1,

  galeria: [
    sagres1,
    sagres2,
    sagres3,
    sagres4,
    sagres5,
    sagres6,
    sagres7,
    sagres8
  ],

  caracteristicas: [
    "Acabamento Premium",
    "Tecnologia internacional",
    "Excelente conforto e estabilidade",
    "Ação antifúngica e antibacteriana"
  ],

  especificacoes: [
    {
      label: "Molejo",
      value: "Molas ensacadas individualmente em aço 2,0 mm.",
    },
    {
      label: "Revestimento",
      value: "Malha (80% Poliéster e 20% Viscose).",
    },
    {
      label: "Borda Perimetral",
      value: "D26.",
    },
    {
      label: "Tratamento",
      value: "Tratamento com Íons de Prata.",
    },
  ],

  dimensoes: dimensoesColchao("34 cm"),

  destaque: false,
};