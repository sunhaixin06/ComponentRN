import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Basic from '../../Basic';
import { Button, WhiteSpace, WingBlank, Flex, List } from '@ant-design/react-native';

export default class ButtonExample extends Component{
    render(){
        return(
        <View style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
            <ScrollView
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            >
                <Basic name="类型、尺寸"/>
                <WingBlank>
                    <WhiteSpace />
                    <Button>default</Button>
                    <WhiteSpace />
                    <Button disabled>default disabled</Button>
                    <WhiteSpace />

                    <Button type="primary">primary</Button>
                    <WhiteSpace />
                    <Button type="primary" disabled>
                    primary disabled
                    </Button>
                    <WhiteSpace />

                    <Button type="warning">warning</Button>
                    <WhiteSpace />
                    <Button type="warning" disabled>
                    warning disabled
                    </Button>
                    <WhiteSpace />

                    <Button loading>loading button</Button>

                    <Button activeStyle={false}>无点击反馈</Button><WhiteSpace />
                    <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace />
                    <Flex>
                        <Flex.Item style={styles.itmeStyle}>
                        <Button size="small" style={styles.container}>with icon and inline</Button>
                        </Flex.Item>
                        <Flex.Item style={styles.itmeStyle}>
                        <Button size="small" style={{ width: 160}}>with icon and inline</Button>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace />
                    <Flex>
                        <Flex.Item style={styles.itmeStyle}>
                        <Button type="primary" style={styles.container}>inline primary</Button>
                        </Flex.Item>
                        <Flex.Item style={styles.itmeStyle}>
                        <Button type="ghost" style={styles.container} className="am-button-borderfix">inline ghost</Button>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace />
                    <Flex>
                        <Flex.Item style={styles.itmeStyle}>
                        <Button type="primary" size="small" style={styles.container}>primary</Button>
                        </Flex.Item>
                        <Flex.Item style={styles.itmeStyle}>
                        <Button type="primary" size="small" disabled style={{ width: 160}} >primary disabled</Button>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace />
                    <Flex>
                        <Flex.Item style={styles.itmeStyle}>
                            <Button type="ghost" size="small" style={styles.container}>ghost</Button>
                        </Flex.Item>
                        <Flex.Item style={styles.itmeStyle}>
                        <Button type="ghost" size="small" disabled style={{ width: 160}}>ghost disabled</Button>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
                <WhiteSpace size="xl"/>
                <Basic name="应用场景示例"/>
                <WhiteSpace/>
                <List style={{ margin: 5 }}>
                    <List.Item
                    style={{ }}
                    extra={<Button type="ghost" size="small">small</Button>}
                    multipleLine
                    >
                    Regional manager
                    <List.Item.Brief>
                        Can be collected, refund, discount management, view data and other operations
                    </List.Item.Brief>
                    </List.Item>
                    <List.Item
                    extra={<Button type="primary" size="small">small</Button>}
                    multipleLine
                    >
                    Regional manager
                    <List.Item.Brief>
                        Can be collected, refund, discount management, view data and other operations
                    </List.Item.Brief>
                    </List.Item>
                </List>
            </ScrollView>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginRight: 4,  
        width: 160
    },
    itmeStyle:{
        paddingLeft: 4, 
        paddingRight: 4
    }
    
  });
  