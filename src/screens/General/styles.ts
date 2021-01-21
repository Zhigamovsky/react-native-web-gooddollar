import { StyleSheet } from "react-native";
import { isDeviceXL, SheetFLEX } from "../../utils";

export default StyleSheet.create({
  container: {
    ...SheetFLEX('column', 'center', 'flex-start'),
    flex: 9,
    ...isDeviceXL ? {
      width: 475
    } : {
        width: '100%',
      }
  },
  bottomContainer: {
    ...SheetFLEX('row', 'flex-end', 'space-between'),
    paddingVertical: 10,
    flex: 1,
    ...isDeviceXL ? {
      width: 475
    } : {
        width: '100%',
        paddingHorizontal: 20,
      }
  }
});
