import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, t as BrandRibbon } from "./images-yt-zjqMr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-CICYncoi.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, body, image, stats, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-navy text-navy-foreground",
		children: [
			image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: `${title} - Big Ship C.B.O. environmental program hero image`,
					width: 1920,
					height: 1080,
					className: "ken-burns size-full scale-110 object-cover opacity-45"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 bg-[url('/NXTW%20data%20card%20background.jpeg')] bg-[length:320px] opacity-[0.1] mix-blend-screen sm:bg-[length:480px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute -top-32 -right-24 size-72 rounded-full bg-primary/30 blur-3xl sm:size-96"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute -bottom-40 -left-20 size-72 rounded-full bg-azure/20 blur-3xl sm:size-96"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-azure",
						children: eyebrow
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl text-3xl font-bold sm:text-5xl lg:text-6xl",
							children: title
						})
					}),
					body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 180,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-navy-foreground/80",
							children: body
						})
					}),
					stats && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-9 grid gap-3 sm:grid-cols-3",
						children: stats.map(([figure, label], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 240 + i * 90,
							className: "rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-bold text-azure",
								children: figure
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-navy-foreground/75",
								children: label
							})]
						}, label))
					}),
					children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 240,
						children
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandRibbon, { className: "absolute bottom-0 left-0" })
		]
	});
}
//#endregion
export { PageHero as t };
