import React, { Component} from 'react';
import { Text, View } from 'react-native';
import { DatePickerView } from '@ant-design/react-native';
export default class DatePickerViewExample extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: undefined,
    };
    this.onChange = value => {
      console.log(value);
      this.setState({ value });
    };
    this.onValueChange = (...args) => {
      console.log(args);
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
        <Text style={{ margin: 16 }}>Start DateTime</Text>
        <DatePickerView
          style={{backgroundColor: '#fff'}}
          value={this.state.value}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
        <Text style={{ margin: 16 }}>End DateTime</Text>
        <DatePickerView
          style={{backgroundColor: '#fff'}}
          value={this.state.value}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
      </View>
    );
  }
}