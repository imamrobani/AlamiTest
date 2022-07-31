import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Mario2} from '../../assets';
import ColorSection from './Profile.fragment/ColorSection';
import MenuSection from './Profile.fragment/MenuSection';

const {width} = Dimensions.get('window');

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Animatable.Image source={Mario2} style={styles.image} animation={'fadeInDown'} />
      <ColorSection />
      <MenuSection />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width,
    resizeMode: 'contain'
  },
  switch: color => ({
    width: 56,
    height: 56,
    backgroundColor: color,
    borderRadius: 16,
    marginRight: 14
  })
});
