import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { IMG } from "@/lib/images";
import { getProgramAltText } from "@/lib/altText";

export const Route = createFileRoute("/programs/human-rights")({
  head: () => ({
    meta: [
      { title: "Human Rights & Socio-economic Rights | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Rights awareness, legal literacy, and socio-economic advocacy for residents of Bangladesh Slums, in partnership with HURIA Human Rights Lab.",
      },
      { property: "og:title", content: "Human Rights & Socio-economic Rights | Alpha & Omega CBO Kenya" },
      {
        property: "og:description",
        content: "Training community members in Bangladesh Slums to understand, claim, and defend their socio-economic rights.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Human Rights & Socio-economic Rights | Alpha & Omega CBO Kenya" },
      {
        name: "twitter:description",
        content: "Rights awareness and legal literacy in Bangladesh Slums, in partnership with HURIA Human Rights Lab.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: () => (
    <ProgramDetail
      eyebrow="Haki"
      title="Human Rights & Socio-economic Rights"
      body="Training community members in Bangladesh Slums to understand, claim, and defend their socio-economic rights, in partnership with HURIA Human Rights Lab."
      image={IMG.community}
      altText={getProgramAltText('human-rights', 'Bangladesh Slums')}
      tracks={[
        ["Rights Awareness",         "Community training on human rights frameworks, socio-economic rights, and legal literacy."],
        ["Documentation & Advocacy", "Supporting community members to document rights violations and advocate for solutions."],
        ["Community Paralegals",     "Training local rights defenders and paralegals to support their neighbours."],
        ["HURIA Partnership",        "Ongoing collaboration with HURIA Human Rights Lab — the organization that designated Alpha & Omega as a mentee in 2019."],
      ]}
      details={[
        ["Duration",   "Ongoing program"],
        ["Location",   "Bangladesh Slums, Jomvu Sub-County"],
        ["Cost",       "Free community participation"],
        ["Format",     "Workshops, training sessions, and community clinics"],
      ]}
    />
  ),
});
