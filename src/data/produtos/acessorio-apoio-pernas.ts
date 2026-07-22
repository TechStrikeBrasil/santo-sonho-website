import type { Produto } from "../../types/produto";

import apoioPernas1 from "../../assets/produtos/acessorios/apoio-pernas/apoio-pernas-1.webp";
import apoioPernas2 from "../../assets/produtos/acessorios/apoio-pernas/apoio-pernas-2.webp";
import apoioPernas3 from "../../assets/produtos/acessorios/apoio-pernas/apoio-pernas-3.webp";
import apoioPernas4 from "../../assets/produtos/acessorios/apoio-pernas/apoio-pernas-4.webp";
import apoioPernas5 from "../../assets/produtos/acessorios/apoio-pernas/apoio-pernas-5.webp";


export const apoioPernas: Produto = {
  id: "acessorio-apoio-pernas",

  nome: "Almofada para Pernas Ortopédica com Espuma de Memória",

  categoria: "Acessórios",

  descricao:
    "Tenha noites de sono mais confortáveis com a Almofada para Pernas Ortopédica. Desenvolvida com espuma de memória (Memory Foam), ela se adapta ao formato do corpo, proporcionando o alinhamento correto das pernas, joelhos e coluna, além de auxiliar no alívio da pressão e das tensões musculares. "+
    "Ideal para quem busca mais conforto ao dormir ou descansar, sua capa removível e lavável garante praticidade e higiene no dia a dia.",

  imagem: apoioPernas1,

  galeria: [
    apoioPernas1,
    apoioPernas2,
    apoioPernas3,
    apoioPernas4,
    apoioPernas5
  ],

  caracteristicas: [
    "Espuma de memória (Memory Foam)",
    "Auxilia no alinhamento das pernas, joelhos e coluna",
    "Design ergonômico e confortável",
    "Capa removível e lavável",
    "Lavável e de fácil higienização"
  ],

  especificacoes: [
    {
      label: "Lavável",
      value: "Capa removível e lavável."
    },
    {
      label: "Resistente",
      value: "Material resistente e de alta durabilidade."
    },
    {
      label: "Praticidade",
      value: "Leve, portátil e fácil de transportar."
    },
  ],

  dimensoes: [],

  destaque: false,
};