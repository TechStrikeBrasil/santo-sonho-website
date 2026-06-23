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
            A <strong>Santo Sonho Colchões</strong> nasceu com um propósito simples: oferecer colchões de qualidade
            com atendimento humano e preços justos. Hoje, somos referência na região do ABC e em São Paulo,
            com 11 lojas espalhadas estrategicamente para estar pertinho de você.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trabalhamos com as melhores marcas do mercado e contamos com uma equipe treinada para ajudar
            cada cliente a encontrar o colchão ideal para o seu corpo, estilo de vida e orçamento.
          </p>
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
