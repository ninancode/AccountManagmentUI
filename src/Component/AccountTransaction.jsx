import React, {useState} from "react";
import '../styling/accountTransactionStyles.css';

export default function AccountTransaction(props){
    return (
        <div className="accountTransactionBody">
            <div className="typeTitle">
                <h6 className="valueTitle">Type</h6>
                <p className="transactionText">{props.subtype} {props.type}</p>
            </div>
            <div className="amountTitle">
                <h6 className="valueTitle">Amount</h6>
                <p className="transactionBalanceText">{props.balance.toFixed(2)}</p>
            </div>
            <div className="dateTitle">
                <h6 className="valueTitle">Date</h6>
                <p className="transactionText">{props.date}</p>
            </div>
        </div>
    )
}