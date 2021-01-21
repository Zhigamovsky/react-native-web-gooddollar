import { Colors, DeviceSize, isWeb } from "../../utils";

export type TButtonTypes = 'fill' | 'transparent';

export interface ButtonProps {
  type: TButtonTypes,
  onPress: () => void,
  title: string,
  uppercase?: boolean
}

export type ButtonType = {
  [type in TButtonTypes]: {
    titleColor: string,
    backgroundColor: string,
    buttonSize: number,
    titleSize: number
  }
}

export const ButtonStyle: ButtonType = {
  fill: {
    titleSize: isWeb ? DeviceSize.pass([14, 16, 16, 18]) : DeviceSize.pass([15, 17, 17, 19]),
    titleColor: Colors.white,
    buttonSize: DeviceSize.pass([230, 250, 250, 270]),
    backgroundColor: Colors.mainBlue,
  },
  transparent: {
    titleSize: isWeb ? DeviceSize.pass([12, 14, 14, 16]) : DeviceSize.pass([13, 15, 15, 17]),
    titleColor: Colors.grey,
    buttonSize: DeviceSize.pass([60, 70, 70, 80]),
    backgroundColor: 'transparent',
  }
}