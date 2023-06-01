import { IRimak, ISentiment } from "../interfaces/rimak.interfaces";
import { parseMonth } from "../constants/months";

export const totalSentiment = (data: IRimak[]) => {
  let result: ISentiment[] = [];

  data.forEach((item) => {
    item.sentiments.forEach((element) => {
      result.push(element);
    });
  });

  return result;
};

export const parseFeelings = (data: IRimak[]) => {
  let grouped = totalSentiment(data);
  let result: Record<string, number> = {
    POSITIVE: 0,
    NEGATIVE: 0,
    MIXED: 0,
    NEUTRAL: 0,
  };

  grouped.forEach((item) => {
    result[item.sentiment] = result[item.sentiment] + 1;
  });

  let a = [];

  for (const [key, value] of Object.entries(result)) {
    a.push({
      value: value,
      type: key,
    });
  }

  return a;
};

export const parseDayRange = (data: IRimak[]) => {
  const response: ISentiment[] = [];

  data.forEach((item) => {
    item.sentiments.forEach((element) => {
      response.push({
        ...element,
        month: parseMonth[`${item._id.month}`],
      });
    });
  });

  return response;
};
