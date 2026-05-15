import { Schema, model, models } from "mongoose";

export interface ITestimonialImage {
  url: string;
  publicId?: string;
  altText?: string;
}

export interface ITestimonialItem {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
  image?: ITestimonialImage;
  order?: number;
  isActive?: boolean;
}

export interface ITestimonialsSection {
  heading: string;
  subheading?: string;
  testimonials: ITestimonialItem[];
  isActive: boolean;
}

const TestimonialImageSchema = new Schema<ITestimonialImage>(
  {
    url: {
      type: String,
      trim: true,
      required: true,
    },
    publicId: {
      type: String,
      trim: true,
      default: "",
    },
    altText: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { _id: false }
);

const TestimonialItemSchema = new Schema<ITestimonialItem>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    quote: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    image: {
      type: TestimonialImageSchema,
      required: false,
    },
    order: {
      type: Number,
      default: 0,
      min: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

const TestimonialsSectionSchema = new Schema<ITestimonialsSection>(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    subheading: {
      type: String,
      trim: true,
      default: "",
    },
    testimonials: {
      type: [TestimonialItemSchema],
      default: [],
      validate: {
        validator: (testimonials: ITestimonialItem[]) => Array.isArray(testimonials),
        message: "Testimonials must be an array.",
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TestimonialsSectionModel =
  models.TestimonialsSection ||
  model<ITestimonialsSection>("TestimonialsSection", TestimonialsSectionSchema);

export default TestimonialsSectionModel;
