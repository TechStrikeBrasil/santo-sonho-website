import type { Produto, Dimensao } from "../../types/produto";

import bambuFirme1 from "../../assets/produtos/travesseiro-bambu-firme/bambu-1.webp";
import bambuFirme2 from "../../assets/produtos/travesseiro-bambu-firme/bambu-2.webp";
import bambuFirme3 from "../../assets/produtos/travesseiro-bambu-firme/bambu-3.webp";
import bambuFirme4 from "../../assets/produtos/travesseiro-bambu-firme/bambu-4.webp";
import bambuFirme5 from "../../assets/produtos/travesseiro-bambu-firme/bambu-5.webp";

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const travesseiroBambuFirme: Produto = {
  id: "travesseiro-bambu-firme",

  nome: "Travesseiro Bambú Firme",

  categoria: "Travesseiros",

  descricao:
    "O Travesseiro de Bambu é confeccionado com tecido ecológico, " +
    "feito a partir de uma matéria-prima sustentável que se renova naturalmente, "+
    "sem causar impacto ambiental. As fibras de Bambu oferecem durabilidade superior, excelente permeabilidade e um toque incrivelmente macio. "+
    "Este material absorve a umidade de forma mais eficiente que o algodão, proporcionando um conforto térmico excepcional, adaptando-se às diferentes "+
    "temperaturas: até 2 graus mais frio no verão e até 2 graus mais quente no inverno. Além disso, o Bambu possui propriedades antibacterianas naturais.",

  imagem: bambuFirme1,

  galeria: [
    bambuFirme1,
    bambuFirme2,
    bambuFirme3,
    bambuFirme4,
    bambuFirme5
  ],

  caracteristicas: [
    "Proteção Anti-UV",
    "Alta absorção de umidade e transpirabilidade",
  ],

  especificacoes: [
    {
      label: "Tecido",
      value: "Toque macio, leveza e fluidez",
    },
    {
      label: "Tratamento",
      value: "Antiácaros e Hipoalergênico",
    },
    {
      label: "Lavagem",
      value: "Lavável à mão ou à máquina, seguindo as instruções da etiqueta.",
    },
  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};