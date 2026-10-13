import { i as __toESM, t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { c as Phone, d as Mail, f as Linkedin, h as Facebook, i as Twitter, l as Menu, n as X, p as Instagram, t as Youtube, u as MapPin, y as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CKRJakyp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-4E71gxPM.css";
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
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var navItems = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/programs",
		label: "Programs",
		hasMenu: true
	},
	{
		to: "/board",
		label: "Board Members"
	},
	{
		to: "/impact",
		label: "Impact"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var programLinks = [
	{
		to: "/programs",
		label: "All Programs"
	},
	{
		to: "/programs/girl-child-mentorship",
		label: "Girl Child Mentorship"
	},
	{
		to: "/programs/womens-empowerment",
		label: "Women's Empowerment"
	},
	{
		to: "/programs/youth-voice",
		label: "Youth Voice"
	},
	{
		to: "/programs/human-rights",
		label: "Human Rights"
	},
	{
		to: "/programs/climate-action",
		label: "Climate Action"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden bg-navy text-navy-foreground md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:alphaandomegacbokenya001@gmail.com",
						className: "inline-flex items-center gap-2 opacity-85 transition-opacity hover:opacity-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), " alphaandomegacbokenya001@gmail.com"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+254740610899",
						className: "inline-flex items-center gap-2 opacity-85 transition-opacity hover:opacity-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), " +254 740 610 899"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.facebook.com/alphaandomegacbokenya",
							"aria-label": "Alpha & Omega CBO Kenya on Facebook",
							className: "opacity-75 transition-all hover:-translate-y-0.5 hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://x.com/and_cbo",
							"aria-label": "Alpha & Omega CBO Kenya on X",
							className: "opacity-75 transition-all hover:-translate-y-0.5 hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Alpha & Omega CBO Kenya on Instagram",
							className: "opacity-75 transition-all hover:-translate-y-0.5 hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Alpha & Omega CBO Kenya on LinkedIn",
							className: "opacity-75 transition-all hover:-translate-y-0.5 hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Alpha & Omega CBO Kenya on YouTube",
							className: "opacity-75 transition-all hover:-translate-y-0.5 hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-3.5" })
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("border-b border-transparent bg-background/80 backdrop-blur-xl transition-all duration-500", scrolled && "border-border shadow-soft"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center overflow-hidden rounded-xl shadow-soft transition-transform group-hover:rotate-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logos/Alpha and Omega Logo.jpg",
								alt: "Alpha & Omega CBO Kenya logo",
								className: "size-full object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg leading-none font-bold tracking-tight",
							children: ["Alpha & Omega", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[0.62rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase",
								children: "CBO Kenya"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								activeOptions: { exact: item.to === "/" },
								activeProps: { className: "text-primary" },
								className: "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
								children: [item.label, item.hasMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 transition-transform group-hover:rotate-180" })]
							}), item.hasMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "invisible absolute top-full left-0 w-60 translate-y-2 rounded-2xl border border-border bg-popover p-2 opacity-0 shadow-lift transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
								children: programLinks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: p.to,
									className: "block rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
									children: p.label
								}, p.to))
							})]
						}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							className: "ml-2 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5",
							children: "Events"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						"aria-label": "Toggle menu",
						className: "grid size-10 place-items-center rounded-xl border border-border lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 lg:hidden", open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4",
					children: [...navItems, {
						to: "/events",
						label: "Events"
					}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						activeOptions: { exact: item.to === "/" },
						activeProps: { className: "text-primary" },
						className: "rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80",
						children: item.label
					}, item.to))
				})
			})]
		})]
	});
}
/**
* Returns Alpha & Omega CBO Kenya contact details.
*
* Fields that have not been officially confirmed are set to `null` so the
* Footer can gracefully fall back to a generic office-visit message.
*
* Update this single source of truth when contact details change.
*/
function getContactInfo() {
	return {
		address: "Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya",
		phone: "+254 740 610 899",
		email: "alphaandomegacbokenya001@gmail.com",
		hasAny: true
	};
}
/** Renders the contact / visit-us block, falling back gracefully when data is unavailable. */
function ContactSection() {
	const contact = getContactInfo();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-sm font-semibold tracking-[0.18em] uppercase",
		children: "Visit us"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-3 text-sm text-navy-foreground/70",
		children: contact.hasAny ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			contact.address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
					className: "mt-0.5 size-4 shrink-0 text-azure",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contact.address })]
			}),
			contact.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
					className: "mt-0.5 size-4 shrink-0 text-azure",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `tel:${contact.phone.replace(/\s/g, "")}`,
					className: "transition-colors hover:text-navy-foreground",
					children: contact.phone
				})]
			}),
			contact.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
					className: "mt-0.5 size-4 shrink-0 text-azure",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${contact.email}`,
					className: "transition-colors hover:text-navy-foreground",
					children: contact.email
				})]
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For inquiries, please visit our office in Mombasa" })
	})] });
}
var columns = [{
	title: "Explore",
	links: [
		{
			to: "/about",
			label: "About Us"
		},
		{
			to: "/programs",
			label: "Programs"
		},
		{
			to: "/impact",
			label: "Impact"
		},
		{
			to: "/board",
			label: "Board Members"
		}
	]
}, {
	title: "Community",
	links: [
		{
			to: "/events",
			label: "Events"
		},
		{
			to: "/programs/girl-child-mentorship",
			label: "Girl Child Mentorship"
		},
		{
			to: "/programs/womens-empowerment",
			label: "Women's Empowerment"
		},
		{
			to: "/programs/youth-voice",
			label: "Youth Voice"
		},
		{
			to: "/programs/human-rights",
			label: "Human Rights"
		},
		{
			to: "/programs/climate-action",
			label: "Climate Action"
		}
	]
}];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-navy-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center overflow-hidden rounded-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logos/Alpha and Omega Logo.jpg",
								alt: "Alpha & Omega CBO Kenya logo",
								className: "size-full object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold",
							children: "Alpha & Omega CBO Kenya"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-navy-foreground/70",
						children: "Youth-led community-based organization supporting women, girls, and young people through mentorship, rights awareness, civic participation, and community action in Mombasa, Kenya."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.facebook.com/alphaandomegacbokenya",
								"aria-label": "Alpha & Omega CBO Kenya on Facebook",
								className: "grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://x.com/and_cbo",
								"aria-label": "Alpha & Omega CBO Kenya on X",
								className: "grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Alpha & Omega CBO Kenya on Instagram",
								className: "grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Alpha & Omega CBO Kenya on LinkedIn",
								className: "grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Alpha & Omega CBO Kenya on YouTube",
								className: "grid size-9 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-4" })
							})
						]
					})
				] }),
				columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold tracking-[0.18em] uppercase",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5 text-sm",
					children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-navy-foreground/70 transition-colors hover:text-navy-foreground",
						children: l.label
					}) }, l.to))
				})] }, col.title)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Alpha & Omega CBO Kenya. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Empower | Educate | Transforming Lives." })]
			})
		})]
	});
}
/**
* Site intro gate — mirrors the original hub's welcome overlay.
* Shows once per browser session, then fades away.
*/
function IntroSplash() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		try {
			if (!sessionStorage.getItem("alpha-omega-intro-seen")) setOpen(true);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const dismiss = () => {
		try {
			sessionStorage.setItem("alpha-omega-intro-seen", "1");
		} catch {}
		setLeaving(true);
		window.setTimeout(() => setOpen(false), 700);
	};
	if (!mounted || !open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-leaving": leaving,
		className: "intro-gate brand-gradient fixed inset-0 z-[100] grid place-items-center px-6 text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 opacity-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "float-slow absolute top-1/4 left-[12%] size-72 rounded-full bg-red-500/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "float-slow absolute bottom-[15%] right-[10%] size-80 rounded-full bg-green-500/25 blur-3xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "intro-inner relative max-w-xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-white",
					children: "Welcome · Karibu Mombasa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 font-display text-4xl font-bold sm:text-5xl text-white",
					children: ["Welcome to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Alpha & Omega CBO Kenya"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/90",
					children: "Youth-led community organization rooted in Bangladesh Slums, Mikindani Ward, Mombasa. We support women, girls, and young people through mentorship, rights awareness, civic participation, and community action."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: dismiss,
					className: "group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-9 py-3.5 text-sm font-semibold text-primary shadow-lift transition-transform hover:-translate-y-0.5",
					children: ["Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "transition-transform group-hover:translate-x-1",
						children: "→"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[0.7rem] tracking-[0.2em] uppercase text-white/70",
					children: "Click continue to explore the site"
				})
			]
		})]
	});
}
/** Thin gradient bar tracking page scroll progress. */
function ScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(max > 0 ? window.scrollY / max : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "fixed inset-x-0 top-0 z-[90] h-0.5 bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full origin-left brand-gradient",
			style: { transform: `scaleX(${progress})` }
		})
	});
}
/** Returns a translateY offset for a gentle parallax effect. */
function useParallax(strength = .25) {
	const ref = (0, import_react.useRef)(null);
	const [offset, setOffset] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let frame = 0;
		const update = () => {
			const el = ref.current;
			if (el) {
				const rect = el.getBoundingClientRect();
				setOffset((rect.top * -1 + 0) * strength);
			}
			frame = 0;
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, [strength]);
	return {
		ref,
		offset
	};
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
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
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Alpha & Omega CBO Kenya" },
			{
				name: "description",
				content: "Youth-led community organization in Bangladesh Slums, Mikindani Ward, Mombasa — supporting women, girls, and young people through mentorship, rights awareness, civic participation, and community action."
			},
			{
				name: "author",
				content: "Alpha & Omega CBO Kenya"
			},
			{
				property: "og:title",
				content: "Alpha & Omega CBO Kenya | Empower · Educate · Transform"
			},
			{
				property: "og:description",
				content: "Youth-led CBO in Mombasa supporting women, girls, and young people through mentorship, rights, civic participation, and community action."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://alphaandomegacbokenya.netlify.app"
			},
			{
				property: "og:image",
				content: "https://alphaandomegacbokenya.netlify.app/logos/Alpha%20and%20Omega%20Logo.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:type",
				content: "image/png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Alpha & Omega CBO Kenya | Empower · Educate · Transform"
			},
			{
				name: "twitter:description",
				content: "Youth-led CBO in Mombasa supporting women, girls, and young people."
			},
			{
				name: "twitter:image",
				content: "https://alphaandomegacbokenya.netlify.app/logos/Alpha%20and%20Omega%20Logo.jpg"
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
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
			},
			{
				rel: "icon",
				href: "/logos/Alpha%20and%20Omega%20Logo.jpg",
				type: "image/jpeg"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroSplash, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
var $$splitComponentImporter$11 = () => import("./routes-DYOX_yXu.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Home | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Alpha & Omega CBO Kenya — youth-led organization in Bangladesh Slums, Mikindani Ward, Mombasa, supporting women, girls, and young people."
		},
		{
			property: "og:title",
			content: "Alpha & Omega CBO Kenya | Empower · Educate · Transform"
		},
		{
			property: "og:description",
			content: "Youth-led CBO in Mombasa supporting women, girls, and young people through mentorship, rights awareness, civic participation, and community action."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Alpha & Omega CBO Kenya | Empower · Educate · Transform"
		},
		{
			name: "twitter:description",
			content: "Youth-led CBO in Mombasa supporting women, girls, and young people through mentorship, rights awareness, civic participation, and community action."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./about-DjUuko6Z.mjs");
var Route$10 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Alpha & Omega CBO Kenya's story: a youth-led CBO rooted in Bangladesh Slums, Mikindani Ward, Mombasa, founded in 2019."
		},
		{
			property: "og:title",
			content: "About Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Youth-led community organization in Bangladesh Slums, Mombasa, supporting women, girls, and young people since 2019."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "About Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Youth-led community organization in Bangladesh Slums, Mombasa, founded in 2019."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./board-DngWQcTV.mjs");
var Route$9 = createFileRoute("/board")({
	head: () => ({ meta: [
		{ title: "Board Members | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Meet the leadership of Alpha & Omega CBO Kenya, founded by Victor Nando Odongo in Bangladesh Slums, Mombasa."
		},
		{
			property: "og:title",
			content: "Board Members | Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Leadership of Alpha & Omega CBO Kenya, founded by Victor Nando Odongo in Bangladesh Slums, Mombasa."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Board Members | Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Meet the team behind Alpha & Omega CBO Kenya in Bangladesh Slums, Mombasa."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./contact-DEMPyx_f.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Get in touch with Alpha & Omega CBO Kenya in Bangladesh Slums, Mikindani Ward, Mombasa. Partnerships, programs, and community engagement."
		},
		{
			property: "og:title",
			content: "Contact | Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Reach out to Alpha & Omega CBO Kenya for partnerships, programs, and community engagement opportunities."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Contact | Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Get in touch with Alpha & Omega CBO Kenya in Bangladesh Slums, Mombasa."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./events-BtAUwsVI.mjs");
var Route$7 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Upcoming events at Alpha & Omega CBO Kenya: mentorship sessions, women's workshops, youth dialogues, and community action days in Bangladesh Slums, Mombasa."
		},
		{
			property: "og:title",
			content: "Events | Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Mentorship sessions, empowerment workshops, youth civic dialogues, and community action days in Bangladesh Slums and Mikindani Ward."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Events | Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Join community events and workshops at Alpha & Omega CBO Kenya in Mombasa."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./impact-OoIbZ5Wy.mjs");
var Route$6 = createFileRoute("/impact")({
	head: () => ({ meta: [
		{ title: "Impact | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Alpha & Omega CBO Kenya's community impact: partnerships, milestones, and program outcomes from 2019 to 2025."
		},
		{
			property: "og:title",
			content: "Impact | Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Alpha & Omega CBO Kenya's community milestones from 2019 to 2025."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Impact | Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Community milestones and program outcomes from Alpha & Omega CBO Kenya, 2019–2025."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
/**
* Impact metrics — provable figures only.
* All data drawn from partnership records and public sources.
*/
/**
* Outcome timeline — verified and documented milestones only.
*/
/** Badge colour mapping reused for the outcome figures section */
var $$splitComponentImporter$5 = () => import("./programs-BNR3sE6e.mjs");
var Route$5 = createFileRoute("/programs")({
	head: () => ({ meta: [
		{ title: "Programs | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Alpha & Omega CBO Kenya's five programs: Girl Child Mentorship, Women's Empowerment, Youth Voice, Human Rights, and Climate Action in Mombasa."
		},
		{
			property: "og:title",
			content: "Programs | Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Five integrated programs for community empowerment, rights awareness, and civic participation in Bangladesh Slums, Mombasa."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Programs | Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Girl Child Mentorship, Women's Empowerment, Youth Voice, Human Rights, and Climate Action programs."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./programs.climate-action-BnOVKavz.mjs");
var Route$4 = createFileRoute("/programs/climate-action")({
	head: () => ({ meta: [
		{ title: "Climate & Community Action | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Mobilising residents of Mikindani Ward to respond to climate risks and build community resilience as a DARAJA Project Community Hub."
		},
		{
			property: "og:title",
			content: "Climate & Community Action | Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Mobilising community members in Mikindani Ward to understand climate risks and build resilience as a DARAJA Project Community Hub."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Climate & Community Action | Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Climate resilience and community action in Mikindani Ward as a DARAJA Project Community Hub."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./programs.girl-child-mentorship-TgliYtLM.mjs");
var Route$3 = createFileRoute("/programs/girl-child-mentorship")({
	head: () => ({ meta: [
		{ title: "Girl Child Mentorship & Empowerment | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Mentoring girls in Bangladesh Slums, Mikindani Ward, to stay in school, build confidence, and access the Pad Bank menstrual hygiene program."
		},
		{
			property: "og:title",
			content: "Girl Child Mentorship & Empowerment | Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Mentoring girls in Bangladesh Slums to stay in school, build confidence, and access the Pad Bank."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Girl Child Mentorship & Empowerment | Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Mentoring girls in Bangladesh Slums, Mikindani Ward, to stay in school and build confidence."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./programs.human-rights-CNlkTrat.mjs");
var Route$2 = createFileRoute("/programs/human-rights")({
	head: () => ({ meta: [
		{ title: "Human Rights & Socio-economic Rights | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Rights awareness, legal literacy, and socio-economic advocacy for residents of Bangladesh Slums, in partnership with HURIA Human Rights Lab."
		},
		{
			property: "og:title",
			content: "Human Rights & Socio-economic Rights | Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Training community members in Bangladesh Slums to understand, claim, and defend their socio-economic rights."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Human Rights & Socio-economic Rights | Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Rights awareness and legal literacy in Bangladesh Slums, in partnership with HURIA Human Rights Lab."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./programs.womens-empowerment-DnTtm9wa.mjs");
var Route$1 = createFileRoute("/programs/womens-empowerment")({
	head: () => ({ meta: [
		{ title: "Women's Empowerment & Mentorship | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Structured mentorship and livelihood training for women in Mikindani Ward, Mombasa — building economic independence and community leadership."
		},
		{
			property: "og:title",
			content: "Women's Empowerment & Mentorship | Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Structured mentorship, livelihood training, and community networking for women in Bangladesh Slums and Mikindani Ward."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Women's Empowerment & Mentorship | Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Building economic independence and leadership for women in Mikindani Ward."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./programs.youth-voice-BqIipeDI.mjs");
var Route = createFileRoute("/programs/youth-voice")({
	head: () => ({ meta: [
		{ title: "Youth Voice & Civic Participation | Alpha & Omega CBO Kenya" },
		{
			name: "description",
			content: "Engaging young people in Jomvu Sub-County in civic processes, community forums, and decision-making in partnership with SHOFCO."
		},
		{
			property: "og:title",
			content: "Youth Voice & Civic Participation | Alpha & Omega CBO Kenya"
		},
		{
			property: "og:description",
			content: "Equipping young people in Jomvu Sub-County to engage in civic processes and community decision-making."
		},
		{
			property: "og:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Youth Voice & Civic Participation | Alpha & Omega CBO Kenya"
		},
		{
			name: "twitter:description",
			content: "Youth Voice program engaging young people in civic participation in Jomvu Sub-County."
		},
		{
			name: "twitter:image",
			content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var BoardRoute = Route$9.update({
	id: "/board",
	path: "/board",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var EventsRoute = Route$7.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$12
});
var ImpactRoute = Route$6.update({
	id: "/impact",
	path: "/impact",
	getParentRoute: () => Route$12
});
var ProgramsRoute = Route$5.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$12
});
var ProgramsRouteChildren = {
	ProgramsClimateActionRoute: Route$4.update({
		id: "/climate-action",
		path: "/climate-action",
		getParentRoute: () => ProgramsRoute
	}),
	ProgramsGirlChildMentorshipRoute: Route$3.update({
		id: "/girl-child-mentorship",
		path: "/girl-child-mentorship",
		getParentRoute: () => ProgramsRoute
	}),
	ProgramsHumanRightsRoute: Route$2.update({
		id: "/human-rights",
		path: "/human-rights",
		getParentRoute: () => ProgramsRoute
	}),
	ProgramsWomensEmpowermentRoute: Route$1.update({
		id: "/womens-empowerment",
		path: "/womens-empowerment",
		getParentRoute: () => ProgramsRoute
	}),
	ProgramsYouthVoiceRoute: Route.update({
		id: "/youth-voice",
		path: "/youth-voice",
		getParentRoute: () => ProgramsRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BoardRoute,
	ContactRoute,
	EventsRoute,
	ImpactRoute,
	ProgramsRoute: ProgramsRoute._addFileChildren(ProgramsRouteChildren)
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { useParallax as n, cn as r, router_exports as t };
