import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import TabNavigatorScreen from './TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown:false }}>    
      <Stack.Screen name="TabNavigator" component={TabNavigatorScreen}/>
    </Stack.Navigator>              
  </NavigationContainer>
  );
}

