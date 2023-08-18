import mongoose from "mongoose";

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    html: {
      type: String,
      required: false,
    },
    css : {
      type: String,
      required: false,
    },
    updatedBy: {
      type: String, // Store user details as JSON string
    },
  },
  {
    timestamps: true,
  }
);

export const Page = mongoose.model("Page", pageSchema);
