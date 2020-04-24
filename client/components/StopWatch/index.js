import React, {useState} from 'react';
import TimeDisplayer from '../TimeDisplayer';
import WatchControls from '../WatchControls';
import TimeContext from '../../contexts/TimeContext';

const StopWatch = () => {
    const [time, SetTime] = useState(0);
    return (
        <div className = "stop-watch">
            <TimeContext.Provider value = {time}>
                <TimeDisplayer />
                <WatchControls />
            </TimeContext.Provider>
        </div>
    );
};

export default StopWatch;