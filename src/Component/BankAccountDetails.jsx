import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styling/bankAccountDetailsStyles.css";
import AccountTransaction from "./AccountTransaction";
import { CSVLink } from "react-csv";


export default function BankAccountDetails(props) {
    const [transactionList, setTransactionList] = useState([]);
    const [displayTransactionList, setDisplayTransactionList] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getTransactions();
        async function getTransactions(){
            const transactions = await axios.get(`http://localhost:8080/api/transactions/`).then(res => res.data);
            let filtered = transactions.filter(filterByRef);
            filtered.reverse();
            setTransactionList(filtered);
            let display = filtered.slice(0,5);
            setDisplayTransactionList(display);
            
        }
        function filterByRef(transaction) {
            if (transaction.transactionRef === Number(props.accountNum)) {
                return true;
            } else {
                return false;
            }
        }

    },[props.accountNum])

    return(
            <div  className="account">
                <div onClick={()=> setOpen(!open)} className="accountInfo">
                    <div className="accountInfoCol">
                        <h6 className="valueTitle">Account #</h6>
                        <p className="accountText">{props.accountNum}</p>
                    </div>
                    <div className="accountInfoCol">
                        <h6 className="valueTitle">Balance</h6>
                        <p className="balanceText">{props.balance.toFixed(2)}</p>
                    </div>
                </div>
                {open? 
                    <div className="">
                        
                        <div className="downloadBtn">
                            <CSVLink data={transactionList}>
                                <button className="submitBtn">DOWNLOAD TRANSACTIONS</button>
                            </CSVLink>
                            
                        </div>

                        {displayTransactionList.map((transaction,key) => (
                            <AccountTransaction 
                                key={transaction.transactionId}
                                type={transaction.type}
                                subtype={transaction.subtype}
                                balance={transaction.currBalance}
                                date={transaction.date}
                            />
                        ))}
                    </div>
                    : 
                    <></>
                }
                <div>
                    <div className='spacing'>
                    </div>
                </div>
            </div>
    )
}