import React from 'react';
import {StyleSheet, View} from 'react-native';
import CardMenu from './Home.fragment/CardMenu';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CardMenu label="Get Device Id" onPress={() => {}} />
      <CardMenu label="Cart" onPress={() => {}} />
      <CardMenu label="Progress Bar" onPress={() => {}} />
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
