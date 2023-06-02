import {
  IDateStructure,
  IInsights,
  IRimak,
  ISentiment,
} from "../interfaces/rimak.interfaces";
import { parseMonth } from "../constants/months";
import { get, remove } from "lodash";

export const groupSentiment = (data: IRimak[]) => {
  let result: ISentiment[] = [];

  data.forEach((item) => {
    item.sentiments.forEach((element) => {
      result.push(element);
    });
  });

  return result;
};

export const parseFeelings = (data: IRimak[]) => {
  let grouped = groupSentiment(data);
  let feelings: Record<string, number> = {
    POSITIVE: 0,
    NEGATIVE: 0,
    MIXED: 0,
    NEUTRAL: 0,
  };

  grouped.forEach((item) => {
    feelings[item.sentiment] = feelings[item.sentiment] + item.count;
  });

  let result = [];

  for (const [key, value] of Object.entries(feelings)) {
    result.push({
      value: value,
      type: key,
    });
  }

  return result;
};

export const parseDayRange = (data: IRimak[]) => {
  const concatData: ISentiment[] = [];
  const response: ISentiment[] = [];

  data.forEach((item) => {
    item.sentiments.forEach((element) => {
      concatData.push({
        ...element,
        month: parseMonth[`${item._id.month}`],
      });
    });
  });

  for (const key in parseMonth) {
    let feelings = ["POSITIVE", "NEGATIVE", "MIXED", "NEUTRAL"];

    feelings.forEach((feeling) => {
      let count: number = 0;
      let filtered: ISentiment[] = concatData.filter(
        (res) =>
          get(res, "month") === parseMonth[key] && res.sentiment === feeling
      );

      filtered.forEach((val) => {
        count += val.count;
      });
      response.push({ sentiment: feeling, count, month: parseMonth[key] });
    });
  }

  remove(response, (res) => {
    return res.count === 0;
  });

  return response;
};

export const parseInsightsChart = (data: IInsights) => {
  const response: IDateStructure[] = [];

  data.dates.forEach((element) => {
    response.push({
      ...element,
      month: parseMonth[`${element.date.month}`],
    });
  });

  return response;
};
