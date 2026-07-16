import type { Produto, Dimensao } from "../../types/produto";

import descanso1 from "../../assets/produtos/acessorios/triangulo/triangulo-1.webp";
const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const descansoTriangulo: Produto = {
  id: "acessorio-triangulo",

  nome: "Descanso Triângulo",

  categoria: "Acessórios",

  descricao:
    "O Descanso Triângulo é indicado para o pós-cirúrgico, proporcionando apoio para repouso e elevação do tronco, "+
    "pernas e/ou quadril, além de ser adequado para amamentação. Também auxilia na correção postural, ajudando a alinhar a coluna e a melhorar a postura de quem tem o hábito de ler na cama ou assistir televisão." +
    "Sua camada de espuma ondulada favorece a circulação de ar entre o corpo e o apoio, garantindo mais conforto, bem-estar e qualidade no descanso.",

  imagem: descanso1,

  galeria: [
    descanso1
  ],

  caracteristicas: [
    "Auxilia na correção da postura",
    "Frescor e bem estar",
  ],

  especificacoes: [

  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};