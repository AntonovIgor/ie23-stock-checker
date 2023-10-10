import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StockDataProvider } from './shared/context/StockData';
import { ResultScreen } from './screens/ResultScreen';
import { StackParamList } from './shared/types/StackParamList.type';

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (    
    <NavigationContainer>
      <StockDataProvider>
        <Stack.Navigator initialRouteName='Home'>          
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{ headerShown: false }}
           />
           <Stack.Screen
              name='Result'
              component={ResultScreen}
              options={{ headerShown: false }}
           />

        </Stack.Navigator>
      </StockDataProvider>
    </NavigationContainer>       
  );
}

