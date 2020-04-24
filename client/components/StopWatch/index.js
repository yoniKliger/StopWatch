import React from 'react';
import './index.css';

const StopWatch = () => {
    return (
        <div className = "stop-watch">
            <div>
                <label>00:00:00</label>
            </div>
            <div>
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default StopWatch;