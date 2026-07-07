import type { Produto, Dimensao } from "../../types/produto";

import max331 from "../../assets/produtos/max33/max33-1.webp";
import max332 from "../../assets/produtos/max33/max33-2.webp";
import max333 from "../../assets/produtos/max33/max33-3.webp";
import max334 from "../../assets/produtos/max33/max33-4.webp";
import max335 from "../../assets/produtos/max33/max33-5.webp";
import max336 from "../../assets/produtos/max33/max33-6.webp";


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

export const max33: Produto = {
  id: "colchao-max33",

  nome: "Colchão Max D33",

  categoria: "Colchão",

  descricao:
    "Para quem procura um colchão de espuma com perfil de conforto extra firme, que não seja pesado e que dê para utilizar os dois lados.",

  imagem: max331,

  galeria: [
    max331,
    max332,
    max333,
    max334,
    max335,
    max336,
  ],

  caracteristicas: [
    "Dupla camada de espuma de altíssimo suporte",
    "Tecido  Jacquard com fibra de bambu",
    "Extra Firme",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Até 130 kg por pessoa.",
    },
    {
      label: "Estofamento",
      value: "Espuma de Alta qualidade D33.",
    },
    {
      label: "Tipo de núcleo",
      value: "Placa de sustentação firme de Poliestireno Expandido.",
    },
  ],

  dimensoes: dimensoesColchao("25 cm"),

  destaque: false,
};