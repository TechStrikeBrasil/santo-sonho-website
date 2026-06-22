import { i as waLink, n as PRODUTOS, r as SITE } from "./site-DjOYpgFR.js";
import { useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, MessageCircle } from "lucide-react";
//#region src/routes/_site.produtos.tsx?tsr-split=component
var CATEGORIAS = [
	"Todos",
	"Casal",
	"Queen",
	"King",
	"Solteiro",
	"Box",
	"Acessórios"
];
function Produtos() {
	const [cat, setCat] = useState("Todos");
	const lista = useMemo(() => cat === "Todos" ? PRODUTOS : PRODUTOS.filter((p) => p.categoria === cat), [cat]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-[var(--brand)] text-brand-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 py-16 md:py-20",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-semibold tracking-widest uppercase text-[var(--gold)]",
					children: "Catálogo"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl md:text-5xl font-bold mt-2",
					children: "Nossos produtos"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-brand-foreground/80 max-w-2xl",
					children: "Explore nossa linha completa de colchões, bases box e acessórios para uma noite perfeita de sono."
				})
			]
		})
	}), /* @__PURE__ */ jsxs("section", {
		className: "max-w-7xl mx-auto px-6 py-10",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-2 mb-8",
				children: CATEGORIAS.map((c) => /* @__PURE__ */ jsx("button", {
					onClick: () => setCat(c),
					className: `px-4 py-2 rounded-full text-sm font-medium border transition ${cat === c ? "bg-[var(--brand)] text-brand-foreground border-[var(--brand)]" : "bg-card text-foreground border-border hover:border-[var(--brand)]/40"}`,
					children: c
				}, c))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: lista.map((p) => /* @__PURE__ */ jsxs("article", {
					className: "group bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] flex flex-col",
					children: [/* @__PURE__ */ jsx("div", {
						className: "aspect-[4/3] overflow-hidden bg-muted",
						children: /* @__PURE__ */ jsx("img", {
							src: p.imagem,
							alt: p.nome,
							loading: "lazy",
							width: 1024,
							height: 768,
							className: "size-full object-cover group-hover:scale-105 transition-transform duration-500"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-6 flex-1 flex flex-col",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold tracking-wider uppercase text-[var(--brand)]/70",
								children: p.categoria
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display font-bold text-xl mt-1",
								children: p.nome
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground mt-2",
								children: p.descricao
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-4 grid grid-cols-2 gap-1.5 text-xs text-foreground/75",
								children: p.caracteristicas.map((c) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-[var(--gold)]" }),
										" ",
										c
									]
								}, c))
							}),
							/* @__PURE__ */ jsxs("a", {
								href: waLink(SITE.whatsappMain, `Olá! Tenho interesse no modelo "${p.nome}" (${p.categoria}). Pode me passar mais informações e o preço?`),
								target: "_blank",
								rel: "noreferrer",
								className: "mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }), " Solicitar orçamento"]
							})
						]
					})]
				}, p.id))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-16 rounded-3xl p-10 text-center text-brand-foreground",
				style: { background: "var(--gradient-hero)" },
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-2xl md:text-3xl font-bold",
						children: "Não encontrou o que procurava?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-brand-foreground/85",
						children: "Trabalhamos com as principais marcas do mercado. Fale conosco que conseguimos."
					}),
					/* @__PURE__ */ jsxs("a", {
						href: waLink(SITE.whatsappMain),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--brand)] px-6 py-3 font-semibold",
						children: ["Fale no WhatsApp ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
					})
				]
			})
		]
	})] });
}
//#endregion
export { Produtos as component };
