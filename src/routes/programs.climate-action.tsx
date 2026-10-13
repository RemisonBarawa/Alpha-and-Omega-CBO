import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { IMG } from "@/lib/images";
import { getProgramAltText } from "@/lib/altText";

export const Route = createFileRoute("/programs/climate-action")({
  head: () => ({
    meta: [
      { title: "Climate & Community Action | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Mobilising residents of Mikindani Ward to respond to climate risks and build community resilience as a DARAJA Project Community Hub.",
      },
      { property: "og:title", content: "Climate & Community Action | Alpha & Omega CBO Kenya" },
      {
        property: "og:description",
        content: "Mobilising community members in Mikindani Ward to understand climate risks and build resilience as a DARAJA Project Community Hub.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Climate & Community Action | Alpha & Omega CBO Kenya" },
      {
        name: "twitter:description",
        content: "Climate resilience and community action in Mikindani Ward as a DARAJA Project Community Hub.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: () => (
    <ProgramDetail
      eyebrow="Mazingira"
      title="Climate & Community Action"
      body="Mobilising community members in Mikindani Ward to understand climate risks, organize collective responses, and build resilience as a DARAJA Project Community Hub."
      image={IMG.hero}
      altText={getProgramAltText('climate-action', 'Mikindani Ward')}
      tracks={[
        ["Climate Risk Mapping",  "Community-led identification and documentation of local climate risks and vulnerabilities."],
        ["Collective Action",     "Organizing community members to plan and implement practical resilience measures together."],
        ["Green Practices",       "Promoting sustainable environmental practices and stewardship in Bangladesh Slums and Mikindani Ward."],
        ["DARAJA Community Hub",  "Alpha & Omega's formalized role as a Community Hub through the DARAJA Project MoU with DAYOK (2025)."],
      ]}
      details={[
        ["Duration",   "Ongoing program"],
        ["Location",   "Mikindani Ward, Jomvu Sub-County"],
        ["Cost",       "Free community participation"],
        ["Format",     "Community action days, risk mapping workshops, collective planning sessions"],
      ]}
    />
  ),
});
