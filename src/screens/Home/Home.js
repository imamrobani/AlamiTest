import React from 'react';
import {StyleSheet, View} from 'react-native';
import CardMenu from './Home.fragment/CardMenu';

const Home = ({navigation}) => {
  const goTo = (param) => {
    navigation.navigate(param);
  };
  return (
    <View style={styles.container}>
      <CardMenu label="Get Device Id" onPress={() => {}} />
      <CardMenu label="Cart" onPress={() => goTo('Cart')} />
      <CardMenu label="Progress Bar" onPress={() => goTo('ProgressBar')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

export default Home;
