import type { Produto, Dimensao } from "../../types/produto";

import planet1 from "../../assets/produtos/planet-sense/planet-sense-1.webp";



const medidasPadrao: Dimensao[] = [
  { label: "Queen", value: "1,58 x 1,98 m" },
  { label: "King Size", value: "1,93 x 2,03 m" },
];

const dimensoesColchao = (altura: string): Dimensao[] => [
  { label: "Altura", value: altura },
  ...medidasPadrao,
];

export const planetSense: Produto = {
  id: "colchao-planet-sense",

  nome: "Colchão Planet Sense",

  categoria: "Colchão",

  descricao:
    "O Colchão Planet Sense representa o equilíbrio perfeito entre consciência ambiental, " + 
    "tradição artesanal e conforto absoluto. Desenvolvido com materiais nobres e tecnologias avançadas, " + 
    "proporciona um sono profundo, leve e extremamente envolvente. Cada detalhe foi pensado para entregar bem-estar, sustentabilidade e a sensação única de dormir nas nuvens, noite após noite",

  imagem: planet1,

  galeria: [
    planet1,
  ],

  caracteristicas: [
    "Perfeito para um sono reparador",
    "Máximo frescor e conforto térmico",
  ],

  especificacoes: [
    {
      label: "Suporte",
      value: "Suporta até 200 kg por pessoa.",
    },
    {
      label: "Estofamento",
      value: "Memovisco Gel D45, Látex, EcoFoam, HSS Edge Foam",
    },
    {
      label: "Tecido",
      value: "Malha Belga, Lava Textile.",
    },
    {
      label: "Molas",
      value: "Molejo Comfort Edge Doble Coil 25cm, 512 molas por m².",
    },
  ],

  dimensoes: dimensoesColchao("37 cm"),

  destaque: true,
};