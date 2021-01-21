import React, { ReactNode } from 'react';
import { Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import styles from './styles';

interface Props {
  children: ReactNode | ReactNode[];
};

export const ScreenContainer = ({ children }: Props) => {
  const renderWebContainer = () => (
    <View style={styles.container}>{children}</View>
  );

  const renderNativeContainer = () => (
    <SafeAreaView>{renderWebContainer()}</SafeAreaView>
  );

  return Platform.select({
    web: renderWebContainer(),
    default: renderNativeContainer()
  });
}
