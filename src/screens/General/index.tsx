import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Header, ScreenContainer, Tooltip } from '../../components';
import { GeneralScreenProps } from './types';
import { Table } from './Table';
import styles from './styles';

const GeneralScreen: FC<GeneralScreenProps> = ({
  mockId
}) => {

  const mockEvents = {
    save: () => console.log(`Save(): ${mockId}`),
    cancel: () => console.log(`Save(): ${mockId}`),
    openTooltip: () => console.log(`OpenTooltip(): ${mockId}`),
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Header title='Profile Privacy' uppercase />
        <Tooltip title='Manage your profile privacy' onPress={mockEvents.openTooltip} />
        <Table />
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title='Cancel'
          onPress={mockEvents.cancel}
          type='transparent'
        />
        <Button
          title='Save'
          onPress={mockEvents.save}
          type='fill'
          uppercase
        />
      </View>
    </ScreenContainer>
  );
}

export default GeneralScreen;
