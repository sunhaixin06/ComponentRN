import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingRight: 0,
    paddingBottom: 9,
    paddingLeft: 15,
    color: '#000',
    fontSize: 20,
    lineHeight: 20,
    height: 40,
    fontWeight: 'bold'
  },
});

export default class Basic extends Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>Basic</Text>
      </View>
    );
  }
}

