// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0,
        }
    }

    onClickEvent = () =>{
        this.setState(pr =>({timesClicked: pr.timesClicked + 1}))
    }
    render(){
        return(
        <button onClick={this.onClickEvent}>{this.state.timesClicked}</button>
        )
    }
} 