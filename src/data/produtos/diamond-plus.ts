import type { Produto, Dimensao } from "../../types/produto";

import diamond1 from "../../assets/produtos/diamond-plus/diamond-1.webp";
import diamond2 from "../../assets/produtos/diamond-plus/diamond-2.webp";
import diamond3 from "../../assets/produtos/diamond-plus/diamond-3.webp";
import diamond4 from "../../assets/produtos/diamond-plus/diamond-4.webp";
import diamond5 from "../../assets/produtos/diamond-plus/diamond-5.webp";
import diamond6 from "../../assets/produtos/diamond-plus/diamond-6.webp";


const medidasPadrao: Dimensao[] = [
  { label: "Solteiro", value: "0,88 x 1,88 m" },
  { label: "Solteirão", value: "0,96 x 2,03 m" },
  { label: "Viúva", value: "1,28 x 1,88 m" },
  { label: "Casal", value: "1,38 x 1,88 m" },
  { label: "Queen", value: "1,58 x 1,98 m" },
  { label: "King Size", value: "1,93 x 2,03 m" },
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const diamondPlus: Produto = {
  id: "colchao-diamond-plus",

  nome: "Colchão Diamond Plus",

  categoria: "Colchão",

  descricao:
    "O Colchão Diamond Plus foi desenvolvido para oferecer conforto, estabilidade e durabilidade. "+
    "Sua estrutura com molas ensacadas individualmente de aço 2.0 proporciona excelente sustentação, reduz a transferência de movimentos e garante noites de sono mais tranquilas. " +
    "Conta ainda com tratamento antibacteriano, promovendo um ambiente de descanso mais limpo e saudável. Com acabamento refinado e suporte para até 250 kg por pessoa, o Diamond Plus é a escolha ideal para quem busca qualidade, resistência e conforto em um único colchão.",
    
  imagem: diamond1,

  galeria: [
    diamond1,
    diamond2,
    diamond3,
    diamond4,
    diamond5,
    diamond6,
  ],

  caracteristicas: [
    "Acabamento Premium",
    "Tratamento antibacteriano",
    "Excelente estabilidade durante o sono",
    "Alta resistência e durabilidade"
  ],

  especificacoes: [
    {
      label: "Estofamento",
      value: "Memovisco Gel D45, Látex Talalay.",
    },
    {
      label: "Tipo de molas",
      value: "Molas ensacadas individualmente em aço 2.0",
    },
    {
      label: "Suporte",
      value: "Até 250 kg por pessoa.",
    },
    {
      label: "Tratamento",
      value: "Antibacteriano.",
    },
  ],

  dimensoes: dimensoesColchao("35 cm"),

  destaque: false,
};