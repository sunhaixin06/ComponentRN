import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
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
                        {ShareData.map(val =>(
                            <List.Item 
                            key={val.data}
                            arrow="horizontal" 
                            onPress={()=>{navigate(val.data,{ name: val.data})}}
                            >{val.name}</List.Item>
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
        height: 77
    },
  });
  