import React, { useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RadioProps } from './types';
import styles from './styles';

const hitSlopValue = {
  value: 10,
  get object() {
    return {
      top: this.value,
      left: this.value,
      bottom: this.value,
      right: this.value
    }
  }
}

export const Radio = <T,>({
  sense,
  value,
  onValueChange: _onValueChange
}: RadioProps<T>) => {

  const validExpression = useMemo(
    () => sense === null ? value : value === sense,
    [sense, value]
  );

  // @ts-expect-error
  const onValueChange = () => _onValueChange(sense === null ? !value : sense)

  return (
    <TouchableOpacity
      onPress={onValueChange}
      hitSlop={hitSlopValue.object}
    >
      <View style={[styles.outer, validExpression ? styles.activeOuter : {}]}>
        {
          validExpression
            ? <View style={styles.inner} />
            : null
        }
      </View>
    </TouchableOpacity>
  )
}
