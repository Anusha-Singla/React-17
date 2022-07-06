import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.increment}>➕</button>
                <button onClick={this.props.decrement}>➖</button>
            </div>
        )
    }
}
