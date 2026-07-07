import type { Produto, Dimensao } from "../../types/produto";

import leiria1 from "../../assets/produtos/leiria/leiria-1.webp";
import leiria2 from "../../assets/produtos/leiria/leiria-2.webp";
import leiria3 from "../../assets/produtos/leiria/leiria-3.webp";
import leiria4 from "../../assets/produtos/leiria/leiria-4.webp";
import leiria5 from "../../assets/produtos/leiria/leiria-5.webp";


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

export const leiria: Produto = {
  id: "colchao-leiria",

  nome: "Colchão Leiria",

  categoria: "Colchão",

  descricao:
    "Criado para atender aos clientes que buscam conforto com suporte firme, mas sem a rigidez dos colchões tradicionais.",

  imagem: leiria1,

  galeria: [
    leiria1,
    leiria2,
    leiria3,
    leiria4,
    leiria5,
  ],

  caracteristicas: [
    "Antiácaro, antifungos e antibactérias",
    "Espuma de Alta qualidade, Resiliência e Conforto",
    "Malha com Viscose de Eucalipto",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Até 195 kg por pessoa.",
    },
    {
      label: "Estofamento",
      value: "Estufa de alta qualidade, resiliência e conforto.",
    },
    {
      label: "Tecido",
      value: "Malha com Viscose de Eucalipto.",
    },
  ],

  dimensoes: dimensoesColchao("28 cm"),

  destaque: false,
};