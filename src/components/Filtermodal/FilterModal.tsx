import React, { useRef } from 'react';
import { Modal, View, Text, TouchableOpacity, Animated, PanResponder } from 'react-native';
import styles from './FilterModal.style';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, children }) => {
  const translateY = useRef(new Animated.Value(0)).current;

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
          }).start(onClose);
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ translateY }] }]}
          {...panResponder.panHandlers}
        >
          <View style={styles.handle} />
          {children ? (
            children
          ) : (
            <>
              <Text style={styles.title}>Filtrele</Text>
            
             
            </>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
