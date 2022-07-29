import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../const';

const Button = ({text, color = Colors.purple, textColor = Colors.white, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8
  }),
  text: (color) => ({
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: color,
    textAlign: 'center',
    fontSize: 16
  })
});
