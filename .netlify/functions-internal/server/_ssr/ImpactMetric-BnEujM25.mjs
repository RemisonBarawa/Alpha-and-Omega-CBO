import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as cn } from "./router-CKRJakyp.mjs";
import { n as Counter } from "./images-yt-zjqMr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ImpactMetric-BnEujM25.js
var import_jsx_runtime = require_jsx_runtime();
/**
* ImpactMetric component
*
* Displays a single impact metric with:
*  - animated counter (via the existing Counter component)
*  - optional source attribution rendered as small muted text below the label
*  - optional visual badge for unverified / cautious claims
*
* Requirements: 4.2, 4.3, 4.4, 4.6
*/
var STATUS_BADGE = {
	reported: "Reported",
	estimated: "Estimated",
	documented: "Documented"
};
var STATUS_COLOR = {
	reported: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
	estimated: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
	documented: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
};
/**
* Render a single metric card – animation and styling are inherited from
* the parent Reveal wrapper, keeping this component pure / presentational.
*/
function ImpactMetric({ to, label, source, status = "verified", suffix = "+", className, counterClassName }) {
	const isUnverified = status !== "verified";
	const badgeLabel = isUnverified ? STATUS_BADGE[status] : null;
	const badgeColor = isUnverified ? STATUS_COLOR[status] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("font-display text-4xl font-bold text-primary", counterClassName),
				"aria-label": `${to.toLocaleString()}${suffix} ${label}${isUnverified ? ` (${STATUS_BADGE[status]})` : ""}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
					to,
					suffix
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-white leading-snug",
					children: label
				}), badgeLabel && badgeColor && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[0.6rem] font-semibold tracking-wide uppercase", badgeColor),
					"aria-label": `Data status: ${badgeLabel}`,
					children: badgeLabel
				})]
			}),
			source && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1.5 text-[0.68rem] leading-snug text-white/70 italic",
				children: ["Source: ", source]
			})
		]
	});
}
//#endregion
export { ImpactMetric as t };
