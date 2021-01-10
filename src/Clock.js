import React, { useState } from 'react'
import "./Clock.css"
function Clock() {
    const [time, setTime] = useState();
    const updateTime = () => {
        const t = new Date().toLocaleTimeString();
        setTime(t);
    }
    setInterval(updateTime, 1000)
    return (
        <div className="Clock" >
            {time}
        </div>
    )
}

export default Clock
