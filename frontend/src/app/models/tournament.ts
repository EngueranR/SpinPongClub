export class Tournament {
  _id?: string;
  name: string;
  startDate: Date;
  prize: number;
  maxParticipants: number;

  constructor(
    name: string = '',
    startDate: Date,
    prize: number,
    maxParticipants: number
  ) {
    this.name = name;
    this.startDate = startDate;
    this.prize = prize;
    this.maxParticipants = maxParticipants;
  }
}
