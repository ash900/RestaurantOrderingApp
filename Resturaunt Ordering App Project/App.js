import React, { Component } from 'react';

import {
View,
StyleSheet
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';


import Home from './components/home';
import Menu from './components/menu';
import Summary from './components/summary';

export default class App extends Component<Props> {
  //console.disableYellowBox = true;
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key="home" component = {Home} title='Home' />
            <Scene key="menu" component = {Menu} title='Menu' />
            <Scene key="summary" component = {Summary} title='Summary' />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
