import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {IcMinPurple, IcPlusPurple} from '../../../assets';
import {Colors, Fonts} from '../../../const';
import {addThounsandSeparator} from '../../../utils';

const Stepper = () => {
  const [count, setCount] = useState(1);

  const onMinus = () => {
    if (parseInt(count) > 1) {
      setCount((prev) => parseInt(prev) - 1);
    }
  };

  const onPlus = () => {
    setCount((prev) => parseInt(prev) + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.circle} onPress={onMinus}>
        <IcMinPurple />
      </TouchableOpacity>
      <TextInput
        style={styles.counter}
        keyboardType={'numeric'}
        maxLength={7}
        textAlign={'center'}
        value={addThounsandSeparator(count)}
        onChangeText={setCount}
      />
      <TouchableOpacity activeOpacity={0.7} style={styles.circle} onPress={onPlus}>
        <IcPlusPurple />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circle: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.purple,
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counter: {
    fontFamily: Fonts.INTER_REGULAR,
    color: Colors.black,
    width: 40,
    marginHorizontal: 4
  }
});

export default Stepper;
