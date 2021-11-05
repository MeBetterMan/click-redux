import React, { Component } from 'react'
import PubSub from 'pubsub-js'


export default class Header extends Component {
    state = { sumRes: 0 }
    componentDidMount() {
        PubSub.subscribe("add", (_, data) => {
            this.setState({ sumRes: this.state.sumRes + (+data.val) })
        })
    }
    render() {
        return (
            <div>
                <h1>sum is {this.state.sumRes}</h1>
            </div>
        )
    }
}
