import { t as hero_bedroom_default } from "./hero-bedroom--v_xssTy.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Award, Heart, Sparkles, Users } from "lucide-react";
//#region src/routes/_site.sobre.tsx?tsr-split=component
function Sobre() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-[var(--brand)] text-brand-foreground",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-6 py-16 md:py-20",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-semibold tracking-widest uppercase text-[var(--gold)]",
					children: "Sobre nós"
				}), /* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl md:text-5xl font-bold mt-2 max-w-3xl",
					children: "Nossa missão é fazer você dormir melhor."
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-bold",
					children: "Uma história feita de bons sonhos"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-4 text-muted-foreground leading-relaxed",
					children: [
						"A ",
						/* @__PURE__ */ jsx("strong", { children: "Santo Sonho Colchões" }),
						" nasceu com um propósito simples: oferecer colchões de qualidade com atendimento humano e preços justos. Hoje, somos referência na região do ABC e em São Paulo, com 11 lojas espalhadas estrategicamente para estar pertinho de você."
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-muted-foreground leading-relaxed",
					children: "Trabalhamos com as melhores marcas do mercado e contamos com uma equipe treinada para ajudar cada cliente a encontrar o colchão ideal para o seu corpo, estilo de vida e orçamento."
				})
			] }), /* @__PURE__ */ jsx("div", {
				className: "rounded-3xl overflow-hidden shadow-[var(--shadow-brand)] aspect-[4/3]",
				children: /* @__PURE__ */ jsx("img", {
					src: hero_bedroom_default,
					alt: "Showroom Santo Sonho Colchões",
					loading: "lazy",
					width: 1920,
					height: 1280,
					className: "size-full object-cover"
				})
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "max-w-7xl mx-auto px-6 pb-20",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "font-display text-3xl font-bold text-center mb-10",
				children: "Nossos valores"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
				children: [
					{
						icon: Award,
						title: "Qualidade",
						text: "Só trabalhamos com marcas confiáveis e garantia de fábrica."
					},
					{
						icon: Heart,
						title: "Cuidado",
						text: "Atendimento humano, sem pressão e com escuta de verdade."
					},
					{
						icon: Users,
						title: "Família",
						text: "Tratamos cada cliente como parte da família Santo Sonho."
					},
					{
						icon: Sparkles,
						title: "Bem-estar",
						text: "Dormir bem é fundamental para uma vida com mais saúde."
					}
				].map((v, i) => /* @__PURE__ */ jsxs("div", {
					className: "bg-card rounded-2xl p-6 border border-border text-center",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "size-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center text-[var(--brand)] mx-auto",
							children: /* @__PURE__ */ jsx(v.icon, { className: "size-6" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display font-bold text-lg mt-4",
							children: v.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground mt-2",
							children: v.text
						})
					]
				}, i))
			})]
		})
	] });
}
//#endregion
export { Sobre as component };
