import { StyleSheet } from 'react-native';
import { isDeviceXL, SheetFLEX } from '../../utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    ...SheetFLEX('column', 'center', 'flex-start'),
    ...isDeviceXL ? {
      height: 780
    } : {
        height: '100vh'
      }
  },
});
