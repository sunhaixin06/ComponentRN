import React, { Component } from 'react';
import Basic from '../../Basic';
import { View, Text} from 'react-native';
import { List, Radio, WhiteSpace, Flex} from '@ant-design/react-native';
const RadioItem = Radio.RadioItem;
export default class BasicRadioExample extends Component {
    state = {
        value: 0,
        value2: 0,
        value3: 0,
        value4: 0,
    };
    onChange = (value) => {
        console.log('checkbox');
        this.setState({
            value,
        });
    };
    onChange2 = (value) => {
        console.log('checkbox');
        this.setState({
            value2: value,
        });
    };
    render() {
        const { value, value2, value3, value4 } = this.state;
        const data = [
          { value: 0, label: 'doctor' },
          { value: 1, label: 'bachelor' },
        ];
        const data2 = [
          { value: 0, label: 'basketball', extra: 'details' },
          { value: 1, label: 'football', extra: 'details' },
        ];
    
        return (
        <View style={{backgroundColor: '#f5f5f9', flex: 1}}>
            <Basic/>
            <List renderHeader={() => 'RadioItem demo'}>
                {data.map(i => (
                <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                    {i.label}
                </RadioItem>
                ))}
            </List>
            <WhiteSpace size="lg" />
            <List>
                {data2.map(i => (
                <RadioItem key={i.value} checked={value2 === i.value} onChange={() => this.onChange2(i.value)}>
                      <View>
                        <Text>{i.label}</Text>
                        <List.Item.Brief>{i.extra}</List.Item.Brief>
                      </View>
                </RadioItem>
                ))}
            </List>

            <List renderHeader={() => 'Disabled'}>
                {data.map(i => (
                <RadioItem key={i.value} checked={value3 === i.value} onChange={() => this.onChange3(i.value)} disabled>
                     {i.label}
                </RadioItem>
                ))}
            </List>
            <WhiteSpace size="lg" />
            <List>
                {data2.map(i => (
                <RadioItem key={i.value} checked={value4 === i.value} onChange={() => this.onChange4(i.value)} disabled>
                      <View>
                        <Text>{i.label}</Text>
                        <List.Item.Brief>{i.extra}</List.Item.Brief>
                      </View>
                </RadioItem>
                ))}
            </List>
            <Flex style={{ padding: 15 }}>
                <Flex.Item style={{ color: '#888' }}>
                    <View>
                        <Text>Radio demo(dustomized style)</Text>
                    </View>
                </Flex.Item>
                <Flex.Item>
                <Radio onChange={e => console.log('checkbox', e)}>Agree</Radio>
                </Flex.Item>
            </Flex>
        </View>
        );
    }
}

