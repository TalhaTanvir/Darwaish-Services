import { z } from "zod";

const testimonialImageSchema = z.object({
  url: z.string().trim().min(1, "Image URL is required."),
  publicId: z.string().optional(),
  altText: z.string().optional(),
});

const testimonialItemSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  role: z.string().optional(),
  company: z.string().optional(),
  quote: z.string().trim().min(1, "Quote is required."),
  rating: z.number().int().min(1).max(5).optional(),
  image: testimonialImageSchema.optional(),
  order: z.number().int().min(0).optional(),
  isActive: z.boolean().optional(),
});

const createTestimonialsBodySchema = z.object({
  heading: z.string().trim().min(1, "Heading is required."),
  subheading: z.string().optional(),
  testimonials: z.array(testimonialItemSchema).optional(),
  isActive: z.boolean().optional(),
});

const updateTestimonialsBodySchema =
  createTestimonialsBodySchema.partial().refine(
    (payload) => Object.keys(payload).length > 0,
    {
      message: "At least one field is required to update testimonials section.",
    }
  );

export { createTestimonialsBodySchema, updateTestimonialsBodySchema };
