import { useMemo, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PRODUTOS, SITE, waLink, type Produto } from "../lib/site";


const CATEGORIAS: (Produto["categoria"] | "Todos")[] = ["Todos", "Casal", "Queen", "King", "Solteiro", "Box", "Acessórios"];

export default function Produtos() {
  const [cat, setCat] = useState<(Produto["categoria"] | "Todos")>("Todos");
  const lista = useMemo(() => (cat === "Todos" ? PRODUTOS : PRODUTOS.filter((p) => p.categoria === cat)), [cat]);

  return (
    <>
      <section className="bg-[var(--brand)] text-brand-foreground">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)]">Catálogo</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">Nossos produtos</h1>
          <p className="mt-3 text-brand-foreground/80 max-w-2xl">Explore nossa linha completa de colchões, bases box e acessórios para uma noite perfeita de sono.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIAS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${cat === c ? "bg-[var(--brand)] text-brand-foreground border-[var(--brand)]" : "bg-card text-foreground border-border hover:border-[var(--brand)]/40"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lista.map((p) => (
            <article key={p.id} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.imagem} alt={p.nome} loading="lazy" width={1024} height={768} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-semibold tracking-wider uppercase text-[var(--brand)]/70">{p.categoria}</span>
                <h3 className="font-display font-bold text-xl mt-1">{p.nome}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.descricao}</p>
                <ul className="mt-4 grid grid-cols-2 gap-1.5 text-xs text-foreground/75">
                  {p.caracteristicas.map((c) => (
                    <li key={c} className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-[var(--gold)]" /> {c}</li>
                  ))}
                </ul>
                <a
                  href={waLink(SITE.whatsappMain, `Olá! Tenho interesse no modelo "${p.nome}" (${p.categoria}). Pode me passar mais informações e o preço?`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  <MessageCircle className="size-4" /> Solicitar orçamento
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl p-10 text-center text-brand-foreground" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="font-display text-2xl md:text-3xl font-bold">Não encontrou o que procurava?</h2>
          <p className="mt-2 text-brand-foreground/85">Trabalhamos com as principais marcas do mercado. Fale conosco que conseguimos.</p>
          <a href={waLink(SITE.whatsappMain)} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--brand)] px-6 py-3 font-semibold">
            Fale no WhatsApp <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </>
  );
}
