import { Schema, model, models } from "mongoose";

export interface IServiceImage {
  url: string;
  publicId?: string;
  altText?: string;
}

export interface IServiceItem {
  title: string;
  description?: string;
  icon?: string;
  image?: IServiceImage;
  order?: number;
  isActive?: boolean;
}

export interface IServicesSection {
  heading: string;
  subheading?: string;
  services: IServiceItem[];
  isActive: boolean;
}

const ServiceImageSchema = new Schema<IServiceImage>(
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

const ServiceItemSchema = new Schema<IServiceItem>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    icon: {
      type: String,
      trim: true,
      default: "",
    },
    image: {
      type: ServiceImageSchema,
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

const ServicesSectionSchema = new Schema<IServicesSection>(
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
    services: {
      type: [ServiceItemSchema],
      default: [],
      validate: {
        validator: (services: IServiceItem[]) => Array.isArray(services),
        message: "Services must be an array.",
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

const ServicesSectionModel =
  models.ServicesSection ||
  model<IServicesSection>("ServicesSection", ServicesSectionSchema);

export default ServicesSectionModel;
