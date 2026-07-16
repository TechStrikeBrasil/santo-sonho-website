import type { Produto, Dimensao } from "../../types/produto";

import toquePessego1 from "../../assets/produtos/travesseiro-toque-pessego/pessego-1.webp";
import toquePessego2 from "../../assets/produtos/travesseiro-toque-pessego/pessego-2.webp";
import toquePessego3 from "../../assets/produtos/travesseiro-toque-pessego/pessego-3.webp";
import toquePessego4 from "../../assets/produtos/travesseiro-toque-pessego/pessego-4.webp";
import toquePessego5 from "../../assets/produtos/travesseiro-toque-pessego/pessego-5.webp";

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const travesseiroToquePessego: Produto = {
  id: "travesseiro-toque-pessego",

  nome: "Travesseiro Toque de Pêssego",

  categoria: "Travesseiros",

  descricao:
    "Um delicioso tecido extra soft, extremamente macio e gostoso ao toque que lembra a macia pele do pêssego associado com a " +
    "fibra de poliéster siliconada e entrelaçada conferem um travesseiro de suporte médio, confortável e de alta durabilidade. "+
    "O Melhor Travesseiro do Mundo é recheado com fibras de poliéster siliconizadas e entrelaçadas. Esta inovadora tecnologia garante que seu travesseiro tenha maior poder de recuperação.",

  imagem: toquePessego1,

  galeria: [
    toquePessego1,
    toquePessego2,
    toquePessego3,
    toquePessego4,
    toquePessego5
  ],

  caracteristicas: [
    "Não Alérgico",
    "Extra macio",
  ],

  especificacoes: [
    {
      label: "Tamanho",
      value: "50 x 70 cm",
    },
    {
      label: "Lavagem",
      value: "Pode ser lavado à mão ou à máquina, seguindo as instruções da etiqueta.",
    },
  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};