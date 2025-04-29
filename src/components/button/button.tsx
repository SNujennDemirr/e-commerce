// import React from 'react';
// import { TouchableOpacity, Text } from 'react-native';
// import styles from './button.style';

// interface ButtonProps {
//   title: string;
//   onPress: () => void;
// }

// const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
//   return (
//     <TouchableOpacity style={styles.button} onPress={onPress}>
//       <Text style={styles.text}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// export default Button;

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './button.style';

interface ButtonProps {
  title: string;
  onPress: () => void;
  customStyle?: object;
  textStyle?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, customStyle, textStyle }) => {
  return ( 
     //butonlar için baslık ve stil özelliklerini dinamik hale getiriip bunları tek bileşenden yapıoz 
    <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress} > 
      <Text style={[styles.text, textStyle]}>{title}</Text> 
    </TouchableOpacity>
  );
};

export default Button;
