import { z } from "zod";

const heroImageSchema = z.object({
  url: z.string().trim().min(1, "Image URL is required."),
  publicId: z.string().optional(),
  altText: z.string().optional(),
  order: z.number().int().min(0).optional(),
});

const createHeroBodySchema = z.object({
  title: z.string().trim().min(1, "Title is required."),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  buttonText: z.string().optional(),
  buttonLink: z.string().optional(),
  images: z.array(heroImageSchema).optional(),
  isActive: z.boolean().optional(),
});

const updateHeroBodySchema = createHeroBodySchema.partial().refine(
  (payload) => Object.keys(payload).length > 0,
  {
    message: "At least one field is required to update hero section.",
  }
);

export { createHeroBodySchema, updateHeroBodySchema };
