export const SITE = {
  name: "Santo Sonho Colchões",
  tagline: "Porque dormir bem, faz bem!",
  email: "contato@santosonhocolchoes.com.br",
  whatsappMain: "5511981985458",
  whatsappDisplay: "(11) 98198-5458",
   vendedor: {
    label: "Fale com um vendedor",
    phone: "11981985458",
    display: "(11) 98198-5458",
  },
  sac: {
    label: "SAC - Serviço de Atendimento ao Cliente",
    phone: "1128884778",
    phoneDisplay: "(11) 2888-4778",
    whatsapp: "5511957355429",
    whatsappDisplay: "(11) 95735-5429",
    email: "sac@santosonhocolhoes.com.br",
  },
  facebook: "https://www.facebook.com/santosonhocolchoes",
  instagram: "https://www.instagram.com/colchoessantosonho",
};

export function phoneLink(number: string) {
  const clean = number.replace(/\D/g, "");
  return `tel:+55${clean}`;
}