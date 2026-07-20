import type { Produto } from "../../types/produto";

import cervicalVisco1 from "../../assets/produtos/travesseiro-cervical-visco/cervical-visco-1.webp";


export const travesseiroCervical: Produto = {
  id: "travesseiro-cervical",

  nome: "Travesseiro de Cervical",

  categoria: "Travesseiros",

  descricao:
    "Sua curva cervical é ideal para quem necessita de uma prevenção para a coluna. Cuida da sua postura e da saúde da sua coluna. As espumas utilizadas nesse produto são de alto suporte e alta densidade. Tecnologia memory foam e latex. ",

  imagem: cervicalVisco1,

  galeria: [
    cervicalVisco1,
  ],

  caracteristicas: [
    "Ergonômico",
    "Terapêutico",
  ],

  especificacoes: [
    {
      label: "Tamanho",
      value: "Alto Suporte",
    },
    {
      label: "Dimensões",
      value: "12 x 37 x 53 cm e 14 x 37 x 53 cm",
    },
  ],

  dimensoes: [],

  destaque: false,
};