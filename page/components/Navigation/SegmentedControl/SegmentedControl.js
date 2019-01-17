import React, { Component } from 'react';
import Basic from '../../Basic';
import { Text, View } from 'react-native';
import { SegmentedControl, WhiteSpace } from '@ant-design/react-native';

export default class BasicTagExample extends Component {
  constructor() {
    super(...arguments);
    this.onChange = e => {
      console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    };
    this.onValueChange = value => {
      console.log(value);
    };
  }
  render() {
    return (
      <View>
          <Basic/>
          <View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
              <Text>Simplest</Text>
              <WhiteSpace size="lg" />
              <SegmentedControl values={['Segment1', 'Segment2']} />
              <WhiteSpace size="lg" />
              <Text>Disabled</Text>
              <WhiteSpace size="lg" />
              <SegmentedControl values={['Segment1', 'Segment2']} disabled />
              <WhiteSpace size="lg" />
              <Text>TintColor and Style</Text>
              <WhiteSpace size="lg" />
              <SegmentedControl
                values={['Segment1', 'Segment2', 'Segment3']}
                tintColor={'#ff0000'}
                style={{ height: 40, width: 280 }}
              />
              <WhiteSpace size="lg" />
              <Text>SelectedIndex</Text>
              <WhiteSpace size="lg" />
              <SegmentedControl
                selectedIndex={1}
                values={['Segment1', 'Segment2', 'Segment3']}
              />
              <WhiteSpace size="lg" />
              <Text>onChange/onValueChange</Text>
              <WhiteSpace size="lg" />
              <SegmentedControl
                values={['Segment1', 'Segment2', 'Segment3']}
                onChange={this.onChange}
                onValueChange={this.onValueChange}
              />
          </View>
      </View>
    );
  }
}