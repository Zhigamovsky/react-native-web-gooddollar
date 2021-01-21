import React, { FC } from 'react';
import { Platform, View } from 'react-native';
import { Button, Text, Image } from 'react-native-elements';
import { TooltipProps } from './types';
import styles from './styles';
import QuestionIcon from '../../assets/svgs/Question.svg';

export const Tooltip: FC<TooltipProps> = ({
  onPress,
  title
}) => (
  <View style={styles.container}>
    <View style={styles.iconWrapper} />
    <Text style={styles.title}>{title}</Text>
    <Button
      buttonStyle={styles.iconWrapper}
      onPress={onPress}
      icon={
        Platform.select({
          web: <Image style={styles.icon} source={{ uri: QuestionIcon }} />,
          default: (
            <View style={styles.icon}>
              <QuestionIcon />
            </View>
          )
        })
      }
    />
  </View>
);
