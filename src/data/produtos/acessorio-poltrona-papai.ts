import type { Produto, Dimensao } from "../../types/produto";

import poltronaPapai1 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-1.webp";
import poltronaPapai2 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-2.webp";
import poltronaPapai3 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-3.webp";
import poltronaPapai4 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-4.webp";
import poltronaPapai5 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-5.webp";
import poltronaPapai6 from "../../assets/produtos/acessorios/poltrona-papai/poltrona-papai-6.webp";

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const poltronaPapai: Produto = {
  id: "acessorio-poltrona-papai",

  nome: "Poltrona do Papai Relax",

  categoria: "Acessórios",

  descricao:
    "Agora, você pode desfrutar de um momento relaxante e totalmente revigorante com a Poltrona do Papai da Relaxmedic, um produto especialmente desenvolvido para proporcionar uma sensação única de bem-estar. "+
    "Possui 8 motores de vibração, sendo 2 na região dos ombros, 2 na região da lombar, 2 na região dos glúteos e 2 na região da panturrilha.",

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
    "5 Ritmos de massagem"
  ],

  especificacoes: [
    {
      label: "Modelo",
      value: "RM-PM2121A B (preta) / RM-PM2121A BR (marrom)"
    },
    {
      label: "Dimensões",
      value: "Fechada: 101,5 x 79 x 97 / Reclinada: 79,5 x 79 x 164cm"
    },
    {
      label: "Suporte",
      value: "Suporta até 110 kg"
    },
    {
      label: "Densidade",
      value: "Espuma 20D"
    },
    {
      label: "Alimentação",
      value: "Bivolt (110/220v)"
    }

  ],

  dimensoes: [],

  destaque: false,
};