import { i as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as cn } from "./router-CKRJakyp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/images-yt-zjqMr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, className, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", className),
		children
	});
}
function useCountUp(target, active, duration = 1600) {
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		let frame = 0;
		const start = performance.now();
		const tick = (now) => {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setValue(Math.round(target * eased));
			if (progress < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		target,
		active,
		duration
	]);
	return value;
}
function Counter({ to, suffix = "+" }) {
	const ref = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	const value = useCountUp(to, active);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				setActive(true);
				io.disconnect();
			}
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [value.toLocaleString(), suffix]
	});
}
/** Colourful animated ribbon strip that runs along the bottom of a card. */
function BrandRibbon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: cn("relative h-2.5 w-full overflow-hidden", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ribbon-stripes absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ribbon-sheen absolute inset-0" })]
	});
}
/**
* Card housing an autoplaying looped logo animation with a brand ribbon
* running along its bottom edge. Falls back to static image with animation
* if video is unavailable.
*/
function LogoVideoCard({ src, poster, aspect = "16 / 9", className, children, glow = true, fallbackImage }) {
	const videoRef = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	const [videoError, setVideoError] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = videoRef.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				setInView(entry.isIntersecting);
				if (entry.isIntersecting) el.play().catch(() => {});
				else el.pause();
			}
		}, { threshold: .25 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	const showFallback = videoError || !src;
	const logoImage = fallbackImage || poster;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", className),
		children: [glow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute -inset-6 -z-10 rounded-[2.5rem] bg-azure/25 blur-3xl",
			style: {
				opacity: inView ? 1 : .4,
				transition: "opacity 900ms ease"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-lift overflow-hidden rounded-3xl border border-white/15 bg-navy/80 shadow-lift backdrop-blur-md",
			children: [
				showFallback && logoImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logoImage,
					alt: "Alpha & Omega CBO Kenya Logo",
					className: "animate-gentle-pulse block w-full object-cover",
					style: { aspectRatio: aspect }
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref: videoRef,
					src,
					poster,
					muted: true,
					loop: true,
					playsInline: true,
					autoPlay: true,
					preload: "metadata",
					className: "block w-full object-cover",
					style: { aspectRatio: aspect },
					onError: () => setVideoError(true)
				}),
				children,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandRibbon, {})
			]
		})]
	});
}
/** Unsplash image helpers — remote, responsive, cropped. */
function unsplash(id, w = 1600, h) {
	return `https://images.unsplash.com/photo-${id}?auto=format&q=80&w=${w}${h ? `&h=${h}&fit=crop` : "&fit=crop"}`;
}
var IMG = {
	hero: unsplash("1521737604893-d14cc237f11d", 1920, 1080),
	community: unsplash("1522071820081-009f0129c71c", 1400, 1e3),
	workspace: unsplash("1497215728101-856f4ea42174", 1400, 1e3),
	tech: unsplash("1531482615713-2afd69097998", 1200, 900),
	arts: unsplash("1516450360452-9312f5e86fc7", 1200, 900),
	business: unsplash("1552664730-d307ca884978", 1200, 900),
	studio: unsplash("1511671782779-c97d3d27a1d4", 1200, 900),
	students: unsplash("1543269865-cbf427effbad", 1200, 900),
	mentor: unsplash("1573164713988-8665fc963095", 1200, 900),
	founder: unsplash("1600880292203-757bb62b4baf", 1200, 900),
	maker: unsplash("1524178232363-1fb2b075b655", 1200, 900),
	team: unsplash("1517048676732-d65bc937f952", 1200, 900)
};
unsplash("1441974231531-c6227db76b6e", 1200, 900), unsplash("1441974231531-c6227db76b6e", 1200, 900), unsplash("1467817872552-1a7f08c8ee28", 1200, 900), unsplash("1469022563149-aa64dbd37dae", 1200, 900);
//#endregion
export { Reveal as a, LogoVideoCard as i, Counter as n, IMG as r, BrandRibbon as t };
