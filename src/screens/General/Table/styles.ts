import { StyleSheet } from "react-native";
import { Colors, DeviceSize, DeviceType, SheetFLEX, SheetFONT } from "../../../utils";

const Dimensions = {
  rowHeight: DeviceSize.pass([45, 50, 50, 55])
}

export default StyleSheet.create({
  container: {
    ...SheetFLEX('column', 'center', 'flex-start'),
    width: '100%'
  },
  row: {
    ...SheetFLEX(),
    height: Dimensions.rowHeight,
    width: '100%',
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1
  },
  mainColumn: {
    flex: 3,
    height: '100%',
    ...SheetFLEX('row', 'center', 'flex-start'),
  },
  paddingStart: {
    paddingStart: 30
  },
  secondaryColumn: {
    flex: 1,
    height: '100%',
    ...SheetFLEX(),
  },
  tableLabelText: {
    ...SheetFONT('normal', DeviceSize.pass([12, 14, 14, 16]), Colors.darkGrey)
  },
  tableValueText: {
    ...SheetFONT(DeviceType.pass(['600', '600', '500']), DeviceSize.pass([14, 16, 16, 18]), Colors.darkGrey)
  }
});
