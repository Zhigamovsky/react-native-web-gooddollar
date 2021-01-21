import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { TableProps } from './types';
import styles from './styles';
import { Radio } from '../../../components';

type RadioTypes = 'private' | 'masked' | 'public';

const TableLabels = ['Phone Number', 'Email'];

export const Table: FC<TableProps> = () => {
  const [mockRadio, toggleMockRadio] = useState<RadioTypes>('masked');

  const renderTableRow = (label: string, index: number) => (
    <View key={index} style={styles.row}>
      <View style={[styles.mainColumn, styles.paddingStart]}>
        <Text style={styles.tableValueText}>{label}</Text>
      </View>
      <View style={styles.secondaryColumn}>
        <Radio<RadioTypes>
          value={mockRadio}
          sense='private'
          onValueChange={toggleMockRadio}
        />
      </View>
      <View style={styles.secondaryColumn}>
        <Radio<RadioTypes>
          value={mockRadio}
          sense='masked'
          onValueChange={toggleMockRadio}
        />
      </View>
      <View style={styles.secondaryColumn}>
        <Radio<RadioTypes>
          value={mockRadio}
          sense='public'
          onValueChange={toggleMockRadio}
        />
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.mainColumn, styles.paddingStart]} />
        <View style={styles.secondaryColumn}>
          <Text style={styles.tableLabelText}>Private</Text>
        </View>
        <View style={styles.secondaryColumn}>
          <Text style={styles.tableLabelText}>Masked</Text>
        </View>
        <View style={styles.secondaryColumn}>
          <Text style={styles.tableLabelText}>Public</Text>
        </View>
      </View>
      { TableLabels.map(renderTableRow)}
    </View>
  )
}
