/**
 * Image alt text generation utility for WCAG compliance.
 * Provides descriptive, accessible alt text for various image types across the site.
 */

/**
 * Get descriptive alt text for an image based on type and context.
 * Ensures all alt text is WCAG-compliant and provides meaningful descriptions.
 * 
 * @param imageType - The type of image (e.g., 'program-hero', 'impact-image', 'partner-logo', 'mangrove')
 * @param context - Additional context about the image (e.g., program name, location, story title)
 * @returns Descriptive alt text suitable for screen readers
 */
export function getAltText(imageType: string, context: string): string {
  const altTemplates: Record<string, (context: string) => string> = {
    'program-hero': (ctx) => 
      `${ctx} program - environmental conservation initiative in Mombasa`,
    
    'impact-image': (ctx) => 
      `Impact story: ${ctx} showing community environmental work`,
    
    'partner-logo': (ctx) => 
      `${ctx} partner organization logo`,
    
    'mangrove': (ctx) => 
      `Mangrove restoration site ${ctx ? `at ${ctx}` : ''}`,
    
    'community': (ctx) => 
      `Community members engaged in ${ctx || 'environmental conservation activities'}`,
    
    'hero': (ctx) => 
      `${ctx} - Big Ship C.B.O. environmental conservation program`,
    
    'waste-recovery': (ctx) => 
      `Waste recovery and environmental education initiative ${ctx ? `at ${ctx}` : ''}`,
    
    'youth-training': (ctx) => 
      `Youth skills training and livelihood development ${ctx ? `in ${ctx}` : ''}`,
    
    'coastal-landscape': (ctx) => 
      `Coastal landscape showing environmental restoration ${ctx ? `near ${ctx}` : ''}`,
    
    'default': (ctx) => 
      ctx || 'Image showing Big Ship C.B.O. environmental conservation work',
  };
  
  const template = altTemplates[imageType] || altTemplates.default;
  return template(context);
}

/**
 * Get alt text for program-specific images.
 * Provides contextual descriptions for different programs.
 * 
 * @param programId - Program identifier (e.g., 'adopt-a-site', 'reco-yogurt-forest', 'urban-resilience')
 * @param location - Optional location context (e.g., 'Tudor Creek', 'Mikindani')
 * @returns Descriptive alt text for the program image
 */
export function getProgramAltText(programId: string, location?: string): string {
  const programDescriptions: Record<string, string> = {
    'adopt-a-site': 'Mangrove restoration and ecosystem monitoring through Adopt A Site program',
    'reco-yogurt-forest': 'Waste recovery initiative transforming yoghurt cups into seedling containers',
    'urban-resilience': 'Urban resilience and skills development program for coastal communities',
  };
  
  const baseDescription = programDescriptions[programId] || 'Environmental program activity';
  
  if (location) {
    return `${baseDescription} at ${location}`;
  }
  
  return baseDescription;
}

/**
 * Get alt text for impact metric images or story images.
 * 
 * @param storyTitle - Title of the impact story
 * @param context - Optional additional context about the story
 * @returns Descriptive alt text for impact story image
 */
export function getImpactStoryAltText(storyTitle: string, context?: string): string {
  return `Impact story: ${storyTitle}${context ? ` - ${context}` : ''}`;
}

/**
 * Validate that alt text meets minimum WCAG requirements.
 * Alt text should be descriptive but concise (generally under 125 characters).
 * 
 * @param altText - The alt text to validate
 * @returns Object with validation result and feedback
 */
export function validateAltText(altText: string): { isValid: boolean; feedback: string } {
  if (!altText || altText.trim().length === 0) {
    return {
      isValid: false,
      feedback: 'Alt text cannot be empty',
    };
  }
  
  if (altText.length < 5) {
    return {
      isValid: false,
      feedback: 'Alt text is too short - should describe the image meaningfully',
    };
  }
  
  if (altText.length > 200) {
    return {
      isValid: false,
      feedback: 'Alt text is too long - keep it under 200 characters for readability',
    };
  }
  
  // Check for unnecessary repetition of "image", "picture", "photo"
  const unnecessaryWords = /\b(image|picture|photo|graphic|illustration)\b/i;
  if (unnecessaryWords.test(altText)) {
    return {
      isValid: true,
      feedback: 'Alt text is valid but could be improved - avoid "image", "picture", "photo" as alt text already implies this',
    };
  }
  
  return {
    isValid: true,
    feedback: 'Alt text meets WCAG requirements',
  };
}
