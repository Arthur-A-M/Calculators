import { Text, View, Pressable } from 'react-native';

import { styles } from './styles';


export default HomeScreen = ({ navigation }) => {
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