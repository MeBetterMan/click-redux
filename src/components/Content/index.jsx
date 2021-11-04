import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Content extends Component {

    Add = () => {
        PubSub.publish('add', { val: this.sel.value })
    }

    render() {
        return (
            <div>
                <select ref={(c) => { this.sel = c }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.Add}> + </button>
            </div>
        )
    }
}
