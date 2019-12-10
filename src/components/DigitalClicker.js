// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    incrementCounter = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return <button onClick={this.incrementCounter}>{this.state.timesClicked}</button>
    }
}