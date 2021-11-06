import mongoose from "mongoose";

//schema
const videoSchema = new mongoose.Schema({
  title: { type: String, trim: true },
  description: { type: String, trim: true, maxLength: 80 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

videoSchema.pre("save", async function () {
  // this << 실행하는 document
  this.hashtags = this.hashtags[0]
    .split(",")
    .map((word) =>
      word.startsWith("#") ? `#${word.slice(1).trim()}` : `#${word.trim()}`
    );
});
const Video = mongoose.model("Video", videoSchema);

export default Video;
