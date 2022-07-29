import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Gap} from '../../../components';
import {Colors, Fonts} from '../../../const';
import {formatRupiah, Scale} from '../../../utils';

const ContentCart = ({data}) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.row}>
        <Image source={data?.image} style={styles.productImage} />
        <View style={styles.contentContainer}>
          <Text numberOfLines={1} style={styles.productText}>
            {data?.name}
          </Text>
          <Gap height={4} />
          <Text style={styles.price}>{formatRupiah(data?.price)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginRight: 32
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  productImage: {
    width: Scale(48),
    height: Scale(48),
    borderRadius: 6
  },
  contentContainer: {paddingHorizontal: 16},
  productText: {
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 12,
    color: Colors.black,
    paddingRight: 32
  },
  price: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black,
    fontSize: 12
  }
});

export default ContentCart;
