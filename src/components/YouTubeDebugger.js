// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
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

    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }


    render() {
        return <div>
                <button className="bitrate" onClick={this.changeBitrate}>
                    Set Bitrate to 12
                </button>
                <button className="resolution" onClick={this.changeResolution}>
                    Set Resolution to 720p
                </button>
            </div>
    }
}