import { z } from "zod";

const serviceImageSchema = z.object({
  url: z.string().trim().min(1, "Image URL is required."),
  publicId: z.string().optional(),
  altText: z.string().optional(),
});

const serviceItemSchema = z.object({
  title: z.string().trim().min(1, "Service title is required."),
  description: z.string().optional(),
  icon: z.string().optional(),
  image: serviceImageSchema.optional(),
  order: z.number().int().min(0).optional(),
  isActive: z.boolean().optional(),
});

const createServicesBodySchema = z.object({
  heading: z.string().trim().min(1, "Heading is required."),
  subheading: z.string().optional(),
  services: z.array(serviceItemSchema).optional(),
  isActive: z.boolean().optional(),
});

const updateServicesBodySchema = createServicesBodySchema.partial().refine(
  (payload) => Object.keys(payload).length > 0,
  {
    message: "At least one field is required to update services section.",
  }
);

export { createServicesBodySchema, updateServicesBodySchema };
