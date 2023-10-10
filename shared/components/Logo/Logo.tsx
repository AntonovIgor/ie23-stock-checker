import { View, Image } from 'react-native';
import { styles } from './Logo.style';

export function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../../assets/cybercat.jpg')}
        style={styles.logo}
      />
    </View>      
  );
  
}