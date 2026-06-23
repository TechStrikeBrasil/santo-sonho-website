import { MapPin, Phone, MessageCircle } from "lucide-react";
import { LOJAS, waLink } from "../lib/site";


export default function Lojas() {
  const grupos = Array.from(new Set(LOJAS.map((l) => l.cidade)));
  return (
    <>
      <section className="bg-[var(--brand)] text-brand-foreground">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)]">Nossas lojas</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">Estamos perto de você</h1>
          <p className="mt-3 text-brand-foreground/80 max-w-2xl">{LOJAS.length} unidades para você visitar, experimentar e levar para casa o colchão dos seus sonhos.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        {grupos.map((cidade) => (
          <div key={cidade} className="mb-12 last:mb-0">
            <h2 className="font-display text-2xl font-bold mb-5 flex items-center gap-3">
              <span className="h-px flex-1 max-w-8 bg-[var(--brand)]/30" />
              {cidade}
              <span className="text-sm font-normal text-muted-foreground">({LOJAS.filter(l => l.cidade === cidade).length} {LOJAS.filter(l => l.cidade === cidade).length > 1 ? "lojas" : "loja"})</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {LOJAS.filter((l) => l.cidade === cidade).map((l) => (
                <article key={l.nome} className="bg-card rounded-2xl p-6 border border-border shadow-[var(--shadow-card)] flex flex-col">
                  <div className="flex items-start gap-3">
                    <div className="size-11 rounded-xl bg-[var(--brand)]/10 grid place-items-center text-[var(--brand)] shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg leading-tight">{l.nome}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{l.endereco}</p>
                      {l.referencia && <p className="text-xs text-[var(--brand)]/70 mt-1 italic">{l.referencia}</p>}
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-border space-y-2 text-sm">
                    {l.telefones.map((t) => (
                      <a key={t} href={`tel:${t.replace(/\D/g, "")}`} className="flex items-center gap-2 text-foreground/80 hover:text-[var(--brand)]">
                        <Phone className="size-4" /> {t}
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a href={waLink(l.whatsapp, `Olá! Vim do site da loja ${l.nome}.`)} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition">
                      <MessageCircle className="size-4" /> WhatsApp
                    </a>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(l.endereco)}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition">
                      <MapPin className="size-4" /> Mapa
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
