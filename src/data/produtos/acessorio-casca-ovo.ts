import type { Produto } from "../../types/produto";

import cascaOvo1 from "../../assets/produtos/acessorios/casca-ovo/casca-ovo-1.webp";
import cascaOvo2 from "../../assets/produtos/acessorios/casca-ovo/casca-ovo-2.webp";
import cascaOvo3 from "../../assets/produtos/acessorios/casca-ovo/casca-ovo-3.webp";
import cascaOvo4 from "../../assets/produtos/acessorios/casca-ovo/casca-ovo-4.webp";



export const cascaOvo: Produto = {
  id: "acessorio-casca-ovo",

  nome: "Descanso Antiescaras Perfilado Sankonfort",

  categoria: "Acessórios",

  descricao:
    "O Descanso Antiescaras Sankonfort foi desenvolvido para proporcionar mais conforto e auxiliar na prevenção de escaras em pessoas que permanecem acamadas ou na mesma posição por longos períodos. Sua superfície perfilada em espuma ondulada ajuda a distribuir melhor a pressão do corpo e favorece a circulação de ar entre o usuário e o colchão. "+
    "Fabricado com materiais de alta qualidade e aprovado pelo INMETRO, é a solução ideal para oferecer mais bem-estar, segurança e conforto no dia a dia.",

  imagem: cascaOvo1,

  galeria: [
    cascaOvo1,
    cascaOvo2,
    cascaOvo3,
    cascaOvo4
  ],

  caracteristicas: [
    "Superfície perfilada (espuma ondulada)",
    "Auxilia na prevenção de escaras",
    "Favorece a circulação de ar",
    "Proporciona maior conforto durante o repouso",
    "Disponível nas densidades D28 e D33",
    "Produto aprovado pelo INMETRO"
  ],

  especificacoes: [
    {
      label: "Medidas disponíveis",
      value: "85x185x4 cm e 135x185x4 cm",
    },
    {
      label: "Indicação",
      value: "Indicado para pessoas acamadas ou com mobilidade reduzida.",
    },
    {
      label: "Conforto",
      value: "Contribui para maior conforto durante longos períodos de repouso.",
    },
    {
      label: "Praticidade",
      value: "Resistente, prático e de fácil utilização.",
    },    
  ],

  dimensoes: [],

  destaque: false,
};