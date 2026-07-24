import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin, MessageCircle, Moon, CreditCard, Star, Users, BedDoubleIcon, Truck, Lock } from "lucide-react";
import {SITE} from "../data/site";
import { waLink, } from "../lib/whatsapp";
import { phoneLink } from "../data/site";
import {
  FaInstagram,
  FaFacebook
} from "react-icons/fa";
import logo from "../assets/santo-sonho-logo.png";

import { VisaFlatIcon } from "react-svg-credit-card-payment-icons";
import { MastercardFlatIcon } from "react-svg-credit-card-payment-icons";
import { AmericanExpressFlatIcon } from "react-svg-credit-card-payment-icons";
import { EloFlatIcon } from "react-svg-credit-card-payment-icons";
import { HipercardFlatIcon } from "react-svg-credit-card-payment-icons";

const MARQUEE_ITEMS = [
  { icon: Star, text: "Nota 4,9/5 no Google." },
  { icon: Users, text: "Mais de 2 milhões de colchões vendidos e famílias atendidas." },
  { icon: Moon, text: "Porque dormir bem faz bem." },
  { icon: BedDoubleIcon, text: "Mais de 14 anos no mercado colchoeiro." },
  { icon: CreditCard, text: "Parcelamento em até 24x sem juros!" },
  { icon: Truck, text: "Frete e montagem grátis!" },
];

const NAV = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/lojas", label: "Lojas" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
       <div className="hidden md:block bg-[var(--brand)] text-brand-foreground text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-5">
           <a
        href={waLink(SITE.vendedor.phone)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors"
      >
        <MessageCircle className="size-3.5" />
        Televendas: {SITE.vendedor.display}
      </a>

      <a
        href={phoneLink(SITE.sac.phone)}
        className="flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors"
      >
        <Phone className="size-3.5" />
        SAC: {SITE.sac.whatsappDisplay}
      </a>

      <a
        href={SITE.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="hover:text-[var(--gold)] transition-colors"
      >
        <FaInstagram className="size-4" />
      </a>

      <a
        href={SITE.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="hover:text-[var(--gold)] transition-colors"
      >
        <FaFacebook className="size-4" />
      </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Santo Sonho Colchões" className="size-12 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-[var(--brand)]">Santo Sonho</div>
            <div className="text-[15px] uppercase tracking-widest font-bold text-lg  text-[var(--brand)]">Colchões</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
  {NAV.map((n) => {
    const active = location.pathname === n.to;

    return (
      <Link
        key={n.to}
        to={n.to}
        className={
          "px-4 py-2 text-sm font-medium transition-colors " +
          (active
            ? "text-[var(--brand)] font-semibold"
            : "text-foreground/80 hover:text-[var(--brand)]")
        }
      >
        {n.label}
      </Link>
    );
  })}
</nav>
        <a
          href={waLink(SITE.whatsappMain)}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-brand)]"
        >
          <MessageCircle className="size-4" /> Fale conosco
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2.5 text-base font-medium text-foreground">
                {n.label}
              </Link>
            ))}
            <a href={waLink(SITE.whatsappMain)} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-5 py-3 text-sm font-semibold">
              <MessageCircle className="size-4" /> Fale no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function MarqueeBar() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="bg-[var(--brand)] text-brand-foreground overflow-hidden border-b border-white/10">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-8 py-2.5 text-xs font-medium whitespace-nowrap shrink-0">
            <item.icon className="size-3.5 text-[var(--gold)]" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--brand)] text-brand-foreground mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Santo Sonho Colchões" className="size-14 rounded-full" />
            <div>
              <div className="font-display font-bold text-xl">Santo Sonho Colchões</div>
              <div className="text-sm text-brand-foreground/70">{SITE.tagline}</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-brand-foreground/75 max-w-sm">
            Mais de uma década oferecendo o melhor em colchões, com lojas no ABC e em São Paulo. Atendimento humano e preços justos.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="size-10 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--brand)] grid place-items-center transition"><FaInstagram className="text-lg"  /></a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="size-10 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--brand)] grid place-items-center transition"><FaFacebook className="text-lg" /> </a>
            <a href={waLink(SITE.whatsappMain)} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="size-10 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--brand)] grid place-items-center transition"><MessageCircle className="size-5" /></a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-display font-semibold mb-3">Navegação</h4>
          <ul className="space-y-2 text-sm text-brand-foreground/75">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-[var(--gold)]">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-display font-semibold mb-3">Contato</h4>
           <ul className="space-y-3 text-sm">
            <li>
              <div className="text-xs uppercase tracking-wider text-[var(--gold)] font-semibold mb-0.5">{SITE.vendedor.label}</div>
              <a href={phoneLink(SITE.vendedor.phone)} className="text-brand-foreground/90 hover:text-[var(--gold)] font-semibold">{SITE.vendedor.display}</a>
            </li>
            <li>
              <div className="text-xs uppercase tracking-wider text-[var(--gold)] font-semibold mb-0.5">{SITE.sac.label}</div>
              <div className="text-brand-foreground/85">
                <p>
                  Telefone: <a href={phoneLink(SITE.sac.phone)} className="hover:text-[var(--gold)]">{SITE.sac.phoneDisplay}</a>
                </p>
                <p>
                  WhatsApp: <a href={waLink(SITE.sac.whatsapp)} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">{SITE.sac.whatsappDisplay}</a>
                </p>                
              </div>
              <a href={`mailto:${SITE.sac.email}`} className="text-brand-foreground/85 hover:text-[var(--gold)] block mt-0.5">{SITE.sac.email}</a>
            </li>
            <li className="flex items-start gap-2 pt-1">
              <MapPin className="size-4 mt-0.5 text-[var(--gold)] shrink-0" />
              <Link to="/lojas" className="hover:text-[var(--gold)] underline underline-offset-2">11 lojas no ABC e São Paulo</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-display font-semibold mb-3 flex items-center gap-2">
            <Lock className="size-4 text-[var(--gold)]" /> Pagamento 100% Seguro
          </h4>
          <p className="text-sm text-brand-foreground/75 mb-4">
            Parcelamos em até 24x sem juros.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <VisaFlatIcon width={48} />
            <MastercardFlatIcon width={48}/>
            <AmericanExpressFlatIcon width={48}/>
            <EloFlatIcon width={48}/>
            <HipercardFlatIcon width={48}/>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-brand-foreground/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Santo Sonho Colchões. Todos os direitos reservados.</p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={waLink(SITE.whatsappMain)}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 size-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl hover:scale-105 transition"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MarqueeBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
