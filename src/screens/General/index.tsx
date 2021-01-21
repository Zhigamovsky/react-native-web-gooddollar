import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Header, ScreenContainer, Tooltip } from '../../components';
import { GeneralScreenProps } from './types';
import { Table } from './Table';
import styles from './styles';

const GeneralScreen: FC<GeneralScreenProps> = () => (
  <ScreenContainer>
    <View style={styles.container}>
      <Header title='Profile Privacy' uppercase />
      <Tooltip title='Manage your profile privacy' onPress={() => { }} />
      <Table />
    </View>
    <View style={styles.bottomContainer}>
      <Button
        title='Cancel'
        onPress={() => { }}
        type='transparent'
      />
      <Button
        title='Save'
        onPress={() => { }}
        type='fill'
        uppercase
      />
    </View>
  </ScreenContainer>
);

export default GeneralScreen;
