import React, { Component } from 'react';
import { CombinationList } from '../constants';
import { View } from 'react-native';
import ShareIndexPage from '../ShareIndexPage';

export default class IndexPage extends Component {
    
    render() {
      const { navigate } = this.props;
      return (
          <ShareIndexPage 
          navigate={navigate}
          ShareTitle="组合组件 Combination" 
          ShareData={CombinationList} />
      )
    }
} 

