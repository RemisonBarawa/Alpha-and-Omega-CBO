import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { IMG } from "@/lib/images";
import { getProgramAltText } from "@/lib/altText";

export const Route = createFileRoute("/programs/adopt-a-site")({
  head: () => ({
    meta: [
      { title: "Adopt A Site | Big Ship C.B.O." },
      {
        name: "description",
        content:
          "Community-led mangrove restoration and ecosystem monitoring around Tudor Creek, Mikindani, and Ganahola. Adopt A Site program.",
      },
      { property: "og:title", content: "Adopt A Site | Big Ship C.B.O." },
      {
        property: "og:description",
        content: "Join our flagship mangrove restoration program with ecosystem monitoring and community leadership.",
      },
      { property: "og:image", content: "https://big-ship-org.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Adopt A Site | Big Ship C.B.O." },
      {
        name: "twitter:description",
        content: "Community-led mangrove restoration around Tudor Creek, Mikindani, and Ganahola.",
      },
      { name: "twitter:image", content: "https://big-ship-org.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: () => (
    <ProgramDetail
      eyebrow="Kukamatia"
      title="Adopt A Site"
      body="Community-led mangrove restoration and ecosystem monitoring across Tudor Creek, Mikindani, and Ganahola."
      image={IMG.tech}
      altText={getProgramAltText('adopt-a-site', 'Tudor Creek')}
      tracks={[
        ["Mangrove Planting", "Seedling preparation, planting techniques, and site establishment."],
        ["Ecosystem Monitoring", "Data collection, species identification, and Mikoko Watch participation."],
        ["Community Engagement", "Education campaigns, workshop facilitation, and stakeholder coordination."],
        ["Urban Resilience", "Integration with city planning, climate adaptation, and livelihood linkages."],
      ]}
      details={[
        ["Duration", "Ongoing program"],
        ["Locations", "Tudor Creek, Mikindani, Ganahola"],
        ["Cost", "Free community participation"],
        ["Format", "In-person at restoration sites"],
      ]}
    />
  ),
});
