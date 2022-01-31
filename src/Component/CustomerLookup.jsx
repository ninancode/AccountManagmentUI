import React, { useEffect, useState } from "react";
import "../styling/customerLookupStyles.css";
import axios from 'axios';
import AccountCreation from "./AccountCreation";
import {useNavigate} from 'react-router-dom';

export default function CustomerLookup() {
    const [pan, setPan] = useState("");
    const [isLookedUp, setIsLookedUp] = useState(true);
    const [panExists, setPanExists] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        // axios.get()
        // .then(res => {
        //     res.pan
        // })

    })
    return (
        <>
            <form className="login">
                <div className="formSection">
                    <label className="formLabel">PAN: </label>
                    <input
                        className="formInput"
                        type="text"
                        name="id"
                        onChange={value => { setPan(value.target.value); setIsLookedUp(false) }}
                    />
                </div>
            </form>

            {isLookedUp ?
                <div>
                    {panExists ?
                        <p>Customer exists</p>
                        :
                        <button class="submitBtn">CREATE ACCOUNT</button>
                    }
                </div>
                :
                <div>
                    <button class="submitBtn" onClick={() => navigate("/newcustomer")}>LOOKUP</button>
                </div>
            }
        </>
    )
}