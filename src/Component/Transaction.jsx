import React, { useState, useEffect } from "react";
import "../styling/transactionStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Transaction(props) {
    const [myAccountID, setAccountID] = useState("");
    const [myAccounts, setMyAccounts] = useState([]);
    const [type, setType] = useState("");
    const [rAccountID, setRAccountID] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [amount, setAmount] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getAccounts();
        getInfo();
        async function getAccounts(){
            const accounts =  await axios.get(`http://localhost:8080/api/bankaccounts/`).then(res => res.data);
            let filtered = accounts.filter(filterById);
            setMyAccounts(filtered);
        }

        function filterById(account) {
            if (account.pan == Number(props.id)) {
                return true;
            } else {
                return false;
            }
        }

        function getInfo(){
            let today = new Date();
            let times = new Date();
            let dd = String(today.getDate() + 1).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); 
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            let timeConcat = String(times.getHours()) + ':' + String(times.getMinutes()) + ':' + String(times.getSeconds());
                setDate(today);
                setTime(timeConcat);
                console.log(date)
                console.log(time)
        }
    },[props.id])

    function handleMyAccountChange(event) {
        setAccountID(event.target.value);
    }

    function handleTypeChange(event) {
        setType(event.target.value);
    }

    async function withdrawalRequests() {
        try{
            let myBalance = await axios.get(`http://localhost:8080/api/bankaccounts/${myAccountID}`).then(res => res.data.currBalance);
            let myNewBalance = Number(myBalance) - Number(amount);
            console.log(myAccountID)
            console.log(myNewBalance)
            axios.post(`http://localhost:8080/api/transactions`,{transactionRef: myAccountID, date:date, time:time, type:"Withdrawal", subtype:"Cash", currBalance:myNewBalance}).then(res=> console.log(res.data));
            axios.put(`http://localhost:8080/api/bankaccounts`, {accountId: myAccountID, currBalance: myNewBalance, pan: props.id}).then();
            
            alert("Successful Transaction");
            navigate("/accounts");
        } catch (err) {
            alert("Invalid Info");
        }
    }

    async function depositRequests() {
        try{ 
            let myBalance = await axios.get(`http://localhost:8080/api/bankaccounts/${myAccountID}`).then(res => res.data.currBalance);
            let myNewBalance = Number(myBalance) + Number(amount);
            console.log(myAccountID)
            console.log(myNewBalance)
            axios.post(`http://localhost:8080/api/transactions`,{transactionRef: myAccountID, date:date, time:time, type:"Deposit", subtype:"Cash", currBalance:myNewBalance}).then(res=> console.log(res.data));
            axios.put(`http://localhost:8080/api/bankaccounts`, {accountId: myAccountID, currBalance: myNewBalance, pan: props.id}).then();
            
            alert("Successful Transaction");
            navigate("/accounts");
        } catch (err) {
            alert("Invalid Info");
        }
    }

    async function transferRequests() {
        try{
            let myBalance = await axios.get(`http://localhost:8080/api/bankaccounts/${myAccountID}`).then(res => res.data.currBalance);
            let myNewBalance = Number(myBalance) - Number(amount);
        
            axios.post(`http://localhost:8080/api/transactions`,{transactionRef: myAccountID, date:date, time:time, type:"Withdrawal", subtype:"Transfer", currBalance:myNewBalance}).then(res=> console.log(res.data));
            axios.put(`http://localhost:8080/api/bankaccounts`, {accountId: myAccountID, currBalance: myNewBalance, pan: props.id}).then(res=> console.log(res.data));
            
            let theirData = await axios.get(`http://localhost:8080/api/bankaccounts/${rAccountID}`).then(res => res.data);
            let theirBalance = theirData.currBalance;
            let theirNewBalance = Number(theirBalance) + Number(amount);
            let theirPan = theirData.pan;
    
            axios.post(`http://localhost:8080/api/transactions`,{transactionRef: rAccountID, date:date, time:time, type:"Deposit", subtype:"Transfer", currBalance:theirNewBalance}).then(res=> console.log(res.data));
            axios.put(`http://localhost:8080/api/bankaccounts`, {accountId: rAccountID, currBalance: theirNewBalance, pan: theirPan}).then(res=> console.log(res.data));
            
            alert("Successful Transaction");
            navigate("/accounts");
        } catch (err) {
            alert("Invalid Info");
        }
    }


    function handleTransactionSubmit(){
        switch(type){
            case "Withdrawal":
                withdrawalRequests();
                
                break;
            case "Deposit":
                depositRequests();
                break;
            case "Transfer":
                transferRequests();
                break;
            default:
                alert("Invalid Info");
        }
    }


    return (
        <div className="lookupBody">
            <div className="lookup">
                <form className="lookUpForm">
                    <div className="transactionOffCenter">
                        <label className="formLabel">My Account: </label>
                        <select name="typeList" value={myAccountID} onChange={handleMyAccountChange} >
                            <option value=""></option>
                            {myAccounts.map((acc, key) => {
                                return <option key={key} value={acc.accountId}>{acc.accountId}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div className="transactionOffCenter">
                        <label className="formLabel">Type: </label>
                        <select name="typeList" value={type} onChange={handleTypeChange}>
                            <option value=""></option>
                            <option value="Withdrawal">Cash Withdrawal</option>
                            <option value="Deposit">Cash Deposit</option>
                            <option value="Transfer">Account Transfer</option>
                        </select>
                    </div>
                    {type === "Transfer" ?
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
                    <button className="submitBtn" onClick={() => {handleTransactionSubmit()}}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}