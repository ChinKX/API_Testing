/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
//first import createStackNavigator from react-navigation
//then import StackNavigator for creatign nested routes
import { createStackNavigator, createAppContainer } from 'react-navigation';
//Import your screens 
import PokeList from './components/PokeList';
import Pokemon from './components/Pokemon';
import Home from './components/Home';


//Define your routes using createStackNavigator, which will be a object full of options. 
const RootStack = createStackNavigator({
  //Define your screens.
  Home: { screen: Home },
  PokeList: { screen: PokeList },
  Pokemon: {screen: Pokemon }
},
{
  initialRouteName:  'Home'
})

const AppContainer = createAppContainer(RootStack)

//Export default the stateless component 
export default class App extends PureComponent {
  render() {
    return <AppContainer />;
  }
}