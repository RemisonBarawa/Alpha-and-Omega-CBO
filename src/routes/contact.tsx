import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Big Ship C.B.O." },
      {
        name: "description",
        content:
          "Get in touch with Big Ship C.B.O. in Mombasa. Partnerships, programs, and community engagement in environmental conservation.",
      },
      { property: "og:title", content: "Contact | Big Ship C.B.O." },
      {
        property: "og:description",
        content: "Reach out to Big Ship C.B.O. for partnerships, programs, and community engagement opportunities.",
      },
      { property: "og:image", content: "/Big%20Ship%20Logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact | Big Ship C.B.O." },
      {
        name: "twitter:description",
        content: "Get in touch with Big Ship C.B.O. in Mombasa.",
      },
      { name: "twitter:image", content: "/Big%20Ship%20Logo.jpg" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Say Hello"
        title="Connect with Big Ship C.B.O."
        body="Questions about our conservation programs, partnership opportunities, or community participation? We'd love to hear from you."
        image={IMG.community}
        stats={[
          ["Mon – Fri", "9:00 AM – 5:00 PM"],
          ["Mombasa", "Coastal Kenya"],
          ["< 48 hrs", "Typical response time"],
        ]}
      />

      <section className="section pattern-band">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Visit", body: "Mombasa, Kenya" },
              { icon: Phone, title: "Call", body: "Available through our website" },
              { icon: Mail, title: "Email", body: "hello@bigshipcbo.org" },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="card-lift pattern-card flex gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12">
                  <item.icon className="size-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    {item.title}
                  </span>
                  <span className="mt-1 block font-medium">{item.body}</span>
                </span>
              </Reveal>
            ))}
            <Reveal delay={280} className="rounded-2xl border border-border bg-secondary p-6">
              <h2 className="font-display text-lg font-semibold">Opening hours</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Monday – Friday, 9:00 AM to 5:00 PM. Community events and restoration activities run throughout the year.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                setTimeout(() => {
                  setSending(false);
                  toast.success("Message sent — we'll respond within 48 hours.");
                  (e.target as HTMLFormElement).reset();
                }, 700);
              }}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <h2 className="font-display text-2xl font-semibold">Get in touch</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  { name: "name", label: "Full name", type: "text" },
                  { name: "email", label: "Email address", type: "email" },
                ].map((f) => (
                  <label key={f.name} className="block text-sm">
                    <span className="font-medium">{f.label}</span>
                    <input
                      required
                      name={f.name}
                      type={f.type}
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                    />
                  </label>
                ))}
              </div>
              <label className="mt-5 block text-sm">
                <span className="font-medium">Subject</span>
                <input
                  required
                  name="subject"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="mt-5 block text-sm">
                <span className="font-medium">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {sending ? "Sending…" : "Send message"}
                <Send className="size-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
