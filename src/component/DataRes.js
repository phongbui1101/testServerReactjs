import React, { useEffect, useState } from 'react';
import { useSubscription } from 'mqtt-react-hooks';
import "chartjs-plugin-streaming";
import moment from 'moment';
import { FEED_1_ID, FEED_2_ID, USERNAME } from '../config/config';
import Toggle from './Toggle';

export default function DataRes() {
    const { message, connectionStatus } = useSubscription([
        `${USERNAME}/feeds/${FEED_1_ID}/json`,
        `${USERNAME}/feeds/${FEED_2_ID}/json`,
        //subscribe 2 feeds , add feed if you want
    ], () => console.log("USEsUBS"));
    const [valueFeed1, setmsgFeed1] = useState('');
    const [valueFeed2, setmsgFeed2] = useState('')
    let checkMessage = (msg) => {
        if (!msg) return;
        let reqMessage = JSON.parse(message?.message);
        let value = +JSON.parse(message.message)?.data.value;
        if (reqMessage.id == FEED_1_ID) {
            setmsgFeed1(value);
            return;
        } else if (reqMessage.id == FEED_2_ID) {
            setmsgFeed2(value);
            return;
        }
        return;

    }
    useEffect(() => {
        checkMessage(message);
    }, [message])


    return (
        <div>
            {/* {console.log("Client: ", client)} */}
            {console.log("reRender")}
            {console.log("message:", message?.message ? JSON.parse(message?.message) : "")}
            <h1>{connectionStatus}</h1>
            <div className="d-flex">
                {/* <LineChartComponent dataChart={dataChart} options={options} /> */}
                <h1 className="col-4">Feed Id: {FEED_1_ID} _  Value : {valueFeed1}</h1>
                <Toggle className="col-2" feedId={FEED_1_ID} value={{ onValue: 123, offValue: 456 }} />
            </div>
            <div className="d-flex">
                <h1 className="col-4">Feed Id: {FEED_2_ID} _  Value : {valueFeed2}</h1>
                <Toggle className="col-2" feedId={FEED_2_ID} value={{ onValue: 789, offValue: 101 }} />
            </div>

        </div>
    );
}
