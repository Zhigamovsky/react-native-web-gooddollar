import { Insets } from "react-native";

export interface RadioProps<T = boolean> {
  value: T,
  sense?: T,
  onValueChange: (v: T) => void
};

export interface IHitSlopValue {
  value: number,
  readonly object: Insets
};
