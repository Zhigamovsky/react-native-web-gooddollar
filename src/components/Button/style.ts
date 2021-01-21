import { StyleSheet } from "react-native";
import { DeviceSize, SheetFLEX } from "../../utils";

export default StyleSheet.create({
  container: {
    height: DeviceSize.pass([40, 45, 45, 50]),
    backgroundColor: 'red',
    borderRadius: 25,
    ...SheetFLEX()
  }
});