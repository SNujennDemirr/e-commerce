import React, { useState } from 'react';
import { TextInput, View, Image } from 'react-native';
import styles from './searchbar.style';

interface SearchBarProps {
  onSearch: (query: string) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChangeText = (text: string) => {
    setQuery(text);
    onSearch(text); 
    console.log('filter ', text)
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
      />
    </View>
  );
};

export default SearchBar;
