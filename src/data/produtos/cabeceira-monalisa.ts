import type { Produto, Dimensao } from "../../types/produto";

import cabeceira1 from "../../assets/produtos/cabeceiras/monalisa-1.webp";
import cabeceira2 from "../../assets/produtos/cabeceiras/monalisa-2.webp";
import cabeceira3 from "../../assets/produtos/cabeceiras/monalisa-3.webp";

const medidasPadrao: Dimensao[] = [
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const cabeceiraMonalisa: Produto = {
  id: "cabeceira-monalisa",

  nome: "Cabeceira - Monalisa",

  categoria: "Cabeceira",

  descricao:
    "As cabeceiras em tecido linho unem sofisticação, conforto e "+
    "consciência ambiental em um único produto. Com design atemporal "+
    "e toque agradável, o linho confere leveza e elegância ao ambiente, "+
    "valorizando o quarto com um visual acolhedor e contemporâneo. "+
    "Produzidas com materiais sustentáveis e processos responsáveis, "+
    "oferecem estrutura resistente, durabilidade e conforto no apoio, sem "+
    "abrir mão do compromisso com o meio ambiente. Uma escolha ideal "+
    "para quem busca beleza, qualidade e bem-estar, aliando estilo e "+
    "sustentabilidade no dia a dia.",

  imagem: cabeceira1,

  galeria: [
    cabeceira1,
    cabeceira2,
    cabeceira3
  ],

  caracteristicas: [
    "Tecido em Linho",
    "Tratamento anticupim",
    "Estrutura durável - Madeira de Reflorestamento",
  ],

  especificacoes: [

  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};