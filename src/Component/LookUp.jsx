import React, { useEffect, useState } from "react";
import "../styling/lookUpStyles.css";
import axios from "axios";
import AccountCreation from "./NewCustomer";
import { useNavigate, Navigate, Route } from "react-router-dom";

export default function LookUp() {
    const [pan, setPan] = useState("");
    const [isLookedUp, setIsLookedUp] = useState(true);
    const [panExists, setPanExists] = useState(false);
    const navigate = useNavigate();

    const handleLookUpSubmit = async()=> {
        try{
            const user = await axios.get(`http://localhost:8080/api/customers/pan/${pan}`).then(res => res.data);
            console.log(user)
            setIsLookedUp(true);
            setPanExists(true);
        } catch (err) {
            setIsLookedUp(true);
            setPanExists(false);
        }
    }

    return (
        <div className="lookupBody">
            <div className="lookup">
                <form className="lookUpForm">
                    <div className="center">
                        <label className="formLabel">PAN: </label>
                        <input
                            className="lookUpInput"
                            type="number"
                            min="0"
                            name="pan"
                            onChange={value => { setPan(value.target.value); setIsLookedUp(false) }}
                        />
                    </div>
                </form>
                {isLookedUp ?
                    <div className="center">
                        {pan == 101? 
                            <div>
                                <p className="lookupError">Invalid PAN</p>
                            </div> 
                        :  
                        <div>
                            {panExists ?
                                <p className="lookupError">Customer exists</p>
                                :
                                <button className="submitBtn" onClick={() => navigate("/newcustomer")}>CREATE ACCOUNT</button>
                            }
                            </div>
                        }
                    </div>
                    :
                    <div className="center">
                        <button className="submitBtn" onClick={handleLookUpSubmit}>LOOKUP</button>
                    </div>
                }
            </div>
        </div>
    )
}