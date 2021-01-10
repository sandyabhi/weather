import React from 'react'
import "./Date.css"
function Dat() {
    let today = new Date();
    let date = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

    let day = today.getDay()
    let day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <div className="Date">
            {`${day_names[day]} , ${date}`}

        </div>
    )
}

export default Dat;
