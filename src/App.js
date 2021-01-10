import React, { useState } from 'react';
import './App.css';
import Form from "./Form.js";
import Weather from "./Weather.js";
import axios from "axios";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Dat from "./Date.js";
import Clock from "./Clock.js";
import Context from "./Context.js"

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [err, setErr] = useState();
  const apiKey = '8038140026a1b1109ca659c148a77f3d';

  const apiCall = async (e) => {
    e.preventDefault()
    const loc = e.target.elements.loc.value
    if (!loc) return setErr("Error : Please enter city name"), setWeather(null)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
    const req = axios.get(url);
    const res = await req;
    setWeather(res.data.main)
    setCity(res.data.name)
    setErr(null)
  }



  return (
    <div className="Appmain">
      <div className="App">
        <Header />
        <Dat />
        <Context.Provider value={{ weather, apiCall, city }}>
          <Form />
          {weather && <Weather />}
        </Context.Provider>
        <div className="error">{err}</div>
        <Clock />
        <Footer />
      </div>
    </div>
  );
}

export default App;
