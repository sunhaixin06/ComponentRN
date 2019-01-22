import React, { Component } from 'react';
import { GestureList } from '../constants';
import { View } from 'react-native';
import ShareIndexPage from '../ShareIndexPage';

export default class IndexPage extends Component {
    
    render() {
      const { navigate } = this.props;
      return (
          <ShareIndexPage 
          navigate={navigate}
          ShareTitle="手势 Gesture" 
          ShareData={GestureList} />
      )
    }
} 

