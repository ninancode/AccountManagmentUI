import React, { useState, useEffect } from "react";
import BankAccountDetails from "./BankAccountDetails";
import "../styling/accountsStyles.css"
import axios from "axios";

export default function Accounts(props) {
    const [myAccounts, setMyAccounts] = useState([]);

    useEffect( () => {
        getAccounts();
        async function getAccounts(){
            const accounts = await axios.get(`http://localhost:8080/api/bankaccounts/`).then(res => res.data);
            let filtered = accounts.filter(filterById);
            setMyAccounts(filtered);
        }
        function filterById(account) {
            if (account.pan === Number(props.id)) {
                return true;
            } else {
                return false;
            }
        }

    },[props.id])



    return (
        <div className="customerView">    
            {myAccounts.map((acc, key) => (
                <BankAccountDetails key={key} accountNum={acc.accountId} balance={acc.currBalance}/>
            ))}
        </div>
    )
}