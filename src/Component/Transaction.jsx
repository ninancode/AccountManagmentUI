import React, { useState, useEffect } from "react";
import "../styling/transactionStyles.css";

export default function Transaction() {
    const [myAccountID, setAccountID] = useState("");
    const [type, setType] = useState("");
    const [rAccountID, setRAccountID] = useState("");
    const [ammount, setAmount] = useState("");


    function handleMyAccountChange(event) {
        setAccountID(event.target.value);
    }

    function handleTypeChange(event) {
        setType(event.target.value);
    }

    return (
        <div className="lookupBody">
            <div className="lookup">
                <form className="lookUpForm">
                    <div className="transactionOffCenter">
                        <label className="formLabel">My Account: </label>
                        <select name="typeList" value={myAccountID} onChange={handleMyAccountChange}>
                            <option value="1233">1233</option>
                            <option value="423">243</option>
                        </select>
                    </div>
                    <div className="transactionOffCenter">
                        <label className="formLabel">Type: </label>
                        <select name="typeList" value={type} onChange={handleTypeChange}>
                            <option value="withdrawal">Cash Withdrawal</option>
                            <option value="deposit">Cash Deposit</option>
                            <option value="transfer">Account Transfer</option>
                        </select>
                    </div>
                    {type == "transfer" ?
                        <div className="transactionOffCenter">
                            <label className="formLabel">Receiving Account:</label>
                            <input
                                className="transactionInput"
                                type="number"
                                min="0"
                                name="rAccountID"
                                onChange={value => setRAccountID(value.target.value)}
                            />
                        </div>
                        :
                        <></>
                    }
                    <div className="transactionOffCenter">
                        <label className="formLabel">Amount: </label>
                        <input
                            className="transactionInput"
                            type="number"
                            name="amount"
                            min="0"
                            onChange={value => setAmount(value.target.value)}
                        />
                    </div>
                </form>
                <div className="center">
                    <button className="submitBtn">SUBMIT</button>
                </div>

            </div>
        </div>

    )
}