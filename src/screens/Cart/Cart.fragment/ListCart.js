import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ItemCart from './ItemCart';
import {DATA_CART} from '../Cart.mock';
import {Colors} from '../../../const';
import {Button} from '../../../components';

const ListCart = () => {
  const renderItem = ({item, index}) => {
    return <ItemCart data={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA_CART}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.line} />}
      />
      <Button text={'Checkout'} />
    </View>
  );
};

export default ListCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 16
  },
  line: {
    height: 1,
    backgroundColor: Colors.gray100,
    marginBottom: 8
  }
});
