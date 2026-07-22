import type { Produto } from "../../types/produto";

import poltronaPapai1 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-1.webp";
import poltronaPapai2 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-2.webp";
import poltronaPapai3 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-3.webp";
import poltronaPapai4 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-4.webp";
import poltronaPapai5 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-5.webp";
import poltronaPapai6 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-6.webp";

export const poltronaPapai: Produto = {
  id: "acessorio-poltrona-papai",

  nome: "Poltrona do Papai Massageadora Reclinável Relaxmedic",

  categoria: "Acessórios",

  descricao:
    "Desfrute de momentos de conforto e relaxamento com a Poltrona do Papai Massageadora Relaxmedic. Com 8 motores de vibração, reclinação ajustável de 90° a 135° e controle remoto integrado, ela proporciona uma experiência personalizada para aliviar as tensões do dia a dia e renovar suas energias. "+
    "Seu design anatômico e elegante combina com qualquer ambiente, tornando-se a escolha ideal para quem busca mais conforto, bem-estar e qualidade de vida.",

  imagem: poltronaPapai1,

  galeria: [
    poltronaPapai1,
    poltronaPapai2,
    poltronaPapai3,
    poltronaPapai4,
    poltronaPapai5,
    poltronaPapai6

  ],

  caracteristicas: [
    "8 Motores de Vibração",
    "Massagem em ombros, costas, lombar, glúteos e panturrilhas",
    "5 Programas de massagem",
    "3 níveis de intensidade",
    "Reclinação manual de 90° a 135°",
    "Temporizador automático de 5 a 25 minutos",
    "Controle remoto multifuncional integrado",
    "Design ergonômico e confortável"
  ],

  especificacoes: [
    {
      label: "Descanso",
      value: "Auxilia no alívio do estresse e da tensão muscular"
    },
    {
      label: "Aumento do Bem Estar",
      value: "Promove relaxamento e sensação de bem-estar."
    },
    {
      label: "Praticidade",
      value: "Ideal para uso residencial, oferecendo praticidade sempre que desejar uma massagem."
    }
  ],
  dimensoes: [],

  destaque: false,
};