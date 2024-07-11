export class Tournament {
  _id?: string;
  name: string;
  startDate: Date;
  prize: number | string;
  maxParticipants: number;
  participants: string[];

  constructor(
    name: string = '',
    startDate: Date,
    prize: number,
    maxParticipants: number,
    participants: string[]
  ) {
    this.name = name;
    this.startDate = startDate;
    this.prize = prize;
    this.maxParticipants = maxParticipants;
    this.participants = participants;
  }
}
