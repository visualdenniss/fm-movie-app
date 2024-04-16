import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      regular: {
        large: {
          type: String,
          required: true,
        },
      },
    },
    year: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    isBookmarked: {
      type: Boolean,
      required: true,
    },
    isTrending: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    img: {
      type: String,
    },
    bookmarks: [{
      type: String,
    }]
  },
  { timestamps: true }
);


export const Media = mongoose.models?.Media || mongoose.model("Media", mediaSchema);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);