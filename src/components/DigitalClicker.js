// Code DigitalClicker Component Here
import React from 'react'


class DigitalClicker extends React.Component {

    state={
        timesClicked: 0
    }

    countClick =(event)=> {
        let count = this.state.timesClicked + 1
        // first way to implement increase counting 
    //     this.setState(previousState=> {
    //         return {
    //         timesClicked: previousState.timesClicked +1
    //         }
    //     })
        this.setState({
            timesClicked: count
        })
    }

    render() {
        // console.log(this.state.timesClicked);
        
        return (
        <div>
            <label>{this.state.timesClicked}</label><br  />
        <button onClick={this.countClick}>{this.state.timesClicked}</button>
         </div>
        )
    }
}

export default DigitalClicker;