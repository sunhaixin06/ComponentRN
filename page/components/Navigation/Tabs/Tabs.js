import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tabs, WhiteSpace } from '@ant-design/react-native';
import Basic from '../../Basic';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];
const tabs2 = [
  { title: '1st Tab' },
  { title: '2nd Tab' },
  { title: '3rd Tab' },
  { title: '4th Tab' },
  { title: '5th Tab' },
  { title: '6th Tab' },
  { title: '7th Tab' },
  { title: '8th Tab' },
  { title: '9th Tab' },
];
const style = {
  alignItems: 'center',
  justifyContent: 'center',
  height: 150,
  backgroundColor: '#fff',
};

export default class BasicTabsExample extends Component {

  renderContent = tab =>
    (<View style={style}>
      <Text>Content of {tab.title}</Text>
    </View>);

  render() {
    return (
      <View style={{ flex: 1 , backgroundColor: '#f5f5f9'}}>
        <ScrollView 
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
          <Basic name="Basic usage" />
          <WhiteSpace/>
          <Tabs tabs={tabs}>
            <View style={style}>
              <Text>Content of First Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Second Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Third Tab</Text>
            </View>
          </Tabs>
          <WhiteSpace size="xl" />
          <Tabs tabs={tabs} tabBarPosition="bottom">
            <View style={style}>
              <Text>Content of First Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Second Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Third Tab</Text>
            </View>
          </Tabs>
          <WhiteSpace/>
          <Basic name="Sticky" />
          <WhiteSpace/>
          <Tabs tabs={tabs}>
            <View style={style}>
              <Text>Content of First Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Second Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Third Tab</Text>
            </View>
          </Tabs>
          <WhiteSpace/>
          <Basic name="No animation" />
          <WhiteSpace/>
          <Tabs tabs={tabs} animated={false} useOnPan={false}>
            <View style={style}>
              <Text>Content of First Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Second Tab</Text>
            </View>
            <View style={style}>
              <Text>Content of Third Tab</Text>
            </View>
          </Tabs>
          <WhiteSpace/>
          <Basic name="Fixed height" />
          <WhiteSpace/>
          <View style={{ height: 200}}>
            <Tabs tabs={tabs}>
              <View style={style}>
                <Text>Content of First Tab</Text>
              </View>
              <View style={style}>
                <Text>Content of Second Tab</Text>
              </View>
              <View style={style}>
                <Text>Content of Third Tab</Text>
              </View>
            </Tabs>
          </View>
          <WhiteSpace/>
          <Basic name="Overflow, more than 5 tabs" />
          <WhiteSpace/>
          <View style={{ flex: 2 }}>
            <Tabs tabs={tabs2} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                {this.renderContent}
            </Tabs>
          </View>
        </ScrollView>
      </View>
    );
  }
}
