
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Page1 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>page1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
