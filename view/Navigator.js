import {
  StackNavigator
} from 'react-navigation';
import React from 'react';
import Login from './Login';
import MainPage from './MainPage';

export default Navigator = StackNavigator({
  Login:{
    screen:Login,
  },
  MainPage:{
    screen:MainPage,
  }
});
