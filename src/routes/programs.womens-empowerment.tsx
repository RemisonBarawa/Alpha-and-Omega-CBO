import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { IMG } from "@/lib/images";
import { getProgramAltText } from "@/lib/altText";

export const Route = createFileRoute("/programs/womens-empowerment")({
  head: () => ({
    meta: [
      { title: "Women's Empowerment & Mentorship | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Structured mentorship and livelihood training for women in Mikindani Ward, Mombasa — building economic independence and community leadership.",
      },
      { property: "og:title", content: "Women's Empowerment & Mentorship | Alpha & Omega CBO Kenya" },
      {
        property: "og:description",
        content: "Structured mentorship, livelihood training, and community networking for women in Bangladesh Slums and Mikindani Ward.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Women's Empowerment & Mentorship | Alpha & Omega CBO Kenya" },
      {
        name: "twitter:description",
        content: "Building economic independence and leadership for women in Mikindani Ward.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: () => (
    <ProgramDetail
      eyebrow="Nguvu"
      title="Women's Empowerment & Mentorship"
      body="Structured mentorship, livelihood training, and community networking for women in Bangladesh Slums and Mikindani Ward."
      image={IMG.arts}
      altText={getProgramAltText('womens-empowerment', 'Mikindani Ward')}
      tracks={[
        ["Mentorship Programme",   "Structured mentorship pairing women with peer mentors for guidance, skills sharing, and mutual support."],
        ["Livelihood Training",    "Income-generation skills, financial literacy, and entrepreneurship training for economic independence."],
        ["Leadership Development", "Capacity building for women to take active roles in community governance and decision-making."],
        ["Peer Support Circles",   "Safe spaces for women to share experiences, access resources, and build community networks."],
      ]}
      details={[
        ["Duration",   "Year-round program"],
        ["Location",   "Bangladesh Slums, Mikindani Ward"],
        ["Cost",       "Free community participation"],
        ["Format",     "Group workshops and structured mentorship sessions"],
      ]}
    />
  ),
});
