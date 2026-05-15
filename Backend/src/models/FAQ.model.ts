import { Schema, model, models } from "mongoose";

export interface IFAQItem {
  question: string;
  answer: string;
  order?: number;
  isActive?: boolean;
}

export interface IFAQSection {
  heading: string;
  subheading?: string;
  items: IFAQItem[];
  isActive: boolean;
}

const FAQItemSchema = new Schema<IFAQItem>(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
      trim: true,
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

const FAQSectionSchema = new Schema<IFAQSection>(
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
    items: {
      type: [FAQItemSchema],
      default: [],
      validate: {
        validator: (items: IFAQItem[]) => Array.isArray(items),
        message: "FAQ items must be an array.",
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

const FAQSectionModel =
  models.FAQSection || model<IFAQSection>("FAQSection", FAQSectionSchema);

export default FAQSectionModel;
