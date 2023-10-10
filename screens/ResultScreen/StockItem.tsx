import { View, Text, Image } from 'react-native';
import { ProductStock } from '../../shared/types';
import { styles } from './StockItem.style';

type StockItemProps = Pick<ProductStock, 'title' | 'count'>;

export function StockItem({ title, count }: StockItemProps) {
 return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/store.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>{title} — {count} ед.</Text>
    </View>
 )
}