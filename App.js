import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/Screens/Home';
import BasicCalcScreen from './src/Screens/BasicCalc';
import FinancialCalcScreen from './src/Screens/FinancialCalc';
import ScientificCalcScreen from './src/Screens/ScientificCalc';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BasicCalc" component={BasicCalcScreen} />
        <Stack.Screen name="FinancialCalc" component={FinancialCalcScreen} />
        <Stack.Screen name="ScientificCalc" component={ScientificCalcScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}