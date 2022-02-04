import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import '../styling/newCustomerStyling.css';
import { useNavigate } from "react-router-dom";

export default function NewCustomer() {
    const [pan, setPan] = useState("");
    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [uid, setUID] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [email, setEmail] = useState("");
    const [deposit, setDeposit] = useState("");
    // const [date, setDate] = useState("");
    // const [time, setTime] = useState("");

    const navigate = useNavigate();
    
    let today = new Date();
    let time = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    let timeConcat = String(time.getHours()) + ':' + String(time.getMinutes()) + ':' + String(time.getSeconds());

    function handleNewCustomerSubmit() {
        let account;
        postRequests();
        async function postRequests(){
            axios.post(`http://localhost:8080/api/customers`, {pan:pan, uid:uid, name:name, zipcode:zipcode, email:email, birthdate:dateOfBirth}).then();
            axios.post(`http://localhost:8080/api/users`, {id:pan, password:"pass", roleId: "2"}).then();
            account =  await axios.post(`http://localhost:8080/api/bankaccounts`,{currBalance: deposit, pan:pan}).then(res => res.data.accountId);
            axios.post(`http://localhost:8080/api/transactions`,{transactionRef: account, date:today, time:timeConcat, type:"Deposit", subtype:"Cash", currBalance:deposit}).then();
            navigate("/lookup");
        }
    }

    return (
        <div className='newCustomerBody'>
            <div className="newCustomer">
                <form className="newCustomerForm">
                    <div className="">
                        <label className="newCustomerFormLabel">PAN: </label>
                        <input 
                            className="newCustomerInput" 
                            type="number" 
                            min="0"
                            onChange={value => setPan(value.target.value)}
                        />
                    </div>
                    <div className="">
                        <label className="newCustomerFormLabel">Full Name: </label>
                        <input 
                            className="newCustomerInput" 
                            type="text"
                            onChange={value => setName(value.target.value)} 
                        />
                    </div>
                    <div className="">
                        <label className="newCustomerFormLabel">Date of Birth: </label>
                        <input 
                            className="newCustomerInput" 
                            type="date" 
                            onChange={value => setDateOfBirth(value.target.value)}
                        />
                    </div>
                    <div className="">
                        <label className="newCustomerFormLabel">Citizen ID: </label>
                        <input 
                            className="newCustomerInput" 
                            type="number" 
                            min="0"
                            onChange={value => setUID(value.target.value)}
                        />
                    </div>
                    <div className="">
                        <label className="newCustomerFormLabel" >Zip Code: </label>
                        <input 
                            className="newCustomerInput" 
                            type="number" 
                            min="0"
                            onChange={value => setZipCode(value.target.value)}
                        />
                    </div>
                    <div className="offCeter">
                        <label className="newCustomerFormLabel">Email: </label>
                        <input 
                            className="newCustomerInput" 
                            type="email" 
                            onChange={value => setEmail(value.target.value)}
                        />
                    </div>
                    <div className="">
                        <label className="newCustomerFormLabel">Proof: </label>
                        <input className="newCustomerInput" type="file" />
                    </div>
                    <div className="offCeter">
                        <label className="newCustomerFormLabel">Cash Deposit: </label>
                        <input 
                            className="newCustomerInput" 
                            type="number" 
                            min="0"
                            onChange={value => setDeposit(value.target.value)}
                        />
                    </div>
                </form>
                <div className="center">
                    <button className="submitBtn" onClick={handleNewCustomerSubmit}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}