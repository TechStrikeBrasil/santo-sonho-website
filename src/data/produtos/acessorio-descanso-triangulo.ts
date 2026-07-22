import type { Produto } from "../../types/produto";

import descanso1 from "../../assets/produtos/acessorios/triangulo/triangulo-1.webp";
import descanso2 from "../../assets/produtos/acessorios/triangulo/triangulo-2.webp";
import descanso3 from "../../assets/produtos/acessorios/triangulo/triangulo-3.webp";


export const descansoTriangulo: Produto = {
  id: "acessorio-triangulo",

  nome: "Descanso Triângulo Anatômico Sankonfort",

  categoria: "Acessórios",

  descricao:
    "O Descanso Triângulo Sankonfort foi desenvolvido para oferecer mais conforto, suporte e ergonomia durante o repouso. Ideal para o pós-operatório, ele auxilia na elevação do tronco, pernas e quadril, além de proporcionar uma posição mais confortável para leitura, amamentação e momentos de descanso. "+
    "Sua espuma perfilada ajuda a aliviar os pontos de pressão e favorece a circulação de ar entre o corpo e o apoio, proporcionando maior bem-estar durante o uso.",

  imagem: descanso1,

  galeria: [
    descanso1,
    descanso2,
    descanso3
  ],

  caracteristicas: [
    "Design anatômico em formato triangular",
    "Espuma perfilada que reduz os pontos de pressão",
    "Ideal para elevação do tronco, pernas e quadril",
    "Auxilia na correção postural",
    "Indicado para leitura, descanso e amamentação",
    "Disponível nas densidades D28 e D33",
    "Produto aprovado pelo INMETRO"
  ],

  especificacoes: [

  {
      label: "Medidas",
      value: "35 x 45 x 55 cm",
    },
    {
      label: "Revestimento",
      value: "Revestimento com manta perfilada",
    },
  ],

  dimensoes: [],

  destaque: false,
};