import { isWeb, isAndroid, isIOS, WINDOW_DIMENSIONS } from "./constants";
import { DeviceSizeProps, DeviceTypeProps, FlexConstructor, FontConstructor } from "./styles.types";

/**
 * @description For usage Flexbox within styled-components
 * @param direction default `row`
 * @param align default `center`
 * @param justify default `center`
 * @param wrap default `nowrap`
 * @example `${FlEX()}`
 * @example `${FLEX('row','center','space-between', 'nowrap')}`
 */
export const FLEX: FlexConstructor<string> = (direction = 'row', align = 'center', justify = 'center', wrap = 'nowrap') => {
  return `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    flex-wrap: ${wrap};
  `;
};

/**
 * @description For usage Flexbox within objective styles
 * @param direction default `row`
 * @param align default `center`
 * @param justify default `center`
 * @param wrap default `nowrap`
 * @example `${someStyle: SheetFLEX() } `
 * @example `${someStyle: { ...SheetFlex()}}`
 * @example `${someStyle: SheetFLEX('row','center','space-between', 'nowrap')}`
 * @example `${someStyle: { backgroundColor: 'red', ...SheetFLEX('row','center','space-between', 'nowrap')}}`
 */
export const SheetFLEX: FlexConstructor<object> = (flexDirection = 'row', alignItems = 'center', justifyContent = 'center', flexWrap = 'nowrap') => {
  return {
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap
  }
};

/**
 * @description For usage FontStyles within styled-components
 * @param type  default `500`
 * @param size default `20`
 * @param color default `#000000`
 * @example `${FONT()}`
 * @example `${FONT('800', 17,'space-between', 'nowrap')}`
 */
export const FONT: FontConstructor<string> = (fontWeight = 'normal', size = 20, color = '#000000') => `
  font-weight: ${fontWeight};
  font-size: ${size}px;
  color: ${color.toString()};
`;

/**
 * @description For usage FontStyles within objective styles
 * @param type  default `500`
 * @param size default `20`
 * @param color default `#000000`
 * @example `${someStyle: SheetFONT() } `
 * @example `${someStyle: { ...SheetFONT()}}`
 * @example `${someStyle: SheetFONT('row','center','space-between', 'nowrap')}`
 * @example `${someStyle: { backgroundColor: 'red', ...SheetFONT('800', 17,'space-between', 'nowrap')}}`
 */
export const SheetFONT: FontConstructor<object> = (fontWeight = 'normal', fontSize = 20, color = '#000000') => ({
  fontWeight,
  fontSize,
  color
});

const SizeConditions = {
  xl: WINDOW_DIMENSIONS.width > 1024,
  l1: WINDOW_DIMENSIONS.width <= 1024,
  l2: WINDOW_DIMENSIONS.width >= 450,
  m1: WINDOW_DIMENSIONS.width < 450,
  m2: WINDOW_DIMENSIONS.width >= 340,
  s: WINDOW_DIMENSIONS.width < 340,
};

export const isDeviceXL = SizeConditions.xl;
export const isDeviceL = SizeConditions.l1 && SizeConditions.l2;
export const isDeviceM = SizeConditions.m1 && SizeConditions.m2;
export const isDeviceS = SizeConditions.s;

export const DeviceSize: DeviceSizeProps = {
  select: ({
    s = null, m = null, l = null, xl = null, _default = null
  }) => {
    if (isDeviceXL && xl) return xl;
    else if (isDeviceL && l) return l;
    else if (isDeviceM && m) return m;
    else if (isDeviceS && s) return s;
    else return _default;
  },
  pass: ([s, m, l, xl, _default]) => {
    if (isDeviceXL && xl) return xl;
    else if (isDeviceL && l) return l;
    else if (isDeviceM && m) return m;
    else if (isDeviceS && s) return s;
    else return _default;
  }
};

export const DeviceType: DeviceTypeProps = {
  select: ({
    web = null,
    android = null,
    ios = null,
    _default = null
  }) => {
    if (isAndroid && android) return android;
    else if (isIOS && ios) return ios;
    else if (isWeb && web) return web;
    else return _default;
  },
  pass: ([android, ios, web, _default]) => {
    if (isAndroid && android) return android;
    if (isIOS && ios) return ios;
    if (isWeb && web) return web;
    else return _default
  }
}
