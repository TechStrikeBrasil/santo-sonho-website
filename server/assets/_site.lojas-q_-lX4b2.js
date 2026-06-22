import { i as waLink, t as LOJAS } from "./site-DjOYpgFR.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { MapPin, MessageCircle, Phone } from "lucide-react";
//#region src/routes/_site.lojas.tsx?tsr-split=component
function Lojas() {
	const grupos = Array.from(new Set(LOJAS.map((l) => l.cidade)));
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-[var(--brand)] text-brand-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 py-16 md:py-20",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-semibold tracking-widest uppercase text-[var(--gold)]",
					children: "Nossas lojas"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl md:text-5xl font-bold mt-2",
					children: "Estamos perto de você"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-3 text-brand-foreground/80 max-w-2xl",
					children: [LOJAS.length, " unidades para você visitar, experimentar e levar para casa o colchão dos seus sonhos."]
				})
			]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "max-w-7xl mx-auto px-6 py-14",
		children: grupos.map((cidade) => /* @__PURE__ */ jsxs("div", {
			className: "mb-12 last:mb-0",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "font-display text-2xl font-bold mb-5 flex items-center gap-3",
				children: [
					/* @__PURE__ */ jsx("span", { className: "h-px flex-1 max-w-8 bg-[var(--brand)]/30" }),
					cidade,
					/* @__PURE__ */ jsxs("span", {
						className: "text-sm font-normal text-muted-foreground",
						children: [
							"(",
							LOJAS.filter((l) => l.cidade === cidade).length,
							" ",
							LOJAS.filter((l) => l.cidade === cidade).length > 1 ? "lojas" : "loja",
							")"
						]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
				children: LOJAS.filter((l) => l.cidade === cidade).map((l) => /* @__PURE__ */ jsxs("article", {
					className: "bg-card rounded-2xl p-6 border border-border shadow-[var(--shadow-card)] flex flex-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-11 rounded-xl bg-[var(--brand)]/10 grid place-items-center text-[var(--brand)] shrink-0",
								children: /* @__PURE__ */ jsx(MapPin, { className: "size-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-display font-bold text-lg leading-tight",
									children: l.nome
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground mt-1",
									children: l.endereco
								}),
								l.referencia && /* @__PURE__ */ jsx("p", {
									className: "text-xs text-[var(--brand)]/70 mt-1 italic",
									children: l.referencia
								})
							] })]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-5 pt-5 border-t border-border space-y-2 text-sm",
							children: l.telefones.map((t) => /* @__PURE__ */ jsxs("a", {
								href: `tel:${t.replace(/\D/g, "")}`,
								className: "flex items-center gap-2 text-foreground/80 hover:text-[var(--brand)]",
								children: [
									/* @__PURE__ */ jsx(Phone, { className: "size-4" }),
									" ",
									t
								]
							}, t))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ jsxs("a", {
								href: waLink(l.whatsapp, `Olá! Vim do site da loja ${l.nome}.`),
								target: "_blank",
								rel: "noreferrer",
								className: "flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }), " WhatsApp"]
							}), /* @__PURE__ */ jsxs("a", {
								href: `https://maps.google.com/?q=${encodeURIComponent(l.endereco)}`,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "size-4" }), " Mapa"]
							})]
						})
					]
				}, l.nome))
			})]
		}, cidade))
	})] });
}
//#endregion
export { Lojas as component };
