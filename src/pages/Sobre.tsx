import { Award, Heart, Users, Sparkles } from "lucide-react";
import heroImg from "../assets/hero-bedroom.jpg";

export default function Sobre() {
  return (
    <>
      <section className="bg-[var(--brand)] text-brand-foreground">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)]">Sobre nós</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 max-w-3xl">Nossa missão é fazer você dormir melhor.</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl font-bold">Uma história feita de bons sonhos</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A <strong>Santo Sonho Colchões</strong> nasceu do olhar atento de quem viveu de perto os desafios e as falhas do mercado.
            Após anos atuando no segmento, os sócios Roberto Rocha Lima e Gabriel Rocha Lima, pai e filho, decidiram fundar uma empresa com propósito: <strong>oferecer mais do que colchões, proporcionar qualidade de vida através do sono.</strong>
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Acreditamos que cada cliente é único. Por isso, aqui, o atendimento é individualizado, humano e especializado. Queremos entender sua rotina, suas dores, seus problemas e frustações, 
            para então apresentar o colchão ideal para você, não o mais caro e sim o mais adequado às suas necessidades.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
                Nosso compromisso vai além de vender. Trabalhamos para transformar sua experiência de compra em um momento de cuidado, confiança e acolhimento. Com preços acessíveis, flexibilidade no pagamento, os melhores produtos do mercado e uma equipe pronta para ouvir você, fazemos da Santo Sonho um lugar onde você pode entrar com dúvidas e sair com a certeza de ter feito a escolha certa.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">Existe o colchão certo para cada tipo de sono, de corpo e de necessidade.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">A escolha do colchão certo não é apenas uma compra. É o primeiro passo para noites bem dormidas, dias mais leves, produtivos e uma vida com mais saúde e bem-estar.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed"><strong>Esse é o nosso sonho. E queremos realizá-lo com você!</strong></p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-brand)] aspect-[4/3]">
          <img src={heroImg} alt="Showroom Santo Sonho Colchões" loading="lazy" width={1920} height={1280} className="size-full object-cover" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="font-display text-3xl font-bold text-center mb-10">Nossos valores</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Award, title: "Qualidade", text: "Só trabalhamos com marcas confiáveis e garantia de fábrica." },
            { icon: Heart, title: "Cuidado", text: "Atendimento humano, sem pressão e com escuta de verdade." },
            { icon: Users, title: "Família", text: "Tratamos cada cliente como parte da família Santo Sonho." },
            { icon: Sparkles, title: "Bem-estar", text: "Dormir bem é fundamental para uma vida com mais saúde." },
          ].map((v, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="size-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center text-[var(--brand)] mx-auto">
                <v.icon className="size-6" />
              </div>
              <h3 className="font-display font-bold text-lg mt-4">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
