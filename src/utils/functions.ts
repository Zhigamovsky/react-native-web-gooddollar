import { IGetPercentageValueOf } from "./functions.types";

export const noop: () => void = () => { };

export const getPercentageValueOf: IGetPercentageValueOf = (valueOf, percent) => {
  return valueOf / 100 * percent;
};
