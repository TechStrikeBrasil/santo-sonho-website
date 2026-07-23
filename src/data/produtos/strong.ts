import type { Produto, Dimensao } from "../../types/produto";

import strong1 from "../../assets/produtos/strong/strong-1.webp";
import strong2 from "../../assets/produtos/strong/strong-2.webp";
import strong3 from "../../assets/produtos/strong/strong-3.webp";
import strong4 from "../../assets/produtos/strong/strong-4.webp";


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

export const strong: Produto = {
  id: "colchao-strong",

  nome: "Colchão Strong",

  categoria: "Colchão",

  descricao:
    "Alta performance não termina no treino  Ela continua no descanso. "+
    "O STRONG Muscle Recovery Device foi desenvolvido para transformar o sono em um verdadeiro ritual de recuperação, equilíbrio e renovação física."+
    "Cada noite proporciona um descanso profundo, que alivia tensões, restaura o corpo e prepara você para ir além no dia seguinte. Mais do que "+
    "conforto, o STRONG entrega excelência em recuperação para quem exige o máximo de si."+
    "Durma forte. Acorde no seu melhor nível.",

  imagem: strong1,

  galeria: [
    strong1,
    strong2,
    strong3,
    strong4,
  ],

  caracteristicas: [
    "Suporta até 300 kg por lado",
    "Acorde no seu melhor nível",
    "Descanso profundo, alívio de tensões e recuperação muscular",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Até 300 kg por pessoa.",
    },
    {
      label: "Tecido",
      value: "Coolmax e Dryfit.",
    },
    {
      label: "Conforto",
      value: "8 zonas ergonômicas para alinhamento total da coluna.",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antimofo, antialérgico, antifungos e antibactérias. Íons de Prata(bactericida natural).",
    },
  ],

  dimensoes: dimensoesColchao("33 cm"),

  destaque: false,
};