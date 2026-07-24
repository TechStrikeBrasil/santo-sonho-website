import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SITE } from "../data/site";

import {
  FaInstagram,
} from "react-icons/fa";

import m1 from "../assets/hero-bedroom.jpg";
import m2 from "../assets/hero-bedroom.jpg";
import m3 from "../assets/hero-bedroom.jpg";
import m4 from "../assets/hero-bedroom.jpg";
import m5 from "../assets/hero-bedroom.jpg";
import m6 from "../assets/hero-bedroom.jpg";

// Placeholder posts — atualize esta lista com os links reais das últimas
// publicações do @colchoessantosonho. Para carregar automaticamente do
// Instagram é necessário integrar a Instagram Graph API (conta business +
// token). Enquanto isso, este carrossel exibe estas imagens em loop.

const POSTS = [
  { img: m1, url: SITE.instagram },
  { img: m2, url: SITE.instagram },
  { img: m3, url: SITE.instagram },
  { img: m4, url: SITE.instagram },
  { img: m5, url: SITE.instagram },
  { img: m6, url: SITE.instagram },
];

export default function InstagramFeed() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function update() {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function scrollBy(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--brand)] inline-flex items-center gap-2">
            <FaInstagram className="size-4" /> Instagram
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Siga @colchoessantosonho</h2>
          <p className="text-muted-foreground mt-2">Últimas publicações da nossa loja.</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button onClick={() => scrollBy(-1)} disabled={!canPrev} aria-label="Anterior"
            className="size-10 rounded-full border border-border grid place-items-center hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition">
            <ChevronLeft className="size-5" />
          </button>
          <button onClick={() => scrollBy(1)} disabled={!canNext} aria-label="Próximo"
            className="size-10 rounded-full border border-border grid place-items-center hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}>
        {POSTS.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noreferrer"
            className="group relative shrink-0 snap-start aspect-square w-[70%] sm:w-[45%] md:w-[30%] lg:w-[23%] overflow-hidden rounded-2xl border border-border bg-muted">
            <img src={p.img} alt={`Publicação ${i + 1}`} loading="lazy"
              className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[var(--brand)]/0 group-hover:bg-[var(--brand)]/60 transition-colors grid place-items-center">
              <FaInstagram className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href={SITE.instagram} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-6 py-3 font-semibold hover:opacity-90 transition">
          <FaInstagram className="size-4" /> Ver mais no Instagram
        </a>
      </div>
    </section>
  );
}