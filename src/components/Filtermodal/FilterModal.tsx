import React, { useRef, useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
  TextInput,
} from 'react-native';
import styles from './FilterModal.style';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilter: (min: number, max: number) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, onApplyFilter }) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

useEffect(() => {
  if (visible) {
    translateY.setValue(0);
    setMinPrice('');
    setMaxPrice('');
  }
}, [visible]);

const handleClose = () => {
    translateY.setValue(0);
    onClose();
  };
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          Animated.timing(translateY, {
            toValue: 500,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            handleClose();
          });
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const handleApply = () => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    if (!isNaN(min) && !isNaN(max)) {
      onApplyFilter(min, max);
      handleClose();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <View style={styles.backdrop}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ translateY }] }]}
          {...panResponder.panHandlers}
        >
          <View style={styles.handle} />
          <Text style={styles.title}>Fiyat Filtrele</Text>

          <TextInput
            style={styles.input}
            placeholder="Min fiyat"
            keyboardType="numeric"
            inputMode='numeric'
            value={minPrice}
            onChangeText={setMinPrice}
          />

          <TextInput
            style={styles.input}
            placeholder="Max fiyat"
            keyboardType="numeric"
            inputMode='numeric'
            value={maxPrice}
            onChangeText={setMaxPrice}
          />

          <TouchableOpacity onPress={handleApply} style={styles.applyButton}>
            <Text style={styles.applyText}>Filtrele</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
