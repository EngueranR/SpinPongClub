import { Schema, model, Document } from "mongoose";

interface ITournament extends Document {
  name: string;
  participants: string[];
  startDate: Date;
  maxParticipants: number;
  prize: string;
}

const tournamentSchema = new Schema<ITournament>({
  name: { type: String, required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  startDate: { type: Date, required: true },
  maxParticipants: { type: Number, required: true },
  prize: { type: String, required: true },
});

const Tournament = model<ITournament>("Tournament", tournamentSchema);

export default Tournament;
