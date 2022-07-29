import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ContentCart from './ContentCart';
import {Colors, Fonts} from '../../../const';
import Stepper from './Stepper';

const ItemCart = ({data}) => {
  return (
    <View style={styles.container}>
      <ContentCart data={data} />
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.wishlistText}>Add to wishlist</Text>
        </TouchableOpacity>
        <Stepper />
      </View>
    </View>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wishlistText: {
    fontFamily: Fonts.INTER_REGULAR,
    color: Colors.gray,
    fontSize: 13
  },
  line: {
    height: 1,
    backgroundColor: Colors.gray100,
    marginVertical: 16
  }
});
