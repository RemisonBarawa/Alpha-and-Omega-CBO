//#region node_modules/.nitro/vite/services/ssr/assets/altText-CwlKvxBW.js
/**
* Get alt text for program-specific images.
* Provides contextual descriptions for different programs.
* 
* @param programId - Program identifier (e.g., 'girl-child-mentorship', 'womens-empowerment', 'youth-voice', 'human-rights', 'climate-action')
* @param location - Optional location context (e.g., 'Bangladesh Slums', 'Mikindani Ward')
* @returns Descriptive alt text for the program image
*/
function getProgramAltText(programId, location) {
	const baseDescription = {
		"girl-child-mentorship": "Girl Child Mentorship & Empowerment program supporting girls in Bangladesh Slums",
		"womens-empowerment": "Women's Empowerment & Mentorship program for women in Mikindani Ward",
		"youth-voice": "Youth Voice & Civic Participation program engaging young people in Mombasa",
		"human-rights": "Human Rights & Socio-economic Rights program in Jomvu Sub-County",
		"climate-action": "Climate & Community Action program addressing environmental challenges in Mombasa"
	}[programId] || "Alpha & Omega CBO Kenya program activity";
	if (location) return `${baseDescription} at ${location}`;
	return baseDescription;
}
/**
* Get alt text for impact metric images or story images.
* 
* @param storyTitle - Title of the impact story
* @param context - Optional additional context about the story
* @returns Descriptive alt text for impact story image
*/
function getImpactStoryAltText(storyTitle, context) {
	return `Impact story: ${storyTitle}${context ? ` - ${context}` : ""}`;
}
//#endregion
export { getProgramAltText as n, getImpactStoryAltText as t };
