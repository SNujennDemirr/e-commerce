import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import styles from './searchbar.style';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false); // ✅ eksikti

  const handleChangeText = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <View style={styles.wrapper}>
      {/* Arama kutusu */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={require('../../assets/img/filter.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={query}
          onChangeText={handleChangeText}
          placeholder="Ara.."
          placeholderTextColor="#999"
        />
      </View>

      {query.length > 0 && (
        <View style={styles.clearButtonContainer}>
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text style={styles.clearText}>Aramayı Temizle</Text>
          </TouchableOpacity>
        </View>
      )}

    
    </View>
  );
};

export default SearchBar;
