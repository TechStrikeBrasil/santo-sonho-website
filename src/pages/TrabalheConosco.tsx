import { useState } from "react";
import { Briefcase, Send, CheckCircle2, Users, Heart, Building2 } from "lucide-react";
import { SITE } from "../data/site";

const BENEFICIOS = [
  { icon: Users, title: "Time acolhedor", text: "Ambiente humano e colaborativo em todas as unidades." },
  { icon: Building2, title: "Empresa sólida e em expansão", text: "Mais de 10 lojas levando conforto e qualidade para milhares de clientes.." },
  { icon: Heart, title: "Benefícios", text: "Vale-transporte, comissões atrativas e treinamentos." },
];

export default function TrabalheConosco() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Trabalhe Conosco — ${form.nome} || "vaga"})`;
    const body = [
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      "",
      "Mensagem / Experiência:",
      form.mensagem,
      "",
      "— Enviado pelo site Santo Sonho Colchões",
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEnviado(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--brand)] text-brand-foreground">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
            <Briefcase className="size-3.5 text-[var(--gold)]" /> Faça parte do time
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Trabalhe conosco na Santo Sonho Colchões
          </h1>
          <p className="mt-4 text-lg text-brand-foreground/85 max-w-2xl">
            Estamos sempre em busca de pessoas apaixonadas por atendimento e vendas. Envie seu currículo e venha crescer com a gente.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {BENEFICIOS.map((b, i) => (
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

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-card rounded-2xl border border-border shadow-[var(--shadow-card)] p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Envie seu currículo</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Preencha o formulário abaixo. Você será direcionado ao seu app de e-mail para concluir o envio (anexe seu currículo).
          </p>

          {enviado && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm">
              <CheckCircle2 className="size-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-700">E-mail preparado!</p>
                <p className="text-muted-foreground">Finalize o envio no seu app de e-mail e não esqueça de anexar o currículo em PDF.</p>
              </div>
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
            <label className="grid gap-1.5 md:col-span-2">
              <span className="text-sm font-medium">Nome completo *</span>
              <input required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40" />
            </label>
            <label className="grid gap-1.5">
              <span className="text-sm font-medium">E-mail *</span>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40" />
            </label>
            <label className="grid gap-1.5">
              <span className="text-sm font-medium">Telefone / WhatsApp *</span>
              <input required value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40" />
            </label>
            <label className="grid gap-1.5 md:col-span-2">
              <span className="text-sm font-medium">Mensagem / Experiência</span>
              <textarea rows={5} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                placeholder="Conte um pouco sobre você e sua experiência profissional."
                className="rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40" />
            </label>
            <div className="md:col-span-2 flex flex-wrap items-center gap-3 pt-2">
              <button type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-6 py-3 font-semibold hover:opacity-90 transition">
                <Send className="size-4" /> Enviar candidatura
              </button>
              <p className="text-xs text-muted-foreground">Ou envie diretamente para <a href={`mailto:${SITE.email}`} className="underline hover:text-[var(--brand)]">{SITE.email}</a></p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}