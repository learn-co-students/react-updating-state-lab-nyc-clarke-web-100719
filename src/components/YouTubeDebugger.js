// Code YouTubeDebugger Component Here
import React from 'react'


export default class YouTubeDebugger extends React.Component{

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      setBit=()=>{
          this.setState({
              settings: {
                  bitrate: 12,
                  video: {
                      resolution: this.state.settings.video.resolution
                  }
              }
          })
      }

      setRes=()=>   {
        this.setState({
            settings: {
                bitrate: this.state.settings.bitrate,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div >
            <button onClick={this.setBit} className='bitrate'></button>
            <button className='resolution' onClick={this.setRes}></button>
            </div>
        )
    }

}