import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { WhiteSpace, WingBlank, Accordion, List } from '@ant-design/react-native';

export default class ShareIndexPage extends Component {
    constructor() {
      super(...arguments);
      this.state = {
        activeSections: [],
      };
      this.onChange = activeSections => {
        this.setState({ activeSections });
      };
    }
    render() {
      const { navigate, ShareTitle, ShareData } = this.props;
      
      return (
        <View>
            <WingBlank>
                <Accordion
                    onChange={this.onChange}
                    activeSections={this.state.activeSections}>
                    <Accordion.Panel 
                    header={ShareTitle} 
                    style={styles.connect_}>
                    <List>
                    <WhiteSpace/>
                        {ShareData.map(val =>(
                            <List.Item 
                            key={val.data}
                            arrow="horizontal" 
                            onPress={()=>{navigate(val.data,{ name: val.data})}}
                            ><Text style={{ color: '#666', fontSize: 15}}>{val.name}</Text>
                            </List.Item>
                        ))}
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
        height: 77,
    },
  });
  