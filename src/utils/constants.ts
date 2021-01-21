import { Dimensions, Platform } from "react-native";

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isWeb = Platform.OS === 'web';
export const isNative = isIOS || isAndroid;

export const SCREEN_DIMENSIONS = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height
};

export const WINDOW_DIMENSIONS = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
};

export const Colors = {
  mainBlue: '#00afff',
  darkGrey: '#333',
  lightGrey: '#DDD',
  grey: '#A3A3A3',
  white: '#FFF'
};
