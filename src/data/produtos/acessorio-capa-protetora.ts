import type { Produto } from "../../types/produto";

import capaProtetora1 from "../../assets/produtos/acessorios/capa-protetora/capa-protetora-1.webp";
import capaProtetora2 from "../../assets/produtos/acessorios/capa-protetora/capa-protetora-2.webp";
import capaProtetora3 from "../../assets/produtos/acessorios/capa-protetora/capa-protetora-3.webp";

export const capaProtetora: Produto = {
  id: "acessorio-capa-protetora",

  nome: "Capa Protetora para Travesseiro em Fibra de Bambu Impermeável",

  categoria: "Acessórios",

  descricao:
    "Proteja seu travesseiro e tenha noites de sono mais saudáveis com a Capa Protetora para Travesseiro em Fibra de Bambu. Desenvolvida com tecido de toque macio e agradável, ela possui tratamento com Íons de Prata, que ajuda a combater ácaros, fungos, bactérias e outros agentes prejudiciais à saúde. "+
    "Seu acabamento repelente a líquidos contribui para prolongar a vida útil do travesseiro, enquanto o fechamento em zíper garante praticidade e proteção completa.",

  imagem: capaProtetora1,

  galeria: [
    capaProtetora1,
    capaProtetora2,
    capaProtetora3
  ],

  caracteristicas: [
    "Tecido com fibra de bambu",
    "Tratamento com Íons de Prata",
    "Repelente a líquidos",
    "Fechamento com zíper",
    "Lavável e de fácil higienização"
  ],

  especificacoes: [
    {
      label: "Medidas",
      value: "50x70 cm"
    },
    {
      label: "Higiênico",
      value: "Proporciona mais higiene, conforto e durabilidade ao travesseiro."
    },
    {
      label: "Tratamento",
      value: "Proteção antiácaro, antialérgica e antibacteriana."
    },
  ],

  dimensoes: [],

  destaque: false,
};