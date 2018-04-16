export class Benchmark {
  id: number;
  name: string;
  date: string;
  coefficient: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
