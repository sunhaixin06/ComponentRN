/* tslint:disable:no-console */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Accordion, List } from '@ant-design/react-native';
import Basic from '../../Basic';
export default class AccordionExmple extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      activeSections: [2, 0],
    };
    this.onChange = activeSections => {
      this.setState({ activeSections });
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
        <Basic/>
        <Accordion
          onChange={this.onChange}
          activeSections={this.state.activeSections}
        >
          <Accordion.Panel header="Title 1">
            <List>
              <List.Item>Content 1</List.Item>
              <List.Item>Content 2</List.Item>
              <List.Item>Content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2">
            this is panel content2 or other
          </Accordion.Panel>
          <Accordion.Panel header="Title 3">
            Text text text text text text text text text text text text text
            text text
          </Accordion.Panel>
        </Accordion>
      </View>
    );
  }
}