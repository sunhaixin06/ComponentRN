import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { List, Switch } from '@ant-design/react-native';
export default class SwitchExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
          checked: false,
          checked1: true,
        };
    }
    
    render() {
        return (
          <View style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
               <List renderHeader={() => 'Form switch'}>
                <List.Item
                extra={<Switch
                    checked={this.state.checked}
                    onChange={() => {
                    this.setState({
                        checked: !this.state.checked,
                    });
                    }}
                />}
                >Off</List.Item>
            <List.Item
            extra={<Switch
                checked={this.state.checked1}
                onChange={() => {
                    this.setState({
                        checked1: !this.state.checked1,
                })}}
            />}
            >On (with rc-form)</List.Item>

            <List.Item
            extra={<Switch
                checked={false}
                disabled
            />}
            >Disabled off</List.Item>
        <List.Item
          extra={<Switch
            checked={true}
            disabled
          />}
        >Disabled on</List.Item>
        <List.Item
          extra={<Switch
            checked={false}
          />}
        >Style for Android</List.Item>
        <List.Item
          extra={<Switch
            checked={true}
            color="red"
          />}
        >Color for Android</List.Item>
        <List.Item
          extra={<Switch
            checked={true}
          />}
        >Style for iOS</List.Item>
        <List.Item
          extra={<Switch
            checked={false}
            color="red"
          />}
        >Color for iOS</List.Item>
            </List>
          </View>
        );
    }
}