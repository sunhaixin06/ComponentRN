import React, { Component } from 'react';
import { DataList } from '../constants';
import { View } from 'react-native';
import ShareIndexPage from '../ShareIndexPage';

export default class IndexPage extends Component {
    
    render() {
      const { navigate } = this.props;
      return (
          <ShareIndexPage 
          navigate={navigate}
          ShareTitle="数据展示 Data Display" 
          ShareData={DataList} />
      )
    }
} 

