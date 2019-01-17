import React from 'react';
import { Text, View } from 'react-native';
import Basic from '../../Basic';
import { WhiteSpace } from '@ant-design/react-native';
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
export default class WhiteSpaceExample extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#f5f5f9', flex: 1}}>
        <Basic/>
        <WhiteSpace size="xs" />
        <PlaceHolder />

        <WhiteSpace size="sm" />
        <PlaceHolder />

        <WhiteSpace />
        <PlaceHolder />

        <WhiteSpace size="lg" />
        <PlaceHolder />

        <WhiteSpace size="xl" />
        <PlaceHolder />
      </View>
    );
  }
}