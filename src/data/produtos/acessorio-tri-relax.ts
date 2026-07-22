import type { Produto } from "../../types/produto";

import triRelax1 from "../../assets/produtos/acessorios/trirelax/tri-relax-1.webp";
import triRelax2 from "../../assets/produtos/acessorios/trirelax/tri-relax-2.webp";
import triRelax3 from "../../assets/produtos/acessorios/trirelax/tri-relax-3.webp";
import triRelax4 from "../../assets/produtos/acessorios/trirelax/tri-relax-4.webp";


export const triRelax: Produto = {
  id: "acessorio-tri-relax",

  nome: "Tri-Relax Sankonfort - Suporte Anatômico Multifuncional",

  categoria: "Acessórios",

  descricao:
    "O Tri-Relax Sankonfort foi desenvolvido para proporcionar mais conforto, ergonomia e qualidade de vida. Com design anatômico e diversas possibilidades de posicionamento, oferece o apoio ideal para elevar a cabeça, tronco, joelhos e pernas, auxiliando em um descanso mais confortável."+
    "Sua inclinação é recomendada para quem busca aliviar desconfortos causados por ronco, refluxo gastroesofágico, má circulação e varizes, além de ser uma excelente opção para leitura, descanso e amamentação.",

  imagem: triRelax1,

  galeria: [
    triRelax1,
    triRelax2,
    triRelax3,
    triRelax4
  ],

  caracteristicas: [
    "Design anatômico e multifuncional",
    "Espuma perfilada que ajuda a aliviar os pontos de pressão",
    "Permite diferentes posições de apoio e elevação",
    "Inclinação ideal para descanso, leitura e amamentação",
    "Revestimento em algodão e poliéster",
    "Espuma 100% poliuretano",
    "Produto aprovado pelo INMETRO"
  ],

  especificacoes: [
    {
      label: "Medidas Disponíveis",
      value: "60 x 45 x 23 cm e 60 x 92 x 16 cm",
    },
    {
      label: "Benefícios",
      value: "Auxilia na redução do ronco e dos sintomas de refluxo.",
    },
    {
      label: "Postura",
      value: "Contribui para uma postura mais confortável durante o descanso.",
    },
    
  ],

  dimensoes: [],

  destaque: false,
};