export function waLink(number: string, message = "Olá! Gostaria de mais informações sobre os colchões.") {
  const clean = number.replace(/\D/g, "");
  const phone = clean.startsWith("55") ? clean : `55${clean}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}