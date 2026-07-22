import type { Produto } from "../../types/produto";

import protetorImpermeavel1 from "../../assets/produtos/acessorios/protetor-impermeavel/protetor-impermeavel-1.webp";
import protetorImpermeavel2 from "../../assets/produtos/acessorios/protetor-impermeavel/protetor-impermeavel-2.webp";
import protetorImpermeavel3 from "../../assets/produtos/acessorios/protetor-impermeavel/protetor-impermeavel-3.webp";

export const protetorImpermeavel: Produto = {
  id: "acessorio-protetor-impermeavel",

  nome: "Protetor de Colchão Impermeável Central do Alérgico",

  categoria: "Acessórios",

  descricao:
    "Proteja seu colchão contra líquidos, sujeiras e o desgaste diário com o Protetor de Colchão Impermeável Matelassê. Produzido com tecido de toque macio e acabamento matelassado, ele proporciona mais conforto durante o sono, além de aumentar a durabilidade do colchão. "+
    "Sua camada impermeável impede a passagem de líquidos, ajudando a manter o colchão limpo, protegido e conservado por muito mais tempo.",

  imagem: protetorImpermeavel1,

  galeria: [
    protetorImpermeavel1,
    protetorImpermeavel2,
    protetorImpermeavel3
  ],

  caracteristicas: [
    "Acabamento em matelassê",
    "Proteção impermeável",
    "Toque macio e confortável",
    "Tecido superior: 67% algodão e 33% poliéster",
    "Enchimento em manta de poliéster siliconada",
    "Camada impermeável em PVC",
    "Fácil de colocar, remover e lavar"
  ],

  especificacoes: [
    {
      label: "Durabilidade",
      value: "Prolonga a vida útil do colchão."
    },
    {
      label: "Praticidade",
      value: "Prático, resistente e de fácil manutenção."
    },
    {
      label: "Proteção",
      value: "Protege contra líquidos, sujeiras e acidentes do dia a dia."
    },
    {
      label: "Medidas disponíveis",
      value: "Fabricado nos tamanhos Solteiro, Casa, Queen e King."
    },
  ],

  dimensoes: [],

  destaque: false,
};