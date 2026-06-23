import logoAsset from "../assets/santo-sonho-logo.png.asset.json";

export const SITE = {
  name: "Santo Sonho Colchões",
  tagline: "Porque dormir bem, faz bem!",
  email: "contato@santosonhocolchoes.com.br",
  whatsappMain: "5511941409648",
  whatsappDisplay: "(11) 94140-9648",
  facebook: "https://www.facebook.com/santosonhocolchoes",
  instagram: "https://www.instagram.com/colchoessantosonho",
  logoUrl: logoAsset.url,
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

import m1 from "../assets/mattress-1.jpg";
import m2 from "../assets/mattress-2.jpg";
import m3 from "../assets/mattress-3.jpg";
import m4 from "../assets/mattress-4.jpg";
import m5 from "../assets/mattress-5.jpg";
import m6 from "../assets/mattress-6.jpg";

export type Produto = {
  id: string;
  nome: string;
  categoria: "Casal" | "Solteiro" | "Queen" | "King" | "Box" | "Acessórios";
  descricao: string;
  caracteristicas: string[];
  imagem: string;
  destaque?: boolean;
};

export const PRODUTOS: Produto[] = [
  { id: "conforto-plus", nome: "Conforto Plus Pillow Top", categoria: "Casal", descricao: "Colchão de molas ensacadas com pillow top em espuma D33, alta durabilidade e suporte ergonômico.", caracteristicas: ["Molas ensacadas", "Pillow Top", "Tecido antialérgico", "Garantia 5 anos"], imagem: m1, destaque: true },
  { id: "memory-cloud", nome: "Memory Cloud Premium", categoria: "Queen", descricao: "Espuma viscoelástica de alta densidade que se molda ao corpo, aliviando pontos de pressão.", caracteristicas: ["Memory Foam", "Densidade D45", "Tecido respirável", "Garantia 7 anos"], imagem: m2, destaque: true },
  { id: "majestic-king", nome: "Majestic King Euro Pillow", categoria: "King", descricao: "O ápice do conforto. Molas pocket de 7 zonas com Euro Pillow exclusivo.", caracteristicas: ["Molas Pocket 7 zonas", "Euro Pillow", "Bordas reforçadas", "Garantia 10 anos"], imagem: m3, destaque: true },
  { id: "ortho-spring", nome: "Ortho Spring Firme", categoria: "Casal", descricao: "Suporte ortopédico ideal para quem busca firmeza e alinhamento da coluna.", caracteristicas: ["Molas Bonnel", "Espuma D28", "Firmeza alta"], imagem: m4 },
  { id: "sweet-dreams", nome: "Sweet Dreams Solteiro", categoria: "Solteiro", descricao: "Conforto e leveza para o quarto das crianças e adolescentes.", caracteristicas: ["Espuma D23", "Tecido infantil", "Antiácaro"], imagem: m5 },
  { id: "box-premium", nome: "Box Base Premium", categoria: "Box", descricao: "Base box reforçada com madeira maciça e revestimento sofisticado.", caracteristicas: ["Madeira maciça", "Tecido suede", "Pés cromados"], imagem: m3 },
  { id: "kit-travesseiros", nome: "Kit Travesseiros e Edredom", categoria: "Acessórios", descricao: "Conjunto premium com 2 travesseiros e edredom dupla face.", caracteristicas: ["Fibra siliconizada", "100% algodão", "Hipoalergênico"], imagem: m6 },
  { id: "casal-essencial", nome: "Essencial Casal", categoria: "Casal", descricao: "O custo-benefício perfeito para o seu descanso diário.", caracteristicas: ["Espuma D26", "Tecido jacquard", "Garantia 3 anos"], imagem: m2 },
];
