import { StyleSheet } from 'react-native';
import { Colors, isWeb, SheetFLEX, SheetFONT } from '../../utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    backgroundColor: Colors.mainBlue,
    ...SheetFLEX()
  },
  title: SheetFONT('600', isWeb ? 16 : 18, 'white')
});
