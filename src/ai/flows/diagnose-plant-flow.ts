'use server';
/**
 * @fileOverview A plant problem diagnosis AI agent.
 *
 * - diagnosePlant - A function that handles the plant diagnosis process.
 * - DiagnosePlantInput - The input type for the diagnosePlant function.
 * - DiagnosePlantOutput - The return type for the diagnosePlant function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const DiagnosePlantInputSchema = z.object({
  photoUrl: z.string().describe('The URL of the plant photo.'),
  description: z.string().describe('The description of the plant.'),
});
export type DiagnosePlantInput = z.infer<typeof DiagnosePlantInputSchema>;

const DiagnosePlantOutputSchema = z.object({
  identification: z.object({
    isPlant: z.boolean().describe('Whether or not the input is a plant.'),
    commonName: z.string().describe('The name of the identified plant.'),
    latinName: z.string().describe('The Latin name of the identified plant.'),
  }),
  diagnosis: z.object({
    isHealthy: z.boolean().describe('Whether or not the plant is healthy.'),
    diagnosis: z.string().describe("The diagnosis of the plant's health."),
  }),
});
export type DiagnosePlantOutput = z.infer<typeof DiagnosePlantOutputSchema>;

export async function diagnosePlant(input: DiagnosePlantInput): Promise<DiagnosePlantOutput> {
  return diagnosePlantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'diagnosePlantPrompt',
  input: {
    schema: z.object({
      photoUrl: z.string().describe('The URL of the plant photo.'),
      description: z.string().describe('The description of the plant.'),
    }),
  },
  output: {
    schema: z.object({
      identification: z.object({
        isPlant: z.boolean().describe('Whether or not the input is a plant.'),
        commonName: z.string().describe('The name of the identified plant.'),
        latinName: z.string().describe('The Latin name of the identified plant.'),
      }),
      diagnosis: z.object({
        isHealthy: z.boolean().describe('Whether or not the plant is healthy.'),
        diagnosis: z.string().describe("The diagnosis of the plant's health."),
      }),
    }),
  },
  prompt: `You are an expert botanist specializing diagnosing plant illnesses.

You will use this information to diagnose the plant, and any issues it has. You will make a determination as to whether the plant is healthy or not, and what is wrong with it, and set the isHealthy output field appropriately.

Use the following as the primary source of information about the plant.

Description: {{{description}}}
Photo: {{media url=photoUrl}}`,
});

const diagnosePlantFlow = ai.defineFlow<
  typeof DiagnosePlantInputSchema,
  typeof DiagnosePlantOutputSchema
>(
  {
    name: 'diagnosePlantFlow',
    inputSchema: DiagnosePlantInputSchema,
    outputSchema: DiagnosePlantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
