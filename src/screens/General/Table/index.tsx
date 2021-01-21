import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { RadioTypes, TableProps } from './types';
import styles from './styles';
import { TableRow } from '../TableRow';

const TableLabels = ['Phone Number', 'Email'];

export const Table: FC<TableProps> = () => {
  const [mockRadio, toggleMockRadio] = useState<RadioTypes>('masked');

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
      {
        TableLabels.map((label, index) => (
          <TableRow
            key={index}
            label={label}
            value={mockRadio}
            onValueChange={toggleMockRadio}
          />
        ))
      }
    </View>
  )
};
