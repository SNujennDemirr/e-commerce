import React, { useState } from 'react';
import { TextInput, View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './searchbar.style';
import FilterModal from '../../components/Filtermodal/FilterModal';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [filterVisible, setFilterVisible] = useState(false);

  const handleChangeText = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <View style={styles.container}>
      {/* Filter Icon */}
    <TouchableOpacity
  onPress={() => {
    console.log('Filter icon clicked!');
    setFilterVisible(true);
  }}
  style={styles.filterButton} 
>
  <Image 
    source={require('../../assets/img/filter.png')}
    style={styles.filterIcon}
  />
</TouchableOpacity>

      { }
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={handleChangeText}
        placeholder="Ara.."
        onSubmitEditing={clearSearch}
      />

      { }
      {query.length > 0 && (
        <TouchableOpacity onPress={clearSearch} style={styles.clearButtonContainer}>
          <Text style={styles.clearText}>Aramayı Temizle</Text>
        </TouchableOpacity>
      )}

      { }
      <FilterModal
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}
        
      />
    </View>
  );
};

export default SearchBar;