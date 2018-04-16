import { Portfolio } from './portfolio';

export class Deal {
  id: number;
  date: string;
  value: number;
  quotes: number;
  quoteValue: number;
  type: string;
  comments: string;
  portfolio: Portfolio;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}