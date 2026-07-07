import { Mail, MessageCircle, MapPin } from "lucide-react";
import { waLink } from "../lib/whatsapp";
import { LOJAS } from "../data/lojas";
import { SITE } from "../data/site";

import {
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

export default function Contato() {
  return (
    <>
      <section className="bg-[var(--brand)] text-brand-foreground">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)]">Contato</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">Fale com a gente</h1>
          <p className="mt-3 text-brand-foreground/80 max-w-2xl">Estamos prontos para te atender no canal que você preferir.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <a href={waLink(SITE.whatsappMain)} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-card)] transition">
            <div className="size-14 rounded-2xl bg-[#25D366]/10 grid place-items-center text-[#25D366]"><MessageCircle className="size-7" /></div>
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">WhatsApp</div>
              <div className="font-display font-bold text-lg">{SITE.whatsappDisplay}</div>
              <div className="text-sm text-muted-foreground">Resposta rápida em horário comercial</div>
            </div>
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-card)] transition">
            <div className="size-14 rounded-2xl bg-[var(--brand)]/10 grid place-items-center text-[var(--brand)]"><Mail className="size-7" /></div>
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">E-mail</div>
              <div className="font-display font-bold text-lg break-all">{SITE.email}</div>
              <div className="text-sm text-muted-foreground">Para orçamentos e parcerias</div>
            </div>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border hover:border-[var(--brand)]/40 transition">
              <FaInstagram className="size-6 text-[var(--brand)]" />
              <div>
                <div className="text-xs text-muted-foreground">Siga no</div>
                <div className="font-semibold">Instagram</div>
              </div>
            </a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border hover:border-[var(--brand)]/40 transition">
              <FaFacebook className="size-6 text-[var(--brand)]" />
              <div>
                <div className="text-xs text-muted-foreground">Curta no</div>
                <div className="font-semibold">Facebook</div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-display text-2xl font-bold flex items-center gap-2"><MapPin className="size-6 text-[var(--brand)]" /> Lojas Santo Sonho</h2>
          <p className="text-sm text-muted-foreground mt-1">Visite a unidade mais próxima de você.</p>
          <ul className="mt-5 space-y-3 max-h-[460px] overflow-y-auto pr-2">
            {LOJAS.map((l) => (
              <li key={l.nome} className="p-3 rounded-xl hover:bg-secondary transition">
                <div className="text-xs uppercase tracking-wider text-[var(--brand)]/70 font-semibold">{l.cidade}</div>
                <div className="font-semibold">{l.nome}</div>
                <div className="text-sm text-muted-foreground">{l.endereco}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
