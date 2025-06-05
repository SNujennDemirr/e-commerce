import React, { useState } from 'react';
import { TextInput, View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './searchbar.style';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChangeText = (text: string) => {
    setQuery(text);
    onSearch(text);
    console.log('filter ', text);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/img/filter.png')}
        style={styles.filterIcon}
      />
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={handleChangeText}
        placeholder="Ara.."
        onSubmitEditing={clearSearch}
      />
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
