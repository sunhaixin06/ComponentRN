import React, { Component } from 'react';
import { OtherList } from '../constants';
import { View } from 'react-native';
import ShareIndexPage from '../ShareIndexPage';

export default class IndexPage extends Component {
    
    render() {
      const { navigate } = this.props;
      return (
          <ShareIndexPage 
          navigate={navigate}
          ShareTitle="其他 Other" 
          ShareData={OtherList} />
      )
    }
} 

