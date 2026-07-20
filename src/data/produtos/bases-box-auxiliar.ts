import type { Produto, Dimensao } from "../../types/produto";

import base1 from "../../assets/produtos/base-box-auxiliar/base-auxiliar-1.webp";
import base2 from "../../assets/produtos/base-box-auxiliar/base-auxiliar-2.webp";


const medidasPadrao: Dimensao[] = [
  { label: "Solteiro", value: "0,78 x 1,88 m" },
  { label: "Solteiro", value: "0,88 x 1,88 m" },
  { label: "Solteirão", value: "0,96 x 2,03 m" },
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const baseBoxAuxiliar: Produto = {
  id: "box-auxiliar",

  nome: "Base Box com auxiliar",

  categoria: "Box",

  descricao:
    "A base box com auxiliar para cama de solteiro é a solução perfeita para unir conforto, praticidade e otimização de espaço. Ideal para quartos " +
    "compactos, ela oferece uma cama extra sempre à disposição, sem comprometer a estética do ambiente. " +
    "Com estrutura resistente e acabamento sofisticado em tecido de linho, garante estabilidade, durabilidade e um visual elegante. Uma escolha " +
    "inteligente para quem valoriza funcionalidade com padrão premium no dia a dia.",

  imagem: base1,

  galeria: [
    base1,
    base2,
  ],

  caracteristicas: [
    "Pés em madeira",
    "Tratamento anticupim",
    "Pistões a gás",
  ],

  especificacoes: [

  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};