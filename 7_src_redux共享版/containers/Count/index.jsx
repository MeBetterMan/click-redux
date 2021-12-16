//connect用于连接UI组件和redux
import { connect } from 'react-redux'
import { createIncrementAction } from '../../redux/actions/count'
import React, { Component } from 'react'

class CountUI extends Component {
    add = () => {
        const { value } = this.selRef
        this.props.jia(value)
    }

    render() {
        return (
            <div>
                <h2>Count组件</h2>
                <h4>Count组件总和是:{this.props.count}</h4>
                <h4>Person组件总和是:{this.props.personLen}</h4>
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
    state => ({ count: state.count,personLen:state.person.length }),

    //通知redux执行加法
    { jia: createIncrementAction }
)(CountUI)