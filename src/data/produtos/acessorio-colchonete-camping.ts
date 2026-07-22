import type { Produto } from "../../types/produto";

import colchonete1 from "../../assets/produtos/acessorios/colchonete-camping/colchonete-camping-1.webp";
import colchonete2 from "../../assets/produtos/acessorios/colchonete-camping/colchonete-camping-2.webp";
import colchonete3 from "../../assets/produtos/acessorios/colchonete-camping/colchonete-camping-3.webp";



export const colchoneteCamping: Produto = {
  id: "acessorio-colchonete-camping",

  nome: "Colchonete Descanso Camping Sankonfort",

  categoria: "Acessórios",

  descricao:
    "Leve conforto e praticidade para seus momentos de descanso com o Colchonete Descanso Camping Sankonfort. Ideal para camping, viagens, praia, lazer ou uso doméstico, ele oferece uma superfície confortável e resistente para relaxar em qualquer lugar. "+
    "Produzido com materiais de alta qualidade e tratamento antiácaro, proporciona mais higiene e bem-estar, além da confiabilidade de uma marca aprovada pelo INMETRO, garantindo qualidade e segurança.",



  imagem: colchonete1,

  galeria: [
    colchonete1,
    colchonete2,
    colchonete3
  ],

  caracteristicas: [
    "Tratamento antiácaro",
    "Tecido resistente e de fácil limpeza",
    "Leve, prático e fácil de transportar",
    "Produto aprovado pelo INMETRO"
  ],

  especificacoes: [
    {
      label: "Medidas",
      value: "65 x 180 x 3 cm.",
    },
    {
      label: "Durabilidade",
      value: "Resistente e durável para o uso diário.",
    },
    {
      label: "Praticidade",
      value: "Ideal para camping, viagens, praia e momentos de lazer.",
    },
  ],

  dimensoes: [],

  destaque: false,
};