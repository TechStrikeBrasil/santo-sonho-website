import type { Produto } from "../../types/produto";

import cabeceira1 from "../../assets/produtos/cabeceiras/monalisa-1.webp";
import cabeceira2 from "../../assets/produtos/cabeceiras/monalisa-2.webp";
import cabeceira3 from "../../assets/produtos/cabeceiras/monalisa-3.webp";

import corBege from "../../assets/produtos/cores/bege-linho-victory.webp"
import corBranco from "../../assets/produtos/cores/branco-linhao.webp"
import corCinza from "../../assets/produtos/cores/cinza-linho-mount.webp"
import corMarrom from "../../assets/produtos/cores/linho-marrom-orpheum.webp"
import corPreto from "../../assets/produtos/cores/preto-linho-lookout.webp"


export const cabeceiraMonalisa: Produto = {
  id: "cabeceira-monalisa",

  nome: "Cabeceira - Monalisa",

  categoria: "Cabeceiras",

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

    cores: [
    {
      nome: "Bege Victory",
      imagem: corBege,
    },
    {
      nome: "Branco Linhão",
      imagem: corBranco,
    },
    {
      nome: "Cinza Mount",
      imagem: corCinza,
    },
    {
      nome: "Marrom Orpheum",
      imagem: corMarrom,
    },
    {
      nome: "Preto Lookout",
      imagem: corPreto,
    },
  ],

  caracteristicas: [
    "Tecido em Linho",
    "Tratamento anticupim",
    "Estrutura durável - Madeira de Reflorestamento",
  ],

  especificacoes: [

  ],

  dimensoes: [],

  destaque: false,
};