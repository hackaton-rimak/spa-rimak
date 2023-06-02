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

export interface IInsights {
  _id: string;
  dates: IDateStructure[];
}

export interface IDateStructure {
  date: IDate;
  averageValue: number;
  [k: string]: any;
}

export interface IDate {
  day: number;
  month: number;
  year: number;
}
