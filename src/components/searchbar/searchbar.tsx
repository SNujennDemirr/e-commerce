// SearchBar.tsx
import React, { useState } from 'react';
import { TextInput, View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './searchbar.style';
import FilterModal from '../../components/Filtermodal/FilterModal';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: (min: number, max: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilter }) => {
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

  const handleApplyFilter = (min: number, max: number) => {
    onFilter(min, max);
  };

  return (
    <View style={styles.container}>
      {/* Filter Icon */}
      <TouchableOpacity
        onPress={() => setFilterVisible(true)}
        style={styles.filterButton}
      >
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
        onSubmitEditing={clearSearch}
      />

      {query.length > 0 && (
        <TouchableOpacity onPress={clearSearch} style={styles.clearButtonContainer}>
          <Text style={styles.clearText}>Aramayı Temizle</Text>
        </TouchableOpacity>
      )}

      <FilterModal
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}
        onApplyFilter={handleApplyFilter}
      />
    </View>
  );
};

export default SearchBar;
