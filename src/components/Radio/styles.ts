import { StyleSheet } from "react-native";
import { Colors, DeviceSize, getPercentageValueOf, SheetFLEX } from "../../utils";

const Dimensions = {
  outerDiameter: DeviceSize.pass([19, 21, 21, 23]),
  get outerRadius() {
    return this.outerDiameter / 2
  },
  get innerDiameter() {
    return getPercentageValueOf(this.outerDiameter, 50)
  },
  get innerRadius() {
    return this.innerDiameter / 2
  }
};

export default StyleSheet.create({
  outer: {
    borderColor: Colors.darkGrey,
    borderWidth: 2,
    backgroundColor: 'white',
    width: Dimensions.outerDiameter,
    height: Dimensions.outerDiameter,
    borderRadius: Dimensions.outerRadius,
    ...SheetFLEX()
  },
  activeOuter: {
    borderColor: Colors.mainBlue,
  },
  inner: {
    width: Dimensions.innerDiameter,
    height: Dimensions.innerDiameter,
    backgroundColor: Colors.mainBlue,
    aspectRatio: 1,
    borderRadius: Dimensions.innerRadius
  },
});
