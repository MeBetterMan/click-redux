//connect用于连接UI组件和redux
import { connect } from 'react-redux'
import { createIncrementAction } from '../../redux/count_action'
import React, { Component } from 'react'

class CountUI extends Component {
    add = () => {
        const { value } = this.selRef
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




//暴露一个容器组件 connect()()第一个括号定义两个函数a b a为获取状态的函数 b为设置状态的函数 ；第二个括号为UI组件 
export default connect(
    state => ({ count: state }),

    //通知redux执行加法
    ({ jia: createIncrementAction })
)(CountUI)