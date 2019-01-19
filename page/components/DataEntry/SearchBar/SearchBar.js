import React, { Component } from 'react';
import Basic from '../../Basic';
import { View } from 'react-native';
import { SearchBar, Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
export default class SearchBarDemo extends Component {
    state = {
        value: '美食',
      };
      componentDidMount() {
        // this.autoFocusInst.focus();
      }
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        // this.manualFocusInst.focus();
      }
    render() {
        return (
        <View style={{ marginTop: 30 }}>
             <WingBlank>
                 <Basic name="Normal"/>
                 <SearchBar placeholder="Search" maxLength={8} />
                 <WhiteSpace />
                 <Basic name="AutoFocus when enter page"/>
                 <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
                 <WhiteSpace />
                 <Basic name="Focus by operation"/>
                 <SearchBar
                    placeholder="手动获取获取光标"
                    ref={ref => this.manualFocusInst = ref}
                />
                <WhiteSpace />
             </WingBlank>
            <WingBlank>
                <Button
                onClick={this.handleClick}
                >click to focus</Button>
                <WhiteSpace />
                 <Basic name="Show cancel button"/>
                 <SearchBar
                value={this.state.value}
                placeholder="Search"
                onSubmit={value => console.log(value, 'onSubmit')}
                onClear={value => console.log(value, 'onClear')}
                // onFocus={() => console.log('onFocus')}
                // onBlur={() => console.log('onBlur')}
                // onCancel={() => console.log('onCancel')}
                showCancelButton
                onChange={this.onChange}
            />
             </WingBlank>
        </View>
        );
    }
}