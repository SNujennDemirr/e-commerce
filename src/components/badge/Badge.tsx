// components/Badge.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from './Badge.style';

interface BadgeProps {
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ count }) => {
  if (count === 0) return null;

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

export default Badge;
