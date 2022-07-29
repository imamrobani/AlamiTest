import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {enableScreens} from 'react-native-screens';

enableScreens();

const MainApp = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: '#93C5FD'}} />
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
