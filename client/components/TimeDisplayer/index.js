import React, {useState} from 'react';
import TimeContext from '../../contexts/TimeContext';

const TimeDisplayer = () => {
    const RenderTime = miliseconds => {
        const date = new Date(miliseconds);
        const hours = date.getUTCHours().toString();
        const minutes = date.getUTCMinutes().toString();
        const seconds = date.getUTCSeconds().toString();

        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    }

    return (
        <TimeContext.Consumer>
            {time => <label>{RenderTime(time)}</label>}
        </TimeContext.Consumer>
    );
};

export default TimeDisplayer;