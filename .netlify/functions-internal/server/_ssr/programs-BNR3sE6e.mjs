import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { x as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Reveal, r as IMG, t as BrandRibbon } from "./images-yt-zjqMr.mjs";
import { t as PageHero } from "./PageHero-CICYncoi.mjs";
import { t as CtaBand } from "./CtaBand-B7mV7IrE.mjs";
import { n as getProgramAltText } from "./altText-CwlKvxBW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs-BNR3sE6e.js
var import_jsx_runtime = require_jsx_runtime();
var programs = [
	{
		img: IMG.tech,
		title: "Girl Child Mentorship & Empowerment",
		body: "Mentoring girls in Bangladesh Slums to stay in school, build confidence, and access the Pad Bank.",
		to: "/programs/girl-child-mentorship",
		id: "girl-child-mentorship"
	},
	{
		img: IMG.arts,
		title: "Women's Empowerment & Mentorship",
		body: "Structured mentorship and livelihood training for women in Bangladesh Slums and Mikindani Ward.",
		to: "/programs/womens-empowerment",
		id: "womens-empowerment"
	},
	{
		img: IMG.business,
		title: "Youth Voice & Civic Participation",
		body: "Equipping young people in Jomvu Sub-County to engage in civic processes and community decision-making.",
		to: "/programs/youth-voice",
		id: "youth-voice"
	},
	{
		img: IMG.community,
		title: "Human Rights & Socio-economic Rights",
		body: "Rights awareness and socio-economic advocacy in partnership with HURIA Human Rights Lab.",
		to: "/programs/human-rights",
		id: "human-rights"
	},
	{
		img: IMG.hero,
		title: "Climate & Community Action",
		body: "Community resilience and climate action as a DARAJA Project Community Hub in Mikindani Ward.",
		to: "/programs/climate-action",
		id: "climate-action"
	}
];
var support = [
	["Mentorship Networks", "One-on-one and group mentorship for girls, women, and young people through all five programs."],
	["Rights & Advocacy", "Legal literacy training, rights documentation, and community advocacy in partnership with HURIA Human Rights Lab."],
	["Civic Participation", "Structured forums and youth dialogues engaging community members in local governance and civic processes."],
	["Community Action", "Collective resilience projects, climate risk mapping, and partnership activities as a DARAJA Project Community Hub."]
];
function ProgramsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "What We Do",
			title: "Five programs for community empowerment in Mombasa",
			body: "Five integrated programs combining mentorship, rights awareness, civic participation, and community action for women, girls, and young people in Bangladesh Slums and Mikindani Ward.",
			image: IMG.workspace,
			stats: [
				["5", "Community programs"],
				["Free", "Community participation"],
				["2019", "Operating since"]
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section pattern-band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: programs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 110,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: p.to,
							className: "card-lift group block overflow-hidden rounded-3xl border border-border bg-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: getProgramAltText(p.id),
										loading: "lazy",
										width: 1024,
										height: 768,
										className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-xl font-semibold",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: p.body
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary",
											children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-1" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandRibbon, {})
							]
						})
					}, p.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 sm:grid-cols-2",
					children: support.map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 90,
						className: "card-lift pattern-card rounded-3xl border border-border bg-secondary p-6 sm:p-7",
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Participate",
			title: "Join our community programs",
			body: "Whether through volunteering, partnering, or community participation, there's a way to support our work in Mombasa.",
			primary: {
				to: "/contact",
				label: "Get involved"
			},
			secondary: {
				to: "/events",
				label: "Upcoming events"
			}
		})
	] });
}
//#endregion
export { ProgramsPage as component };
