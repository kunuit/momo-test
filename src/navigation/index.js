import React from 'react';
import {StyleSheet} from 'react-native';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {Router} from './router';
import {Login, Register, ForgotPassword} from '@features/auth/screens';

import {SplashScreen} from '@features/splash/screens';
import {PhotoDetail, PhotoListScreen} from '@src/features/photo/screens';

const Stack = createStackNavigator();

const configTabOther = {
  animation: 'timing',
  config: {
    duration: 300,
  },
};

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name={Router.SplashScreen} component={SplashScreen} />

      <Stack.Screen name={Router.Login} component={Login} />
      <Stack.Screen name={Router.PhotoListScreen} component={PhotoListScreen} />

      {[
        {name: Router.PhotoDetail, component: PhotoDetail},
        {name: Router.Register, component: Register},
        {name: Router.ForgotPassword, component: ForgotPassword},
      ].map(stack => {
        return (
          <Stack.Screen
            key={stack.name}
            name={stack.name}
            component={stack.component}
            options={{
              transitionSpec: {
                open: configTabOther,
                close: configTabOther,
              },
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
