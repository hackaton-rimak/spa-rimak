export interface IRimak {
  _id: ID;
  sentiments: ISentiment[];
}

export interface ID {
  day: number;
  month: number;
  year: number;
  product: string;
}

export interface ISentiment {
  sentiment: string;
  count: number;
  [k: string]: any;
}
