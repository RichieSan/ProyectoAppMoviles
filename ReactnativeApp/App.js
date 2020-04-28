import React from 'react';
import {StyleSheet, Text, View, setState, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './screens/Login';
import Main from './screens/Conexion';
import Models from './screens/Models';
import Registro from './screens/Registro';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Conexion" component={Conexion} />
        <Stack.Screen name="Models" component={Models} />
        <Stack.Screen name="Registro" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}