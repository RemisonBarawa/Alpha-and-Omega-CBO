import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, n as Counter, r as IMG } from "./images-yt-zjqMr.mjs";
import { t as PageHero } from "./PageHero-CICYncoi.mjs";
import { t as CtaBand } from "./CtaBand-B7mV7IrE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DjUuko6Z.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	["Youth-Led", "Young people from the community guide priorities, lead programs, and own outcomes."],
	["Gender Responsive", "Programs specifically address the needs of women and girls alongside young men and boys."],
	["Rights-Based", "All work is grounded in human rights principles, informed by our partnership with HURIA Human Rights Lab."],
	["Community-Rooted", "We are from Bangladesh Slums — our decisions are made with and by the community we serve."]
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Story",
			title: "Youth-led community action in Bangladesh Slums since 2019",
			body: "Alpha & Omega CBO Kenya was founded to support women, girls, and young people in Bangladesh Slums, Mikindani Ward, Jomvu Sub-County. Today our work spans five programs in mentorship, rights, civic participation, and community action.",
			image: IMG.team,
			stats: [
				["2019", "Year founded"],
				["5", "Active programs"],
				["Mombasa", "Bangladesh Slums, Jomvu"]
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "overflow-hidden rounded-[2rem] border border-border shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMG.community,
						alt: "Community members engaged in Alpha & Omega CBO Kenya programs in Bangladesh Slums, Mombasa",
						loading: "lazy",
						width: 1920,
						height: 1088,
						className: "size-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold sm:text-4xl",
						children: "Why we exist"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground",
							children: "Bangladesh Slums in Mikindani Ward, Jomvu Sub-County, is home to a vibrant community facing significant challenges — limited access to education, persistent gender inequality, restricted economic opportunity, and the compounding effects of climate vulnerability."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 180,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Alpha & Omega CBO Kenya was founded to address these challenges directly, by and for the community. By centering youth leadership, responding to the needs of women and girls, grounding work in human rights principles, and building civic agency, we believe community-rooted action creates lasting change."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-3",
						children: [
							{
								to: 5,
								label: "Active programs"
							},
							{
								to: 4,
								label: "Named partner organizations"
							},
							{
								to: 2019,
								label: "Year founded"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 220 + i * 90,
							className: "rounded-2xl border border-border bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-bold text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: s.to })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.label
							})]
						}, s.label))
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section pattern-band bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "What Guides Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-bold sm:text-4xl",
					children: "Our values"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2",
					children: values.map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 100,
						className: "card-lift pattern-card rounded-3xl border border-border bg-card p-6 sm:p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: body
						})]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "rounded-3xl border border-border bg-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Mission"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "To empower women, girls, and young people in Bangladesh Slums through mentorship, rights awareness, civic participation, and community action."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					className: "brand-gradient rounded-3xl p-8 text-navy-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-[0.2em] uppercase",
						children: "Vision"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-3xl",
						children: "Empowered youth, resilient communities."
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Partner with Alpha & Omega CBO Kenya",
			body: "We welcome partners, supporters, and volunteers committed to community empowerment in Mombasa.",
			primary: {
				to: "/contact",
				label: "Get in touch"
			},
			secondary: {
				to: "/programs",
				label: "See our programs"
			}
		})
	] });
}
//#endregion
export { AboutPage as component };
