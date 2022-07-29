import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcChevron} from '../../../assets';
import {Colors, Fonts} from '../../../const';

const CardMenu = ({label, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <IcChevron />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 3,
    // shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    marginBottom: 16
  },
  label: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    fontSize: 16,
    color: Colors.black
  }
});

export default CardMenu;
