import { ArrowRight, ShieldCheck, Truck, MessageCircle, Star, MapPin } from "lucide-react";
import heroImg from "../assets/hero-bedroom.jpg";
import { PRODUTOS, SITE, waLink, LOJAS } from "../lib/site";
import { Link } from "react-router-dom";



export default function Home() {
  const destaques = PRODUTOS.filter((p) => p.destaque);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Quarto sofisticado com colchão Santo Sonho" className="size-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand)]/95 via-[var(--brand)]/70 to-[var(--brand)]/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 text-brand-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
            <Star className="size-3.5 text-[var(--gold)]" /> Há mais de 10 anos cuidando do seu sono
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl">
            O colchão certo para a sua melhor noite de sono.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-brand-foreground/85 max-w-2xl">
            Conforto, qualidade e variedade das melhores marcas. {LOJAS.length} lojas no ABC e em São Paulo prontas para te atender.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/produtos" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--brand)] px-6 py-3.5 font-semibold hover:opacity-90 transition">
              Ver catálogo <ArrowRight className="size-4" />
            </Link>
            <a href={waLink(SITE.whatsappMain)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 px-6 py-3.5 font-semibold transition">
              <MessageCircle className="size-4" /> Fale no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: ShieldCheck, title: "Qualidade garantida", text: "Marcas selecionadas com garantia de fábrica." },
            { icon: Truck, title: "Entrega rápida", text: "Entregamos em toda a região do ABC e São Paulo." },
            { icon: MessageCircle, title: "Atendimento humano", text: "Tire dúvidas e feche pelo WhatsApp com um vendedor." },
          ].map((b, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border flex gap-4">
              <div className="size-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center text-[var(--brand)] shrink-0">
                <b.icon className="size-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Destaques */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--brand)]">Destaques</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Os queridinhos da loja</h2>
          </div>
          <Link to="/produtos" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:gap-2 transition-all">
            Ver todos <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destaques.map((p) => (
            <article key={p.id} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.imagem} alt={p.nome} loading="lazy" width={1024} height={768} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold tracking-wider uppercase text-[var(--brand)]/70">{p.categoria}</span>
                <h3 className="font-display font-bold text-xl mt-1">{p.nome}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.descricao}</p>
                <a href={waLink(SITE.whatsappMain, `Olá! Tenho interesse no modelo "${p.nome}". Pode me passar mais informações?`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:gap-3 transition-all">
                  Solicitar orçamento <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl p-10 md:p-16 text-brand-foreground relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Não sabe qual colchão escolher?</h2>
            <p className="mt-3 text-brand-foreground/85 text-lg">Nossos consultores ajudam você a encontrar o colchão ideal para o seu corpo e estilo de vida.</p>
            <a href={waLink(SITE.whatsappMain, "Olá! Quero ajuda para escolher o colchão ideal.")} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--brand)] px-7 py-3.5 font-semibold hover:opacity-90 transition">
              <MessageCircle className="size-5" /> Falar com um consultor
            </a>
          </div>
        </div>
      </section>

      {/* Lojas teaser */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--brand)]">Nossas lojas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Estamos pertinho de você</h2>
          </div>
          <Link to="/lojas" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:gap-2 transition-all">
            Ver todas <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LOJAS.slice(0, 4).map((l) => (
            <div key={l.nome} className="bg-card rounded-2xl p-5 border border-border">
              <div className="size-10 rounded-lg bg-[var(--brand)]/10 grid place-items-center text-[var(--brand)] mb-3">
                <MapPin className="size-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{l.cidade}</div>
              <div className="font-semibold mt-1">{l.nome}</div>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{l.endereco}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
