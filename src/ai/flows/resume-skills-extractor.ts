'use server';

/**
 * @fileOverview This flow extracts skills, experience, and certifications from a resume (image or PDF).
 *
 * - `extractSkillsFromResume` - A function that takes a resume (image or PDF) as input and returns extracted information.
 * - `ExtractSkillsFromResumeInput` - The input type for the `extractSkillsFromResume` function.
 * - `ExtractSkillsFromResumeOutput` - The return type for the `extractSkillsFromResume` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractSkillsFromResumeInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      'A resume file (image or PDF) as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Explicitly use single quotes inside the string
    ),
});

export type ExtractSkillsFromResumeInput = z.infer<
  typeof ExtractSkillsFromResumeInputSchema
>;

const ExtractSkillsFromResumeOutputSchema = z.object({
  skills: z.array(z.string()).describe('List of skills extracted from the resume.'),
  experience: z
    .string()
    .describe('Summary of work experience extracted from the resume.'),
  certifications: z
    .array(z.string())
    .describe('List of certifications extracted from the resume.'),
});

export type ExtractSkillsFromResumeOutput = z.infer<
  typeof ExtractSkillsFromResumeOutputSchema
>;

export async function extractSkillsFromResume(
  input: ExtractSkillsFromResumeInput
): Promise<ExtractSkillsFromResumeOutput> {
  return extractSkillsFromResumeFlow(input);
}

const extractSkillsFromResumePrompt = ai.definePrompt({
  name: 'extractSkillsFromResumePrompt',
  input: {schema: ExtractSkillsFromResumeInputSchema},
  output: {schema: ExtractSkillsFromResumeOutputSchema},
  prompt: `You are an expert resume parser.

  Extract skills, work experience, and certifications from the resume provided in the image.
  Return the information in JSON format.

  Resume: {{media url=resumeDataUri}}

  Output format: { \"skills\": [\"skill1\", \"skill2\"], \"experience\": \"experience summary\", \"certifications\": [\"certification1\", \"certification2\"] }`,
});

const extractSkillsFromResumeFlow = ai.defineFlow(
  {
    name: 'extractSkillsFromResumeFlow',
    inputSchema: ExtractSkillsFromResumeInputSchema,
    outputSchema: ExtractSkillsFromResumeOutputSchema,
  },
  async input => {
    const {output} = await extractSkillsFromResumePrompt(input);
    return output!;
  }
);
