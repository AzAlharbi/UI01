import React from 'react';
import {
  StyleSheet, Text, SafeAreaView, ImageBackground, View, StatusBar, Image, KeyboardAvoidingView
  , TouchableOpacity
} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Navigator from './pages/Navigator'

export default class App extends React.Component{
  render(){
    return( <Navigator/>)
  }
}