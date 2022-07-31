import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Logo} from '../../assets';
import {Gap} from '../../components';
import {Colors, Fonts} from '../../const';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.View
        style={styles.container}
        useNativeDriver
        animation={'bounceOut'}
        delay={500}
        duration={1500}>
        <Logo fill="red" color="white" />
        <Gap height={16} />
        <Text style={styles.title}>AlamiTest!</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.purple300
  },
  title: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black,
    fontSize: 24
  }
});

export default SplashScreen;
