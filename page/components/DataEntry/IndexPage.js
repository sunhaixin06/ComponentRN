import React, { Component } from 'react';
import { EntryList } from '../constants';
import ShareIndexPage from '../ShareIndexPage';

export default class IndexPage extends Component {
    
    render() {
      const { navigate } = this.props;
      return (
          <ShareIndexPage 
          navigate={navigate}
          ShareTitle="数据录入 Data Entry" 
          ShareData={EntryList} />
      )
    }
} 

