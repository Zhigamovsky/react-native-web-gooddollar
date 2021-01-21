import React, { FC } from 'react';
import { Header as HeaderBase, Text } from 'react-native-elements';
import styles from './styles';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({
  title: _title, uppercase = false
}) => {

  const title = uppercase ? _title.toUpperCase() : _title;

  return (
    <HeaderBase
      containerStyle={styles.container}
      centerComponent={
        <Text style={styles.title}>{title}</Text>
      }
    />
  )
};
