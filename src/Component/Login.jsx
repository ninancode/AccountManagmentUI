import axios from "axios";
import React, { useEffect, useState } from "react";
import '../styling/loginStyles.css';

export default function Login() {
    const [id, setId] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() => {
    })

    return (
        <div>
        <form className="form">
            <div className="formSection">
                <label className="formLabel">ID: </label>
                <input 
                    className="formInput"
                    type="text" 
                    name="id"
                    onChange={value => setId(value.target.value)}
                />
            </div>
            <div className="formSection">
                <label className="formLabel">Password: </label>
                <input 
                    className="formInput"
                    type="text" 
                    name="password"
                    onChange={value => setPassword(value.target.value)}
                />
            </div>
            
        </form>
        <div className="center">
            <button className="submitBtn">LOGIN</button>
        </div>
        </div>
    )
}
