import React, { Component } from 'react'
import {Button, DatePicker} from 'antd';
import { WechatOutlined, SearchOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'
const {RangePicker} = DatePicker

const onChange = (date, dateString) => {
  console.log(date, dateString);
};


export default class App extends Component {
  
  render() {
    return (
      <div>
        App..
        <Button type="primary">Primary Button</Button>
        <Button type="link">Button2</Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <div>
          <WechatOutlined />
        </div>
        <div>
          <DatePicker onChange={onChange} />
          <RangePicker/>
        </div>
      </div>
    )
  }
}
