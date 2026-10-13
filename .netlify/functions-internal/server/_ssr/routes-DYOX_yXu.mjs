import { i as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sparkles, g as Compass, m as HeartHandshake, r as Users, s as Rocket, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as useParallax } from "./router-CKRJakyp.mjs";
import { a as Reveal, i as LogoVideoCard, r as IMG } from "./images-yt-zjqMr.mjs";
import { t as ImpactMetric } from "./ImpactMetric-BnEujM25.mjs";
import { n as getProgramAltText, t as getImpactStoryAltText } from "./altText-CwlKvxBW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DYOX_yXu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	"#3b6fe0",
	"#4aa8e8",
	"#f2733f",
	"#f5c451",
	"#2fb3a6",
	"#ffffff"
];
/**
* Celebration confetti burst that fires once when the section scrolls into view.
* Honours prefers-reduced-motion.
*/
function Confetti({ pieces = 90 }) {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let frame = 0;
		let running = false;
		let items = [];
		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const spawn = () => {
			const { width, height } = canvas.getBoundingClientRect();
			items = Array.from({ length: pieces }, () => ({
				x: Math.random() * width,
				y: -20 - Math.random() * height * .6,
				vx: (Math.random() - .5) * 1.4,
				vy: 1.2 + Math.random() * 2.2,
				size: 4 + Math.random() * 7,
				rot: Math.random() * Math.PI,
				vr: (Math.random() - .5) * .2,
				color: COLORS[Math.floor(Math.random() * COLORS.length)]
			}));
		};
		const tick = () => {
			const { width, height } = canvas.getBoundingClientRect();
			ctx.clearRect(0, 0, width, height);
			let alive = 0;
			for (const p of items) {
				p.x += p.vx;
				p.y += p.vy;
				p.vy += .012;
				p.rot += p.vr;
				if (p.y < height + 30) alive++;
				ctx.save();
				ctx.translate(p.x, p.y);
				ctx.rotate(p.rot);
				ctx.fillStyle = p.color;
				ctx.globalAlpha = Math.max(0, 1 - p.y / (height + 40));
				ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
				ctx.restore();
			}
			if (alive > 0) frame = requestAnimationFrame(tick);
			else {
				running = false;
				ctx.clearRect(0, 0, width, height);
			}
		};
		resize();
		window.addEventListener("resize", resize);
		const io = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting) && !running) {
				running = true;
				resize();
				spawn();
				frame = requestAnimationFrame(tick);
				io.disconnect();
			}
		}, { threshold: .35 });
		io.observe(canvas);
		return () => {
			io.disconnect();
			window.removeEventListener("resize", resize);
			if (frame) cancelAnimationFrame(frame);
		};
	}, [pieces]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 z-20 size-full"
	});
}
var stories = [
	{
		image: IMG.workspace,
		tag: "Human Rights",
		name: "HURIA Human Rights Lab Partnership",
		meta: "Jomvu Sub-County, Mombasa · 2019",
		quote: "[Placeholder — a verified testimonial will be added when available]",
		body: "In 2019, HURIA Human Rights Lab identified Alpha & Omega CBO Kenya as a mentee organization working on socio-economic rights in Jomvu Sub-County. This partnership established the rights-based framework that underpins all of Alpha & Omega's programs today.",
		stat: "Mentee designation 2019 · Rights-based framework established",
		statNote: "Source: HURIA Human Rights Lab public records, 2019"
	},
	{
		image: IMG.community,
		tag: "Girl Child Mentorship",
		name: "Pad Bank Launch",
		meta: "Bangladesh Slums, Mikindani Ward · 2023",
		quote: "[Placeholder — a verified testimonial will be added when available]",
		body: "In 2023, the Pad Bank was launched under the Girl Child Mentorship & Empowerment Program, providing free menstrual hygiene products to girls in Bangladesh Slums. The initiative directly supports school attendance and dignity for girls in the community.",
		stat: "Pad Bank operational 2023 · Girls' school attendance supported",
		statNote: "Source: Alpha & Omega CBO Kenya program records, 2023"
	},
	{
		image: IMG.students,
		tag: "Youth Voice",
		name: "SHOFCO Youth Voice Partnership",
		meta: "Jomvu Sub-County, Mombasa · 2024",
		quote: "[Placeholder — a verified testimonial will be added when available]",
		body: "Shining Hope for Communities (SHOFCO) spotlighted Alpha & Omega CBO Kenya as a youth-voice partner in 2024, recognizing the organization's work engaging young people in civic participation and community decision-making in Jomvu Sub-County.",
		stat: "SHOFCO partner spotlight 2024 · Youth civic reach expanded",
		statNote: "Source: SHOFCO public communications, 2024"
	},
	{
		image: IMG.tech,
		tag: "Climate Action",
		name: "DARAJA Project MoU & Community Hub",
		meta: "Mikindani Ward, Mombasa · 2025",
		quote: "[Placeholder — a verified testimonial will be added when available]",
		body: "In 2025, Alpha & Omega CBO Kenya signed a Memorandum of Understanding with Dream Achievers Youth Organization Kenya (DAYOK) through the DARAJA Project, formalizing the organization's role as a Community Hub in Mikindani Ward.",
		stat: "Community Hub 2025 · DARAJA MoU signed with DAYOK",
		statNote: "Source: DARAJA Project MoU documentation, 2025"
	}
];
function ImpactStories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Real Communities. Real Change."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-bold sm:text-4xl",
						children: "Stories of community impact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted-foreground",
						children: "Behind every program is a community working together to build better lives. Here are stories from Alpha & Omega CBO Kenya's work."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 space-y-10",
					children: stories.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 60,
						className: `grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-soft lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "group relative overflow-hidden rounded-[1.6rem]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.image,
									alt: getImpactStoryAltText(s.name, s.meta),
									loading: "lazy",
									width: 1200,
									height: 900,
									className: "aspect-[4/3] size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/80 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "absolute bottom-5 left-5 text-navy-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-white/15 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] uppercase backdrop-blur",
											children: s.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 font-display text-xl font-semibold",
											children: s.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs opacity-80",
											children: s.meta
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 pb-6 lg:px-8 lg:pb-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-xl leading-relaxed sm:text-2xl",
									children: [
										"\"",
										s.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm leading-relaxed text-muted-foreground",
									children: s.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary",
									children: s.stat
								}),
								s.statNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[0.68rem] leading-snug text-muted-foreground/70 italic",
									children: s.statNote
								})
							]
						})]
					}, s.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					className: "mt-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "These stories represent the community-led empowerment work we witness every day."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/impact",
						className: "group mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
						children: ["Explore all impact stories", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
					})]
				})
			]
		})
	});
}
var partners = [
	"HURIA Human Rights Lab",
	"Shining Hope for Communities (SHOFCO)",
	"Dream Achievers Youth Organization Kenya (DAYOK)",
	"DARAJA Project"
];
function Partners() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section overflow-hidden bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-white",
						children: "Our Partners"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-bold sm:text-4xl text-white",
						children: "Working together for community empowerment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl text-white/80",
						children: "We partner with organizations committed to human rights, youth empowerment, and community development in Mombasa and across Kenya."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "marquee-mask mt-12 space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track gap-4",
				children: [...partners, ...partners].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerChip, { name: p }, `a${i}`))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track marquee-reverse gap-4",
				children: [...partners].reverse().concat([...partners].reverse()).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerChip, { name: p }, `b${i}`))
			})]
		})]
	});
}
function PartnerChip({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-card px-7 py-5 text-sm font-semibold whitespace-nowrap shadow-soft transition-colors hover:border-primary/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-8 place-items-center rounded-lg brand-gradient text-[0.7rem] font-bold text-navy-foreground",
			children: name.split(" ").map((w) => w[0]).slice(0, 2).join("")
		}), name]
	});
}
var marquee = [
	"Alpha & Omega CBO Kenya",
	"Bangladesh Slums · Mombasa",
	"Empower | Educate | Transforming Lives",
	"Founded 2019",
	"Mentorship · Rights · Civic Action",
	"Mikindani Ward · Jomvu Sub-County"
];
var approach = [
	{
		n: "01",
		icon: Compass,
		title: "Engage",
		body: "We listen to and learn from the community — understanding the challenges facing women, girls, and young people in Bangladesh Slums."
	},
	{
		n: "02",
		icon: Sparkles,
		title: "Mentor",
		body: "Structured mentorship circles, workshops, and one-on-one support equip participants with skills, confidence, and knowledge."
	},
	{
		n: "03",
		icon: HeartHandshake,
		title: "Mobilize",
		body: "We organize community members to advocate for their rights, participate in civic processes, and act on shared challenges."
	},
	{
		n: "04",
		icon: Rocket,
		title: "Sustain",
		body: "Partnerships with HURIA, SHOFCO, DAYOK, and the DARAJA Project ensure long-term support and community-led ownership."
	}
];
var programs = [
	{
		img: IMG.tech,
		tag: "Mentorship",
		kicker: "GIRL CHILD · ONGOING",
		title: "Girl Child Mentorship & Empowerment",
		body: "Mentoring girls in Bangladesh Slums to stay in school, build confidence, and access the Pad Bank.",
		to: "/programs/girl-child-mentorship"
	},
	{
		img: IMG.arts,
		tag: "Empowerment",
		kicker: "WOMEN · ONGOING",
		title: "Women's Empowerment & Mentorship",
		body: "Structured mentorship and livelihood training for women in Mikindani Ward.",
		to: "/programs/womens-empowerment"
	},
	{
		img: IMG.business,
		tag: "Civic",
		kicker: "YOUTH VOICE · ONGOING",
		title: "Youth Voice & Civic Participation",
		body: "Engaging young people in civic forums and community decision-making with SHOFCO.",
		to: "/programs/youth-voice"
	},
	{
		img: IMG.community,
		tag: "Rights",
		kicker: "HUMAN RIGHTS · ONGOING",
		title: "Human Rights & Socio-economic Rights",
		body: "Rights awareness and socio-economic advocacy in partnership with HURIA Human Rights Lab.",
		to: "/programs/human-rights"
	},
	{
		img: IMG.hero,
		tag: "Climate",
		kicker: "COMMUNITY ACTION · ONGOING",
		title: "Climate & Community Action",
		body: "Community resilience and climate action as a DARAJA Project Community Hub.",
		to: "/programs/climate-action"
	}
];
var milestones = [
	{
		year: "2019",
		label: "HURIA Partnership",
		body: "HURIA Human Rights Lab identified Alpha & Omega as a mentee organization addressing socio-economic rights in Jomvu Sub-County."
	},
	{
		year: "2023",
		label: "Women's Empowerment Featured",
		body: "Women's Empowerment and Mentorship program publicly featured; Pad Bank launched under Girl Child Mentorship program."
	},
	{
		year: "2024",
		label: "SHOFCO Spotlight",
		body: "Shining Hope for Communities spotlighted Alpha & Omega as youth-voice partner; Victor Nando Odongo featured in leadership profile."
	},
	{
		year: "2025",
		label: "Community Hub",
		body: "DARAJA Project MoU signed with Dream Achievers Youth Organization Kenya; Alpha & Omega became a Community Hub."
	}
];
function Index() {
	const { ref: heroRef, offset } = useParallax(.18);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative isolate overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 overflow-hidden",
					style: { transform: `translate3d(0, ${offset}px, 0)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMG.hero,
						alt: "Community members at Alpha & Omega CBO Kenya in Bangladesh Slums, Mombasa",
						width: 1920,
						height: 1080,
						className: "ken-burns size-full scale-110 object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 text-navy-foreground sm:gap-14 sm:py-24 md:py-36",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-9 lg:grid-cols-[1.1fr_0.9fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-3xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.2em] uppercase backdrop-blur",
										children: "Youth-Led · Community-Rooted"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: 120,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "mt-6 text-[2rem] leading-[1.08] font-bold sm:text-6xl lg:text-7xl",
											children: ["Empowering young people. Educating communities. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-shine",
												children: "Transforming lives."
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: 220,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-xl text-base text-navy-foreground/85 sm:text-lg",
											children: "Alpha & Omega CBO Kenya is a youth-led community organization rooted in Bangladesh Slums, Mikindani Ward, Mombasa County. We support women, girls, and young people through mentorship, rights awareness, civic participation, and community action."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: 320,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-9 flex flex-wrap gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/contact",
												className: "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5",
												children: ["Partner with us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/programs",
												className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20",
												children: "Support a program"
											})]
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 260,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoVideoCard, {
									src: "/logos/alpha_omega_logo_emergence.mp4",
									poster: "/logos/Alpha and Omega Logo.jpg",
									fallbackImage: "/logos/Alpha and Omega Logo.jpg",
									aspect: "3 / 2",
									className: "float-slow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-primary",
											children: "Est. 2019 · Bangladesh Slums, Mombasa"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-sm text-white",
											children: "Alpha & Omega CBO Kenya"
										})]
									})
								})
							}) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: 120,
								className: "rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xs font-semibold tracking-[0.2em] text-azure uppercase",
									children: "Mission"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-navy-foreground/85",
									children: "To empower women, girls, and young people in Bangladesh Slums through mentorship, rights awareness, civic participation, and community action."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: 220,
								className: "rounded-3xl border border-white/15 bg-navy/60 p-6 backdrop-blur-md sm:p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xs font-semibold tracking-[0.2em] text-coral uppercase",
									children: "Vision"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-2xl",
									children: "Empowered youth, resilient communities."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-navy-foreground/60 sm:text-[0.68rem] sm:tracking-[0.24em]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative grid h-9 w-5 shrink-0 place-items-center overflow-hidden rounded-full border border-white/35 py-1 sm:h-10 sm:w-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "scroll-cue block size-1.5 rounded-full bg-azure" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 truncate",
								children: "Scroll to explore"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden border-y border-border bg-secondary py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track gap-10",
				children: [
					...marquee,
					...marquee,
					...marquee,
					...marquee
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-10 text-xs font-semibold tracking-[0.24em] whitespace-nowrap text-muted-foreground uppercase",
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary/60" })]
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section relative isolate overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Community-Led Empowerment"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-bold sm:text-4xl",
							children: "Building community impact in Bangladesh Slums since 2019"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 180,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground",
							children: "Alpha & Omega CBO Kenya delivers five integrated programs combining mentorship, rights awareness, civic participation, and community action for women, girls, and young people in Mombasa."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 260,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary",
							children: ["Explore our story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 160,
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoVideoCard, {
						src: "/logos/alpha_omega_logo_emergence.mp4",
						poster: "/logos/Alpha and Omega Logo.jpg",
						fallbackImage: "/logos/Alpha and Omega Logo.jpg",
						aspect: "16 / 9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-semibold",
								children: "Community Impact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-primary",
								children: "2019 — Present"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-between text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2019 · Founded" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-4 h-px flex-1 bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Present · Growing"
							})
						]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy text-navy-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-azure",
						children: "By The Numbers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-bold sm:text-4xl",
						children: "Measurable community impact"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-3",
						children: [
							{
								to: 5,
								label: "Active programs",
								source: "Alpha & Omega CBO Kenya program register, 2025",
								status: "verified",
								suffix: "",
								tag: "Programs"
							},
							{
								to: 4,
								label: "Named partner organizations",
								source: "Partnership agreements 2019–2025",
								status: "documented",
								suffix: "",
								tag: "Partners"
							},
							{
								to: 2019,
								label: "Year founded",
								source: "HURIA Human Rights Lab records, 2019",
								status: "verified",
								suffix: "",
								tag: "Founded"
							}
						].map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 120,
							className: "card-lift rounded-3xl border border-white/12 bg-white/5 p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactMetric, {
								to: stat.to,
								label: stat.label,
								source: stat.source,
								status: stat.status,
								suffix: stat.suffix,
								counterClassName: "text-azure sm:text-5xl"
							})
						}, stat.tag))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 200,
						className: "mt-12 rounded-3xl border border-white/12 bg-white/5 p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl sm:text-3xl text-white",
							children: "Growing community empowerment in Bangladesh Slums, Mombasa."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm text-white/80",
							children: "Our commitment to mentorship, rights awareness, civic participation, and community action continues to grow with every program cycle and community partnership."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 200,
						className: "mt-12 rounded-3xl border border-white/12 p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl sm:text-3xl",
							children: "Growing community empowerment in Bangladesh Slums, Mombasa."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm text-navy-foreground/70",
							children: "Our commitment to mentorship, rights awareness, civic participation, and community action continues to grow with every program cycle and community partnership."
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Our Journey"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-bold sm:text-4xl",
					children: "Four milestones, one mission"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "li",
						delay: i * 90,
						className: "card-lift pattern-card relative rounded-2xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold tracking-widest text-primary-foreground",
								children: m.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-semibold",
								children: m.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: m.body
							})
						]
					}, m.year))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section pattern-band bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "How We Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-bold sm:text-4xl",
							children: "Our approach"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-muted-foreground",
							children: "A four-step community-rooted model for lasting empowerment and systemic change."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: approach.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: i * 110,
							className: "card-lift pattern-card group rounded-3xl border border-border bg-card p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-3xl font-bold text-primary/25",
										children: step.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "size-5 text-primary transition-transform group-hover:scale-110" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-xl font-semibold",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: step.body
								})
							]
						}, step.n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 180,
						className: "pattern-card mt-10 grid gap-6 rounded-3xl border border-border bg-card p-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl leading-relaxed",
							children: "\"[Placeholder — a verified testimonial will be added when available]\""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-5 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-full bg-primary/12 text-sm font-bold text-primary",
								children: "AO"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-semibold",
									children: "Community participant"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Alpha & Omega CBO Kenya"
								})]
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold",
							children: "Why it works"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-4 text-sm",
							children: [
								["Youth-led", "Young people from the community guide priorities, lead programs, and own outcomes."],
								["Gender responsive", "Programs specifically address the needs of women and girls alongside young men."],
								["Rights-based", "All work is grounded in human rights principles, informed by HURIA Human Rights Lab partnership."]
							].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-semibold",
									children: title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: body
								})] })]
							}, title))
						})] })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "What We Do"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-bold sm:text-4xl",
						children: "Our programs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted-foreground",
						children: "Alpha & Omega CBO Kenya delivers five integrated programs for community empowerment, rights awareness, and civic participation."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: programs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: p.to,
							className: "card-lift group block overflow-hidden rounded-3xl border border-border bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/3] overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: getProgramAltText(p.to.replace("/programs/", "")),
									loading: "lazy",
									width: 1024,
									height: 768,
									className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute top-4 left-4 rounded-full bg-navy/80 px-3 py-1 text-[0.65rem] font-semibold tracking-widest text-navy-foreground uppercase backdrop-blur",
									children: [
										p.tag,
										" · ",
										p.kicker
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: p.body
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center gap-2 text-xs font-semibold text-primary",
										children: ["Explore program · Mombasa", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-1" })]
									})
								]
							})]
						})
					}, p.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactStories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Partners, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "brand-gradient text-navy-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold sm:text-3xl",
					children: "Ready to join the Alpha & Omega CBO Kenya community?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-navy-foreground/80",
					children: "Partner with us, support a program, or get involved in Bangladesh Slums, Mombasa."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5",
						children: "Partner with us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/events",
						className: "inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/15",
						children: "Upcoming events"
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Index as component };
