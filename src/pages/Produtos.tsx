import { useMemo, useState } from "react";
import { ArrowRight, Info, MessageCircle } from "lucide-react";
import { SITE } from "../data/site";
import { waLink } from "../lib/whatsapp";
import type { Produto } from "../types/produto";
import { PRODUTOS } from "../data/produtos";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";


const CATEGORIAS: (Produto["categoria"] | "Todos")[] = [
    "Todos",
    "Colchão",
    "Box",
    "Baús",
    "Cabeceiras",
    "Travesseiros",
    "Acessórios",
];

export default function Produtos() {
  const [cat, setCat] = useState<(Produto["categoria"] | "Todos")>("Todos");
  const [aberto, setAberto] = useState<Produto | null>(null);
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
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.descricao}</p>
                <ul className="mt-4 grid grid-cols-2 gap-1.5 text-xs text-foreground/75">
                  {p.caracteristicas.map((c) => (
                    <li key={c} className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-[var(--gold)]" /> {c}</li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAberto(p)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand)]/30 bg-transparent text-[var(--brand)] px-4 py-3 text-sm font-semibold hover:bg-[var(--brand)]/5 transition"
                  >
                    <Info className="size-4" /> Detalhes
                  </button>
                  <a
                    href={waLink(SITE.whatsappMain, `Olá! Tenho interesse no modelo "${p.nome}" (${p.categoria}). Pode me passar mais informações e o preço?`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-4 py-3 text-sm font-semibold hover:opacity-90 transition"
                  >
                    <MessageCircle className="size-4" /> Orçamento
                  </a>
                </div>
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

      <ProdutoModal produto={aberto} onOpenChange={(open) => !open && setAberto(null)} />
    </>
  );
}

function ProdutoModal({ produto, onOpenChange }: { produto: Produto | null; onOpenChange: (open: boolean) => void }) {
  const [ativa, setAtiva] = useState(0);
  const galeria = produto?.galeria?.length ? produto.galeria : produto ? [produto.imagem] : [];

  return (
    <Dialog
      open={!!produto}
      onOpenChange={(open) => {
        onOpenChange(open);
        if (!open) setAtiva(0);
      }}
    >
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {produto && (
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-muted p-6 flex flex-col gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-background">
                <img src={galeria[ativa]} alt={produto.nome} className="size-full object-cover" loading="lazy" />
              </div>
              {galeria.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {galeria.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setAtiva(i)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition ${i === ativa ? "border-[var(--brand)]" : "border-transparent opacity-70 hover:opacity-100"}`}
                    >
                      <img src={src} alt={`${produto.nome} ${i + 1}`} className="size-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            

            <div className="p-6 md:p-8 flex flex-col">
              <DialogHeader>
                <span className="text-xs font-semibold tracking-wider uppercase text-[var(--brand)]/70">{produto.categoria}</span>
                <DialogTitle className="font-display text-2xl md:text-3xl font-bold mt-1 text-left">{produto.nome}</DialogTitle>
                <DialogDescription className="text-left text-sm text-muted-foreground mt-2">{produto.descricao}</DialogDescription>
              </DialogHeader>

              {produto.cores && produto.cores.length > 0 && (
                <div className="mt-2">
                  <h4 className="font-display font-semibold text-base mb-3">
                    Cores disponíveis
                  </h4>

                  <div className="grid grid-cols-5 gap-3">
                    {produto.cores.map((cor) => (
                      <div key={cor.nome} className="text-center">
                        <img
                          src={cor.imagem}
                          alt={cor.nome}
                          loading="lazy"
                          className="aspect-square w-full object-cover rounded-lg border border-border"
                        />

                        <p className="mt-2 text-xs font-medium">
                          {cor.nome}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {produto.especificacoes && produto.especificacoes.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-display font-semibold text-base mb-3">Especificações</h4>
                  <dl className="divide-y divide-border rounded-xl border border-border overflow-hidden">
                    {produto.especificacoes.map((e) => (
                      <div key={e.label} className="grid grid-cols-2 gap-3 px-4 py-2.5 text-sm">
                        <dt className="text-muted-foreground">{e.label}</dt>
                        <dd className="font-medium text-foreground">{e.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {produto.dimensoes && produto.dimensoes.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-display font-semibold text-base mb-3">Dimensões</h4>
                  <p className="text-xs text-muted-foreground mb-3">Fabricado em todas as medidas abaixo.</p>
                  <dl className="divide-y divide-border rounded-xl border border-border overflow-hidden">
                    {produto.dimensoes.map((d) => (
                      <div key={d.label} className="grid grid-cols-2 gap-3 px-4 py-2.5 text-sm">
                        <dt className="text-muted-foreground">{d.label}</dt>
                        <dd className="font-medium text-foreground">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <a
                href={waLink(SITE.whatsappMain, `Olá! Tenho interesse no modelo "${produto.nome}" (${produto.categoria}). Pode me passar mais informações e o preço?`)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                <MessageCircle className="size-4" /> Solicitar orçamento no WhatsApp
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}