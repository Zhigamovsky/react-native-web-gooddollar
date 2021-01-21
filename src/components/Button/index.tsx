import React, { FC } from 'react';
import { Button as ButtonBase } from 'react-native-elements';
import { ButtonProps, ButtonStyle } from './types';
import { isWeb, SheetFONT } from '../../utils';
import styles from './style';

export const Button: FC<ButtonProps> = ({
  onPress,
  title: _title,
  type = 'fill',
  uppercase = false
}) => {
  const title = uppercase ? _title.toUpperCase() : _title;

  return (
    <ButtonBase
      title={title}
      onPress={onPress}
      buttonStyle={[
        styles.container,
        {
          backgroundColor: ButtonStyle[type].backgroundColor,
          width: ButtonStyle[type].buttonSize
        }
      ]}
      titleStyle={
        SheetFONT(isWeb ? 'normal' : '600', ButtonStyle[type].titleSize, ButtonStyle[type].titleColor)
      }
      titleProps={{
        lineBreakMode: 'tail',
        numberOfLines: 1
      }}
    />
  )
};
