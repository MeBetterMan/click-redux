import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createIncrementAyncAction } from '../../redux/count_action'

export default class Count extends Component {
    add = () => {
        const value = this.selRef.value
        store.dispatch(createIncrementAction(value))
    }
    ayncAdd = () => {
        const value = this.selRef.value
        store.dispatch(createIncrementAyncAction(value*1,500))
    }

    render() {
        return (
            <div>
                <h3>总和是:{store.getState()}</h3>
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
