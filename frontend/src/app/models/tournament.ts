export interface Tournament {
  _id: string;
  name: string;
  startDate: string;
  maxParticipants: number | null;
  prize: string;
  participants: string[];
}
