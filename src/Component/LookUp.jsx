import React, { useEffect, useState } from "react";
import "../styling/lookUpStyles.css";
import axios from "axios";
import AccountCreation from "./NewCustomer";
import { useNavigate, Navigate, Route } from "react-router-dom";

export default function LookUp() {
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
        <div className="lookupBody">
            <div className="lookup">
                <form className="lookUpForm">
                    <div className="center">
                        <label className="formLabel">PAN: </label>
                        <input
                            className="lookUpInput"
                            type="text"
                            name="id"
                            onChange={value => { setPan(value.target.value); setIsLookedUp(false) }}
                        />
                    </div>
                </form>
                {isLookedUp ?
                    <div className="center">
                        {panExists ?
                            <p>Customer exists</p>
                            :
                            <button className="submitBtn" onClick={() =>
                            
                            navigate("/newcustomer")
                                // <Route
                                // path="/newcustomer"
                                // element={<Navigate to="/newcustomer" />}
                            // />
                        }>CREATE ACCOUNT</button>
                        }
                    </div>
                    :
                    <div className="center">
                        <button className="submitBtn"
                            onClick={() => 
                                <Route
                                    path="/newcustomer"
                                    element={<Navigate to="/newcustomer" />}
                                />
                            }>
                                LOOKUP
                        </button>
                    </div>
                }
            </div>
        </div>

    )
}