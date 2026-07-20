import type { Produto } from "../../types/produto";

import capaProtetora1 from "../../assets/produtos/acessorios/capa-protetora/capa-protetora-1.webp";

export const capaProtetora: Produto = {
  id: "acessorio-capa-protetora",

  nome: "Capa Protetora Para Travesseiro Bambu Top",

  categoria: "Acessórios",

  descricao:
    "Capa Antiácaro e Antialérgica Para Travesseiro Junior Confeccionada em Tecido Com Fibra De Bambu.",

  imagem: capaProtetora1,

  galeria: [
    capaProtetora1
  ],

  caracteristicas: [
    "Toque Macio",
  ],

  especificacoes: [
    {
      label: "Tamanho",
      value: "45cm x 65 cm"
    },
  ],

  dimensoes: [],

  destaque: false,
};