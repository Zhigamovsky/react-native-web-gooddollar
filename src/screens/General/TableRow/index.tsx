import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { TableRowProps } from './types';
import styles from '../Table/styles';
import { Radio } from '../../../components';
import { RadioTypes } from '../Table/types';

export const TableRow: FC<TableRowProps> = ({ label }) => {
  const [value, toggleValue] = useState<RadioTypes>('masked');

  return (
    <View style={styles.row}>
      <View style={[styles.mainColumn, styles.paddingStart]}>
        <Text style={styles.tableValueText}>{label}</Text>
      </View>
      <View style={styles.secondaryColumn}>
        <Radio<RadioTypes>
          value={value}
          sense='private'
          onValueChange={toggleValue}
        />
      </View>
      <View style={styles.secondaryColumn}>
        <Radio<RadioTypes>
          value={value}
          sense='masked'
          onValueChange={toggleValue}
        />
      </View>
      <View style={styles.secondaryColumn}>
        <Radio<RadioTypes>
          value={value}
          sense='public'
          onValueChange={toggleValue}
        />
      </View>
    </View>
  );
};
