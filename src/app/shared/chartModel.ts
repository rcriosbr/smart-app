export class ChartModel {
  labels: string[];
  datasets: Dataset[];
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Dataset {
  label: string;
  data: number[];
  fill: boolean;
  pointRadius: number;
  borderColor: string;
  backgroundColor: string;
  yAxisID: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
