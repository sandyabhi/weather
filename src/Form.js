import React, { useContext } from 'react';
import "./Form.css";
import Context from "./Context.js"

function Form() {
    const { apiCall } = useContext(Context)

    return (
        <form onSubmit={apiCall} className="Form">
            <input type="text" placeholder="city" name="loc" />
            <button className="bttn">Search</button>
        </form>
    )
}

export default Form;
