import React, {useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }, 2000);
  }, [navigation]);

  return (
    <Animatable.View
      style={styles.container}
      useNativeDriver
      animation={'bounceOut'}
      delay={500}
      duration={1500}>
      <Text>Splash Screen</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SplashScreen;
