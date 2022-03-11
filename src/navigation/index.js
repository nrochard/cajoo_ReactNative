import React from 'react';
import {NavigationContainer, route} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Landing from '../features/onboarding/landing/landing.screen';
import Phone from '../features/onboarding/phone/phone.screen';
import Login from '../features/onboarding/login/login.screen';
import Code from '../features/onboarding/code/code.screen';
const Stack = createNativeStackNavigator();

const rootContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landing"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: 'Connexion',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'EricaOne-Regular',
              fontSize: 18,
            },
            headerStyle: {
              backgroundColor: '#ff3637',
            },
            headerBackTitle: '',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="phone"
          component={Phone}
          options={{
            title: 'Connexion',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'EricaOne-Regular',
              fontSize: 18,
            },
            headerStyle: {
              backgroundColor: '#ff3637',
            },
            headerBackTitle: '',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="code"
          component={Code}
          options={{
            title: 'Connexion',
            headerTitleStyle: {
              color: '#fff',
              fontFamily: 'EricaOne-Regular',
              fontSize: 18,
            },
            headerStyle: {
              backgroundColor: '#ff3637',
            },
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default rootContainer;
