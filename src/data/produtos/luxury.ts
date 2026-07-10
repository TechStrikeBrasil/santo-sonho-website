import type { Produto, Dimensao } from "../../types/produto";

import luxury1 from "../../assets/produtos/luxury/luxury-1.webp";
import luxury2 from "../../assets/produtos/luxury/luxury-2.webp";
import luxury3 from "../../assets/produtos/luxury/luxury-3.webp";
import luxury4 from "../../assets/produtos/luxury/luxury-4.webp";
import luxury5 from "../../assets/produtos/luxury/luxury-5.webp";
import luxury6 from "../../assets/produtos/luxury/luxury-6.webp";


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

export const luxury: Produto = {
  id: "colchao-luxury",

  nome: "Colchão Luxury",

  categoria: "Colchão",

  descricao:
    "Um colchão de luxo em sua quinta geração, ainda mais sofisticado. Produzido com malha belga da renomada LAVA TEXTILES e acabamento lateral em "+
    "malha respirável Chablis Blanc com capitonê, garante frescor e durabilidade excepcionais. Seu Pillow Europeu com espuma Ultra Rebound e molas "+
    "ensacadas HSS oferece firmeza na medida certa, estimulando a circulação e mantendo o alinhamento ideal da coluna para noites realmente "+
    "revigorantes.",

  imagem: luxury1,

  galeria: [
    luxury1,
    luxury2,
    luxury3,
    luxury4,
    luxury5,
    luxury6,
  ],

  caracteristicas: [
    "Suporta até 160 kg por pessoa",
    "Espuma de Alta Qualidade UltraRebound (Ultrarebote)",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Suporta até 160 kg por pessoa.",
    },
    {
      label: "Tipo de molas",
      value: "Ensacadas Individualmente (High Support System).",
    },
    {
      label: "Tecido",
      value: "Malha Belga da Lava de alta gramatura com Chablis Blanc.",
    },
    {
      label: "Tratamento",
      value: "Antiácaro, antimofo, antialérgico, antifungos e antibactérias. Íons de Prata, fios de carbono (Grafeno), Coolmax, Aloe Vera e Purotex.",
    },
  ],

  dimensoes: dimensoesColchao("32 cm"),

  destaque: false,
};