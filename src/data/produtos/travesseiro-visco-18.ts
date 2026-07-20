import type { Produto } from "../../types/produto";

import visco1 from "../../assets/produtos/travesseiro-visco/visco-1.webp";
import visco2 from "../../assets/produtos/travesseiro-visco/visco-2.webp";
import visco3 from "../../assets/produtos/travesseiro-visco/visco-3.webp";

export const travesseiroVisco18: Produto = {
  id: "travesseiro-visco-18",

  nome: "Travesseiro Visco 18 cm",

  categoria: "Travesseiros",

  descricao:
    "Com tecnologia americana, o Travesseiro Visco, tem espuma D30 macia e sedosa e um excelente suporte para cabeça. Possui fronha de microfibra de alta gramatura com faixa de cetim, tornando-o lindo e atrativo. Alto suporte Tecnologia americana Termossensível.",

  imagem: visco1,

  galeria: [
    visco1,
    visco2,
    visco3
  ],

  caracteristicas: [
    "Tecnologia americana",
    "Toque Aveludado",
  ],

  especificacoes: [
    {
      label: "Espuma",
      value: "Espuma Viscoelática Memory Foam",
    },
    {
      label: "Tamanho",
      value: "18x40x60 cm",
    },
  ],

  dimensoes: [],

  destaque: false,
};