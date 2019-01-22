import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
import LayoutIndex from './components/Layout/IndexPage';
import NavigationIndex from './components/Navigation/IndexPage';
import DataEntryIndex from './components/DataEntry/IndexPage';
import DataDisplayIndex from './components/DataDisplay/IndexPage';
import FeedbackIndex from './components/FeedBack/IndexPage';
import GestureIndex from './components/Gesture/IndexPage';
import CombinationIndex from './components/Combination/IndexPage';
import OtherIndex from './components/Other/IndexPage';

export default class HomePage extends Component {
  static navigationOptions ={
      title: '支付宝移动组件库',
      headerBackTitle: '返回'
  }
  render() {
    const { navigation:{ navigate }} = this.props;
    return (
         <ScrollView 
         automaticallyAdjustContentInsets={false}
         showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}
         style={styles.container}>
            <View style={styles.title_top}>
	            <Text style={styles.demo_title}>Ant Design Mobile RN</Text>
	          </View>
	          <View style={styles.title_bottom}>
	            <Text style={styles.demo_subtitle}>支付宝移动端组件库</Text>
	          </View>
              <WhiteSpace size="xl"/>
              <LayoutIndex navigate={navigate}/>
              <WhiteSpace/>
              <NavigationIndex navigate={navigate}/>
              <WhiteSpace/>
              <DataEntryIndex navigate={navigate}/>
              <WhiteSpace/>
              <DataDisplayIndex navigate={navigate}/>
              <WhiteSpace/>
              <FeedbackIndex navigate={navigate}/>
              <WhiteSpace/>
              <GestureIndex navigate={navigate}/>
              <WhiteSpace/>
              <CombinationIndex navigate={navigate}/>
              <WhiteSpace/>
              <OtherIndex navigate={navigate}/>
          </ScrollView>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f9',
    height: '100%'
  },
  title_top: {
    flexDirection:'row',
    marginTop:30,
    color: 'rgba(0,0,0,.75)'
  },
  title_bottom: {
    flexDirection:'row',
    marginTop:12,
    color: 'rgba(0,0,0,.75)'
  },
  demo_title:{
    fontSize:25, 
    paddingLeft: 16
  },
  demo_subtitle:{
    fontSize:15, 
    paddingLeft: 16
  }
});
