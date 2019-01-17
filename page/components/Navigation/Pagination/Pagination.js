import React, { Component } from 'react';
import Basic from '../../Basic';
import { Pagination, WhiteSpace, WingBlank } from '@ant-design/react-native';
const locale = {
  prevText: '上一步',
  nextText: '下一步',
};
export default class PaginationExample extends Component {
  render() {
    return (
      <WingBlank size="lg">
        <Basic/>
        <WhiteSpace size="lg" />
        <Pagination total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination simple total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination mode="number" total={5} current={3} />

        <WhiteSpace size="lg" />
        <Pagination mode="pointer" total={5} current={2} />
      </WingBlank>
    );
  }
}