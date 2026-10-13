/**
 * Image alt text generation utility for WCAG compliance.
 * Provides descriptive, accessible alt text for various image types across the site.
 */

/**
 * Get descriptive alt text for an image based on type and context.
 * Ensures all alt text is WCAG-compliant and provides meaningful descriptions.
 * 
 * @param imageType - The type of image (e.g., 'program-hero', 'impact-image', 'partner-logo', 'community')
 * @param context - Additional context about the image (e.g., program name, location, story title)
 * @returns Descriptive alt text suitable for screen readers
 */
export function getAltText(imageType: string, context: string): string {
  const altTemplates: Record<string, (context: string) => string> = {
    'program-hero': (ctx) => 
      `${ctx} program - community empowerment initiative by Alpha & Omega CBO Kenya`,
    
    'impact-image': (ctx) => 
      `Impact story: ${ctx} showing Alpha & Omega CBO Kenya community work`,
    
    'partner-logo': (ctx) => 
      `${ctx} partner organization logo`,
    
    'community': (ctx) => 
      `Community members engaged in ${ctx || 'Alpha & Omega CBO Kenya programs'}`,
    
    'hero': (ctx) => 
      `${ctx} - Alpha & Omega CBO Kenya community empowerment program`,
    
    'mentorship': (ctx) => 
      `Mentorship and empowerment session ${ctx ? `at ${ctx}` : ''} with Alpha & Omega CBO Kenya`,
    
    'youth-training': (ctx) => 
      `Youth civic participation and skills development ${ctx ? `in ${ctx}` : ''} with Alpha & Omega CBO Kenya`,
    
    'rights-education': (ctx) => 
      `Human rights awareness and education ${ctx ? `at ${ctx}` : ''} by Alpha & Omega CBO Kenya`,
    
    'default': (ctx) => 
      ctx || 'Image showing Alpha & Omega CBO Kenya environmental conservation work',
  };
  
  const template = altTemplates[imageType] || altTemplates.default;
  return template(context);
}

/**
 * Get alt text for program-specific images.
 * Provides contextual descriptions for different programs.
 * 
 * @param programId - Program identifier (e.g., 'girl-child-mentorship', 'womens-empowerment', 'youth-voice', 'human-rights', 'climate-action')
 * @param location - Optional location context (e.g., 'Bangladesh Slums', 'Mikindani Ward')
 * @returns Descriptive alt text for the program image
 */
export function getProgramAltText(programId: string, location?: string): string {
  const programDescriptions: Record<string, string> = {
    'girl-child-mentorship':
      'Girl Child Mentorship & Empowerment program supporting girls in Bangladesh Slums',
    'womens-empowerment':
      "Women's Empowerment & Mentorship program for women in Mikindani Ward",
    'youth-voice':
      'Youth Voice & Civic Participation program engaging young people in Mombasa',
    'human-rights':
      'Human Rights & Socio-economic Rights program in Jomvu Sub-County',
    'climate-action':
      'Climate & Community Action program addressing environmental challenges in Mombasa',
  };
  
  const baseDescription = programDescriptions[programId] || 'Alpha & Omega CBO Kenya program activity';
  
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
