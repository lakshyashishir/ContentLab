import React from "react";
import './App.css'
import App from "./ok";

export default function Area({ magic, setInput, result }) {
    return (
        <div>
            <textarea className="area" cols={55} rows={10} onChange={(e)=> setInput(e.target.value)}></textarea>
            <button className="magic" onClick={magic}>Magic</button>
            <h3>{result.length > 0 ? result : ""}</h3>

        </div>     
    );

}