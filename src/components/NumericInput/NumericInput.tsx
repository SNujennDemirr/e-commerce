import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './NumericInput.style';

interface NumericInputProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const NumericInput: React.FC<NumericInputProps> = ({
  value,
  onIncrement,
  onDecrement,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDecrement} style={styles.button}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>

      <View style={styles.valueBox}>
        <Text style={styles.text}>{value}</Text>
      </View>

      <TouchableOpacity onPress={onIncrement} style={styles.button}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumericInput;
