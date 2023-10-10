import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { style } from './ResultScreen.style';
import { StockItem } from './StockItem';
import { useStockData } from '../../shared/context/StockData';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../shared/types/StackParamList.type';
import { CustomButton } from '../../shared/components/CustomButton';


export function ResultScreen() {
   const navigation = useNavigation<StackNavigation>();
   const { stockData } = useStockData();
  
   if (! stockData) {
     return null;
   }

  const { code, product, vendorCode, warehouses } = stockData;
  const handleClickBackButton = () => navigation.goBack();  
  
  return (
    <>
      <ImageBackground
        source={require('../../assets/result-background.png')}
        style={style.background}
      >
        <SafeAreaView style={style.container}>    
          <Text style={style.header}>{product}</Text>
          <View style={style.item}>
            <Text style={style.title}>Артикул:</Text>
            <Text style={style.value}>{vendorCode}</Text>
          </View>
          <View style={style.item}>
            <Text style={style.title}>Код:</Text>
            <Text style={style.value}>{code}</Text>
          </View>
          <View style={style.stocksContainer}>
            { warehouses.map((store) => (
              <StockItem
                key={store.title}
                count={store.count}
                title={store.title}
              />
            ))
            }
          </View>
          <CustomButton
            caption='Назад'
            onPress={handleClickBackButton}
          />
        </SafeAreaView>
      </ImageBackground>  
    </>
  );
}