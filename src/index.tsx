import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GeneralScreen } from './screens';
import { isWeb } from './utils';

export const App = () => {
  const jsx = <GeneralScreen mockId='123' />;

  if (!isWeb) {
    return jsx;
  }

  return <SafeAreaProvider>{jsx}</SafeAreaProvider>;
}

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
