import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPerson } from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const name = this.NameNode.value
        const age = this.AgeNode.value
        const personObj = { id: nanoid(), name: name, age: age }
        this.props.addPerson(personObj)
    }
    render() {
        return (
            <div>
                <hr />
                <h2>Person组件</h2>
                <h4>Person组件总和是:{this.props.personArr.length}</h4>
                <h4>Count组件总和是:{this.props.count}</h4>
                <input ref={c => this.NameNode = c} placeholder='请输入名字' />
                <input ref={c => this.AgeNode = c} placeholder='请输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {this.props.personArr.map((personObj) => {
                        return <li key ={personObj.id}>姓名:{personObj.name} 年龄:{personObj.age}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(state => ({ personArr: state.person ,count:state.count}), ({ addPerson: addPerson }))(Person)
