import React, { Component } from 'react';
import {  SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Me extends Component {
  static navigationOptions = {
    headerTitle: '我的',
  }
  render() {
    return (
      <SafeAreaView 
        style = { styles.container }>
          <Text>Me</Text>
          <TouchableOpacity 
            style = { styles.button }  
            onPress = { ()=>this.props.navigation.navigate('Detail') }>
              <Text>Go Detail</Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-evenly', 
    alignItems: 'center',
  },
  button: {
    backgroundColor:'#ff2d55', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 100, 
    height: 50,
  }
})

  
