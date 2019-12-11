// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
    state = {
        timesClicked: 0
    }

    handleClick = () => {
        
        let newNumber = this.state.timesClicked + 1
        this.setState({
            timesClicked: newNumber
        })
    }

    render(){
        console.log(this.state.handleClick)
        return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    }

}
