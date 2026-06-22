import { i as waLink, r as SITE } from "./site-DjOYpgFR.js";
import { useState } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Facebook, Instagram, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
//#region src/components/SiteLayout.tsx
var NAV = [
	{
		to: "/",
		label: "Início"
	},
	{
		to: "/produtos",
		label: "Produtos"
	},
	{
		to: "/lojas",
		label: "Lojas"
	},
	{
		to: "/sobre",
		label: "Sobre"
	},
	{
		to: "/contato",
		label: "Contato"
	}
];
function Header() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "hidden md:block bg-[var(--brand)] text-brand-foreground text-xs",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 py-2 flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ jsxs("a", {
							href: `mailto:${SITE.email}`,
							className: "flex items-center gap-1.5 hover:text-[var(--gold)]",
							children: [
								/* @__PURE__ */ jsx(Mail, { className: "size-3.5" }),
								" ",
								SITE.email
							]
						}), /* @__PURE__ */ jsxs("a", {
							href: waLink(SITE.whatsappMain),
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-1.5 hover:text-[var(--gold)]",
							children: [
								/* @__PURE__ */ jsx(MessageCircle, { className: "size-3.5" }),
								" ",
								SITE.whatsappDisplay
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("a", {
							href: SITE.instagram,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Instagram",
							className: "hover:text-[var(--gold)]",
							children: /* @__PURE__ */ jsx(Instagram, { className: "size-4" })
						}), /* @__PURE__ */ jsx("a", {
							href: SITE.facebook,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Facebook",
							className: "hover:text-[var(--gold)]",
							children: /* @__PURE__ */ jsx(Facebook, { className: "size-4" })
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("img", {
							src: SITE.logoUrl,
							alt: "Santo Sonho Colchões",
							className: "size-12 rounded-full object-cover"
						}), /* @__PURE__ */ jsxs("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display font-bold text-lg text-[var(--brand)]",
								children: "Santo Sonho"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[11px] uppercase tracking-widest text-muted-foreground",
								children: "Colchões"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("nav", {
						className: "hidden md:flex items-center gap-1",
						children: NAV.map((n) => /* @__PURE__ */ jsx(Link, {
							to: n.to,
							className: "px-4 py-2 text-sm font-medium text-foreground/80 hover:text-[var(--brand)] transition-colors",
							activeProps: { className: "px-4 py-2 text-sm font-semibold text-[var(--brand)]" },
							activeOptions: { exact: n.to === "/" },
							children: n.label
						}, n.to))
					}),
					/* @__PURE__ */ jsxs("a", {
						href: waLink(SITE.whatsappMain),
						target: "_blank",
						rel: "noreferrer",
						className: "hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-brand)]",
						children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }), " Fale conosco"]
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => setOpen(!open),
						className: "md:hidden p-2",
						"aria-label": "Menu",
						children: open ? /* @__PURE__ */ jsx(X, { className: "size-6" }) : /* @__PURE__ */ jsx(Menu, { className: "size-6" })
					})
				]
			}),
			open && /* @__PURE__ */ jsx("nav", {
				className: "md:hidden border-t border-border bg-background",
				children: /* @__PURE__ */ jsxs("div", {
					className: "px-6 py-4 flex flex-col gap-1",
					children: [NAV.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						onClick: () => setOpen(false),
						className: "py-2.5 text-base font-medium text-foreground",
						children: n.label
					}, n.to)), /* @__PURE__ */ jsxs("a", {
						href: waLink(SITE.whatsappMain),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-brand-foreground px-5 py-3 text-sm font-semibold",
						children: [/* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }), " Fale no WhatsApp"]
					})]
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-[var(--brand)] text-brand-foreground mt-24",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("img", {
								src: SITE.logoUrl,
								alt: "Santo Sonho Colchões",
								className: "size-14 rounded-full"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-display font-bold text-xl",
								children: "Santo Sonho Colchões"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-sm text-brand-foreground/70",
								children: SITE.tagline
							})] })]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm text-brand-foreground/75 max-w-md",
							children: "Mais de uma década oferecendo o melhor em colchões, com lojas no ABC e em São Paulo. Atendimento humano e preços justos."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex items-center gap-3",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: SITE.instagram,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Instagram",
									className: "size-10 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--brand)] grid place-items-center transition",
									children: /* @__PURE__ */ jsx(Instagram, { className: "size-5" })
								}),
								/* @__PURE__ */ jsx("a", {
									href: SITE.facebook,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Facebook",
									className: "size-10 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--brand)] grid place-items-center transition",
									children: /* @__PURE__ */ jsx(Facebook, { className: "size-5" })
								}),
								/* @__PURE__ */ jsx("a", {
									href: waLink(SITE.whatsappMain),
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "WhatsApp",
									className: "size-10 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--brand)] grid place-items-center transition",
									children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-5" })
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-display font-semibold mb-3",
					children: "Navegação"
				}), /* @__PURE__ */ jsx("ul", {
					className: "space-y-2 text-sm text-brand-foreground/75",
					children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: n.to,
						className: "hover:text-[var(--gold)]",
						children: n.label
					}) }, n.to))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "font-display font-semibold mb-3",
					children: "Contato"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-3 text-sm text-brand-foreground/85",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [
								/* @__PURE__ */ jsx(Phone, { className: "size-4 mt-0.5 text-[var(--gold)]" }),
								" ",
								SITE.whatsappDisplay
							]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [
								/* @__PURE__ */ jsx(Mail, { className: "size-4 mt-0.5 text-[var(--gold)]" }),
								" ",
								SITE.email
							]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "size-4 mt-0.5 text-[var(--gold)]" }), " 11 lojas no ABC e São Paulo"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-6 py-5 text-xs text-brand-foreground/60 flex flex-col md:flex-row items-center justify-between gap-2",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Santo Sonho Colchões. Todos os direitos reservados."
				] }), /* @__PURE__ */ jsx("p", { children: SITE.tagline })]
			})
		})]
	});
}
function WhatsAppFab() {
	return /* @__PURE__ */ jsx("a", {
		href: waLink(SITE.whatsappMain),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "WhatsApp",
		className: "fixed bottom-5 right-5 z-50 size-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl hover:scale-105 transition",
		children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-7" })
	});
}
function SiteLayout() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(WhatsAppFab, {})
		]
	});
}
//#endregion
//#region src/routes/_site.tsx?tsr-split=component
var SplitComponent = SiteLayout;
//#endregion
export { SplitComponent as component };
