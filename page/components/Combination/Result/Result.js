import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
import Basic from '../../Basic';
import RsExample from "./example";


export default class ResultExmple extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
         <ScrollView
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            >
            <Basic/>
            <RsExample 
            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"
            title="支付成功"
            message="998.00元"
            message_c="1098元"
            />
            <WhiteSpace/>
            <RsExample 
            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"
            title="验证成功"
            message="所提交内容已成功完成验证"
            />
            <WhiteSpace/>
            <RsExample 
            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"
            title="支付失败"
            message="所选银行卡余额不足"
            />
            <WhiteSpace/>
            <RsExample 
            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg"
            title="等待处理"
            message="已提交申请，等待银行处理"
            />
            <WhiteSpace/>
            <RsExample 
            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"
            title="操作失败"
            message="由于你的支付宝账户还未绑定淘宝账户"
            />
         </ScrollView>
      </View>
    );
  }
}