import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon, SearchBar, TabBar, WhiteSpace } from '@ant-design/react-native';
import Basic from '../../Basic';

export default class BasicTabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }
//   renderContent(pageText) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' , color: 'black'}}>
//         <SearchBar placeholder="Search" showCancelButton />
//         <Text style={{ margin: 80 }}>{pageText}</Text>
//       </View>
//     );
//   }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
  render() {
    return (
      <View>
          <Basic/>
          <WhiteSpace/>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="#f5f5f5">
            <TabBar.Item
            title="Life"
            icon={<Icon name="home" />}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => this.onChangeTab('blueTab')}
            >
             {/* {this.renderContent('blueTab Tab')} */}
            </TabBar.Item>
            <TabBar.Item
            icon={<Icon name="ordered-list" />}
            title="Koubei"
            badge={2}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => this.onChangeTab('redTab')}
            >
            {/* {this.renderContent('Koubei Tab')} */}
            </TabBar.Item>
            <TabBar.Item
            icon={<Icon name="like" />}
            title="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => this.onChangeTab('greenTab')}
            >
            {/* {this.renderContent('Friend Tab')} */}
            </TabBar.Item>
            <TabBar.Item
            icon={<Icon name="user" />}
            title="My"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => this.onChangeTab('yellowTab')}
            >
            {/* {this.renderContent('My Tab')} */}
            </TabBar.Item>
        </TabBar>
      </View>
    );
  }
}