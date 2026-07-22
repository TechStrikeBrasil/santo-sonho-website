import type { Produto } from "../../types/produto";

import esteira1 from "../../assets/produtos/acessorios/esteira-massageadora/esteira-massageadora-1.webp";
import esteira2 from "../../assets/produtos/acessorios/esteira-massageadora/esteira-massageadora-2.webp";
import esteira3 from "../../assets/produtos/acessorios/esteira-massageadora/esteira-massageadora-3.webp";
import esteira4 from "../../assets/produtos/acessorios/esteira-massageadora/esteira-massageadora-4.webp";
import esteira5 from "../../assets/produtos/acessorios/esteira-massageadora/esteira-massageadora-5.webp";
import esteira6 from "../../assets/produtos/acessorios/esteira-massageadora/esteira-massageadora-6.webp";

export const esteiraMassageadora: Produto = {
  id: "acessorio-esteira-massageadora",

  nome: "Esteira Massageadora 10 Motores com Aquecimento Bivolt",

  categoria: "Acessórios",

  descricao:
    "Tenha mais conforto e relaxamento sem sair de casa com a Esteira Massageadora 10 Motores. Ideal para aliviar a tensão muscular, reduzir o estresse e proporcionar uma agradável massagem vibratória em diferentes regiões do corpo, ela conta com 5 programas de massagem, 3 níveis de intensidade e aquecimento opcional na região lombar."+
    "Leve, dobrável e fácil de transportar, pode ser utilizada na cama, sofá, cadeira ou no chão, oferecendo praticidade e bem-estar sempre que você precisar.",


  imagem: esteira1,

  galeria: [
    esteira1,
    esteira2,
    esteira3,
    esteira4,
    esteira5,
    esteira6
  ],

  caracteristicas: [
    "10 motores de massagem vibratória",
    "5 programas automáticos de massagem",
    "Massagem para pescoço, costas, lombar e pernas",
    "3 níveis de intensidade",
    "Aquecimento lombar de até 40°C",
    "Desligamento automático após 15 minutos",
    "Controle remoto",
    "Bivolt",
    "Potência de 15W",
    "Material 100% poliéster",
    "Suporta até 150 kg"
  ],

  especificacoes: [
    {
      label: "Benefícios",
      value: "Proporciona mais conforto e bem-estar.",
    },
    {
      label: "Relaxamento",
      value: "Ajuda a aliviar o cansaço e a tensão do dia a dia",
    },
    {
      label: "Praticidade",
      value: "Fácil de guardar e transportar.",
    },
  ],

  dimensoes: [],

  destaque: false,
};