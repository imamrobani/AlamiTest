import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Cart, Device, Home, Profile, ProgressBarScreen, SplashScreen} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/molecules/BottomNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ProgressBar" component={ProgressBarScreen} />
      <Stack.Screen name="Device" component={Device} />
    </Stack.Navigator>
  );
};

export default Router;
