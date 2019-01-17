import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Basic from '../../Basic';
import { WhiteSpace, WingBlank } from '@ant-design/react-native';

const PlaceHolder = props => (
  <View
    style={{
      backgroundColor: '#eee',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}
  >
    <Text style={{ color: '#bbb' }}>Block</Text>
  </View>
);

export default class WingBlankExample extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#f5f5f9', flex: 1}}>
        <Basic/>
        <WhiteSpace />
        <WingBlank>
          <PlaceHolder />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <PlaceHolder />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="sm">
          <PlaceHolder />
        </WingBlank>
      </View>
    );
  }
}

