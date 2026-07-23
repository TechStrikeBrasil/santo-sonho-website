import type { Produto } from "../../types/produto";

import export1 from "../../assets/produtos/travesseiro-export/export-1.webp";


export const travesseiroExport: Produto = {
  id: "travesseiro-export",

  nome: "Travesseiro Extra Firme",

  categoria: "Travesseiros",

  descricao:
    "Tenha noites de sono mais confortáveis com o Travesseiro Extra Firme 50x70cm. Desenvolvido para oferecer maior sustentação da cabeça e do pescoço, é ideal para quem dorme de lado ou prefere um travesseiro mais alto e firme. " +
    "Revestido em 100% algodão percal 180 fios, proporciona toque macio, excelente respirabilidade e conforto durante toda a noite. Seu enchimento em fibra siliconada HCS garante alta durabilidade, mantendo o formato original por muito mais tempo.",

  imagem: export1,

  galeria: [
    export1,
  ],

  caracteristicas: [
    "Suporte extra firme",
    "Antialérgico e antimofo",
    "Lavável na máquina",
    "Resistente e não deforma com facilidade"
  ],

  especificacoes: [
    {
      label: "Dimensões",
      value: "50x70 cm",
    },
    {
      label: "Tecido",
      value: "Percal 180 fios 100% Algodão",
    },
    {
      label: "Enchimento",
      value: "Fibra Siliconada HCS",
    },    
  ],

  dimensoes: [],

  destaque: false,
};