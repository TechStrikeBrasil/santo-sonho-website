import type { Produto, Dimensao } from "../../types/produto";

import ionsPrata1 from "../../assets/produtos/travesseiro-ions-de-prata/ions-de-prata-1.webp";
import ionsPrata2 from "../../assets/produtos/travesseiro-ions-de-prata/ions-de-prata-2.webp";

const medidasPadrao: Dimensao[] = [
  
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const travesseiroIonsPrata: Produto = {
  id: "travesseiro-ions-prata",

  nome: "Travesseiro Íons de Prata",

  categoria: "Travesseiros",

  descricao:
    "Os Travesseiros Íons de Prata da Nabeles utilizam o que há de mais moderno que é a tecnologia “Ultra-Fresh Silpure” " +
    "que usa a nanotecnologia para produzir partículas ultrafinas de Prata que combate a proliferação de micro-organismos, como bactérias fungos, ácaros e vírus. "+
    "Tecido com Íons de Prata combate todo tipo de microrganismos como, bactérias, fungos, ácaros e vírus, proporcionando uma respiração saudável.",

  imagem: ionsPrata1,

  galeria: [
    ionsPrata1,
    ionsPrata2
  ],

  caracteristicas: [
    "Antimicrobiano, antimofo e antiácaro",
    "Tecido antissufocante",
  ],

  especificacoes: [
    
    {
      label: "Tamanho",
      value: "50 x 70 cm",
    },
    {
      label: "Tecido",
      value: "Tecido com fios de carbono",
    },
    {
      label: "Qualidade",
      value: "Sensação permanente de higiene e frescor ",
    },
    {
      label: "Enchimento",
      value: "Fibra siliconada macia e firme.",
    },
  ],

  dimensoes: dimensoesColchao("0 cm"),

  destaque: false,
};