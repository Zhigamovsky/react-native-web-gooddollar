import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import { TooltipProps } from './types';
import styles from './styles';

const QuestionIcon = require('../../assets/images/Question.png');

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
      icon={<Image style={styles.icon} source={QuestionIcon} />}
    />
  </View>
);

