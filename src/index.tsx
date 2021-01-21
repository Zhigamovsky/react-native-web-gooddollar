import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GeneralScreen } from './screens';

export const App = () => {
  const renderDefaultContainer = () => (
    <GeneralScreen mockId='123' />
  );

  const renderWebContainer = () => (
    <SafeAreaProvider>{renderDefaultContainer()}</SafeAreaProvider>
  );

  return Platform.select({
    web: renderWebContainer(),
    default: renderDefaultContainer(),
  });
}

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
