import { createFileRoute } from "@tanstack/react-router";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { IMG } from "@/lib/images";
import { getProgramAltText } from "@/lib/altText";

export const Route = createFileRoute("/programs/girl-child-mentorship")({
  head: () => ({
    meta: [
      { title: "Girl Child Mentorship & Empowerment | Alpha & Omega CBO Kenya" },
      {
        name: "description",
        content:
          "Mentoring girls in Bangladesh Slums, Mikindani Ward, to stay in school, build confidence, and access the Pad Bank menstrual hygiene program.",
      },
      { property: "og:title", content: "Girl Child Mentorship & Empowerment | Alpha & Omega CBO Kenya" },
      {
        property: "og:description",
        content: "Mentoring girls in Bangladesh Slums to stay in school, build confidence, and access the Pad Bank.",
      },
      { property: "og:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Girl Child Mentorship & Empowerment | Alpha & Omega CBO Kenya" },
      {
        name: "twitter:description",
        content: "Mentoring girls in Bangladesh Slums, Mikindani Ward, to stay in school and build confidence.",
      },
      { name: "twitter:image", content: "https://alphaandomegacbokenya.netlify.app/big-ship-logo.png" },
    ],
  }),
  component: () => (
    <ProgramDetail
      eyebrow="Msichana"
      title="Girl Child Mentorship & Empowerment"
      body="Mentoring girls in Bangladesh Slums to stay in school, build confidence, and access menstrual hygiene support through the Pad Bank."
      image={IMG.tech}
      altText={getProgramAltText('girl-child-mentorship', 'Bangladesh Slums')}
      tracks={[
        ["Mentorship Circles",    "Group and one-on-one mentorship sessions for school-age girls covering confidence, goals, and challenges."],
        ["Pad Bank",              "Free menstrual hygiene product distribution to support girls' school attendance and dignity."],
        ["Life Skills Workshops", "Practical sessions on self-confidence, goal setting, and navigating barriers to education."],
        ["School Retention",      "Targeted support for girls at risk of dropping out, linking them with community resources and advocates."],
      ]}
      details={[
        ["Duration",   "Ongoing program"],
        ["Location",   "Bangladesh Slums, Mikindani Ward"],
        ["Cost",       "Free community participation"],
        ["Format",     "In-person group sessions and one-on-one mentorship"],
      ]}
    />
  ),
});
