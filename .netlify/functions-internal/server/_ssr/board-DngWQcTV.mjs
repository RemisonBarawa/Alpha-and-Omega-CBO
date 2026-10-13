import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, r as IMG } from "./images-yt-zjqMr.mjs";
import { t as PageHero } from "./PageHero-CICYncoi.mjs";
import { t as CtaBand } from "./CtaBand-B7mV7IrE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/board-DngWQcTV.js
var import_jsx_runtime = require_jsx_runtime();
var leadership = [
	{
		initials: "VO",
		name: "Victor Nando Odongo",
		role: "Chairman / Founder",
		bio: "Victor Nando Odongo founded Alpha & Omega CBO Kenya in Bangladesh Slums, Mikindani Ward, Jomvu Sub-County. Under his leadership the organization was recognized by HURIA Human Rights Lab in 2019, spotlighted by SHOFCO in 2024, and became a Community Hub through the DARAJA Project in 2025. Victor was featured in an independent leadership profile in 2024.",
		tags: [
			"Community Leadership",
			"Human Rights",
			"Youth Empowerment"
		]
	},
	{
		initials: "TBA",
		name: "To be announced",
		role: "Board Member",
		bio: "Additional board and team member details will be published when confirmed.",
		tags: []
	},
	{
		initials: "TBA",
		name: "To be announced",
		role: "Board Member",
		bio: "Additional board and team member details will be published when confirmed.",
		tags: []
	}
];
function BoardPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Leadership",
			title: "The team behind Alpha & Omega CBO Kenya",
			body: "Alpha & Omega CBO Kenya is led by its founder and community champions from Bangladesh Slums, Mikindani Ward.",
			image: IMG.mentor,
			stats: [
				["2019", "Founded"],
				["Mombasa", "Bangladesh Slums, Jomvu"],
				["5", "Programs"]
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section pattern-band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Leadership Team"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl font-bold sm:text-3xl",
					children: "Community champions committed to our mission"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: leadership.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 90,
						className: "card-lift pattern-card group rounded-3xl border border-border bg-card p-6 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-14 place-items-center rounded-2xl bg-primary/12 font-display text-lg font-bold text-primary transition-transform group-hover:rotate-6",
								children: m.initials
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-lg font-semibold",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
								children: m.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: m.bio
							}),
							m.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: m.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/8 px-2.5 py-1 text-[0.65rem] font-semibold text-primary",
									children: tag
								}, tag))
							})
						]
					}, m.name + i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Partner",
			title: "Partner with Alpha & Omega CBO Kenya",
			body: "We welcome partners, funders, and community collaborators committed to empowerment in Mombasa.",
			primary: {
				to: "/contact",
				label: "Let's talk"
			},
			secondary: {
				to: "/impact",
				label: "See our impact"
			}
		})
	] });
}
//#endregion
export { BoardPage as component };
