import { FlexStyle, TextStyle } from "react-native";

export interface DeviceSizeProps {
  select: DeviceSizeSelectProps,
  pass: DeviceSizePassProps
};

export interface DeviceTypeProps<T = any> {
  select: DeviceTypeSelectProps<T>,
  pass: DeviceTypePassProps<T>
}

export interface DeviceSizeSelectProps<T = any> {
  (
    size: {
      s?: T,
      m?: T,
      l?: T,
      xl?: T,
      _default?: T
    }
  ): T
};

export interface DeviceSizePassProps<T = any> {
  (
    pass: ([
      T,  // pass <S> param
      T,  // pass <M> param
      T,  // pass <L> params
      T,  // pass <XL> params
      T?, // pass <default> param
    ])
  ): T
};

export interface DeviceTypeSelectProps<T = any> {
  (
    type: {
      android?: T,
      ios?: T,
      web?: T,
      _default?: T
    }
  ): T
}

export interface DeviceTypePassProps<T = any> {
  (
    pass: ([
      T, // pass <Android> param
      T, // pass <iOS> param
      T, // pass <Web> param
      T? // pass <default> param
    ])
  ): T
}

export interface FlexConstructor<T> {
  (
    direction?: FlexStyle['flexDirection'],
    align?: FlexStyle['alignItems'],
    justify?: FlexStyle['justifyContent'],
    wrap?: FlexStyle['flexWrap']
  ): T
};

export interface FontConstructor<T> {
  (
    type?: TextStyle['fontWeight'],
    size?: TextStyle['fontSize'],
    color?: TextStyle['color']
  ): T
};
