import React, { useState } from 'react';
import { Pressable, Text, Dimensions, View } from 'react-native';

const { width } = Dimensions.get('window');

const ResponsivePressable = ({ onPress, title, buttonWidthMultiplier = 0.22 }) => {

    return (
        <Pressable style={[styles.button, { width: width * buttonWidthMultiplier }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};
  

const styles = {
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        minWidth: 50,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
};

export { ResponsivePressable };

