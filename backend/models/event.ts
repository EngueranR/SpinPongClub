import mongoose, { Document, Schema } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description: string;
  participants: string[];
  startDate: Date;
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  participants: [{ type: String }],
});

const Event = mongoose.model<IEvent>("Event", EventSchema);

export default Event;
