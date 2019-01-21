import React from 'react';
import { Grid, Icon } from '@ant-design/react-native';
import { ScrollView } from 'react-native';
import { outlineGlyphMap } from '@ant-design/icons-react-native/lib/outline';
import Basic from '../../Basic';
export default class IConDemo extends React.Component {
  render() {
    const outlineData = Object.keys(outlineGlyphMap).map(item => ({
      icon: <Icon name={item} size="lg" />,
      text: item,
    }));
   
    const size = ['xxs', 'xs', 'sm', 'md', 'lg'];
    const data1 = size.map(item => ({
        icon: <Icon name="search" size={item} />,
        text: item,
      }));
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
        <Basic/>
        <Grid data={outlineData} columnNum={3} hasLine={false} activeStyle={false} />
        <Basic name="Size"/>
        <Grid data={data1} columnNum={5} hasLine={false} activeStyle={false} />
      </ScrollView>
    );
  }
}