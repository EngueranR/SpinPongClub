export class Event {
  _id?: string;
  title: string;
  description: string;
  participants: string[];
  startDate: Date;

  constructor(
    title: string = '',
    description: string = '',
    participants: string[] = [],
    startDate: Date
  ) {
    this.title = title;
    this.description = description;
    this.participants = participants;
    this.startDate = startDate;
  }
}
