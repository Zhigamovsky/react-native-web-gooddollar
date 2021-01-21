import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { isWeb } from '../../utils';
import styles from './styles';

interface Props {
  children: ReactNode | ReactNode[];
};

export const ScreenContainer = ({ children }: Props) => {
  const jsx = <View style={styles.container}>{children}</View>;

  if (isWeb) {
    return jsx;
  }

  return (
    <SafeAreaView>{jsx}</SafeAreaView>
  );
};
