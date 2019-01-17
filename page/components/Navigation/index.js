import React, { Component } from 'react';
import { NavList } from '../constants';
import { View } from 'react-native';
import ShareIndexPage from '../ShareIndexPage';

export default class IndexPage extends Component {
    
    render() {
      const { navigate } = this.props;
      return (
          <ShareIndexPage 
          navigate={navigate}
          ShareTitle="导航 Navigation" 
          ShareData={NavList} />
      )
    }
} 

