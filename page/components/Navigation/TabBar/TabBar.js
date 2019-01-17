import React, { Component } from 'react';
import { Text, View, ScrollView} from 'react-native';
import { Icon, TabBar, WhiteSpace, WingBlank, ListView } from '@ant-design/react-native';
import Basic from '../../Basic';

class BasicListExample extends Component {
  state = {
    layout: 'list',
  };
  sleep = (time: any) =>
    new Promise(resolve => setTimeout(() => resolve(), time));
  onFetch = async (
    page = 1,
    startFetch,
    abortFetch
  ) => {
    try {
      let pageLimit = 30;
      if (this.state.layout === 'grid') pageLimit = 60;
      const skip = (page - 1) * pageLimit;

      //Generate dummy data
      let rowData = Array.from(
        { length: pageLimit },
        (_, index) => `item -> ${index + skip}`
      );

      //Simulate the end of the list if there is no more data returned from the server
      if (page === 3) {
        rowData = [];
      }

      //Simulate the network loading in ES7 syntax (async/await)
      await this.sleep(2000);
      startFetch(rowData, pageLimit);
    } catch (err) {
      abortFetch(); //manually stop the refresh or pagination if it encounters network error
    }
  };

  renderItem = (item) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item}</Text>
      </View>
    );
  };

  render() {
    return (
      <ListView
        onFetch={this.onFetch}
        keyExtractor={(item, index) =>
          `${this.state.layout} - ${item} - ${index}`
        }
        renderItem={this.renderItem}
        numColumns={this.state.layout === 'list' ? 1 : 3}
      />
    );
  }
}

export default class BasicTabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      selectedTabs: 'redTabs',
      hidden: false,
    };
  }
  renderContent(pageText) {
    return (
      <View style={{ alignItems: 'center', color: 'black'}}>
        <Text style={{ margin: 80 }}>{pageText}</Text>
      </View>
    );
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
  render() {
    const Data = [
      { title: "Life", icon: "home", sel: "blueTab"},
      { title: "Koubei", icon: "ordered-list", sel: "redTab"},
      { title: "Friend", icon: "like", sel: "greenTab"},
      { title: "My", icon: "user", sel: "yellowTab"},
    ]
    return (
      <View style={{backgroundColor: '#f5f5f9', flex: 1}}>
          <ScrollView
           automaticallyAdjustContentInsets={false}
           showsHorizontalScrollIndicator={false}
           showsVerticalScrollIndicator={false}
          >
            <Basic name="APP Tab Bar"/>
            <WhiteSpace/>
            <View style={{ height: 300}}>
              <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="#fff">
              {Data.map((item, i) =>{
                return(
                  <TabBar.Item
                  title={item.title}
                  key={i}
                  icon={<Icon name={item.icon} />}
                  selected={this.state.selectedTab === item.sel}
                  onPress={() => this.onChangeTab(item.sel)}
                  >
                  {this.renderContent(item.sel+ 'tab')}
                  </TabBar.Item>
                )
              })}
              </TabBar>
            </View>
            <WhiteSpace/>
            <Basic name="use with ListView component"/>
            <WhiteSpace/>
            <View style={{ height: 300}}>
              <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              prerenderingSiblingsNumber={0}
              barTintColor="#fff">
                <TabBar.Item
                title="Life"
                icon={<Icon name="home" />}
                selected={this.state.selectedTabs === "redTabs"}
                onPress={() => this.onChangeTab("redTabs")}
                >
                  <BasicListExample/>
                </TabBar.Item>
              </TabBar>
            </View>
            <Basic name="Tabbar on the top"/>
            <WhiteSpace/>
            <View>
              <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="#fff">
              {Data.map((item, i) =>{
                return(
                  <TabBar.Item
                  title={item.title}
                  style={{ height: 300}}
                  key={i}
                  icon={<Icon name={item.icon} />}
                  selected={this.state.selectedTab === item.sel}
                  onPress={() => this.onChangeTab(item.sel)}
                  >
                  {this.renderContent(item.sel+ 'tab')}
                  </TabBar.Item>
                )
              })}
              </TabBar>
            </View>
          </ScrollView>
      </View>
    );
  }
}