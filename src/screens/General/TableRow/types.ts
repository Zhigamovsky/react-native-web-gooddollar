import { RadioTypes } from "../Table/types";

export interface TableRowProps {
  value: RadioTypes,
  onValueChange: (v: RadioTypes) => void,
  label: string
}
