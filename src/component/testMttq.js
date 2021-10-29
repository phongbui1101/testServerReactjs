import React from 'react';

import { Connector } from 'mqtt-react-hooks';
import DataRes from './DataRes';
import { ACTIVE_KEY, USERNAME } from '../config/config';
// import DataRes2 from './DataRes2';
export default function TestMttq() {
    return (
        <Connector brokerUrl="mqtt://io.adafruit.com"
            options={{
                username: USERNAME,
                password: ACTIVE_KEY,
            }}>
                <DataRes/>
        </Connector>
    );
}




