import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { WhiteSpace, WingBlank, Accordion, List } from '@ant-design/react-native';

export default class IndexPage extends Component {
    constructor() {
      super(...arguments);
      this.state = {
        activeSections: [2, 0],
      };
      this.onChange = activeSections => {
        this.setState({ activeSections });
      };
    }
    render() {
      const { navigation } = this.props;
      return (
        <View style={{ marginTop: 20}}>
            <WhiteSpace />
            <WhiteSpace />
            <WingBlank>
                <Accordion
                    onChange={this.onChange}
                    activeSections={this.state.activeSections}
                >
                    <Accordion.Panel header="布局 Layout" style={styles.connect_}>
                    <List>
                        <List.Item arrow="horizontal" 
                        onPress={()=>{
                            this.props.navigate('Flex',{ name: 'Flex'});
                        }}>Flex Flex布局</List.Item>
                        <List.Item arrow="horizontal" 
                         onPress={()=>{
                            this.props.navigate('WhiteSpace',{ name: 'WhiteSpace'});
                        }}>WhiteSpace 上下留白</List.Item>
                        <List.Item arrow="horizontal"
                        onPress={()=>{
                            this.props.navigate('WingBlank',{ name: 'WingBlank'})
                        }}
                        >WingBlank 两翼留白</List.Item>
                    </List>
                    </Accordion.Panel>
                </Accordion>
            </WingBlank>
        </View>
      )
    }
  } 

  const styles = StyleSheet.create({
    connect_: {
        backgroundColor: '#fff', 
        borderRadius: 2, 
        height: 77
    },
  });
  