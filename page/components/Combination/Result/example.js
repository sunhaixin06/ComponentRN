import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SVGImage from 'react-native-svg-image';

const styles = StyleSheet.create({
    demoTitle: {
        paddingTop: 30,
        paddingRight: 0,
        paddingBottom: 18,
        paddingLeft: 0,
        color: '#888',
        fontSize: 14,
        marginLeft: 15
    },
    am_result:{
        position: 'relative',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 21,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    am_result_pic:{
        width: 60,
        height: 60,
        lineHeight: 60
    },
    am_result_title:{
        marginTop: 15,  
        lineHeight: 1,
        color: '#000',
        paddingLeft: 15,
        paddingRight: 15,
    },
    am_result_message:{
        marginTop: 9, 
        lineHeight: 1.5, 
        color: '#888',
    },
    am_result_message_cd:{
        fontSize: 16,
        color: '#888'
    }
  });

  export default class RSExmple extends Component {
    render() {
        const { imgUrl, title, message, message_c } = this.props;
      return (
        <View>
            <Text style={styles.demoTitle}>{title}</Text>
            <View style={styles.am_result}>
                <View style={styles.am_result_pic}>
                    <SVGImage
                    style={{ width: 60, height: 60 }}
                    source={{uri: imgUrl }}
                />
                </View>
                <View style={styles.am_result_title}>
                    <Text style={{fontSize: 21}}>{title}</Text>
                </View>
                <View style={styles.am_result_message}>
                    <Text style={styles.am_result_message_cd}>{message}
                        <Text>&nbsp;{message_c ? message_c: ''}</Text>
                    </Text>
                </View>
            </View>
        </View>
      );
    }
  }