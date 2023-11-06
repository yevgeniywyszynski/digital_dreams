import mongoose from "mongoose";
mongoose.models = {};

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    authoravatar: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
