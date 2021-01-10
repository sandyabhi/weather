import React, { useContext } from 'react';
import "./Weather.css";
import Context from "./Context.js"
function Weather() {

    const { weather, city } = useContext(Context);
    const { humidity, pressure, temp } = weather
    // converting K to C 
    const C = temp - 273.15
    const setTemp = C.toFixed(2)
    return (
        <div>
            <div className="winfo">
                Weather information for {city}
            </div>
            <div className="Weather">
                <div className="welement">
                    <p className="temp">Temperature</p>
                    <p className="temp">{setTemp} &#8451;</p>
                </div>
                <div className="welement">
                    <p className="Humidity">Humidity</p>
                    <p className="Humidity">{humidity}</p>
                </div>
                <div className="welement">
                    <p className="Pressure">Pressure</p>
                    <p className="Pressure">{pressure}</p>
                </div>
            </div>
        </div>

    )
}

export default Weather;
