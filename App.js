import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Pressable onPress={() => navigation.navigate('BasicCalc')}>
        <Text>Go to BasicCalcScreen</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('FinancialCalc')}>
        <Text>Go to FinancialCalcScreen</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ScientificCalc')}>
        <Text>Go to ScientificCalcScreen</Text>
      </Pressable>
    </View>
  );
}

function BasicCalcScreen() {
  return (
    <View style={styles.container}>
      <Text>This is BasicCalcScreen</Text>
    </View>
  );
}

function FinancialCalcScreen() {
  return (
    <View style={styles.container}>
      <Text>This is FinancialCalcScreen</Text>
    </View>
  );
}

function ScientificCalcScreen() {
  return (
    <View style={styles.container}>
      <Text>This is ScientificCalcScreen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BasicCalc" component={BasicCalcScreen} />
        <Stack.Screen name="FinancialCalc" component={FinancialCalcScreen} />
        <Stack.Screen name="ScientificCalc" component={ScientificCalcScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
