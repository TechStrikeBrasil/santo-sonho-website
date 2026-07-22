import type { Produto } from "../../types/produto";

import puffSanko1 from "../../assets/produtos/acessorios/puff-sankonfort/sanko-1.webp";
import puffSanko2 from "../../assets/produtos/acessorios/puff-sankonfort/sanko-2.webp";
import puffSanko3 from "../../assets/produtos/acessorios/puff-sankonfort/sanko-3.webp";
import puffSanko4 from "../../assets/produtos/acessorios/puff-sankonfort/sanko-4.webp";
import puffSanko5 from "../../assets/produtos/acessorios/puff-sankonfort/sanko-5.webp";
import puffSanko6 from "../../assets/produtos/acessorios/puff-sankonfort/sanko-6.webp";

export const puffSankonfort: Produto = {
  id: "acessorio-puff-sankonfort",

  nome: "Puff Dobrável Sankonfort Solteiro e Casal",

  categoria: "Acessórios",

  descricao:
    "Tenha mais praticidade e conforto em qualquer ambiente com o Multiuso Dobrável Sankonfort. Versátil e funcional, ele pode ser utilizado como sofá e transformado facilmente em colchão, " + 
    "sendo ideal para salas, quartos, apartamentos, viagens e espaços compactos." +
    "Disponível nas versões solteiro e casal, adapta-se às diferentes necessidades do dia a dia. Seu revestimento resistente e seu design moderno proporcionam conforto, praticidade e facilidade para guardar ou transportar.",

  imagem: puffSanko1,

  galeria: [
    puffSanko1,
    puffSanko2,
    puffSanko3,
    puffSanko4,
    puffSanko5,
    puffSanko6

  ],

  caracteristicas: [
    "Pode ser utilizado como sofá ou colchão",
    "Versão solteiro: sofá individual",
    "Versão casal: sofá de 2 lugares",
    "Estrutura dobrável e fácil de manusear",
    "Revestimento composto por 56% fibra olefínica e 44% poliéster",
    "Disponível nas cores marrom e cinza"
  ],

  especificacoes: [
    {
      label: "Medidas Puff Solteiro",
      value: "63 x 63 x 36 cm.",
    },
    {
      label: "Medidas Puff Casal",
      value: "63 x 120 x 36 cm.",
    },
    {
      label: "Benefícios",
      value: "Combina conforto, funcionalidade e versatilidade.",
    },
    {
      label: "Fácil Transporte",
      value: "Fácil de guardar e transportar.",
    },
  ],

  dimensoes: [],

  destaque: false,
};