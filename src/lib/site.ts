export const SITE = {
  name: "Santo Sonho Colchões",
  tagline: "Porque dormir bem, faz bem!",
  email: "contato@santosonhocolchoes.com.br",
  whatsappMain: "5511941409648",
  whatsappDisplay: "(11) 94140-9648",
  facebook: "https://www.facebook.com/santosonhocolchoes",
  instagram: "https://www.instagram.com/colchoessantosonho",
};

export function waLink(number: string, message = "Olá! Gostaria de mais informações sobre os colchões.") {
  const clean = number.replace(/\D/g, "");
  const phone = clean.startsWith("55") ? clean : `55${clean}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export type Loja = {
  cidade: string;
  nome: string;
  endereco: string;
  referencia?: string;
  telefones: string[];
  whatsapp: string;
};

export const LOJAS: Loja[] = [
  { cidade: "Santo André", nome: "Ramiro Colleoni I", endereco: "Av. Ramiro Colleoni, 650, Vila Dora - Santo André/SP", referencia: "Próximo ao Shopping ABC", telefones: ["(11) 4902-5133", "(11) 4902-4503"], whatsapp: "11981895458" },
  { cidade: "Santo André", nome: "Ramiro Colleoni II", endereco: "Av. Ramiro Colleoni, 800, Vila Dora - Santo André/SP", referencia: "Esquina com R. Caminho do Pilar", telefones: ["(11) 4509-4414"], whatsapp: "11981900581" },
  { cidade: "Santo André", nome: "Santos Dumont", endereco: "Rua Santos Dumont, 163, Centro - Santo André/SP", referencia: "Em frente ao Corpo de Bombeiros", telefones: ["(11) 3969-9930", "(11) 3969-9940"], whatsapp: "11959696795" },
  { cidade: "Santo André", nome: "Pirelli", endereco: "Av. Giovanni Battista Pirelli, 1450, Vila Homero Thon - Santo André/SP", referencia: "Ao lado do Restaurante Ragazzo", telefones: ["(11) 4901-3629"], whatsapp: "11981933426" },
  { cidade: "Santo André", nome: "Figueiras", endereco: "R. das Figueiras, 221, Bairro Jardim - Santo André/SP", telefones: ["(11) 3705-1000"], whatsapp: "11952110768" },
  { cidade: "São Bernardo do Campo", nome: "Senador Vergueiro", endereco: "Av. Senador Vergueiro, 4932, Rudge Ramos - São Bernardo do Campo/SP", telefones: ["(11) 2897-4362", "(11) 2897-4474"], whatsapp: "11954916054" },
  { cidade: "São Bernardo do Campo", nome: "P. Roquetti", endereco: "Rua João Roquetti, 10, Centro - São Bernardo do Campo/SP", telefones: ["(11) 4127-3966"], whatsapp: "11959592767" },
  { cidade: "Ribeirão Pires", nome: "Miguel Prisco", endereco: "Rua Miguel Prisco, 120, Centro - Ribeirão Pires/SP", telefones: ["(11) 4828-3646"], whatsapp: "11953434831" },
  { cidade: "São Paulo", nome: "Abraão de Morais", endereco: "Av. Professor Abrãao de Morais, 225, Saúde - São Paulo/SP", telefones: ["(11) 2577-2375"], whatsapp: "11959307021" },
  { cidade: "São Paulo", nome: "Vila Mariana", endereco: "Av. Dr. Ricardo Jafet, 431, Vila Mariana - São Paulo/SP, 04261-000", telefones: ["(11) 2273-4026"], whatsapp: "11986778558" },
  { cidade: "São Paulo", nome: "Moema", endereco: "Alameda dos Maracatins, 943, Moema - São Paulo/SP, 04089-012", telefones: ["(11) 2352-2121", "(11) 93064-2096"], whatsapp: "11930642096" },
];

// import m1 from "../assets/mattress-1.jpg";
// import m2 from "../assets/mattress-2.jpg";
// import m3 from "../assets/mattress-3.jpg";
import m4 from "../assets/mattress-4.jpg";
import m5 from "../assets/mattress-5.jpg";
import m6 from "../assets/mattress-6.jpg";

import viseu1 from "../assets/produtos//viseu/viseu-1.webp";
import viseu2 from "../assets/produtos//viseu/viseu-2.webp";
import viseu3 from "../assets/produtos//viseu/viseu-3.webp";
import viseu4 from "../assets/produtos//viseu/viseu-4.webp";
import viseu5 from "../assets/produtos//viseu/viseu-5.webp";


export type Produto = {
  id: string;
  nome: string;
  categoria: "Colchões" | "Casal" | "Solteiro" | "Queen" | "King" | "Box" | "Acessórios";
  descricao: string;
  caracteristicas: string[];
  imagem: string;
  galeria?: string[];
  especificacoes?: { label: string; value: string }[];
  dimensoes?: { label: string; value: string }[];
  destaque?: boolean;
};

const dimCasal = [
  { label: "Largura", value: "138 cm" },
  { label: "Comprimento", value: "188 cm" },
  { label: "Altura", value: "30 cm" },
];
const dimQueen = [
  { label: "Largura", value: "158 cm" },
  { label: "Comprimento", value: "198 cm" },
  { label: "Altura", value: "32 cm" },
];
const dimKing = [
  { label: "Largura", value: "193 cm" },
  { label: "Comprimento", value: "203 cm" },
  { label: "Altura", value: "34 cm" },
];
const dimSolteiro = [
  { label: "Largura", value: "88 cm" },
  { label: "Comprimento", value: "188 cm" },
  { label: "Altura", value: "25 cm" },
];

export const PRODUTOS: Produto[] = [
  { id: "colchao-viseu", nome: "Colchão Viseu", categoria: "Colchões", descricao: "Colchão de molas ensacadas com molejo High Steel 2.0, proporcionando alta resistência e mantendo a coluna em posição adequada durante o sono.", caracteristicas: ["Molas ensacadas", "Alta resistência (High Steel)", " Sustentação uniforme e progressiva"], imagem: viseu1, galeria: [viseu1, viseu2, viseu3, viseu4, viseu5], especificacoes: [{ label: "Molejo", value: "Ensacado individualmente High Steel 2.0" }, { label: "Molas", value: " Alta resistência (High Steel)" }, { label: "Funcionamento", value: "Molas independentes com atuação ponto a ponto" }, { label: "Suporte", value: "Sustentação uniforme e progressiva" }, { label: "Alinhamento Postural", value: "Mantém a coluna em posição adequada durante o sono." }, { label: "Durabilidade", value: "Estrutura Projetada para maior resistência e vida útil prolongada." }], dimensoes: dimCasal, destaque: true },
  // { id: "memory-cloud", nome: "Memory Cloud Premium", categoria: "Queen", descricao: "Espuma viscoelástica de alta densidade que se molda ao corpo, aliviando pontos de pressão.", caracteristicas: ["Memory Foam", "Densidade D45", "Tecido respirável", "Garantia 7 anos"], imagem: m2, galeria: [m2, m3, m1], especificacoes: [{ label: "Tipo", value: "Viscoelástico (Memory Foam)" }, { label: "Densidade", value: "D45" }, { label: "Conforto", value: "Médio" }, { label: "Tecido", value: "Knit respirável" }, { label: "Garantia", value: "7 anos" }, { label: "Peso suportado", value: "160 kg por pessoa" }], dimensoes: dimQueen, destaque: true },
  // { id: "majestic-king", nome: "Majestic King Euro Pillow", categoria: "King", descricao: "O ápice do conforto. Molas pocket de 7 zonas com Euro Pillow exclusivo.", caracteristicas: ["Molas Pocket 7 zonas", "Euro Pillow", "Bordas reforçadas", "Garantia 10 anos"], imagem: m3, galeria: [m3, m1, m2], especificacoes: [{ label: "Tipo", value: "Molas Pocket 7 zonas" }, { label: "Conforto", value: "Firme / ergonômico" }, { label: "Euro Pillow", value: "Sim, dupla face" }, { label: "Bordas", value: "Reforço lateral em espuma HR" }, { label: "Garantia", value: "10 anos" }, { label: "Peso suportado", value: "180 kg por pessoa" }], dimensoes: dimKing, destaque: true },
  // { id: "ortho-spring", nome: "Ortho Spring Firme", categoria: "Casal", descricao: "Suporte ortopédico ideal para quem busca firmeza e alinhamento da coluna.", caracteristicas: ["Molas Bonnel", "Espuma D28", "Firmeza alta"], imagem: m4, galeria: [m4, m1, m3], especificacoes: [{ label: "Tipo", value: "Molas Bonnel" }, { label: "Conforto", value: "Firme" }, { label: "Espuma", value: "D28" }, { label: "Tecido", value: "Jacquard" }, { label: "Garantia", value: "5 anos" }], dimensoes: dimCasal },
  // { id: "sweet-dreams", nome: "Sweet Dreams Solteiro", categoria: "Solteiro", descricao: "Conforto e leveza para o quarto das crianças e adolescentes.", caracteristicas: ["Espuma D23", "Tecido infantil", "Antiácaro"], imagem: m5, galeria: [m5, m6, m2], especificacoes: [{ label: "Tipo", value: "Espuma" }, { label: "Densidade", value: "D23" }, { label: "Conforto", value: "Macio" }, { label: "Tecido", value: "Estampa infantil, antiácaro" }, { label: "Garantia", value: "3 anos" }], dimensoes: dimSolteiro },
  // { id: "box-premium", nome: "Box Base Premium", categoria: "Box", descricao: "Base box reforçada com madeira maciça e revestimento sofisticado.", caracteristicas: ["Madeira maciça", "Tecido suede", "Pés cromados"], imagem: m3, galeria: [m3, m1, m4], especificacoes: [{ label: "Estrutura", value: "Madeira maciça reforçada" }, { label: "Revestimento", value: "Tecido suede" }, { label: "Pés", value: "Cromados 15 cm" }, { label: "Garantia", value: "5 anos" }], dimensoes: dimCasal },
  // { id: "kit-travesseiros", nome: "Kit Travesseiros e Edredom", categoria: "Acessórios", descricao: "Conjunto premium com 2 travesseiros e edredom dupla face.", caracteristicas: ["Fibra siliconizada", "100% algodão", "Hipoalergênico"], imagem: m6, galeria: [m6, m2, m5], especificacoes: [{ label: "Composição", value: "100% algodão / fibra siliconizada" }, { label: "Itens", value: "2 travesseiros + 1 edredom" }, { label: "Lavagem", value: "Máquina, água fria" }, { label: "Hipoalergênico", value: "Sim" }], dimensoes: [{ label: "Travesseiro", value: "50 x 70 cm" }, { label: "Edredom Queen", value: "220 x 240 cm" }] },
  // { id: "casal-essencial", nome: "Essencial Casal", categoria: "Casal", descricao: "O custo-benefício perfeito para o seu descanso diário.", caracteristicas: ["Espuma D26", "Tecido jacquard", "Garantia 3 anos"], imagem: m2, galeria: [m2, m1, m4], especificacoes: [{ label: "Tipo", value: "Espuma" }, { label: "Densidade", value: "D26" }, { label: "Tecido", value: "Jacquard" }, { label: "Garantia", value: "3 anos" }], dimensoes: dimCasal },
];