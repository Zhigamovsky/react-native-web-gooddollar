import { StyleSheet } from 'react-native';
import { Colors, isAndroid, isWeb, SheetFLEX, SheetFONT } from '../../utils';

export default StyleSheet.create({
  container: {
    ...isAndroid ? {
      marginTop: 20,
    } : {},
    width: '100%',
    height: 55,
    backgroundColor: Colors.mainBlue,
    ...SheetFLEX()
  },
  title: SheetFONT('600', isWeb ? 16 : 18, 'white')
});
