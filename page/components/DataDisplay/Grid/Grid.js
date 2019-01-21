import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Grid } from '@ant-design/react-native';
const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));
  
const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));
export default class BasicGridExample extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
        <View style={[{ margin: 10 }]}>
          <Text className={styles.subtitle}>Always square grid item</Text>
        </View>
        <View style={[{ padding: 10 }]}>
          <Grid data={data} hasLine={false} />
        </View>

        <View style={[{ margin: 10 }]}>
          <Text className={styles.subtitle}>Grid item adjust accroiding to img size</Text>
        </View>
         <Grid data={data} square={false} className={styles.notsquaregrid} />
        <View style={[{ margin: 10 }]}>
          <Text className={styles.subtitle}>ColumnNum=3</Text>
        </View>
        <Grid data={data} columnNum={3} />
        <View style={[{ margin: 10 }]}>
          <Text className={styles.subtitle}>No border</Text>
        </View>
        <Grid data={data} hasLine={false} />
        <View style={[{ margin: 10 }]}>
          <Text className={styles.subtitle}>Carousel</Text>
        </View>
        <Grid data={data} isCarousel onPress={_el => console.log(_el)} />
        <View style={[{ margin: 10 }]}>
          <Text className={styles.subtitle}>Custom GridCell Style</Text>
        </View>
         <Grid data={data1} columnNum={3} itemStyle={{ height: 150, backgroundColor: '#fff' }} />      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    notsquaregrid: {
        width: 40,
        height: 60
    },
    subtitle: {
        color: '#888',
        fontSize: 14,
        padding: 15
    },
  });