/* tslint:disable:no-console */
import React,{ Component } from 'react';
import { View } from 'react-native';
import { List, Stepper } from '@ant-design/react-native';
import Basic from '../../Basic';
function onChange(value) {
  console.log('changed', value);
}
export default class StepperExample extends Component {
  render() {
    const readOnly = (
      <Stepper
        key="1"
        max={10}
        min={1}
        readOnly={false}
        defaultValue={1}
        onChange={onChange}
      />
    );
    return (
      <View style={{ backgroundColor: '#f5f5f9', flex: 1 }}>
        <Basic/>
        <List>
          <List.Item
            extra={
              <Stepper
                key="0"
                max={10}
                min={1}
                defaultValue={3}
                onChange={onChange}
              />
            }
          >
            readOnly: true
          </List.Item>
          <List.Item extra={readOnly}>readOnly: false</List.Item>
          <List.Item
            extra={
              <Stepper
                key="2"
                disabled
                max={10}
                min={1}
                defaultValue={3}
                onChange={onChange}
              />
            }
          >
            Disabled
          </List.Item>
        </List>
      </View>
    );
  }
}