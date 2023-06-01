export interface IRimak {
  indicator: IIndicator[];
  product: string;
  sentiment: string;
  sentimentPercentage: number;
  comment: string;
  createdAt: number;
  client: string;
}

export interface IIndicator {
  question: string;
  value: number;
}
