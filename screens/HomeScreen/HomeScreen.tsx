import { View, Alert, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
import { styles } from './HomeScreen.styles';
import { Logo } from '../../shared/components/Logo';
import { CustomButton } from '../../shared/components/CustomButton';
import { getStockData } from '../../shared/services/api';
import { useRef, useState } from 'react';
import { useStockData } from '../../shared/context/StockData';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../shared/types/StackParamList.type';

function isSendButtonEnabled(query: string) {
  return query.length <= 4;
}

export function HomeScreen() {
  const navigation = useNavigation<StackNavigation>();
  const searchFieldRef = useRef<TextInput>(null);
  const [isLoading, setIsLoading] = useState(false); 
  const [searchArticle, setSearchArticle] = useState('');
  const { setStockData } = useStockData();

  const handleSearchButtonClick = () => {
    setIsLoading(true);
    getStockData(searchArticle)
      .then((stockData) => {
        setSearchArticle('');
        setStockData(stockData);
        navigation.navigate('Result');
      })
      .catch((error: Error) => Alert.alert(error.message))
      .finally(() => { 
        setIsLoading(false);        
        searchFieldRef.current?.blur();
      });
  }

  const handleSearchFieldChange = (text: string) => {    
    setSearchArticle(text);    
  }

  const handleSubmitEditing = () => {
    if (!isSendButtonEnabled(searchArticle)) {
      handleSearchButtonClick();
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/home-background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        { isLoading ? <ActivityIndicator color='#DC04A7' size='large' /> : <Logo /> }
        <View>
          <TextInput
            style={styles.searchField}
            ref={searchFieldRef}
            returnKeyType='done'
            onChangeText={handleSearchFieldChange}
            onSubmitEditing={handleSubmitEditing}
            keyboardType='number-pad'
            value={searchArticle}
          />
          <CustomButton
            disabled={isSendButtonEnabled(searchArticle)}
            caption='Запросить остаток'
            onPress={handleSearchButtonClick}
          />
        </View>
      </View>
    </ImageBackground>
  );
}