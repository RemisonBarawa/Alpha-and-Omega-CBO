import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as CircleCheck, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Reveal, t as BrandRibbon } from "./images-yt-zjqMr.mjs";
import { t as PageHero } from "./PageHero-CICYncoi.mjs";
import { t as CtaBand } from "./CtaBand-B7mV7IrE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProgramDetail-Bf8tq7RO.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramDetail({ eyebrow, title, body, image, altText, tracks, details }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow,
			title,
			body,
			image
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section pattern-band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "overflow-hidden rounded-[2rem] border border-border shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: altText || title,
						loading: "lazy",
						width: 1024,
						height: 768,
						className: "size-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandRibbon, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2",
					children: tracks.map(([name, desc], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 100,
						className: "card-lift pattern-card rounded-2xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: desc
						})]
					}, name))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "pattern-card rounded-3xl border border-border bg-secondary p-6 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold text-white",
								children: "Programme details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-5 space-y-4 text-sm",
								children: details.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-4 border-b border-white/20 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-white/80",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-right font-medium text-white",
										children: v
									})]
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
								children: ["Get involved or ask a question", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 120,
						className: "pattern-card rounded-3xl border border-border bg-card p-6 sm:p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: "What you get"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3 text-sm text-muted-foreground",
							children: [
								"A dedicated mentor for the full programme",
								"Free workspace, internet and equipment access",
								"Case management and wellbeing support",
								"Introductions to employers and partners"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-primary" }), item]
							}, item))
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Get Started",
			title: `Ready to participate in ${title}?`,
			body: "Tell us a little about yourself and we will follow up with participation details and next steps.",
			primary: {
				to: "/contact",
				label: "Join us"
			},
			secondary: {
				to: "/programs",
				label: "All programs"
			}
		})
	] });
}
//#endregion
export { ProgramDetail as t };
