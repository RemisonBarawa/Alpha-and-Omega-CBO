import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { IMG } from "@/lib/images";
import { getProgramAltText } from "@/lib/altText";

export const Route = createFileRoute("/programs/urban-resilience")({
  head: () => ({
    meta: [
      { title: "Urban Resilience & Skills | Big Ship C.B.O." },
      {
        name: "description",
        content:
          "Youth livelihoods training, women's empowerment, and community resilience building in coastal Mombasa neighborhoods.",
      },
      { property: "og:title", content: "Urban Resilience & Skills | Big Ship C.B.O." },
      {
        property: "og:description",
        content: "Skills development, community organizing, and climate resilience training for coastal youth.",
      },
      { property: "og:image", content: "https://big-ship-org.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Urban Resilience & Skills | Big Ship C.B.O." },
      {
        name: "twitter:description",
        content: "Youth livelihoods and community resilience training in Mombasa.",
      },
      { name: "twitter:image", content: "https://big-ship-org.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: () => (
    <ProgramDetail
      eyebrow="Akili"
      title="Urban Resilience & Skills"
      body="Integrated training in environmental awareness, livelihoods, and community resilience for coastal neighborhoods."
      image={IMG.business}
      altText={getProgramAltText('urban-resilience')}
      tracks={[
        ["Livelihoods Training", "Skills development aligned with environmental and green economy opportunities."],
        ["Women's Empowerment", "Economic independence, leadership, and community organizing."],
        ["Climate Resilience", "Coastal adaptation strategies, disaster preparedness, and environmental stewardship."],
        ["Community Leadership", "Organizing, advocacy, and community-based monitoring (Mikoko Watch participation)."],
      ]}
      details={[
        ["Duration", "Ongoing workshops and training"],
        ["Locations", "Coastal neighborhoods in Mombasa"],
        ["Cost", "Free community participation"],
        ["Format", "Community-based with partner organizations"],
      ]}
    />
  ),
});
