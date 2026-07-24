import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { SITE } from "../data/site";

export default function InstagramFeed() {
  useEffect(() => {
    if ((window as any).__bhldScript) return;

    (window as any).__bhldScript = true;

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";

    document.head.appendChild(script);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-8">
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--brand)] inline-flex items-center gap-2">
          <FaInstagram className="size-4" />
          Instagram
        </span>

        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
          Siga @colchoessantosonho
        </h2>

        <p className="text-muted-foreground mt-2">
          Acompanhe nossas novidades, promoções e dicas para uma melhor noite de sono.
        </p>
      </div>

      {/* Feed do Instagram */}
      <div
        data-behold-id="zAnrvIFb1fmOnijhrkGn"
        className="overflow-hidden rounded-2xl min-h-[420px]"
      />

      <div className="mt-8 text-center">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-6 py-3 font-semibold hover:opacity-90 transition"
        >
          <FaInstagram className="size-4" />
          Ver mais no Instagram
        </a>
      </div>
    </section>
  );
}