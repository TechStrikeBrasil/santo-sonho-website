import type { Produto } from "../../types/produto";

import shiatsu1 from "../../assets/produtos/acessorios/shiatsu/shiatsu-1.webp";
import shiatsu2 from "../../assets/produtos/acessorios/shiatsu/shiatsu-2.webp";
import shiatsu3 from "../../assets/produtos/acessorios/shiatsu/shiatsu-3.webp";

export const shiatsu: Produto = {
  id: "acessorio-shiatsu",

  nome: "Almofada Massageadora Shiatsu com Aquecimento",

  categoria: "Acessórios",

  descricao:
    "Relaxe onde estiver com a Almofada Massageadora Shiatsu. Compacta, portátil e fácil de usar, ela conta com 4 cabeças massageadoras que reproduzem " + 
    "os movimentos circulares da tradicional massagem Shiatsu, proporcionando alívio da tensão muscular, conforto e bem-estar." +
    "Com aquecimento opcional, ajuda a estimular a circulação sanguínea e intensifica a sensação de relaxamento. Ideal para massagear pescoço, costas, lombar, ombros e pernas, podendo ser utilizada em casa, no escritório ou até mesmo no carro.",


  imagem: shiatsu1,

  galeria: [
    shiatsu1,
    shiatsu2,
    shiatsu3
  ],

  caracteristicas: [
    "4 cabeças de massagem Shiatsu",
    "Aquecimento opcional para maior conforto",
    "Design ergonômico que se adapta ao corpo",
    "Tiras elásticas para fixação em cadeiras e bancos",
    "Leve, portátil e fácil de transportar",
    "Bivolt",
    "Acompanha adaptador veicular, cabo de alimentação e manual de instruções"
  ],

  especificacoes: [
    {
      label: "Benefícios",
      value: "Auxilia no alívio da tensão e das dores musculares.",
    },
    {
      label: "Uso",
      value: "Ideal para uso em casa, no escritório ou durante viagens.",
    },
    
  ],

  dimensoes: [],

  destaque: false,
};