import React, { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { TableRowProps } from './types';
import styles from '../Table/styles';
import { Radio } from '../../../components';
import { RadioTypes } from '../Table/types';

export const TableRow: FC<TableRowProps> = ({
  label,
  value,
  onValueChange
}) => (
  <View style={styles.row}>
    <View style={[styles.mainColumn, styles.paddingStart]}>
      <Text style={styles.tableValueText}>{label}</Text>
    </View>
    <View style={styles.secondaryColumn}>
      <Radio<RadioTypes>
        value={value}
        sense='private'
        onValueChange={onValueChange}
      />
    </View>
    <View style={styles.secondaryColumn}>
      <Radio<RadioTypes>
        value={value}
        sense='masked'
        onValueChange={onValueChange}
      />
    </View>
    <View style={styles.secondaryColumn}>
      <Radio<RadioTypes>
        value={value}
        sense='public'
        onValueChange={onValueChange}
      />
    </View>
  </View>
);