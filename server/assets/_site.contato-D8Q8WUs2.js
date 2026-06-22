import { i as waLink, r as SITE, t as LOJAS } from "./site-DjOYpgFR.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Facebook, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
//#region src/routes/_site.contato.tsx?tsr-split=component
function Contato() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-[var(--brand)] text-brand-foreground",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 py-16 md:py-20",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-semibold tracking-widest uppercase text-[var(--gold)]",
					children: "Contato"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl md:text-5xl font-bold mt-2",
					children: "Fale com a gente"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-brand-foreground/80 max-w-2xl",
					children: "Estamos prontos para te atender no canal que você preferir."
				})
			]
		})
	}), /* @__PURE__ */ jsxs("section", {
		className: "max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: waLink(SITE.whatsappMain),
					target: "_blank",
					rel: "noreferrer",
					className: "flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-card)] transition",
					children: [/* @__PURE__ */ jsx("div", {
						className: "size-14 rounded-2xl bg-[#25D366]/10 grid place-items-center text-[#25D366]",
						children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-7" })
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-semibold tracking-wider uppercase text-muted-foreground",
							children: "WhatsApp"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "font-display font-bold text-lg",
							children: SITE.whatsappDisplay
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-sm text-muted-foreground",
							children: "Resposta rápida em horário comercial"
						})
					] })]
				}),
				/* @__PURE__ */ jsxs("a", {
					href: `mailto:${SITE.email}`,
					className: "flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-[var(--brand)]/40 hover:shadow-[var(--shadow-card)] transition",
					children: [/* @__PURE__ */ jsx("div", {
						className: "size-14 rounded-2xl bg-[var(--brand)]/10 grid place-items-center text-[var(--brand)]",
						children: /* @__PURE__ */ jsx(Mail, { className: "size-7" })
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-semibold tracking-wider uppercase text-muted-foreground",
							children: "E-mail"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "font-display font-bold text-lg break-all",
							children: SITE.email
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-sm text-muted-foreground",
							children: "Para orçamentos e parcerias"
						})
					] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ jsxs("a", {
						href: SITE.instagram,
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center gap-3 p-5 rounded-2xl bg-card border border-border hover:border-[var(--brand)]/40 transition",
						children: [/* @__PURE__ */ jsx(Instagram, { className: "size-6 text-[var(--brand)]" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: "Siga no"
						}), /* @__PURE__ */ jsx("div", {
							className: "font-semibold",
							children: "Instagram"
						})] })]
					}), /* @__PURE__ */ jsxs("a", {
						href: SITE.facebook,
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center gap-3 p-5 rounded-2xl bg-card border border-border hover:border-[var(--brand)]/40 transition",
						children: [/* @__PURE__ */ jsx(Facebook, { className: "size-6 text-[var(--brand)]" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs text-muted-foreground",
							children: "Curta no"
						}), /* @__PURE__ */ jsx("div", {
							className: "font-semibold",
							children: "Facebook"
						})] })]
					})]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "bg-card border border-border rounded-2xl p-6",
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-2xl font-bold flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(MapPin, { className: "size-6 text-[var(--brand)]" }), " Lojas Santo Sonho"]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "Visite a unidade mais próxima de você."
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-5 space-y-3 max-h-[460px] overflow-y-auto pr-2",
					children: LOJAS.map((l) => /* @__PURE__ */ jsxs("li", {
						className: "p-3 rounded-xl hover:bg-secondary transition",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-xs uppercase tracking-wider text-[var(--brand)]/70 font-semibold",
								children: l.cidade
							}),
							/* @__PURE__ */ jsx("div", {
								className: "font-semibold",
								children: l.nome
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-sm text-muted-foreground",
								children: l.endereco
							})
						]
					}, l.nome))
				})
			]
		})]
	})] });
}
//#endregion
export { Contato as component };
