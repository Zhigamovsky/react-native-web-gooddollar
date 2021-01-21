import { StyleSheet } from "react-native";
import { SheetFONT, SheetFLEX, Colors, getPercentageValueOf, DeviceSize, isDeviceS, isWeb } from "../../utils";

const Dimensions = {
  containerHeight: DeviceSize.pass([35, 40, 40, 45]),
  get iconWrapperWidth() {
    return getPercentageValueOf(this.containerHeight, 70);
  },
  get iconWrapperHeight() {
    return this.containerHeight;
  },
  get iconHeight() {
    return this.containerHeight / 2;
  },
  get iconWidth() {
    return this.iconHeight;
  }
}

export default StyleSheet.create({
  container: {
    width: '100%',
    ...SheetFLEX(),
    marginVertical: DeviceSize.pass([10, 15, 15, 20]),
    height: Dimensions.containerHeight
  },
  title: SheetFONT('500', DeviceSize.pass([14, 16, 16, 18]), Colors.darkGrey),
  iconWrapper: {
    width: Dimensions.iconWrapperWidth,
    height: Dimensions.iconWrapperWidth,
    backgroundColor: 'transparent',
    ...SheetFLEX(),
    ...isDeviceS || isWeb ? {
      marginBottom: -3,
    } : {}
  },
  icon: {
    width: Dimensions.iconWidth,
    height: Dimensions.iconHeight
  }
});
