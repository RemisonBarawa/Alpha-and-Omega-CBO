import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { IMG } from "@/lib/images";
import { getProgramAltText } from "@/lib/altText";

export const Route = createFileRoute("/programs/reco-yogurt-forest")({
  head: () => ({
    meta: [
      { title: "RECO/Yogurt Forest | Big Ship C.B.O." },
      {
        name: "description",
        content:
          "Innovative waste recovery: collected yoghurt cups transformed into seedling containers for community reforestation initiatives.",
      },
      { property: "og:title", content: "RECO/Yogurt Forest | Big Ship C.B.O." },
      {
        property: "og:description",
        content: "Join our waste recovery initiative transforming yoghurt cups into reforestation seedling containers.",
      },
      { property: "og:image", content: "/Big%20Ship%20Logo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RECO/Yogurt Forest | Big Ship C.B.O." },
      {
        name: "twitter:description",
        content: "Waste recovery and environmental education through yoghurt cup recycling.",
      },
      { name: "twitter:image", content: "/Big%20Ship%20Logo.jpg" },
    ],
  }),
  component: () => (
    <ProgramDetail
      eyebrow="Chakula"
      title="RECO/Yogurt Forest Campaign"
      body="Creative waste recovery turning discarded yoghurt cups into seedling containers for community reforestation."
      image={IMG.arts}
      altText={getProgramAltText('reco-yogurt-forest')}
      tracks={[
        ["Waste Collection", "School and community partnerships for yoghurt cup collection and sorting."],
        ["Container Production", "Processing collected cups into seedling containers and planting supplies."],
        ["Reforestation", "Community tree planting using produced seedling containers."],
        ["Environmental Education", "School workshops on circular economy, waste reduction, and environmental stewardship."],
      ]}
      details={[
        ["Duration", "Year-round program"],
        ["Locations", "Mombasa schools and communities"],
        ["Cost", "Free school participation"],
        ["Format", "On-site collection and hands-on workshops"],
      ]}
    />
  ),
});
