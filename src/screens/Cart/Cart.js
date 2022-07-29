import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';
import ListCart from './Cart.fragment/ListCart';

const Cart = ({navigation}) => {
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Header label="Cart" onBack={goBack} />
      <ListCart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1}
});

export default Cart;
