import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';

import { handleStringPress } from '../../Functions';

export default function BasicCalcScreen() {
  const [result, setResult] = useState('');

  const buttons = [
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '*'],
    ['0', '.', '=', '/'],
  ];

  const handlePress = (value) => {
    setResult(handleStringPress(result, value));
  };

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button, buttonIndex) => (
            <Pressable
              key={buttonIndex}
              style={styles.button}
              onPress={() => handlePress(button)}
            >
              <Text>{button}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}
