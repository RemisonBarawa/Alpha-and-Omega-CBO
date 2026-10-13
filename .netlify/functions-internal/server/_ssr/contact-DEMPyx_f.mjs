import { i as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as Phone, d as Mail, o as Send, u as MapPin } from "../_libs/lucide-react.mjs";
import { a as Reveal, r as IMG } from "./images-yt-zjqMr.mjs";
import { t as PageHero } from "./PageHero-CICYncoi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DEMPyx_f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sending, setSending] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Say Hello",
		title: "Connect with Alpha & Omega CBO Kenya",
		body: "Questions about our programs, partnership opportunities, or community participation? We'd love to hear from you.",
		image: IMG.community,
		stats: [
			["Mon – Fri", "9:00 AM – 5:00 PM"],
			["Mombasa", "Bangladesh Slums, Jomvu"],
			["< 48 hrs", "Typical response time"]
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section pattern-band",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [[
					{
						icon: MapPin,
						title: "Visit",
						body: "Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya"
					},
					{
						icon: Phone,
						title: "Call",
						body: "+254 740 610 899"
					},
					{
						icon: Mail,
						title: "Email",
						body: "alphaandomegacbokenya001@gmail.com"
					}
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 90,
					className: "card-lift pattern-card flex gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-medium",
						children: item.body
					})] })]
				}, item.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 280,
					className: "rounded-2xl border border-border bg-secondary p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Opening hours"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Monday – Friday, 9:00 AM to 5:00 PM. Community members are welcome to visit us in Bangladesh Slums, Mikindani Ward."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 140,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSending(true);
						setTimeout(() => {
							setSending(false);
							toast.success("Message sent — we'll respond within 48 hours.");
							e.target.reset();
						}, 700);
					},
					className: "rounded-3xl border border-border bg-card p-8 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-5 sm:grid-cols-2",
							children: [{
								name: "name",
								label: "Full name",
								type: "text"
							}, {
								name: "email",
								label: "Email address",
								type: "email"
							}].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: f.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									name: f.name,
									type: f.type,
									className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
								})]
							}, f.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-5 block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "Subject"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "subject",
								className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-5 block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								name: "message",
								rows: 5,
								className: "mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: sending,
							className: "mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70",
							children: [sending ? "Sending…" : "Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })]
						})
					]
				})
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
