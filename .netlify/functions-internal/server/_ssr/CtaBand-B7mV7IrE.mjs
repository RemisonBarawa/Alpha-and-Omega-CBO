import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { x as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Reveal, t as BrandRibbon } from "./images-yt-zjqMr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaBand-B7mV7IrE.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ eyebrow = "Join Us", title, body, primary = {
	to: "/contact",
	label: "Talk to the team"
}, secondary }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section pattern-band bg-navy text-navy-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "brand-gradient relative overflow-hidden rounded-[2rem] shadow-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute inset-0 bg-[url('/NXTW%20data%20card%20background.jpeg')] bg-[length:360px] opacity-[0.12] mix-blend-screen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-7 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.68rem] font-semibold tracking-[0.22em] text-azure uppercase",
									children: eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-2xl font-bold sm:text-4xl",
									children: title
								}),
								body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xl text-sm text-navy-foreground/80 sm:text-base",
									children: body
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3 lg:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: primary.to,
								className: "group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-lift transition-transform hover:-translate-y-0.5",
								children: [primary.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
							}), secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: secondary.to,
								className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20",
								children: secondary.label
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandRibbon, {})
				]
			})
		})
	});
}
//#endregion
export { CtaBand as t };
