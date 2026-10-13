import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Clock, b as CalendarDays, u as MapPin } from "../_libs/lucide-react.mjs";
import { a as Reveal, r as IMG } from "./images-yt-zjqMr.mjs";
import { t as PageHero } from "./PageHero-CICYncoi.mjs";
import { t as CtaBand } from "./CtaBand-B7mV7IrE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-BtAUwsVI.js
var import_jsx_runtime = require_jsx_runtime();
var events = [
	{
		date: "10 Jan",
		title: "Girl Child Mentorship Session",
		tag: "Girl Child",
		time: "9:00 AM – 12:00 PM",
		place: "Bangladesh Slums, Mikindani Ward",
		body: "Monthly mentorship circle for school-age girls. Sessions cover confidence building, education support, and Pad Bank access."
	},
	{
		date: "24 Jan",
		title: "Women's Empowerment Workshop",
		tag: "Women's Empowerment",
		time: "10:00 AM – 2:00 PM",
		place: "Mikindani Ward Community Centre",
		body: "Structured workshop on livelihood skills, income generation, and community networking for women in Mikindani Ward."
	},
	{
		date: "07 Feb",
		title: "Youth Civic Dialogue",
		tag: "Youth Voice",
		time: "2:00 PM – 5:00 PM",
		place: "Jomvu Sub-County",
		body: "Open civic forum where young people engage with community leaders on local issues and civic rights in partnership with SHOFCO."
	},
	{
		date: "21 Feb",
		title: "Human Rights Awareness Session",
		tag: "Human Rights",
		time: "9:00 AM – 12:00 PM",
		place: "Bangladesh Slums",
		body: "Community training on socio-economic rights, legal literacy, and community advocacy — part of our HURIA Human Rights Lab programme."
	},
	{
		date: "08 Mar",
		title: "Climate & Community Action Day",
		tag: "Climate Action",
		time: "8:00 AM – 1:00 PM",
		place: "Mikindani Ward",
		body: "International Women's Day community action: climate risk mapping, green practices, and collective resilience planning as part of the DARAJA Community Hub."
	}
];
function EventsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Community",
			title: "Alpha & Omega CBO Kenya events and workshops",
			body: "Join us for mentorship sessions, women's empowerment workshops, youth civic dialogues, human rights training, and community action days in Bangladesh Slums and Mikindani Ward.",
			image: IMG.studio,
			stats: [
				["Regular", "Community activities"],
				["Free", "Entry to every session"],
				["All", "Community members welcome"]
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section pattern-band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-5",
					children: events.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "li",
						delay: i * 100,
						className: "card-lift pattern-card flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "brand-gradient grid w-20 shrink-0 place-items-center rounded-2xl px-4 py-4 text-center text-navy-foreground sm:w-24 sm:py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-bold",
								children: e.date.split(" ")[0]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.65rem] tracking-[0.2em] uppercase",
								children: e.date.split(" ")[1]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-primary uppercase",
									children: e.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-xl font-semibold",
									children: e.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: e.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap gap-5 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-primary" }),
												" ",
												e.time
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-primary" }),
												" ",
												e.place
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5 text-primary" }), " Free entry"]
										})
									]
								})
							]
						})]
					}, e.title))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			eyebrow: "Partner",
			title: "Host an event or workshop",
			body: "Our community networks are available for rights education, mentorship sessions, and civic engagement workshops.",
			primary: {
				to: "/contact",
				label: "Host with us"
			},
			secondary: {
				to: "/programs",
				label: "See programs"
			}
		})
	] });
}
//#endregion
export { EventsPage as component };
