import React, { Component } from 'react';
import { View } from 'react-native';
import { PickerView, WhiteSpace } from '@ant-design/react-native';
import Basic from '../../Basic';

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

const season = [
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ]
];


export default class PickerViewExample extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: undefined,
    };
    this.onChange = value => {
      this.setState({
        value,
      });
    };
  }
  render() {
    return (
       <View style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
            <Basic/>
            <PickerView
            onChange={this.onChange}
            value={this.state.value}
            data={seasons}
            cascade={false}
            />
            <WhiteSpace/><WhiteSpace/>
            <PickerView
              data={season}
              cascade={false}
            />
            <WhiteSpace /><WhiteSpace />
            {/* <PickerView
              data={province}
              cascade={true}
              value={['02', '02-1', '02-1-1']}
            /> */}
       </View>
    );
  }
}