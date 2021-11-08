import React, { Component } from 'react'

export default class Count extends Component {
    add = () => {
        const {value} = this.selRef
        this.props.jia(value)
    }
    ayncAdd = () => {
        const value = this.selRef.value
    }

    render() {
        return (
            <div>
                <h3>总和是:{this.props.count}</h3>
                <select ref={(c) => { this.selRef = c }}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={this.add}>+</button>
                <button onClick={this.ayncAdd}>异步+</button>
            </div>
        )
    }
}
