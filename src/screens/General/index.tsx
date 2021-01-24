import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Header, ScreenContainer, Tooltip } from '../../components';
import { GeneralScreenProps } from './types';
import { Table } from './Table';
import styles from './styles';
import { noop } from '../../utils';

const GeneralScreen: FC<GeneralScreenProps> = () => (
  <ScreenContainer>
    <View style={styles.container}>
      <Header title='Profile Privacy' uppercase />
      <Tooltip title='Manage your profile privacy' onPress={noop} />
      <Table />
    </View>
    <View style={styles.bottomContainer}>
      <Button
        title='Cancel'
        onPress={noop}
        type='transparent'
      />
      <Button
        title='Save'
        onPress={noop}
        type='fill'
        uppercase
      />
    </View>
  </ScreenContainer>
);

export default GeneralScreen;
