import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';

import { Home } from "./screens/HomeScreen";
import { RecipeForm } from "./screens/RecipeFormScreen";

const MyApp = createStackNavigator({
  Home: { screen: HomeScreen },
  RecipeForm: { screen: RecipeFormScreen },
});

const AppContainer = createAppContainer(MyApp);

export default function App() {
  return (
    <AppContainer/>
  );
}
