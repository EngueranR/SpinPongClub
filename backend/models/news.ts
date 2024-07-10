// models/news.ts
import { Schema, model, Document } from "mongoose";

interface INews extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const newsSchema = new Schema<INews>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const News = model<INews>("News", newsSchema);

export default News;
