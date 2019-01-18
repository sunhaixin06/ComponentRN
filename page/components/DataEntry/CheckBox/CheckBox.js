import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Checkbox, List, WhiteSpace, Flex} from '@ant-design/react-native';
import Basic from '../../Basic';
const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;
export default class BasicCheckboxExample extends Component {
  onChange = (val) => {
    console.log(val);
  }
  render() {
    const data = [
        { value: 0, label: 'Ph.D.' },
        { value: 1, label: 'Bachelor' },
        { value: 2, label: 'College diploma' },
    ];
    return (
      <View style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
        <Basic/>
        <View style={{ padding: 10 }}>
            <List renderHeader={() => 'CheckboxItem demo'}>
                {data.map(i => (
                <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                    {i.label}
                </CheckboxItem>
                ))}
                <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
                Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
                </CheckboxItem>
            </List>
            <WhiteSpace />
            <Flex>
                <Flex.Item>
                <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                    <Text>Agree <Text onClick={(e) => { e.preventDefault(); alert('agree it'); }}>agreement</Text></Text>
                </AgreeItem>
                </Flex.Item>
            </Flex>
        </View>
      </View>
    );
  }
}