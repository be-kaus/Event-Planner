import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const contact = mongoose.model("contact", ContactSchema);

export default contact;
