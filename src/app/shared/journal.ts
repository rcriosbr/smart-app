export class Journal {
  title: string;
  start: string;
  end: string;
  color: string;
  allDay: boolean;
  displayEventTime: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
