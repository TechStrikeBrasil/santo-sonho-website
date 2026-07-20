import type { Produto } from "../../types/produto";

import corpoVisco1 from "../../assets/produtos/travesseiro-de-corpo/travesseiro-corpo-1.webp";
import corpoVisco2 from "../../assets/produtos/travesseiro-de-corpo/travesseiro-corpo-2.webp";
import corpoVisco3 from "../../assets/produtos/travesseiro-de-corpo/travesseiro-corpo-3.webp";

export const travesseiroCorpo: Produto = {
  id: "travesseiro-corpo",

  nome: "Travesseiro de Corpo",

  categoria: "Travesseiros",

  descricao:
    "Este é um travesseiro de corpo em fibra siliconizada de alto suporte e fronha em percal 180 fios com viés azul em toda sua volta. Todos com embalagem de PVC e rico em acabamentos.",

  imagem: corpoVisco1,

  galeria: [
    corpoVisco1,
    corpoVisco2,
    corpoVisco3
  ],

  caracteristicas: [
    "Companheiro do Sono",
    "Aconchegante",
  ],

  especificacoes: [
    {
      label: "Tamanho",
      value: "40cm x 130cm.",
    },
    {
      label: "Enchimento",
      value: "100% Fibra de Poliéster.",
    },
    {
      label: "Capa",
      value: "100% Algodão Percal 180 Fios.",
    },
  ],

  dimensoes: [],

  destaque: false,
};