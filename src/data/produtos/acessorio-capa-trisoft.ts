import type { Produto } from "../../types/produto";

import capaTrisoft1 from "../../assets/produtos/acessorios/capa-travesseiro-trisoft/capa-trisoft-1.webp";
import capaTrisoft2 from "../../assets/produtos/acessorios/capa-travesseiro-trisoft/capa-trisoft-2.webp";
import capaTrisoft3 from "../../assets/produtos/acessorios/capa-travesseiro-trisoft/capa-trisoft-3.webp";
import capaTrisoft4 from "../../assets/produtos/acessorios/capa-travesseiro-trisoft/capa-trisoft-4.webp";
import capaTrisoft5 from "../../assets/produtos/acessorios/capa-travesseiro-trisoft/capa-trisoft-5.webp";


export const capaTrisoft: Produto = {
  id: "acessorio-capa-trisoft",

  nome: "Capa Impermeável de Travesseiro Trisoft",

  categoria: "Acessórios",

  descricao:
    "Transforme suas noites de sono com a Capa Impermeável de Travesseiro, uma escolha inteligente que proporciona conforto supremo, proteção avançada e durabilidade excepcional. Seu principal benefício é a impermeabilidade, " +
    "assegurando que seu travesseiro permaneça seco e protegido contra líquidos. Além disso, a capa é silenciosa, não esquenta e oferece uma sensação suave ao toque, proporcionando noites de sono revigorantes.",

  imagem: capaTrisoft1,

  galeria: [
    capaTrisoft1,
    capaTrisoft2,
    capaTrisoft3,
    capaTrisoft4,
    capaTrisoft5
  ],

  caracteristicas: [
    "Toque Macio",
    "100% Algodão",
    "Lavável na Máquina",
    "Sem Plástico"
  ],

  especificacoes: [
    {
      label: "Medidas",
      value: "50cm x 70cm"
    },
    {
      label: "Tecido",
      value: "Confeccionada em percal 200 fios e 100% algodão, esta capa proporciona uma experiência suave, elevando o conforto do seu travesseiro."
    },
    {
      label: "Tratamento",
      value: "Antiácaro, Antimofos e Hipoalergênico."
    },    
  ],

  dimensoes: [],

  destaque: false,
};