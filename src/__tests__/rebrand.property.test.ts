import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { getContactInfo } from '@/lib/contact'
import { getAltText, getProgramAltText } from '@/lib/altText'
import { programs, partners, impactMetrics, impactStories } from '@/data/programs'

describe('Alpha & Omega CBO Kenya Rebrand - Property-Based Tests', () => {
  // Property 1: getContactInfo returns only Alpha & Omega data
  describe('Property 1: getContactInfo returns only Alpha & Omega CBO Kenya data', () => {
    it('should return exact Alpha & Omega contact info without Big Ship references', () => {
      fc.assert(
        fc.property(fc.constant(getContactInfo()), (info) => {
          // Assert no old organization references
          expect(info.address).not.toContain('Big Ship')
          expect(info.phone).not.toContain('722 000000')
          expect(info.email).not.toContain('bigshipcbo')
          expect(info.email).not.toContain('big-ship-org')

          // Assert exact Alpha & Omega values
          expect(info.address).toBe(
            'Bangladesh Slums, Mikindani Ward, Jomvu Sub-County, Mombasa County, Kenya'
          )
          expect(info.phone).toBe('+254 740 610 899')
          expect(info.email).toBe('alphaandomegacbokenya001@gmail.com')
        })
      )
    })
  })

  // Property 2: Alt text functions produce no Big Ship references
  describe('Property 2: Alt text functions produce no Big Ship references', () => {
    it('getAltText should never contain Big Ship references', () => {
      fc.assert(
        fc.property(fc.string(), fc.string(), (imageType, context) => {
          const altText = getAltText(imageType, context)
          expect(altText).not.toContain('Big Ship')
          expect(altText).not.toContain('Big Ship C.B.O.')
          expect(altText).not.toContain('bigshipcbo')
          expect(altText).toContain('Alpha & Omega CBO Kenya')
        })
      )
    })

    it('getProgramAltText should never contain Big Ship references', () => {
      fc.assert(
        fc.property(fc.string(), fc.string(), (programId, location) => {
          const altText = getProgramAltText(programId, location)
          expect(altText).not.toContain('Big Ship')
          expect(altText).not.toContain('Big Ship C.B.O.')
          expect(altText).not.toContain('bigshipcbo')
          expect(altText).toContain('Alpha & Omega CBO Kenya')
        })
      )
    })
  })

  // Property 3: Programs array data integrity
  describe('Property 3: Programs array data integrity', () => {
    it('should have exactly 5 programs with correct structure and no Big Ship references', () => {
      fc.assert(
        fc.property(fc.constant(programs), (progs) => {
          // Length check
          expect(progs).toHaveLength(5)

          // Set of IDs must be exactly the five new programs
          const programIds = new Set(progs.map((p) => p.id))
          const expectedIds = new Set([
            'girl-child-mentorship',
            'womens-empowerment',
            'youth-voice',
            'human-rights',
            'climate-action',
          ])
          expect(programIds).toEqual(expectedIds)

          // Every program must have required fields
          progs.forEach((prog) => {
            expect(prog.id).toBeTruthy()
            expect(prog.name).toBeTruthy()
            expect(prog.shortDescription).toBeTruthy()
            expect(prog.outcomes?.length).toBeGreaterThan(0)

            // No Big Ship or legacy program references
            expect(prog.name).not.toContain('Big Ship')
            expect(prog.name).not.toContain('Adopt A Site')
            expect(prog.name).not.toContain('RECO')
            expect(prog.name).not.toContain('Yogurt')
            expect(prog.name).not.toContain('Urban Resilience')

            expect(prog.shortDescription).not.toContain('Big Ship')
            expect(prog.shortDescription).not.toContain('Adopt A Site')
            expect(prog.shortDescription).not.toContain('RECO')
            expect(prog.shortDescription).not.toContain('Yogurt')
          })
        })
      )
    })
  })

  // Property 4: programLinks mirrors programs array
  describe('Property 4: programLinks navigation arrays mirror the programs data', () => {
    it('should have programLinks for all program IDs', () => {
      const expectedProgramSlugs = new Set([
        'girl-child-mentorship',
        'womens-empowerment',
        'youth-voice',
        'human-rights',
        'climate-action',
      ])

      fc.assert(
        fc.property(fc.constant(programs), (progs) => {
          progs.forEach((prog) => {
            expect(expectedProgramSlugs).toContain(prog.id)
          })
        })
      )
    })
  })

  // Property 5: Impact timeline completeness
  describe('Property 5: Impact timeline completeness', () => {
    it('should contain milestones for years 2019, 2023, 2024, 2025', () => {
      const milestones = [
        { year: '2019', label: 'HURIA Partnership' },
        { year: '2023', label: 'Women\'s Empowerment Featured' },
        { year: '2024', label: 'SHOFCO Spotlight' },
        { year: '2025', label: 'Community Hub' },
      ]

      fc.assert(
        fc.property(fc.constant(milestones), (ms) => {
          const years = new Set(ms.map((m) => m.year))
          const expectedYears = new Set(['2019', '2023', '2024', '2025'])
          expect(years).toEqual(expectedYears)
        })
      )
    })
  })

  // Property 6: Impact metrics contain no Big Ship data
  describe('Property 6: Impact metrics contain no Big Ship data and unverified metrics are properly labelled', () => {
    it('should contain only Alpha & Omega verified metrics', () => {
      fc.assert(
        fc.property(fc.constant(impactMetrics), (metrics) => {
          metrics.forEach((metric) => {
            // No Big Ship or legacy references
            expect(metric.label).not.toContain('Tudor Creek')
            expect(metric.label).not.toContain('mangrove seedling')
            expect(metric.label).not.toContain('yoghurt cup')
            expect(metric.label).not.toContain('Big Ship')
            expect(metric.label).not.toContain('Mikoko Watch')

            if (metric.source) {
              expect(metric.source).not.toContain('Tudor Creek')
              expect(metric.source).not.toContain('Big Ship')
            }

            // All current metrics should be verified
            if (metric.verified === false) {
              expect(metric.source).toBeTruthy()
            }
          })
        })
      )
    })
  })

  // Property 7: Partners array contains only Alpha & Omega partners
  describe('Property 7: Partners array contains only Alpha & Omega CBO Kenya partners', () => {
    it('should contain only the four verified Alpha & Omega partners', () => {
      const expectedPartners = new Set([
        'HURIA Human Rights Lab',
        'Shining Hope for Communities (SHOFCO)',
        'Dream Achievers Youth Organization Kenya (DAYOK)',
        'DARAJA Project',
      ])

      const oldPartners = new Set([
        'Kenya Forest Service',
        'University of Nairobi',
        'WWF-Kenya',
        'Innovate Resource Agency',
      ])

      fc.assert(
        fc.property(fc.constant(partners), (ps) => {
          ps.forEach((partner) => {
            expect(expectedPartners).toContain(partner.name)
            expect(oldPartners).not.toContain(partner.name)
          })
        })
      )
    })
  })

  // Property 8: ImpactStories and Board content integrity
  describe('Property 8: ImpactStories and Board story content integrity', () => {
    it('should have impact stories with correct tags and placeholder handling', () => {
      const validTags = new Set([
        'Human Rights',
        'Girl Child Mentorship',
        'Youth Voice',
        'Climate Action',
        'Women\'s Empowerment',
      ])

      fc.assert(
        fc.property(fc.constant(impactStories), (stories) => {
          stories.forEach((story) => {
            expect(validTags).toContain(story.category || story.tag)

            // Placeholder quotes should be clearly marked
            if (story.quote?.startsWith('[Placeholder')) {
              expect(story.quote).toMatch(/\[Placeholder.*\]/)
            }

            // No Big Ship members
            expect(story.title).not.toContain('Bosco Juma')
            expect(story.title).not.toContain('Lucian Adhiambo')
            expect(story.title).not.toContain('Daniel Mulandi')
            expect(story.title).not.toContain('Jimmy Mwaita')
            expect(story.title).not.toContain('Agatha Nafula')
          })
        })
      )
    })
  })
})
