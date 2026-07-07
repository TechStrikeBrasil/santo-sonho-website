import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bannerPromoNew from "../assets/banners/banner-promo-new.png";
import bannerStrongNew from "../assets/banners/banner-strong-new.png";
import bannerAnoNovo from "../assets/banners/banner-ano-novo.jpg";
import bannerColchaoStrong from "../assets/banners/banner-colchao-strong.jpg";
import bannerColchaoVelho from "../assets/banners/banner-colchao-velho.jpg";
import bannerSitePromo from "../assets/banners/banner-site-promo.jpg";

// Para adicionar um novo banner:
// 1. Faça upload da imagem e gere o pointer com `lovable-assets create`
//    (ou coloque um .jpg/.png em src/assets/ e importe direto).
// 2. Adicione uma entrada em BANNERS abaixo com { src, alt, href? }.
// A ordem do array é a ordem de exibição. O carrossel troca sozinho.
export type Banner = {
  src: string;
  alt: string;
  href?: string;
};

export const BANNERS: Banner[] = [
  { src: bannerPromoNew, alt: "Nova promoção - Ofertas imperdíveis" },
  { src: bannerStrongNew, alt: "Colchão Strong - O primeiro bodybuilder do Brasil." },
  { src: bannerAnoNovo, alt: "Ano Novo de sono renovado - colchões com até 50% de desconto" },
  { src: bannerColchaoStrong, alt: "Colchão Strong - Conforto e qualidade para o seu sono" },
  { src: bannerColchaoVelho, alt: "Colchão Velho - Solução para o seu descanso" },
  { src: bannerSitePromo, alt: "Promoção do site - Ofertas imperdíveis" },
];

const INTERVALO_MS = 7000;

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [pausado, setPausado] = useState(false);
  const total = BANNERS.length;

  useEffect(() => {
    if (total <= 1 || pausado) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, INTERVALO_MS);
    return () => window.clearInterval(id);
  }, [total, pausado]);

  if (total === 0) return null;

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  return (
    <section
      className="max-w-7xl mx-auto px-6 pt-8"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      aria-roledescription="carousel"
      aria-label="Banners promocionais"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] border border-border bg-muted">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {BANNERS.map((b, i) => {
            const img = (
              <img
                src={b.src}
                alt={b.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-full h-auto object-cover shrink-0"
                style={{ minWidth: "100%" }}
              />
            );
            return (
              <div key={i} className="w-full shrink-0" aria-hidden={i !== index}>
                {b.href ? <a href={b.href}>{img}</a> : img}
              </div>
            );
          })}
        </div>

        {total > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Banner anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/80 hover:bg-background grid place-items-center shadow"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Próximo banner"
              className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/80 hover:bg-background grid place-items-center shadow"
            >
              <ChevronRight className="size-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {BANNERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para banner ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-[var(--brand)]" : "w-2 bg-background/70 hover:bg-background"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}