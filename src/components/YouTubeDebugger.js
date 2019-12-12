// Code YouTubeDebugger Component Here
import React from 'react'


class YouTubeDebugger extends React.Component {

    state={
         errors: [],
         user: null,
        settings: {  bitrate: 8, video: {
        resolution: '1080p' }  }
    }


    handlerClick =(event) => {
        // event.persist()
        let oldState = {...this.state}
    //    console.log(event.target.className);
       if (event.target.className === "bitrate") {
           oldState.settings.bitrate = 12
       } else if (event.target.className === "resolution") {
           oldState.settings.video.resolution = "720p"
       }
        // console.log(oldState.settings.bitrate);
        // console.log(oldState.resolution);
        // debugger
        this.setState({
            oldState
        })
        
       
    }
    render() {
        console.log( this.state);
        // console.log(this.state.settings["bitrate"]);
        // console.log(this.state.settings.video.resolution);
        
        return (
        <div>
          <button className="bitrate" onClick={this.handlerClick}>{this.state.settings["bitrate"]}</button><br/>
          <button className= "resolution" onClick={this.handlerClick}>{this.state.settings.video.resolution}</button>
        </div>)

    }
}

export default YouTubeDebugger;