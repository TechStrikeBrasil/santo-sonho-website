import type { Produto, Dimensao } from "../../types/produto";

import base1 from "../../assets/produtos/base-box-colchao/box-colchao-1.webp";
import base2 from "../../assets/produtos/base-box-colchao/box-colchao-2.webp";


const medidasPadrao: Dimensao[] = [
  { label: "Solteiro", value: "0,78 x 1,88 m" },
  { label: "Solteiro", value: "0,88 x 1,88 m" },
  { label: "Solteirão", value: "0,96 x 2,03 m" },
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const baseBoxColchao: Produto = {
  id: "box-colchao",

  nome: "Base Box com Colchão Interno",

  categoria: "Box",

  descricao:
    "A base box com puxador para cama de solteiro é a solução ideal para quem busca praticidade e melhor aproveitamento do espaço. Projetada para "+
    "quartos compactos, ela permite acomodar um colchão de espuma em um compartimento deslizante, funcionando como uma gaveta discreta e "+
    "funcional. Com estrutura resistente e acabamento sofisticado em tecido de linho, oferece estabilidade, durabilidade e um visual elegante, sem "+
    "comprometer a estética do ambiente. Uma escolha inteligente para quem valoriza organização, funcionalidade e qualidade no dia a dia",

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