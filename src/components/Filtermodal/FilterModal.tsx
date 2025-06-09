import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './FilterModal.style';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
          {children ? (
            children
          ) : (
            <>
              <Text style={styles.title}>Filtre Seçenekleri</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeText}>Kapat</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
