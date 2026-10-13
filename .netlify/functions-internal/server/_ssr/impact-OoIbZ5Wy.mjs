import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, r as IMG } from "./images-yt-zjqMr.mjs";
import { t as PageHero } from "./PageHero-CICYncoi.mjs";
import { t as CtaBand } from "./CtaBand-B7mV7IrE.mjs";
import { t as ImpactMetric } from "./ImpactMetric-BnEujM25.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/impact-OoIbZ5Wy.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Impact metrics — provable figures only.
* All data drawn from partnership records and public sources.
*/
var stats = [
	{
		to: 5,
		label: "Active programs",
		source: "Alpha & Omega CBO Kenya program register, 2025",
		status: "verified",
		suffix: ""
	},
	{
		to: 4,
		label: "Named partner organizations",
		source: "Partnership agreements and public records, 2019–2025",
		status: "documented",
		suffix: ""
	},
	{
		to: 2019,
		label: "Year operations began — recognized by HURIA Human Rights Lab",
		source: "HURIA Human Rights Lab public records, 2019",
		status: "verified",
		suffix: ""
	},
	{
		to: 1,
		label: "MoU signed — DARAJA Project with DAYOK",
		source: "DARAJA Project MoU documentation, 2025",
		status: "documented",
		suffix: ""
	}
];
/**
* Outcome timeline — verified and documented milestones only.
*/
var outcomes = [
	{
		figure: "2019",
		label: "HURIA Human Rights Lab mentee designation — rights-based framework established",
		source: "HURIA Human Rights Lab public records, 2019",
		status: "verified"
	},
	{
		figure: "2023",
		label: "Women's Empowerment program publicly featured; Pad Bank launched",
		source: "Alpha & Omega CBO Kenya program records, 2023",
		status: "documented"
	},
	{
		figure: "2025",
		label: "Community Hub role formalized via DARAJA Project MoU with DAYOK",
		source: "DARAJA Project MoU, 2025",
		status: "documented"
	}
];
var stories = [
	{
		initials: "GP",
		name: "Girl Child Program Participant",
		role: "Bangladesh Slums · Mikindani Ward",
		quote: "[Placeholder — a verified testimonial will be added when available]"
	},
	{
		initials: "WE",
		name: "Women's Empowerment Participant",
		role: "Mikindani Ward · 2023",
		quote: "[Placeholder — a verified testimonial will be added when available]"
	},
	{
		initials: "YV",
		name: "Youth Voice Participant",
		role: "Jomvu Sub-County · 2024",
		quote: "[Placeholder — a verified testimonial will be added when available]"
	}
];
/** Badge colour mapping reused for the outcome figures section */
var STATUS_PILL = {
	verified: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
	documented: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
	reported: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
	estimated: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
};
var STATUS_LABEL = {
	verified: null,
	documented: "Documented",
	reported: "Reported",
	estimated: "Estimated"
};
function ImpactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Impact",
			title: "Community milestones from 2019 to 2025",
			body: "Alpha & Omega CBO Kenya tracks its progress through verified partnerships and documented milestones. Figures shown are drawn from partnership records and public sources; where independent verification is unavailable, cautious language is used.",
			image: IMG.students,
			stats: [
				["5", "Active programs"],
				["4", "Named partner organizations"],
				["2019", "Year operations began"]
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground/70 italic",
						children: [
							"✱ Figures are sourced from Alpha & Omega CBO Kenya program records and public partnership documentation unless otherwise noted. Badges indicate data provenance: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Documented" }),
							" = on-file records;",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: " Reported" }),
							" = self-reported, unaudited;",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: " Estimated" }),
							" = approximate, based on field observations."
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 100,
							className: "card-lift pattern-card rounded-3xl border border-border bg-card p-6 sm:p-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactMetric, {
								to: s.to,
								label: s.label,
								source: s.source,
								status: s.status,
								suffix: s.suffix !== void 0 ? s.suffix : "+"
							})
						}, s.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-6 md:grid-cols-3",
						children: outcomes.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: i * 110,
							className: "pattern-card card-lift rounded-3xl border border-border bg-secondary p-6 sm:p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl font-bold",
										children: o.figure
									}), STATUS_LABEL[o.status] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-flex items-center rounded-full px-2 py-0.5 text-[0.6rem] font-semibold tracking-wide uppercase ${STATUS_PILL[o.status]}`,
										children: STATUS_LABEL[o.status]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: o.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 text-[0.68rem] leading-snug text-muted-foreground/70 italic",
									children: ["Source: ", o.source]
								})
							]
						}, o.figure))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section bg-navy text-navy-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-azure",
					children: "Voices"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-bold sm:text-4xl",
					children: "Stories behind the numbers"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: stories.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 120,
						className: "card-lift rounded-3xl border border-white/12 bg-white/5 p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed text-white",
							children: [
								"\"",
								s.quote,
								"\""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-full bg-azure/20 text-sm font-bold text-azure",
								children: s.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-semibold text-white",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/60",
									children: s.role
								})]
							})]
						})]
					}, s.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Support",
			title: "Support community empowerment in Mombasa",
			body: "Partners, funders, and volunteers make our work possible. We're always looking to grow our reach.",
			primary: {
				to: "/contact",
				label: "Get involved"
			},
			secondary: {
				to: "/about",
				label: "Our story"
			}
		})
	] });
}
//#endregion
export { ImpactPage as component };
