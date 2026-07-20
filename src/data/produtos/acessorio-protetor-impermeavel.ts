import type { Produto } from "../../types/produto";

import protetorImpermeavel1 from "../../assets/produtos/acessorios/protetor-impermeavel/protetor-impermeavel-1.webp";
import protetorImpermeavel2 from "../../assets/produtos/acessorios/protetor-impermeavel/protetor-impermeavel-2.webp";
import protetorImpermeavel3 from "../../assets/produtos/acessorios/protetor-impermeavel/protetor-impermeavel-3.webp";

export const protetorImpermeavel: Produto = {
  id: "acessorio-protetor-impermeavel",

  nome: "Protetor Impermeável para Colchão",

  categoria: "Acessórios",

  descricao:
    "Protetor em Matelassê IMPERMEÁVEL para colchão. Fabricado em Algodão e Poliéster.",

  imagem: protetorImpermeavel1,

  galeria: [
    protetorImpermeavel1,
    protetorImpermeavel2,
    protetorImpermeavel3
  ],

  caracteristicas: [
  ],

  especificacoes: [
    {
      label: "Composição",
      value: "67% algodão | 33% poliéster"
    },
    {
      label: "Enchimento",
      value: "Manta de poliéster siliconada"
    },
    {
      label: "Tamanhos",
      value: "Disponível em diversos tamanhos."
    },

  ],

  dimensoes: [],

  destaque: false,
};