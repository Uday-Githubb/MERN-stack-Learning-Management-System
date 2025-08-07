import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    title: String,
    type: { type: String, enum: ["video", "pdf"] },
    s3Key: String,
    durationSec: Number,
  },
  { _id: true }
);

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String }, // rich text (HTML/markdown)
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    contents: [contentSchema],
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
