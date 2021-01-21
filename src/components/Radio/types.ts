export interface RadioProps<T = boolean> {
  value: T,
  sense?: T,
  onValueChange: (v: T) => void
}
