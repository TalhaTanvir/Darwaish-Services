import { z } from "zod";

const faqItemSchema = z.object({
  question: z.string().trim().min(1, "Question is required."),
  answer: z.string().trim().min(1, "Answer is required."),
  order: z.number().int().min(0).optional(),
  isActive: z.boolean().optional(),
});

const createFAQBodySchema = z.object({
  heading: z.string().trim().min(1, "Heading is required."),
  subheading: z.string().optional(),
  items: z.array(faqItemSchema).optional(),
  isActive: z.boolean().optional(),
});

const updateFAQBodySchema = createFAQBodySchema.partial().refine(
  (payload) => Object.keys(payload).length > 0,
  {
    message: "At least one field is required to update FAQ section.",
  }
);

export { createFAQBodySchema, updateFAQBodySchema };
