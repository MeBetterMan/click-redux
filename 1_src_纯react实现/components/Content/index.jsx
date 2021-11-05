import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { Select } from 'antd';
import 'antd/dist/antd.css'

const { Option } = Select;


export default class Content extends Component {
    state = {inputVal:0}

    Add = () => {
        PubSub.publish('add', { val: this.state.inputVal || 0 })
    }
    handleChange = (value) => {
        this.setState({inputVal:value})
    }
    render() {
        return (
            <div>
                <Select allowClear='true'
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    onChange={this.handleChange}
                >
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                </Select>
                <button onClick={this.Add}> + </button>

            </div>
        )
    }
}
