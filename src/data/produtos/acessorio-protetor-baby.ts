import type { Produto } from "../../types/produto";

import protetorBaby1 from "../../assets/produtos/acessorios/protetor-baby/protetor-baby-1.webp";
import protetorBaby2 from "../../assets/produtos/acessorios/protetor-baby/protetor-baby-2.webp";
import protetorBaby3 from "../../assets/produtos/acessorios/protetor-baby/protetor-baby-3.webp";

export const protetorBaby: Produto = {
  id: "acessorio-protetor-baby",

  nome: "Protetor de Colchão para Berço Impermeável Matelassê 100% Algodão",

  categoria: "Acessórios",

  descricao:
    "Garanta mais proteção, conforto e higiene para o sono do seu bebê com o Protetor de Colchão para Berço Impermeável Matelassê. Produzido com tecido 100% algodão, oferece toque macio e aconchegante, "+ 
    "enquanto sua camada impermeável protege o colchão contra líquidos, umidade e sujeiras do dia a dia."+
    "Com tratamento antimicrobiano e elástico em toda a volta, proporciona um ajuste perfeito ao colchão, mantendo o ambiente de descanso mais limpo, seguro e saudável.",

  imagem: protetorBaby1,

  galeria: [
    protetorBaby1,
    protetorBaby2,
    protetorBaby3
  ],

  caracteristicas: [
    "Tecido superior 100% algodão",
    "Acabamento em matelassê",
    "Proteção impermeável",
    "Tratamento antimicrobiano",
    "Enchimento em manta de poliéster siliconizada",
    "Forro impermeável em PVC",
    "Elástico em toda a volta para melhor fixação",
    "Fácil de colocar, remover e lavar"
  ],

  especificacoes: [
    {
      label: "Proteção Extra",
      value: "Protege o colchão contra líquidos, manchas e umidade."
    },
    {
      label: "Tratamento",
      value: "Auxilia no combate à proliferação de ácaros, fungos e bactérias."
    },
    {
      label: "Medidas disponíveis",
      value: "Fabricamos em diversas medidas para berço."
    },

  ],

  dimensoes: [],

  destaque: false,
};