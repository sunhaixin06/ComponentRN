import React, { Component } from 'react';
import Basic from '../../Basic';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';

export default class DrawerExample extends Component {
  constructor() {
    super(...arguments);
    this.onOpenChange = isOpen => {
      /* tslint:disable: no-console */
      console.log('是否打开了 Drawer', isOpen.toString());
    };
  }
  render() {
    const itemArr = Array.apply(null, Array(20))
      .map(function(_, i) {
        return i;
      })
      .map((_i, index) => {
        if (index === 0) {
          return (
            <List.Item
              key={index}
              // thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              multipleLine
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text>Categories - {index}</Text>
                <Button
                  type="primary"
                  size="small"
                  onPress={() => this.drawer.closeDrawer()}
                >
                  close drawer
                </Button>
              </View>
            </List.Item>
          );
        }
        return (
          <List.Item
            key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          >
            <Text>Categories - {index}</Text>
          </List.Item>
        );
      });
    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebar = (
      <ScrollView 
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={[styles.container]}>
        <List>{itemArr}</List>
      </ScrollView>
    );
    return (
      <View style={{ backgroundColor: '#f5f5f9', flex: 1}}>
          <Drawer
            sidebar={sidebar}
            position="right"
            open={false}
            drawerRef={el => (this.drawer = el)}
            onOpenChange={this.onOpenChange}
            drawerBackgroundColor="#ccc"
          >
            <Basic/>
            <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
              <Button onPress={() => this.drawer && this.drawer.openDrawer()}>
                Open drawer
              </Button>
              <WhiteSpace />
            </View>
          </Drawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});