import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  isbn: {
    type: String,
  },
  pageCount: {
    type: Number,
  },
  publishDate: {
    type: Date,
  },
  thumbnailUrl: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  longDescription: {
    type: String,
  },
  status: {
    type: String,
  },
  authors: {
    type: Array,
  },
  categories: {
    type: Array,
  },
});

export default mongoose.model("Book", BookSchema)
