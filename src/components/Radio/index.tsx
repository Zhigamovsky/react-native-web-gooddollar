import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { IHitSlopValue, RadioProps } from './types';
import styles from './styles';

const hitSlopValue: IHitSlopValue = {
  value: 10,
  get object() {
    return {
      top: this.value,
      left: this.value,
      bottom: this.value,
      right: this.value
    }
  }
};

export const Radio = <T,>({
  sense,
  value,
  onValueChange: _onValueChange
}: RadioProps<T>) => {
  const validExpression = sense === null ? value : value === sense;

  const onValueChange = useCallback(
    // @ts-expect-error
    () => _onValueChange(sense === null ? !value : sense),
    [_onValueChange, sense, value]
  );

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
};
