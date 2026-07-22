import type { Produto } from "../../types/produto";

import protetorMalha1 from "../../assets/produtos/acessorios/protetor-malha/protetor-malha-1.webp";
import protetorMalha2 from "../../assets/produtos/acessorios/protetor-malha/protetor-malha-2.webp";
import protetorMalha3 from "../../assets/produtos/acessorios/protetor-malha/protetor-malha-3.webp";

export const protetorMalha: Produto = {
  id: "acessorio-protetor-malha",

  nome: "Protetor de Colchão Impermeável Zambrano em Malha",

  categoria: "Acessórios",

  descricao:
    "Mantenha seu colchão protegido por muito mais tempo com o Protetor de Colchão Impermeável Zambrano. Produzido em malha de alta qualidade, oferece um toque macio, confortável e silencioso, protegendo contra líquidos, manchas, poeira e o desgaste do uso diário. "+
    "Sua tecnologia impermeável impede a passagem de líquidos sem comprometer o conforto, enquanto o tecido respirável contribui para noites de sono mais agradáveis e higiênicas.",

  imagem: protetorMalha1,

  galeria: [
    protetorMalha1,
    protetorMalha2,
    protetorMalha3
  ],

  caracteristicas: [
    "Tecido em malha macia e confortável",
    "Proteção impermeável contra líquidos e manchas",
    "Auxilia na inibição da proliferação de ácaros",
    "Silencioso, sem ruídos durante o uso",
    "Adaptável a diferentes alturas de colchão",
    "Fácil de colocar, remover e lavar"
  ],

  especificacoes: [
    {
      label: "Durabilidade",
      value: "Prolonga a vida útil do colchão."
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