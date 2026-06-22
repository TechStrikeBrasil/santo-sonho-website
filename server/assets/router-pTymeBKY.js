import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-Dyf2StuT.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Santo Sonho Colchões — Porque dormir bem, faz bem!" },
			{
				name: "description",
				content: "Colchões, box e acessórios das melhores marcas. 11 lojas no ABC e em São Paulo."
			},
			{
				name: "author",
				content: "Santo Sonho Colchões"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
//#endregion
//#region src/routes/_site.tsx
var $$splitComponentImporter$5 = () => import("./_site-BSHbi4Zn.js");
var Route$5 = createFileRoute("/_site")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
//#endregion
//#region src/routes/_site.index.tsx
var $$splitComponentImporter$4 = () => import("./_site.index-B9l7m8V3.js");
var Route$4 = createFileRoute("/_site/")({
	head: () => ({ meta: [
		{ title: "Santo Sonho Colchões — Porque dormir bem, faz bem!" },
		{
			name: "description",
			content: "Colchões, box e acessórios das melhores marcas. 11 lojas no ABC e em São Paulo. Atendimento humano e preços justos."
		},
		{
			property: "og:title",
			content: "Santo Sonho Colchões"
		},
		{
			property: "og:description",
			content: "Colchões, box e acessórios. 11 lojas no ABC e em São Paulo."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/_site.sobre.tsx
var $$splitComponentImporter$3 = () => import("./_site.sobre-C9gvM_LW.js");
var Route$3 = createFileRoute("/_site/sobre")({
	head: () => ({ meta: [
		{ title: "Sobre — Santo Sonho Colchões" },
		{
			name: "description",
			content: "Conheça a história da Santo Sonho Colchões: mais de uma década cuidando do sono das famílias do ABC e de São Paulo."
		},
		{
			property: "og:title",
			content: "Sobre a Santo Sonho Colchões"
		},
		{
			property: "og:description",
			content: "Mais de uma década cuidando do seu sono."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/_site.produtos.tsx
var $$splitComponentImporter$2 = () => import("./_site.produtos-D7iAWfhJ.js");
var Route$2 = createFileRoute("/_site/produtos")({
	head: () => ({ meta: [
		{ title: "Catálogo de Colchões — Santo Sonho Colchões" },
		{
			name: "description",
			content: "Conheça o catálogo Santo Sonho: colchões casal, queen, king, solteiro, box e acessórios das melhores marcas."
		},
		{
			property: "og:title",
			content: "Catálogo — Santo Sonho Colchões"
		},
		{
			property: "og:description",
			content: "Colchões, box e acessórios das melhores marcas."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/_site.lojas.tsx
var $$splitComponentImporter$1 = () => import("./_site.lojas-q_-lX4b2.js");
var Route$1 = createFileRoute("/_site/lojas")({
	head: () => ({ meta: [
		{ title: "Nossas Lojas — Santo Sonho Colchões" },
		{
			name: "description",
			content: "11 lojas Santo Sonho Colchões no ABC, São Paulo e Ribeirão Pires. Encontre a mais próxima de você."
		},
		{
			property: "og:title",
			content: "Lojas Santo Sonho Colchões"
		},
		{
			property: "og:description",
			content: "Encontre a loja Santo Sonho mais próxima de você."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/_site.contato.tsx
var $$splitComponentImporter = () => import("./_site.contato-D8Q8WUs2.js");
var Route = createFileRoute("/_site/contato")({
	head: () => ({ meta: [
		{ title: "Contato — Santo Sonho Colchões" },
		{
			name: "description",
			content: "Fale com a Santo Sonho Colchões pelo WhatsApp, e-mail ou redes sociais. Atendimento rápido e humano."
		},
		{
			property: "og:title",
			content: "Contato — Santo Sonho Colchões"
		},
		{
			property: "og:description",
			content: "Fale conosco pelo WhatsApp ou e-mail."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SiteRoute = Route$5.update({
	id: "/_site",
	getParentRoute: () => Route$6
});
var SiteIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => SiteRoute
});
var SiteSobreRoute = Route$3.update({
	id: "/sobre",
	path: "/sobre",
	getParentRoute: () => SiteRoute
});
var SiteProdutosRoute = Route$2.update({
	id: "/produtos",
	path: "/produtos",
	getParentRoute: () => SiteRoute
});
var SiteLojasRoute = Route$1.update({
	id: "/lojas",
	path: "/lojas",
	getParentRoute: () => SiteRoute
});
var SiteRouteChildren = {
	SiteContatoRoute: Route.update({
		id: "/contato",
		path: "/contato",
		getParentRoute: () => SiteRoute
	}),
	SiteLojasRoute,
	SiteProdutosRoute,
	SiteSobreRoute,
	SiteIndexRoute
};
var rootRouteChildren = { SiteRoute: SiteRoute._addFileChildren(SiteRouteChildren) };
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
