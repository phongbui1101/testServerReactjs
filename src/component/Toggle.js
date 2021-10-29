import React from 'react'
import '../assets/button.css'
import axios from 'axios'
export default function Toggle(props) {
    console.log(props.feedID)
    let testAPI = async (feedID, value) => {
        await axios({
            method: 'POST',
            url: `https://io.adafruit.com/api/v2/nonameex2/feeds/${props.feedId}/data`,
            data: {
                value
            },
            headers: {
                "X-AIO-Key": 'aio_CmRM41HnApNG8sWZxx3xM76ayeTl',
                "Content-Type": 'application/json'
            }
        })
    }
    return (
        <div style={{ width: '100%' }}>
            {/* <div id="app-cover">
                <div className="row"> */}
            {/* <div className="toggle-button-cover"> */}
            {/* <div className="button-cover"> */}
            <div className="button r" style={{ margin: 'unset', top: 0 }} id="button-1">
                <input type="checkbox" className="checkbox"
                    //  disabled={true} for disable button
                    onClick={(e) => {
                        if (e.target.checked) {
                            console.log(e.target.checked)
                            testAPI(props.feedID,props.value.offValue)
                        } else {
                            console.log(e.target.checked)
                            testAPI(props.feedID,props.value.onValue)
                        }
                    }}
                />
                <div className="knobs" />
                <div className="layer" />
            </div>
            {/* </div> */}
            {/* </div> */}
            {/* </div>
            </div> */}
            {/* <a href="https://www.youtube.com/channel/UC7hSS_eujjZOEQrjsda76gA/videos" target="_blank" id="ytd-url">My YouTube Channel</a> */}
        </div>

    )
}
