import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { IMG } from "@/lib/images";
import { getProgramAltText } from "@/lib/altText";

export const Route = createFileRoute("/programs/youth-voice")({
  head: () => ({
    meta: [
      { title: "Youth Voice & Civic Participation | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Engaging young people in Jomvu Sub-County in civic processes, community forums, and decision-making in partnership with SHOFCO.",
      },
      { property: "og:title", content: "Youth Voice & Civic Participation | Alpha & Omega CBO Kenya" },
      {
        property: "og:description",
        content: "Equipping young people in Jomvu Sub-County to engage in civic processes and community decision-making.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Youth Voice & Civic Participation | Alpha & Omega CBO Kenya" },
      {
        name: "twitter:description",
        content: "Youth Voice program engaging young people in civic participation in Jomvu Sub-County.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: () => (
    <ProgramDetail
      eyebrow="Sauti"
      title="Youth Voice & Civic Participation"
      body="Equipping young people in Jomvu Sub-County to engage in civic processes and community decision-making, in partnership with Shining Hope for Communities."
      image={IMG.business}
      altText={getProgramAltText('youth-voice', 'Jomvu Sub-County')}
      tracks={[
        ["Civic Education",    "Workshops on rights, governance, and civic responsibilities for young people in Jomvu Sub-County."],
        ["Community Forums",   "Structured dialogue sessions between youth and community leaders on local issues and priorities."],
        ["Youth-Led Projects", "Support for young people to design and implement their own community improvement initiatives."],
        ["SHOFCO Partnership", "Collaboration with Shining Hope for Communities to expand youth voice reach and resources."],
      ]}
      details={[
        ["Duration",   "Ongoing program"],
        ["Location",   "Jomvu Sub-County, Mikindani Ward"],
        ["Cost",       "Free community participation"],
        ["Format",     "Forums, workshops, and community dialogue sessions"],
      ]}
    />
  ),
});
