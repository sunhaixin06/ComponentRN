import React, { Component } from 'react';
import { FeedbackList } from '../constants';
import { View } from 'react-native';
import ShareIndexPage from '../ShareIndexPage';

export default class IndexPage extends Component {
    
    render() {
      const { navigate } = this.props;
      return (
          <ShareIndexPage 
          navigate={navigate}
          ShareTitle="操作反馈 Feedback" 
          ShareData={FeedbackList} />
      )
    }
} 

