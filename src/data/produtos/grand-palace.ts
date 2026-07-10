import type { Produto, Dimensao } from "../../types/produto";

import grandpalace1 from "../../assets/produtos/grand-palace/grand-palace-1.webp";
import grandpalace2 from "../../assets/produtos/grand-palace/grand-palace-2.webp";
import grandpalace3 from "../../assets/produtos/grand-palace/grand-palace-3.webp";
import grandpalace4 from "../../assets/produtos/grand-palace/grand-palace-4.webp";
import grandpalace5 from "../../assets/produtos/grand-palace/grand-palace-5.webp";
import grandpalace6 from "../../assets/produtos/grand-palace/grand-palace-6.webp";


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

export const grandPalace: Produto = {
  id: "colchao-grand-palace",

  nome: "Colchão Grand Palace",

  categoria: "Colchão",

  descricao:
    "O Grand Palace oferece uma experiência de descanso profunda e revigorante, unindo suavidade, firmeza e um toque premium que eleva qualquer "+
    "rotina de sono. Seu design favorece o alinhamento da coluna, alivia tensões e mantém uma sensação de frescor constante. Cada detalhe foi pensado " +
    "para proporcionar bem-estar contínuo e a sensação deliciosa de deitar em um colchão que cuida de você",

  imagem: grandpalace1,

  galeria: [
    grandpalace1,
    grandpalace2,
    grandpalace3,
    grandpalace4,
    grandpalace5,
    grandpalace6,
  ],

  caracteristicas: [
    "Suporta até 300 kg por pessoa",
    "Espuma em Látex",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Suporta até 300 kg por pessoa.",
    },
    {
      label: "Tipo de molas",
      value: "Ensacadas Individualmente 2.2mm (High Support System).",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antimofo, antialérgico, antifungos e antibactérias, íons de prata e Coolmax.",
    },
  ],

  dimensoes: dimensoesColchao("35 cm"),

  destaque: false,
};