import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

const InputValue = ({ value }) => {
  return <Text style={styles.input}>{value}</Text>;
};

export default function BasicCalcScreen() {
  const [value, setValue] = useState('0');

  const handleEquals = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue('Error');
    }
  };

  const handleInput = (val) => {
    setValue((prev) => (prev === '0' ? val : prev + val));
  };

  const handleDecimal = () => {
    if (!value.includes('.')) {
      setValue((prev) => prev + '.');
    }
  };

  const handleClear = () => {
    setValue('0');
  };

  const handleTruncateAfterOperator = () => {
    const operatorIndex = value.search(/[+\-*/]/);
    if (operatorIndex >= 0) {
      setValue(value.slice(0, operatorIndex + 1));
    } else {
      handleClear();
    }
  };

  const handlePercent = () => {
    setValue((prev) => (parseFloat(prev) / 100).toString());
  };

  const handleOperation = (operator) => {
    setValue((prev) => prev + operator);
  };

  const buttonRows = [
    [
      { title: 'C', onPress: handleClear },
      { title: 'CE', onPress: handleTruncateAfterOperator },
      { title: '%', onPress: handlePercent },
      { title: '/', onPress: () => handleOperation('/') },
    ],
    [
      { title: '7', onPress: () => handleInput('7') },
      { title: '8', onPress: () => handleInput('8') },
      { title: '9', onPress: () => handleInput('9') },
      { title: '*', onPress: () => handleOperation('*') },
    ],
    [
      { title: '4', onPress: () => handleInput('4') },
      { title: '5', onPress: () => handleInput('5') },
      { title: '6', onPress: () => handleInput('6') },
      { title: '-', onPress: () => handleOperation('-') },
    ],
    [
      { title: '1', onPress: () => handleInput('1') },
      { title: '2', onPress: () => handleInput('2') },
      { title: '3', onPress: () => handleInput('3') },
      { title: '+', onPress: () => handleOperation('+') },
    ],
    [
      { title: '0', onPress: () => handleInput('0'), buttonWidthMultiplier: 0.47 },
      { title: '.', onPress: handleDecimal },
      { title: '=', onPress: handleEquals },
    ],
  ];

  return (
    <View style={styles.container}>
      <InputValue value={value} setValue={setValue} />

      {buttonRows.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map(({ title, onPress }, j) => (
            <Pressable key={j} style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}
