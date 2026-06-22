import { i as waLink, n as PRODUTOS, r as SITE, t as LOJAS } from "./site-DjOYpgFR.js";
import { t as hero_bedroom_default } from "./hero-bedroom--v_xssTy.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, MapPin, MessageCircle, ShieldCheck, Star, Truck } from "lucide-react";
//#region src/routes/_site.index.tsx?tsr-split=component
function Home() {
	const destaques = PRODUTOS.filter((p) => p.destaque);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ jsx("img", {
					src: hero_bedroom_default,
					alt: "Quarto sofisticado com colchão Santo Sonho",
					className: "size-full object-cover",
					width: 1920,
					height: 1280
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[var(--brand)]/95 via-[var(--brand)]/70 to-[var(--brand)]/20" })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative max-w-7xl mx-auto px-6 py-28 md:py-36 text-brand-foreground",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide uppercase",
						children: [/* @__PURE__ */ jsx(Star, { className: "size-3.5 text-[var(--gold)]" }), " Há mais de 10 anos cuidando do seu sono"]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl",
						children: "O colchão certo para a sua melhor noite de sono."
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-5 text-lg md:text-xl text-brand-foreground/85 max-w-2xl",
						children: [
							"Conforto, qualidade e variedade das melhores marcas. ",
							LOJAS.length,
							" lojas no ABC e em São Paulo prontas para te atender."
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/produtos",
							className: "inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--brand)] px-6 py-3.5 font-semibold hover:opacity-90 transition",
							children: ["Ver catálogo ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ jsxs("a", {
							href: waLink(SITE.whatsappMain),
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 px-6 py-3.5 font-semibold transition",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }), " Fale no WhatsApp"]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "max-w-7xl mx-auto px-6 -mt-12 relative z-10",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-3 gap-4",
				children: [
					{
						icon: ShieldCheck,
						title: "Qualidade garantida",
						text: "Marcas selecionadas com garantia de fábrica."
					},
					{
						icon: Truck,
						title: "Entrega rápida",
						text: "Entregamos em toda a região do ABC e São Paulo."
					},
					{
						icon: MessageCircle,
						title: "Atendimento humano",
						text: "Tire dúvidas e feche pelo WhatsApp com um vendedor."
					}
				].map((b, i) => /* @__PURE__ */ jsxs("div", {
					className: "bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border flex gap-4",
					children: [/* @__PURE__ */ jsx("div", {
						className: "size-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center text-[var(--brand)] shrink-0",
						children: /* @__PURE__ */ jsx(b.icon, { className: "size-6" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "font-semibold text-base",
						children: b.title
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground mt-0.5",
						children: b.text
					})] })]
				}, i))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "max-w-7xl mx-auto px-6 py-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between gap-4 mb-10",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-semibold tracking-widest uppercase text-[var(--brand)]",
					children: "Destaques"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl md:text-4xl font-bold mt-2",
					children: "Os queridinhos da loja"
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/produtos",
					className: "hidden md:inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:gap-2 transition-all",
					children: ["Ver todos ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: destaques.map((p) => /* @__PURE__ */ jsxs("article", {
					className: "group bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform",
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
						className: "p-6",
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
								className: "text-sm text-muted-foreground mt-2 line-clamp-2",
								children: p.descricao
							}),
							/* @__PURE__ */ jsxs("a", {
								href: waLink(SITE.whatsappMain, `Olá! Tenho interesse no modelo "${p.nome}". Pode me passar mais informações?`),
								target: "_blank",
								rel: "noreferrer",
								className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:gap-3 transition-all",
								children: ["Solicitar orçamento ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
							})
						]
					})]
				}, p.id))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "max-w-7xl mx-auto px-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "rounded-3xl p-10 md:p-16 text-brand-foreground relative overflow-hidden",
				style: { background: "var(--gradient-hero)" },
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative max-w-2xl",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl md:text-4xl font-bold leading-tight",
							children: "Não sabe qual colchão escolher?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-brand-foreground/85 text-lg",
							children: "Nossos consultores ajudam você a encontrar o colchão ideal para o seu corpo e estilo de vida."
						}),
						/* @__PURE__ */ jsxs("a", {
							href: waLink(SITE.whatsappMain, "Olá! Quero ajuda para escolher o colchão ideal."),
							target: "_blank",
							rel: "noreferrer",
							className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--brand)] px-7 py-3.5 font-semibold hover:opacity-90 transition",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-5" }), " Falar com um consultor"]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "max-w-7xl mx-auto px-6 py-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between gap-4 mb-10",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-semibold tracking-widest uppercase text-[var(--brand)]",
					children: "Nossas lojas"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl md:text-4xl font-bold mt-2",
					children: "Estamos pertinho de você"
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/lojas",
					className: "hidden md:inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:gap-2 transition-all",
					children: ["Ver todas ", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: LOJAS.slice(0, 4).map((l) => /* @__PURE__ */ jsxs("div", {
					className: "bg-card rounded-2xl p-5 border border-border",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "size-10 rounded-lg bg-[var(--brand)]/10 grid place-items-center text-[var(--brand)] mb-3",
							children: /* @__PURE__ */ jsx(MapPin, { className: "size-5" })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: l.cidade
						}),
						/* @__PURE__ */ jsx("div", {
							className: "font-semibold mt-1",
							children: l.nome
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground mt-2 line-clamp-2",
							children: l.endereco
						})
					]
				}, l.nome))
			})]
		})
	] });
}
//#endregion
export { Home as component };
