import type { Dimensao, Produto } from "../../types/produto";

import protetorSoft1 from "../../assets/produtos/acessorios/protetor-protect-soft/protetor-soft-1.webp";
import protetorSoft2 from "../../assets/produtos/acessorios/protetor-protect-soft/protetor-soft-2.webp";
import protetorSoft3 from "../../assets/produtos/acessorios/protetor-protect-soft/protetor-soft-3.webp";
import protetorSoft4 from "../../assets/produtos/acessorios/protetor-protect-soft/protetor-soft-4.webp";

const medidasPadrao: Dimensao[] = [
  { label: "Solteiro", value: "0,90 x 1,90 m" },
  { label: "Casal", value: "1,40 x 1,90 m" },
  { label: "Queen", value: "1,60 x 2,00 m" },
  { label: "King", value: "1,93 x 2,03 m" },

];


const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const protetorProtectSoft: Produto = {
  id: "acessorio-protetor-protect-soft",

  nome: "Protetor de Colchão com elástico Protect Soft",

  categoria: "Acessórios",

  descricao:
    "Confeccionado em algodão e enchimento de manta de poliéster, super resistente e é produzido com 3 camadas. Conta com tratamento impermeável, inodoro e antimofo, além de ter um toque macio. Ideal para trazer mais conforto e proteção ao seu colchão. " +
    "Protetor de colchão antimicrobiano é impermeável, protegendo assim contra a umidade, pois não permite o contato de líquidos com a superfície do colchão. porquê contém a Saia Slip de elástico Super Resistente. " +
    "Com Tecnologia Ultra Fresh Antimicrobiana, é lavável em máquina, além de inodoro e antimofo Com Toque Macio Softh Touch.",

  imagem: protetorSoft1,

  galeria: [
    protetorSoft1,
    protetorSoft2,
    protetorSoft3,
    protetorSoft4
  ],

  caracteristicas: [
    "Toque Macio",
    "Impermeável",
    "Tecnologia UltraFresh"
  ],

  especificacoes: [
    {
      label: "Tecido",
      value: "100% Poliéster"
    },
    {
      label: "Enchimento",
      value: "100% Fibra de Poliéster"
    },
    {
      label: "Tamanhos",
      value: "Disponível em diversos tamanhos."
    },

  ],

  dimensoes: dimensoesColchao("30 cm"),

  destaque: false,
};