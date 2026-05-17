import { Schema, model, models } from "mongoose";

export interface IHeroImage {
  url: string;
  publicId?: string;
  altText?: string;
  order?: number;
}

export interface IHeroSection {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  images: IHeroImage[];
  isActive: boolean;
}

const HeroImageSchema = new Schema<IHeroImage>(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    publicId: {
      type: String,
      trim: true,
    },
    altText: {
      type: String,
      trim: true,
    },
    order: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { _id: false }
);

const HeroSectionSchema = new Schema<IHeroSection>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
      default: "",
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    buttonText: {
      type: String,
      trim: true,
      default: "",
    },
    buttonLink: {
      type: String,
      trim: true,
      default: "",
    },
    images: {
      type: [HeroImageSchema],
      default: [],
      validate: {
        validator: (images: IHeroImage[]) => Array.isArray(images),
        message: "Images must be an array.",
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

const HeroSectionModel =
  models.HeroSection || model<IHeroSection>("HeroSection", HeroSectionSchema);

export default HeroSectionModel;
