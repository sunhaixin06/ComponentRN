import React, { Component} from 'react';
import { View } from 'react-native';
import { DatePicker, List, Provider } from '@ant-design/react-native';
import enUS from '@ant-design/react-native/es/locale-provider/en_US';
import esES from '@ant-design/react-native/es/locale-provider/es_ES';
import ruRU from '@ant-design/react-native/es/locale-provider/ru_RU';
import zhCN from '@ant-design/react-native/es/locale-provider/zh_CN';
import Basic from '../../Basic';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp)
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr} ${timeStr}`;
}
export default class PopupExample extends Component {
    constructor(props) {
        super(props);  
    }
    state ={
        date: now,
        time: now,
        locale: 'English',
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    }
  render() {
    const { locale } = this.state;
    const languages = [
      {
        value: '中国',
        label: '中国',
        language: zhCN,
      },
      {
        value: 'English',
        label: 'English',
        language: enUS,
      },
      {
        value: 'Русский',
        label: 'Русский',
        language: ruRU,
      },
      {
        value: 'Español',
        label: 'Español',
        language: esES,
      },
    ];
    const currentLocale = languages.find(item => item.value === locale)
      .language;
    return (
      <View style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
        <Basic/>
        <Provider locale={currentLocale}>
            <List>
                    <DatePicker
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                    >
                    <List.Item arrow="horizontal">Datetime</List.Item>
                    </DatePicker>
                    <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                    >
                    <List.Item arrow="horizontal">Date</List.Item>
                    </DatePicker>
                    <DatePicker
                    mode="time"
                    minuteStep={2}
                    use12Hours
                    value={this.state.time}
                    onChange={time => this.setState({ time })}
                    >
                    <List.Item arrow="horizontal">Time (am/pm)</List.Item>
                    </DatePicker>
                    <DatePicker
                    mode="time"
                    minDate={minDate}
                    maxDate={maxDate}
                    value={this.state.time}
                    onChange={time => this.setState({ time })}
                    >
                    <List.Item arrow="horizontal">Limited time</List.Item>
                    </DatePicker>

                    <DatePicker
                    mode="time"
                    // locale={enUs}
                    format={val => `UTC Time: ${formatDate(val).split(' ')[1]}`}
                    value={this.state.utcDate}
                    onChange={date => this.setState({ utcDate: date })}
                    >
                    <List.Item arrow="horizontal">UTC time</List.Item>
                    </DatePicker>
                    <List.Item
                    extra={this.state.dpValue && formatDate(this.state.dpValue)}
                    onClick={() => this.setState({ visible: true })}
                    >
                    External control visible state
                    </List.Item>
                    <DatePicker
                    visible={this.state.visible}
                    value={this.state.dpValue}
                    onOk={date => this.setState({ dpValue: date, visible: false })}
                    onDismiss={() => this.setState({ visible: false })}
                    />
            </List>
        </Provider>
      </View>
    );
  }
}